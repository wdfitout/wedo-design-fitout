// Ensure this route uses Node.js runtime
// Nodemailer will not work on Edge runtime.
export const runtime = "nodejs";

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

/* ==========================================================================
   Helpers
   ========================================================================== */

const env = (key) => (process.env[key] || "").trim();

const clean = (value) => {
  if (typeof value !== "string") return "";
  return value.trim();
};

function splitFullName(fullName) {
  const parts = clean(fullName)
    .split(/\s+/)
    .filter(Boolean);

  if (parts.length === 0) {
    return {
      firstName: "",
      lastName: "Website Lead",
    };
  }

  if (parts.length === 1) {
    return {
      firstName: "",
      lastName: parts[0],
    };
  }

  const lastName = parts.pop();

  return {
    firstName: parts.join(" "),
    lastName,
  };
}

/* ==========================================================================
   Zoho OAuth
   ========================================================================== */

async function getZohoAccessToken() {
  const ZOHO_CLIENT_ID = env("ZOHO_CLIENT_ID");
  const ZOHO_CLIENT_SECRET = env("ZOHO_CLIENT_SECRET");
  const ZOHO_REFRESH_TOKEN = env("ZOHO_REFRESH_TOKEN");

  /*
   * Your account is currently on crm.zoho.com, so these defaults
   * should be correct. They can still be overridden in Vercel.
   */
  const ZOHO_ACCOUNTS_URL =
    env("ZOHO_ACCOUNTS_URL") || "https://accounts.zoho.com";

  if (
    !ZOHO_CLIENT_ID ||
    !ZOHO_CLIENT_SECRET ||
    !ZOHO_REFRESH_TOKEN
  ) {
    throw new Error(
      "Zoho OAuth environment variables are not configured."
    );
  }

  const params = new URLSearchParams({
    refresh_token: ZOHO_REFRESH_TOKEN,
    client_id: ZOHO_CLIENT_ID,
    client_secret: ZOHO_CLIENT_SECRET,
    grant_type: "refresh_token",
  });

  const response = await fetch(
    `${ZOHO_ACCOUNTS_URL}/oauth/v2/token`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
      cache: "no-store",
    }
  );

  const data = await response.json().catch(() => ({}));

  if (!response.ok || !data?.access_token) {
    console.error("Zoho token error:", data);

    throw new Error(
      data?.error ||
        "Unable to generate Zoho CRM access token."
    );
  }

  return {
    accessToken: data.access_token,

    /*
     * Zoho can return the correct API domain with the token.
     * Otherwise use the normal US API domain.
     */
    apiDomain:
      data.api_domain ||
      env("ZOHO_API_DOMAIN") ||
      "https://www.zohoapis.com",
  };
}

/* ==========================================================================
   Create Zoho CRM Lead
   ========================================================================== */

async function createZohoLead({
  name,
  email,
  phone,
  subject,
  message,

  zc_gad,
  gclid,
  gbraid,
  wbraid,

  utm_source,
  utm_medium,
  utm_campaign,
  utm_term,
  utm_content,

  landing_page,
}) {
  const { firstName, lastName } = splitFullName(name);

  /*
   * Zoho's zc_gad field is populated by their zcga.js tracking script.
   *
   * Prefer that value because it is the value Zoho's native
   * Google Ads integration expects.
   *
   * Fall back to the raw URL GCLID if required.
   */
  const googleClickId =
    clean(zc_gad) || clean(gclid);

  const attributionNotes = [
    subject
      ? `Subject: ${clean(subject)}`
      : "",

    message
      ? `Message:\n${clean(message)}`
      : "",

    landing_page
      ? `Landing Page: ${clean(landing_page)}`
      : "",

    utm_source
      ? `UTM Source: ${clean(utm_source)}`
      : "",

    utm_medium
      ? `UTM Medium: ${clean(utm_medium)}`
      : "",

    utm_campaign
      ? `UTM Campaign: ${clean(utm_campaign)}`
      : "",

    utm_term
      ? `UTM Term: ${clean(utm_term)}`
      : "",

    utm_content
      ? `UTM Content: ${clean(utm_content)}`
      : "",

    gclid
      ? `GCLID: ${clean(gclid)}`
      : "",

    gbraid
      ? `GBRAID: ${clean(gbraid)}`
      : "",

    wbraid
      ? `WBRAID: ${clean(wbraid)}`
      : "",
  ]
    .filter(Boolean)
    .join("\n\n");

  const { accessToken, apiDomain } =
    await getZohoAccessToken();

  const zohoLead = {
    /*
     * Last_Name is mandatory for Zoho CRM Leads.
     */
    Last_Name: lastName,

    ...(firstName
      ? {
          First_Name: firstName,
        }
      : {}),

    Email: clean(email),

    ...(phone
      ? {
          Phone: clean(phone),
        }
      : {}),

    /*
     * Useful fallback for residential/private clients.
     * You can change this later if you add a proper Client Type field.
     */
    Company: "Website Enquiry",

    Description: attributionNotes,

    /*
     * CRITICAL:
     * Zoho's official Google Ads integration expects $gclid
     * when using a third-party form/API.
     */
    ...(googleClickId
      ? {
          $gclid: googleClickId,
        }
      : {}),
  };

  const response = await fetch(
    `${apiDomain}/crm/v8/Leads`,
    {
      method: "POST",

      headers: {
        Authorization: `Zoho-oauthtoken ${accessToken}`,
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        data: [zohoLead],
      }),

      cache: "no-store",
    }
  );

  const data = await response.json().catch(() => ({}));

  /*
   * Zoho may return HTTP 207 when processing records,
   * so also check the record-level result.
   */
  const result = data?.data?.[0];

  if (
    !response.ok ||
    !result ||
    result?.status !== "success"
  ) {
    console.error("Zoho CRM lead error:", {
      status: response.status,
      data,
    });

    throw new Error(
      result?.message ||
        result?.code ||
        "Unable to create Zoho CRM lead."
    );
  }

  return {
    id: result?.details?.id || null,
    status: result?.status,
  };
}

/* ==========================================================================
   GET
   ========================================================================== */

export async function GET() {
  return NextResponse.json({
    ping: "ok",
  });
}

/* ==========================================================================
   POST
   ========================================================================== */

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      phone,
      subject,
      message,

      // Zoho / Google Ads
      zc_gad,
      gclid,
      gbraid,
      wbraid,

      // Attribution
      utm_source,
      utm_medium,
      utm_campaign,
      utm_term,
      utm_content,

      landing_page,
    } = body;

    /* ------------------------------------------------------------------
       Basic validation
       ------------------------------------------------------------------ */

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "Name, email, subject, and message are required.",
        },
        {
          status: 400,
        }
      );
    }

    /* ------------------------------------------------------------------
       SMTP configuration
       ------------------------------------------------------------------ */

    const SMTP_HOST = env("SMTP_HOST");
    const SMTP_PORT = Number(
      env("SMTP_PORT") || 465
    );
    const SMTP_USER = env("SMTP_USER");
    const SMTP_PASS = env("SMTP_PASS");

    const FROM_EMAIL = env("FROM_EMAIL");
    const TO_EMAIL = env("TO_EMAIL");

    for (const [key, value] of Object.entries({
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS,
      FROM_EMAIL,
      TO_EMAIL,
    })) {
      if (!value) {
        return NextResponse.json(
          {
            ok: false,
            error: `Missing env var: ${key}`,
          },
          {
            status: 500,
          }
        );
      }
    }

    /* ------------------------------------------------------------------
       SMTP Transport
       ------------------------------------------------------------------ */

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,

      secure: SMTP_PORT === 465,

      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    await transporter.verify();

    /* ------------------------------------------------------------------
       Send enquiry email first
       ------------------------------------------------------------------ */

    const emailInfo = await transporter.sendMail({
      from: `"WE DO Website" <${FROM_EMAIL}>`,

      to: TO_EMAIL,

      replyTo: email,

      subject:
        clean(subject) ||
        "New WE DO Website Enquiry",

      text: [
        "NEW WEBSITE ENQUIRY",
        "===================",
        "",
        `Name: ${clean(name)}`,
        `Email: ${clean(email)}`,
        phone
          ? `Phone: ${clean(phone)}`
          : "",
        "",
        `Subject: ${clean(subject)}`,
        "",
        "Message:",
        clean(message),
        "",
        "-------------------",
        "ATTRIBUTION",
        "-------------------",

        landing_page
          ? `Landing Page: ${clean(
              landing_page
            )}`
          : "",

        utm_source
          ? `UTM Source: ${clean(
              utm_source
            )}`
          : "",

        utm_medium
          ? `UTM Medium: ${clean(
              utm_medium
            )}`
          : "",

        utm_campaign
          ? `UTM Campaign: ${clean(
              utm_campaign
            )}`
          : "",

        utm_term
          ? `UTM Term: ${clean(
              utm_term
            )}`
          : "",

        utm_content
          ? `UTM Content: ${clean(
              utm_content
            )}`
          : "",

        zc_gad
          ? `Zoho GCLID: ${clean(
              zc_gad
            )}`
          : "",

        gclid
          ? `GCLID: ${clean(gclid)}`
          : "",

        gbraid
          ? `GBRAID: ${clean(
              gbraid
            )}`
          : "",

        wbraid
          ? `WBRAID: ${clean(
              wbraid
            )}`
          : "",
      ]
        .filter(Boolean)
        .join("\n"),

      html: `
        <h2>New WE DO Website Enquiry</h2>

        <p>
          <strong>Name:</strong>
          ${clean(name)}
        </p>

        <p>
          <strong>Email:</strong>
          ${clean(email)}
        </p>

        ${
          phone
            ? `
              <p>
                <strong>Phone:</strong>
                ${clean(phone)}
              </p>
            `
            : ""
        }

        <p>
          <strong>Subject:</strong>
          ${clean(subject)}
        </p>

        <p>
          <strong>Message:</strong>
        </p>

        <p>
          ${clean(message).replace(
            /\n/g,
            "<br />"
          )}
        </p>

        <hr />

        <h3>Attribution</h3>

        ${
          landing_page
            ? `<p><strong>Landing Page:</strong> ${clean(
                landing_page
              )}</p>`
            : ""
        }

        ${
          utm_source
            ? `<p><strong>UTM Source:</strong> ${clean(
                utm_source
              )}</p>`
            : ""
        }

        ${
          utm_medium
            ? `<p><strong>UTM Medium:</strong> ${clean(
                utm_medium
              )}</p>`
            : ""
        }

        ${
          utm_campaign
            ? `<p><strong>UTM Campaign:</strong> ${clean(
                utm_campaign
              )}</p>`
            : ""
        }

        ${
          utm_term
            ? `<p><strong>UTM Term:</strong> ${clean(
                utm_term
              )}</p>`
            : ""
        }

        ${
          zc_gad
            ? `<p><strong>Zoho GCLID:</strong> ${clean(
                zc_gad
              )}</p>`
            : ""
        }

        ${
          gclid
            ? `<p><strong>GCLID:</strong> ${clean(
                gclid
              )}</p>`
            : ""
        }
      `,
    });

    /* ------------------------------------------------------------------
       Create Zoho CRM Lead
       ------------------------------------------------------------------

       Important:
       We do this AFTER email success.

       If Zoho temporarily fails, the website enquiry is still safely
       delivered by email and the visitor will not submit repeatedly.
       ------------------------------------------------------------------ */

    let zohoResult = null;
    let crmSynced = false;
    let crmError = null;

    try {
      zohoResult = await createZohoLead({
        name,
        email,
        phone,
        subject,
        message,

        zc_gad,
        gclid,
        gbraid,
        wbraid,

        utm_source,
        utm_medium,
        utm_campaign,
        utm_term,
        utm_content,

        landing_page,
      });

      crmSynced = true;
    } catch (error) {
      crmError =
        error?.message ||
        "Unknown Zoho CRM error";

      console.error(
        "Zoho CRM sync failed:",
        error
      );
    }

    /* ------------------------------------------------------------------
       Success response
       ------------------------------------------------------------------ */

    return NextResponse.json({
      ok: true,

      emailSent: true,

      emailId: emailInfo.messageId,

      crmSynced,

      zohoLeadId:
        zohoResult?.id || null,

      /*
       * Useful while setting everything up.
       * You can remove crmError from the public response later.
       */
      crmError,
    });
  } catch (err) {
    const msg =
      (err &&
        (err.response || err.message)) ||
      "Unknown error";

    console.error(
      "Website enquiry error:",
      err
    );

    return NextResponse.json(
      {
        ok: false,
        error: msg,
      },
      {
        status: 500,
      }
    );
  }
}
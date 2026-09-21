import { NextResponse } from "next/server";

export const runtime = "nodejs";

const REDIRECT_URI =
  "https://wedointerior.ae/api/zoho/oauth/callback";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    const code = searchParams.get("code");
    const error = searchParams.get("error");

    if (error) {
      return NextResponse.json(
        {
          ok: false,
          error,
        },
        {
          status: 400,
          headers: {
            "Cache-Control": "no-store",
          },
        }
      );
    }

    if (!code) {
      return NextResponse.json(
        {
          ok: false,
          error: "Authorization code not found.",
        },
        {
          status: 400,
          headers: {
            "Cache-Control": "no-store",
          },
        }
      );
    }

    const clientId =
      process.env.ZOHO_CLIENT_ID?.trim();

    const clientSecret =
      process.env.ZOHO_CLIENT_SECRET?.trim();

    if (!clientId || !clientSecret) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "Zoho Client ID or Client Secret is missing.",
        },
        {
          status: 500,
        }
      );
    }

    const params = new URLSearchParams({
      grant_type: "authorization_code",
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: REDIRECT_URI,
      code,
    });

    const response = await fetch(
      "https://accounts.zoho.com/oauth/v2/token",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/x-www-form-urlencoded",
        },
        body: params.toString(),
        cache: "no-store",
      }
    );

    const data = await response
      .json()
      .catch(() => ({}));

    if (!response.ok || !data.access_token) {
      console.error("Zoho OAuth error:", data);

      return NextResponse.json(
        {
          ok: false,
          error:
            data?.error ||
            "Unable to generate Zoho token.",
        },
        {
          status: 500,
          headers: {
            "Cache-Control": "no-store",
          },
        }
      );
    }

    return NextResponse.json(
      {
        ok: true,

        message:
          "Zoho authorization successful. Copy the refresh token to Vercel, then delete this temporary callback route.",

        refresh_token:
          data.refresh_token || null,

        api_domain:
          data.api_domain || null,
      },
      {
        headers: {
          "Cache-Control":
            "no-store, no-cache, must-revalidate",
        },
      }
    );
  } catch (error) {
    console.error(
      "Zoho OAuth callback error:",
      error
    );

    return NextResponse.json(
      {
        ok: false,
        error:
          error?.message ||
          "Zoho authorization failed.",
      },
      {
        status: 500,
        headers: {
          "Cache-Control": "no-store",
        },
      }
    );
  }
}
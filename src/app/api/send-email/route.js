// Ensure this route uses Node.js runtime (Nodemailer won't work on Edge)
export const runtime = "nodejs";

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Optional: quick ping to verify the route is reachable at /api/send-email
export async function GET() {
  return NextResponse.json({ ping: "ok" });
}

export async function POST(req) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    // Basic validation to match your form fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { ok: false, error: "Name, email, subject, and message are required." },
        { status: 400 }
      );
    }

    // Required env vars
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, FROM_EMAIL, TO_EMAIL } = process.env;
    for (const [k, v] of Object.entries({ SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, FROM_EMAIL, TO_EMAIL })) {
      if (!v) return NextResponse.json({ ok: false, error: `Missing env var: ${k}` }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,                 // everest.mxrouting.net
      port: Number(SMTP_PORT || 465),  // 465
      secure: true,                    // SSL/TLS on 465
      auth: { user: SMTP_USER, pass: SMTP_PASS }, // info@wedointerior.ae / password
    });

    // Helpful: provides clear errors (e.g., 535 auth failed, DNS, timeout)
    await transporter.verify();

    const info = await transporter.sendMail({
      from: `"${name}" <${FROM_EMAIL}>`,   // envelope from (authenticated mailbox)
      to: TO_EMAIL,                        // where you want to receive it
      subject: subject || "New website enquiry",
      text:
        `From: ${name} <${email}>\n` +
        (phone ? `Phone: ${phone}\n` : "") +
        `\n${message}`,
      replyTo: email,                       // so you can reply directly to the sender
    });

    return NextResponse.json({ ok: true, id: info.messageId });
  } catch (err) {
    const msg = (err && (err.response || err.message)) || "Unknown error";
    console.error("Email send error:", err);
    return NextResponse.json({ ok: false, error: msg }, { status: 500 });
  }
}

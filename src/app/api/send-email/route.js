import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    await sgMail.send({
      to: process.env.CONTACT_TO_EMAIL,
      from: process.env.CONTACT_TO_EMAIL, // must be a verified sender
      templateId: process.env.SENDGRID_TEMPLATE_ID,
      dynamicTemplateData: {
        name,
        email,
        phone,
        subject,
        message,
      },
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error('SendGrid error:', error.response?.body || error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}

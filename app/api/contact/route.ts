import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, email, message, company } = body as {
    name?: string;
    email?: string;
    message?: string;
    company?: string; // honeypot — real users never fill this in
  };

  // Bots that fill in the hidden honeypot field get a fake success response
  // so they don't learn to avoid it.
  if (company) {
    return NextResponse.json({ ok: true });
  }

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const { GMAIL_USER, GMAIL_APP_PASSWORD, CONTACT_TO_EMAIL } = process.env;

  if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
    console.error("Missing GMAIL_USER or GMAIL_APP_PASSWORD env vars.");
    return NextResponse.json(
      { error: "Contact form isn't configured yet. Please email me directly." },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD },
  });

  try {
    await transporter.sendMail({
      from: GMAIL_USER,
      to: CONTACT_TO_EMAIL || GMAIL_USER,
      replyTo: email,
      subject: `New contact form message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });
  } catch (error) {
    console.error("Failed to send contact form email:", error);
    return NextResponse.json(
      { error: "Something went wrong sending your message. Please email me directly." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}

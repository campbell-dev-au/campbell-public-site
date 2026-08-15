import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { checkRateLimit, rateLimitKeyFromHeaders } from "@/lib/rate-limit";

export async function POST(request: Request) {
  const rateLimitKey = rateLimitKeyFromHeaders(request.headers);
  const { allowed, retryAfterSeconds } = checkRateLimit(rateLimitKey);

  if (!allowed) {
    return NextResponse.json(
      { error: "Too many requests. Please try again shortly." },
      { status: 429, headers: { "Retry-After": String(retryAfterSeconds) } },
    );
  }

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

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, CONTACT_TO_EMAIL } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASSWORD) {
    console.error("Missing SMTP_HOST, SMTP_PORT, SMTP_USER, or SMTP_PASSWORD env vars.");
    return NextResponse.json(
      { error: "Contact form isn't configured yet. Please email me directly." },
      { status: 500 },
    );
  }

  const port = Number(SMTP_PORT);

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    requireTLS: port !== 465,
    auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
  });

  try {
    await transporter.sendMail({
      from: SMTP_USER,
      to: CONTACT_TO_EMAIL || SMTP_USER,
      replyTo: email,
      subject: `New contact form message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });
  } catch (error) {
    console.error(
      "Failed to send contact form email:",
      error instanceof Error ? error.message : "unknown error",
    );
    return NextResponse.json(
      { error: "Something went wrong sending your message. Please email me directly." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}

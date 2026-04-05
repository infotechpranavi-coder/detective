import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactRequestBody = {
  name?: string;
  phone?: string;
  email?: string;
  category?: string;
  message?: string;
};

const resendApiKey = process.env.RESEND_API_KEY;

const resend = resendApiKey ? new Resend(resendApiKey) : null;

const categoryLabels: Record<string, string> = {
  personal: "Personal Investigation",
  corporate: "Corporate Investigation",
  tscm: "TSCM Services",
  "risk-management": "Risk Management",
  surveillance: "Surveillance",
};

export async function POST(request: Request) {
  if (!resend) {
    return NextResponse.json(
      { error: "Email service is not configured on the server." },
      { status: 500 }
    );
  }

  try {
    const body = (await request.json()) as ContactRequestBody;

    const name = body.name?.trim();
    const phone = body.phone?.trim();
    const email = body.email?.trim();
    const category = body.category?.trim();
    const message = body.message?.trim();

    if (!name || !phone || !email || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields before submitting." },
        { status: 400 }
      );
    }

    const categoryLabel = category
      ? categoryLabels[category] || category
      : "Not specified";

    const { error } = await resend.emails.send({
      from: "H S Detectives <onboarding@resend.dev>",
      to: ["hsdetectives123@gmail.com"],
      replyTo: email,
      subject: `New contact form submission from ${name}`,
      text: [
        "A new contact request was submitted from the website.",
        "",
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
        `Category: ${categoryLabel}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    if (error) {
      return NextResponse.json(
        { error: "Resend could not deliver this message." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong while sending your message." },
      { status: 500 }
    );
  }
}

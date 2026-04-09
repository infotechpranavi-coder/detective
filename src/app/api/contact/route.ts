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

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

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

    if (!name || !phone || !email || !category || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields before submitting." },
        { status: 400 }
      );
    }

    const categoryLabel = category
      ? categoryLabels[category] || category
      : "Not specified";

    const safeName = escapeHtml(name);
    const safePhone = escapeHtml(phone);
    const safeEmail = escapeHtml(email);
    const safeCategory = escapeHtml(categoryLabel);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br/>");

    const { error } = await resend.emails.send({
      from: "H S Detectives <onboarding@resend.dev>",
      to: ["hsdetectives123@gmail.com"],
      replyTo: email,
      subject: `New Case Submission from ${name}`,
      html: `
        <div style="font-family:Arial,sans-serif;background:#f6f6f6;padding:24px;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;margin:0 auto;background:#fff;border:1px solid #e5e5e5;border-radius:8px;overflow:hidden;">
            <tr>
              <td style="background:#111;color:#fff;padding:16px 20px;font-size:18px;font-weight:700;">New Case Submission</td>
            </tr>
            <tr>
              <td style="padding:20px;color:#111;">
                <p><strong>Name:</strong> ${safeName}</p>
                <p><strong>Phone:</strong> ${safePhone}</p>
                <p><strong>Email:</strong> ${safeEmail}</p>
                <p><strong>Category:</strong> ${safeCategory}</p>
                <p><strong>Message:</strong></p>
                <div style="white-space:pre-wrap;line-height:1.6;background:#fafafa;border:1px solid #eee;padding:12px;border-radius:6px;">${safeMessage}</div>
              </td>
            </tr>
          </table>
        </div>
      `,
      text: [
        "New Case Submission",
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

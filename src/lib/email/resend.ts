import { Resend } from "resend";

export const ADMIN_EMAIL = "info@g3-bizltd.com";

const resendApiKey = process.env.RESEND_API_KEY;
const fromEmail = process.env.RESEND_FROM_EMAIL || "G3-Biz Ltd <onboarding@resend.dev>";

const resend = resendApiKey ? new Resend(resendApiKey) : null;

interface SendEmailInput {
  to: string;
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
}

export async function sendBrandedEmail(input: SendEmailInput) {
  if (!resend) {
    console.warn("RESEND_API_KEY is not set. Email skipped:", {
      to: input.to,
      subject: input.subject,
    });
    return { skipped: true as const };
  }

  return resend.emails.send({
    from: fromEmail,
    to: input.to,
    subject: input.subject,
    html: input.html,
    text: input.text,
    replyTo: input.replyTo,
  });
}

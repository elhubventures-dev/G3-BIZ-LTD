"use server";

import { quoteSchema } from "@/lib/validations/quote";
import { ADMIN_EMAIL, sendBrandedEmail } from "@/lib/email/resend";
import {
  buildQuoteAdminTemplate,
  buildQuoteClientTemplate,
} from "@/lib/email/templates";

export async function submitQuoteEnquiry(data: unknown) {
  const parsed = quoteSchema.safeParse(data);
  if (!parsed.success) {
    return {
      error: "Invalid form data",
      fields: parsed.error.flatten().fieldErrors,
    };
  }

  const adminTemplate = buildQuoteAdminTemplate(parsed.data);
  const clientTemplate = buildQuoteClientTemplate(parsed.data);

  await Promise.all([
    sendBrandedEmail({
      to: ADMIN_EMAIL,
      subject: adminTemplate.subject,
      html: adminTemplate.html,
      text: adminTemplate.text,
      replyTo: parsed.data.email,
    }),
    sendBrandedEmail({
      to: parsed.data.email,
      subject: clientTemplate.subject,
      html: clientTemplate.html,
      text: clientTemplate.text,
    }),
  ]);

  return { success: true as const };
}

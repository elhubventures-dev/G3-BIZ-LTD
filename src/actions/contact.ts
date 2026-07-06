"use server";

import { contactSchema } from "@/lib/validations/contact";
import { ADMIN_EMAIL, sendBrandedEmail } from "@/lib/email/resend";
import {
  buildContactAdminTemplate,
  buildContactClientTemplate,
} from "@/lib/email/templates";

export async function submitContactForm(data: unknown) {
  const parsed = contactSchema.safeParse(data);
  if (!parsed.success) {
    return {
      error: "Invalid form data",
      fields: parsed.error.flatten().fieldErrors,
    };
  }

  const adminTemplate = buildContactAdminTemplate(parsed.data);
  const clientTemplate = buildContactClientTemplate(parsed.data);

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

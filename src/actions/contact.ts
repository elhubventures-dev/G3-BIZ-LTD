"use server";

import { contactSchema } from "@/lib/validations/contact";

export async function submitContactForm(data: unknown) {
  const parsed = contactSchema.safeParse(data);
  if (!parsed.success) {
    return {
      error: "Invalid form data",
      fields: parsed.error.flatten().fieldErrors,
    };
  }

  // In production, integrate with Resend/SendGrid
  // await resend.emails.send({ ... })
  console.log("Contact form submission:", parsed.data);

  return { success: true as const };
}

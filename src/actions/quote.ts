"use server";

import { quoteSchema } from "@/lib/validations/quote";

export async function submitQuoteEnquiry(data: unknown) {
  const parsed = quoteSchema.safeParse(data);
  if (!parsed.success) {
    return {
      error: "Invalid form data",
      fields: parsed.error.flatten().fieldErrors,
    };
  }

  // In production, integrate with Resend/SendGrid
  console.log("Quote enquiry submission:", parsed.data);

  return { success: true as const };
}

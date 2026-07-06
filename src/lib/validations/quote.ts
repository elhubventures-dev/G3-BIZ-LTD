import { z } from "zod";

export const quoteSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  product: z.string().optional(),
  message: z.string().min(10, "Please provide order details (min. 10 characters)"),
});

export type QuoteFormData = z.infer<typeof quoteSchema>;

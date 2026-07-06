"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, CheckCircle, Send, X } from "lucide-react";
import { submitQuoteEnquiry } from "@/actions/quote";
import { useQuoteEnquiry } from "@/context/QuoteEnquiryContext";
import { quoteSchema, type QuoteFormData } from "@/lib/validations/quote";
import { siteConfig } from "@/config/site";

export function QuoteEnquiryModal() {
  const { isOpen, product, closeQuote } = useQuoteEnquiry();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormData>({ resolver: zodResolver(quoteSchema) });

  useEffect(() => {
    if (!isOpen) return;

    setStatus("idle");
    reset({
      name: "",
      email: "",
      phone: "",
      product: product || "",
      message: product ? `I would like a quote for ${product}.` : "",
    });
  }, [isOpen, product, reset]);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeQuote();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, closeQuote]);

  const onSubmit = async (data: QuoteFormData) => {
    setStatus("idle");
    const result = await submitQuoteEnquiry(data);
    if (result.success) {
      setStatus("success");
      reset();
      setValue("product", product || "");
    } else {
      setStatus("error");
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
      onClick={closeQuote}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={closeQuote}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-brand-body transition hover:bg-brand-light hover:text-brand-heading"
          aria-label="Close enquiry form"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="border-b border-brand-border bg-brand-light px-6 py-5 pr-14">
          <span className="top-head">Enquiry</span>
          <h2 id="quote-modal-title" className="mt-2 font-serif text-2xl font-bold text-brand-heading">
            Request a Quote
          </h2>
          <p className="mt-1 text-sm text-brand-body">
            Tell us what you need and our depot team will respond with pricing and delivery options.
          </p>
        </div>

        {status === "success" ? (
          <div className="px-6 py-10 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-50">
              <CheckCircle className="h-7 w-7 text-green-600" />
            </div>
            <h3 className="mt-4 font-serif text-xl font-bold text-brand-heading">Enquiry sent</h3>
            <p className="mt-2 text-sm text-brand-body">
              Thank you. We&apos;ll get back to you shortly at the email you provided.
            </p>
            <button type="button" onClick={closeQuote} className="btn-primary mt-6 !px-6 !py-2.5 !text-sm">
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 px-6 py-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="quote-name" className="mb-1 block text-xs font-bold uppercase tracking-wide text-brand-heading">
                  Full Name *
                </label>
                <input
                  id="quote-name"
                  {...register("name")}
                  placeholder="Your name"
                  className="w-full rounded-lg border border-brand-border bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20"
                />
                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
              </div>

              <div>
                <label htmlFor="quote-email" className="mb-1 block text-xs font-bold uppercase tracking-wide text-brand-heading">
                  Email *
                </label>
                <input
                  id="quote-email"
                  type="email"
                  {...register("email")}
                  placeholder="you@company.com"
                  className="w-full rounded-lg border border-brand-border bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20"
                />
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
              </div>

              <div>
                <label htmlFor="quote-phone" className="mb-1 block text-xs font-bold uppercase tracking-wide text-brand-heading">
                  Phone
                </label>
                <input
                  id="quote-phone"
                  type="tel"
                  {...register("phone")}
                  placeholder={siteConfig.phone}
                  className="w-full rounded-lg border border-brand-border bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20"
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="quote-product" className="mb-1 block text-xs font-bold uppercase tracking-wide text-brand-heading">
                  Product / Service
                </label>
                <input
                  id="quote-product"
                  {...register("product")}
                  placeholder="e.g. Guinness, bulk order, new account"
                  className="w-full rounded-lg border border-brand-border bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20"
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="quote-message" className="mb-1 block text-xs font-bold uppercase tracking-wide text-brand-heading">
                  Order Details *
                </label>
                <textarea
                  id="quote-message"
                  rows={4}
                  {...register("message")}
                  placeholder="Quantity, delivery location, preferred schedule..."
                  className="w-full rounded-lg border border-brand-border bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20"
                />
                {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>}
              </div>
            </div>

            {status === "error" && (
              <div className="flex items-center gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-700">
                <AlertCircle className="h-4 w-4 shrink-0" />
                Something went wrong. Please try again or call {siteConfig.phone}.
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full gap-2 disabled:opacity-60"
            >
              <Send className="h-4 w-4" />
              {isSubmitting ? "Sending..." : "Submit Enquiry"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

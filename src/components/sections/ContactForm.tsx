"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@/lib/validations/contact";
import { submitContactForm } from "@/actions/contact";
import { siteConfig } from "@/config/site";
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("idle");
    const result = await submitContactForm(data);
    if (result.success) {
      setStatus("success");
      reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <span className="top-head">Get In Touch</span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-brand-heading-alt">Contact Us for Services</h2>
            <p className="mt-4 text-brand-body">
              Reach out to G3-Biz Ltd for distribution partnerships, consultancy, or internship
              opportunities.
            </p>

            <ul className="mt-8 space-y-4">
              <li className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-yellow">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <a href={`tel:${siteConfig.phone}`} className="font-medium text-brand-heading hover:text-brand-yellow">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-yellow">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-medium text-brand-heading hover:text-brand-yellow"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-yellow">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <span className="font-medium">{siteConfig.address}</span>
              </li>
            </ul>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-2xl bg-brand-light p-8 shadow-md"
          >
            <div className="space-y-4">
              <div>
                <input
                  {...register("name")}
                  placeholder="Your Name"
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
                )}
              </div>
              <div>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Your Email"
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                )}
              </div>
              <div>
                <input
                  {...register("subject")}
                  placeholder="Subject"
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20"
                />
                {errors.subject && (
                  <p className="mt-1 text-xs text-red-500">{errors.subject.message}</p>
                )}
              </div>
              <div>
                <textarea
                  {...register("message")}
                  rows={5}
                  placeholder="Your Message"
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20"
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
                )}
              </div>
            </div>

            {status === "success" && (
              <div className="mt-4 flex items-center gap-2 rounded-xl bg-green-50 p-3 text-sm text-green-700">
                <CheckCircle className="h-4 w-4" />
                Message sent successfully! We&apos;ll be in touch soon.
              </div>
            )}
            {status === "error" && (
              <div className="mt-4 flex items-center gap-2 rounded-xl bg-red-50 p-3 text-sm text-red-700">
                <AlertCircle className="h-4 w-4" />
                Something went wrong. Please try again.
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary mt-6 w-full disabled:opacity-60"
            >
              <Send className="h-4 w-4" />
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

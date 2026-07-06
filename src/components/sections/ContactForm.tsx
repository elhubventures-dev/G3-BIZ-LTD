"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@/lib/validations/contact";
import { submitContactForm } from "@/actions/contact";
import { siteConfig } from "@/config/site";
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { AnimateIn } from "@/components/shared/motion";
import { motion, AnimatePresence } from "framer-motion";

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
          <AnimateIn variant="slideLeft">
            <span className="top-head">Get In Touch</span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-brand-heading-alt">
              Contact Us for Services
            </h2>
            <p className="mt-4 text-brand-body">
              Reach out to G3-Biz Ltd for distribution partnerships, consultancy, or internship
              opportunities.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                {
                  icon: Phone,
                  href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
                  label: siteConfig.phone,
                },
                {
                  icon: Phone,
                  href: `tel:${siteConfig.phoneAlt.replace(/\s/g, "")}`,
                  label: siteConfig.phoneAlt,
                },
                {
                  icon: Mail,
                  href: `mailto:${siteConfig.email}`,
                  label: siteConfig.email,
                },
              ].map(({ icon: Icon, href, label }) => (
                <li key={label} className="group flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-yellow transition group-hover:scale-110">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <a
                    href={href}
                    className="font-medium text-brand-heading transition hover:text-brand-yellow"
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-yellow">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <span className="font-medium">{siteConfig.address}</span>
                  <p className="mt-1 text-sm text-brand-body">{siteConfig.poBox}</p>
                </div>
              </li>
            </ul>
          </AnimateIn>

          <AnimateIn variant="slideRight" delay={0.1}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-modern p-8 shadow-md"
            >
              <div className="space-y-4">
                {(
                  [
                    { name: "name" as const, placeholder: "Your Name", type: "text" },
                    { name: "email" as const, placeholder: "Your Email", type: "email" },
                    { name: "subject" as const, placeholder: "Subject", type: "text" },
                  ] as const
                ).map((field) => (
                  <div key={field.name}>
                    <input
                      {...register(field.name)}
                      type={field.type}
                      placeholder={field.placeholder}
                      className="input-modern"
                    />
                    {errors[field.name] && (
                      <p className="mt-1 text-xs text-red-500">{errors[field.name]?.message}</p>
                    )}
                  </div>
                ))}
                <div>
                  <textarea
                    {...register("message")}
                    rows={5}
                    placeholder="Your Message"
                    className="input-modern resize-none"
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
                  )}
                </div>
              </div>

              <AnimatePresence mode="wait">
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 flex items-center gap-2 rounded-xl bg-green-50 p-3 text-sm text-green-700"
                  >
                    <CheckCircle className="h-4 w-4" />
                    Message sent successfully! We&apos;ll be in touch soon.
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 flex items-center gap-2 rounded-xl bg-red-50 p-3 text-sm text-red-700"
                  >
                    <AlertCircle className="h-4 w-4" />
                    Something went wrong. Please try again.
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary mt-6 w-full disabled:opacity-60"
              >
                <Send className="h-4 w-4" />
                {isSubmitting ? "Sending..." : "Submit"}
              </button>
            </form>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

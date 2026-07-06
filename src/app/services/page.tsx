import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { getAllServices } from "@/lib/content";
import { siteConfig } from "@/config/site";
import {
  StaggerContainer,
  StaggerItem,
  SectionHeader,
} from "@/components/shared/motion";

export const metadata: Metadata = {
  title: "Services",
  description: `${siteConfig.shortName} services — GCSA distribution, customer creation, business consultation, and number registration in Limbe, Cameroon.`,
};

const serviceDescriptions: Record<string, string> = {
  "customer-creation":
    "Register as a new customer and obtain your buying number with a streamlined process.",
  "free-consultation-through-fongangs-academy":
    "Free business consultation through FONGANG's Academy for new and established customers.",
  "easy-business-number-registration":
    "A simple, hassle-free process to get your business number and start growing with G3-Biz.",
  "reputable-customer-of-gcsa":
    "Partner with Cameroon's trusted GCSA distributor with quarterly bonuses and professional delivery.",
};

export default function ServicesPage() {
  const services = getAllServices();

  return (
    <>
      <PageHero
        title="Our Services"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader
            badge="What We Do"
            title="Empowering businesses across Limbe"
            description="As the main distributor of GCSA products in Limbe, G3-Biz offers distribution excellence plus free consultation services to help your business thrive."
            align="center"
          />

          <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2">
            {services.map((service, index) => (
              <StaggerItem key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group card-modern block p-8"
                >
                  <span className="text-sm font-bold text-brand-yellow">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 font-serif text-xl font-bold text-brand-heading transition-colors group-hover:text-brand-heading-alt">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-brand-body">
                    {serviceDescriptions[service.slug] ??
                      "Learn more about how G3-Biz can support your business."}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-brand-heading">
                    Learn more{" "}
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
      <ContactForm />
    </>
  );
}

import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ServicesPageContent } from "@/components/sections/services/ServicesPageContent";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Services",
  description: `${siteConfig.shortName} services — GCSA distribution, customer creation, business consultation, and number registration in Limbe, Cameroon.`,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Distribution excellence, customer registration, and free business consultation"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        image="/images/uploads/2024/08/WhatsApp-Image-2024-08-20-at-19.18.08-1.jpeg"
      />
      <ServicesPageContent />
    </>
  );
}

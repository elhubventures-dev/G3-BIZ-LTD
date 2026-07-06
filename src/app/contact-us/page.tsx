import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ContactPageContent } from "@/components/sections/contact/ContactPageContent";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact ${siteConfig.shortName} — ${siteConfig.phone}, ${siteConfig.email}, ${siteConfig.address}.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Reach our team at Mile 2, Limbe for distribution, partnerships, and business support"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        image="/images/uploads/2024/08/WhatsApp-Image-2024-08-20-at-19.18.08-1.jpeg"
      />
      <ContactPageContent />
    </>
  );
}

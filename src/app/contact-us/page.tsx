import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { ContentRenderer } from "@/components/shared/ContentRenderer";
import { getPage } from "@/lib/content";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact ${siteConfig.shortName} — ${siteConfig.phone}, ${siteConfig.email}, ${siteConfig.address}.`,
};

export default function ContactPage() {
  const page = getPage("contact-us");

  return (
    <>
      <PageHero
        title="Contact Us"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        image="/images/uploads/2024/08/WhatsApp-Image-2024-08-20-at-19.18.08-1.jpeg"
      />
      {page?.html && (
        <section className="py-8">
          <div className="mx-auto max-w-4xl px-4">
            <ContentRenderer html={page.html} />
          </div>
        </section>
      )}
      <ContactForm />
    </>
  );
}

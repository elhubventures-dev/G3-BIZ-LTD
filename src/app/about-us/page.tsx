import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ContentRenderer } from "@/components/shared/ContentRenderer";
import { AboutSection } from "@/components/sections/AboutSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { ContactForm } from "@/components/sections/ContactForm";
import { getPage } from "@/lib/content";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${siteConfig.shortName} — our vision, culture, strategic pillars, and objectives as Cameroon's trusted beverage distributor.`,
};

export default function AboutPage() {
  const page = getPage("about-us");

  return (
    <>
      <PageHero
        title="About Us"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
        image="/images/uploads/2024/09/WhatsApp-Image-2024-08-20-at-19.18.07-1-e1726051069740.jpeg"
      />
      <AboutSection />
      {page?.html && (
        <section className="py-12">
          <div className="mx-auto max-w-4xl px-4">
            <ContentRenderer html={page.html} />
          </div>
        </section>
      )}
      <TeamSection />
      <ContactForm />
    </>
  );
}

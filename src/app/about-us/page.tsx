import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { AboutPageContent } from "@/components/sections/about/AboutPageContent";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${siteConfig.shortName} — our vision, culture, strategic pillars, and objectives as Cameroon's trusted beverage distributor.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="Building trust through distribution excellence since 2005"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />
      <AboutPageContent />
    </>
  );
}

import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { TeamsPageContent } from "@/components/sections/team/TeamsPageContent";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Our Team",
  description: `Meet the leadership team at ${siteConfig.shortName} — the dream team behind our success in Limbe, Cameroon.`,
};

export default function TeamsPage() {
  return (
    <>
      <PageHero
        title="Our Team"
        subtitle="Leadership, depot operations, and field squads driving distribution across Limbe"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Teams" }]}
      />
      <TeamsPageContent />
    </>
  );
}

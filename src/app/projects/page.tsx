import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ProjectsPageContent } from "@/components/sections/projects/ProjectsPageContent";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Projects",
  description: `Projects and initiatives by ${siteConfig.shortName} in Limbe, Cameroon.`,
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        title="Projects"
        subtitle="Ongoing initiatives advancing distribution excellence and market growth across Limbe"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Projects" }]}
      />
      <ProjectsPageContent />
    </>
  );
}

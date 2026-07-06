import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ContentRenderer } from "@/components/shared/ContentRenderer";
import { getPage } from "@/lib/content";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Projects",
  description: `Projects and initiatives by ${siteConfig.shortName} in Limbe, Cameroon.`,
};

export default function ProjectsPage() {
  const page = getPage("projects");

  return (
    <>
      <PageHero
        title="Projects"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Projects" }]}
      />
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          {page?.html ? (
            <ContentRenderer html={page.html} />
          ) : (
            <p className="text-brand-body">Projects information coming soon.</p>
          )}
        </div>
      </section>
    </>
  );
}

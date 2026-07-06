import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ContentRenderer } from "@/components/shared/ContentRenderer";
import { getPage } from "@/lib/content";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Our Team",
  description: `Meet the leadership team at ${siteConfig.shortName} — the dream team behind our success in Limbe, Cameroon.`,
};

export default function TeamsPage() {
  const page = getPage("teams");

  return (
    <>
      <PageHero
        title="Our Team"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Teams" }]}
        image="/images/uploads/2024/08/WhatsApp-Image-2024-08-20-at-19.18.13-3.jpeg"
      />
      {page?.html && (
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4">
            <ContentRenderer html={page.html} />
          </div>
        </section>
      )}
    </>
  );
}

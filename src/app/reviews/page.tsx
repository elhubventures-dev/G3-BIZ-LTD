import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ContentRenderer } from "@/components/shared/ContentRenderer";
import { getPage } from "@/lib/content";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Reviews",
  description: `Customer reviews and testimonials for ${siteConfig.shortName}.`,
};

export default function ReviewsPage() {
  const page = getPage("reviews");

  return (
    <>
      <PageHero
        title="Reviews"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Reviews" }]}
        image="/images/uploads/2024/08/WhatsApp-Image-2024-08-20-at-19.18.07.jpeg"
      />
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          {page?.html ? (
            <ContentRenderer html={page.html} />
          ) : (
            <p className="text-brand-body">Reviews coming soon.</p>
          )}
        </div>
      </section>
    </>
  );
}

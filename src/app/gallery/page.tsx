import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { GalleryGrid } from "@/components/sections/GalleryGrid";
import { getGalleryCategories } from "@/lib/content";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Gallery",
  description: `Photo gallery of ${siteConfig.shortName} events, depot operations, and community initiatives.`,
};

export default function GalleryPage() {
  const categories = getGalleryCategories();

  return (
    <>
      <PageHero
        title="Gallery"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
      />
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <GalleryGrid categories={categories} />
        </div>
      </section>
    </>
  );
}

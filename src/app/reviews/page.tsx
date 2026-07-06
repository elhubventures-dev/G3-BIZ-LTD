import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ReviewsPageContent } from "@/components/sections/reviews/ReviewsPageContent";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Reviews",
  description: `Customer reviews and testimonials for ${siteConfig.shortName} — trusted beverage distribution in Limbe, Cameroon.`,
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        title="Client Reviews"
        subtitle="What retailers, hospitality partners, and buyers say about our service"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Reviews" }]}
      />
      <ReviewsPageContent />
    </>
  );
}

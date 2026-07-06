import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/PageHero";
import { AnimatedContent } from "@/components/shared/AnimatedContent";
import { BusinessPromoterPostContent } from "@/components/sections/blog/BusinessPromoterPostContent";
import { CommunityWaterPostContent } from "@/components/sections/blog/CommunityWaterPostContent";
import { ContentRenderer } from "@/components/shared/ContentRenderer";
import { CsrPostContent } from "@/components/sections/blog/CsrPostContent";
import { DwwsPostContent } from "@/components/sections/blog/DwwsPostContent";
import { GuinnessSmoothLaunchPostContent } from "@/components/sections/blog/GuinnessSmoothLaunchPostContent";
import { HrVacancyPostContent } from "@/components/sections/blog/HrVacancyPostContent";
import { InternshipPostContent } from "@/components/sections/blog/InternshipPostContent";
import { LabourDayPostContent } from "@/components/sections/blog/LabourDayPostContent";
import { MarketingOfficerPostContent } from "@/components/sections/blog/MarketingOfficerPostContent";
import { RelaunchPostContent } from "@/components/sections/blog/RelaunchPostContent";
import { TuesdayMeetingsPostContent } from "@/components/sections/blog/TuesdayMeetingsPostContent";
import {
  isWcwPostSlug,
  WomensCrushPostContent,
} from "@/components/sections/blog/WomensCrushPostContent";
import { getAllPosts, getPost } from "@/lib/content";
import { siteConfig } from "@/config/site";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  return {
    title: post?.title ?? "Blog Post",
    description: post?.text?.slice(0, 160) ?? siteConfig.description,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  if (slug === "inside-g3-biz-the-power-of-our-tuesday-presentation-meetings") {
    return (
      <>
        <PageHero
          title="Tuesday Presentation Meetings"
          subtitle="How G3-Biz aligns sales teams every week through reflection, review, and teamwork"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: "Tuesday Meetings" },
          ]}
          image="/images/uploads/2024/08/WhatsApp-Image-2024-08-20-at-19.18.09-1.jpeg"
        />
        <TuesdayMeetingsPostContent />
      </>
    );
  }

  if (
    slug ===
    "unlock-your-future-with-g3-biz-internship-opportunities-for-students-in-business-administration-hr-accounting-and-more"
  ) {
    return (
      <>
        <PageHero
          title="Internship Opportunities"
          subtitle="Hands-on experience for students in business administration, HR, accounting, and more"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: "Internships" },
          ]}
          image="/images/uploads/2024/08/WhatsApp-Image-2024-08-20-at-19.18.07-1.jpeg"
        />
        <InternshipPostContent />
      </>
    );
  }

  if (slug === "g3-biz-corporate-social-responsibility-giving-back-to-the-community") {
    return (
      <>
        <PageHero
          title="Corporate Social Responsibility"
          subtitle="How G3-Biz gives back through healthcare, education, sustainability, and local talent development"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: "CSR" },
          ]}
          image="/images/uploads/2024/08/WhatsApp-Image-2024-08-20-at-19.18.17.jpeg"
        />
        <CsrPostContent />
      </>
    );
  }

  if (slug === "g3-biz-ltd-relaunches-with-a-bold-new-vision") {
    return (
      <>
        <PageHero
          title="A Bold New Vision"
          subtitle="How G3-Biz Ltd relaunched on June 12, 2024 with a refreshed mission for trust, growth, and value creation"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: "Relaunch" },
          ]}
          image="/images/uploads/2024/08/WhatsApp-Image-2024-08-20-at-19.18.08.jpeg"
        />
        <RelaunchPostContent />
      </>
    );
  }

  if (isWcwPostSlug(slug)) {
    return (
      <>
        <PageHero
          title="Women Crush Wednesday"
          subtitle="Celebrating Mme Tayimfor Therese — Depot Manager, leader, and our Mami Guinness"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: "WCW Spotlight" },
          ]}
          image="/images/uploads/2024/09/Women-Crush-Wednesday.png"
        />
        <WomensCrushPostContent />
      </>
    );
  }

  if (slug === "diageo-wold-class-ways-of-selling-dwws") {
    return (
      <>
        <PageHero
          title="DIAGEO DWWS Workshop"
          subtitle="World Class Ways of Selling training focused on field execution, customer value, and team performance"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: "DWWS Workshop" },
          ]}
          image="/images/uploads/2025/03/WhatsApp-Image-2025-03-10-at-08.06.44.jpeg"
        />
        <DwwsPostContent />
      </>
    );
  }

  if (slug === "community-sharing-free-for-all-water-to-the-community") {
    return (
      <>
        <PageHero
          title="Community Sharing Initiative"
          subtitle="Free-for-all water support for the community as part of G3-Biz social impact efforts"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: "Community Sharing" },
          ]}
          image="/images/uploads/2025/03/WhatsApp-Image-2025-03-10-at-08.06.44.jpeg"
        />
        <CommunityWaterPostContent />
      </>
    );
  }

  if (slug === "launching-of-the-new-guinness-smooth-ges-65cl-x12") {
    return (
      <>
        <PageHero
          title="Guinness Smooth GES Launch"
          subtitle="G3-Biz partners with Guinness Cameroon to launch the new GES 65cl x12 in Limbe"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: "GES Launch" },
          ]}
          image="/images/uploads/2024/09/7.png"
        />
        <GuinnessSmoothLaunchPostContent />
      </>
    );
  }

  if (slug === "1st-may2025-labour-day-celebration-celebration") {
    return (
      <>
        <PageHero
          title="Labour Day Celebration 2025"
          subtitle="Honoring the dedication, commitment, and teamwork of the G3-Biz family"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: "Labour Day 2025" },
          ]}
          image="/images/uploads/2025/07/WhatsApp-Image-2025-07-17-at-14.38.12.jpeg"
        />
        <LabourDayPostContent />
      </>
    );
  }

  if (slug === "job-vacancy-position-of-human-resource-manager") {
    return (
      <>
        <PageHero
          title="Job Vacancy: Human Resource Manager"
          subtitle="Join G3-Biz in a strategic HR leadership role focused on culture, compliance, and talent development"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: "HR Vacancy" },
          ]}
          image="/images/uploads/2024/08/WhatsApp-Image-2024-08-20-at-19.18.16-1-e1725984427929.jpeg"
        />
        <HrVacancyPostContent />
      </>
    );
  }

  if (slug === "marketing-officer") {
    return (
      <>
        <PageHero
          title="Job Vacancy: Marketing Officer"
          subtitle="Join G3-Biz to drive brand visibility, market engagement, and responsible commercial growth"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: "Marketing Officer" },
          ]}
          image="/images/uploads/2026/04/Marketing-Officer-Edited-scaled.png"
        />
        <MarketingOfficerPostContent />
      </>
    );
  }

  if (slug === "business-promoterbp") {
    return (
      <>
        <PageHero
          title="Job Vacancy: Business Promoter"
          subtitle="Four field sales positions in Limbe — drive territory growth, outlet activation, and brand representation"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: "Business Promoter" },
          ]}
          image="/images/uploads/2026/05/Business-Promoter-BP-scaled.png"
        />
        <BusinessPromoterPostContent />
      </>
    );
  }

  return (
    <>
      <PageHero
        title={post.title}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />
      <article className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-1 text-sm font-semibold text-brand-heading hover:text-brand-yellow"
          >
            ← Back to blog
          </Link>
          <AnimatedContent>
            <ContentRenderer html={post.html} />
          </AnimatedContent>
        </div>
      </article>
    </>
  );
}

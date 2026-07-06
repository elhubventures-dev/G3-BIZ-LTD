import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/PageHero";
import { ArchivingPolicyContent } from "@/components/sections/policies/ArchivingPolicyContent";
import { DisciplinaryPolicyContent } from "@/components/sections/policies/DisciplinaryPolicyContent";
import { FleetPolicyContent } from "@/components/sections/policies/FleetPolicyContent";
import { ProcurementPolicyContent } from "@/components/sections/policies/ProcurementPolicyContent";
import { RulesAndRegulationsPolicyContent } from "@/components/sections/policies/RulesAndRegulationsPolicyContent";
import { ContentRenderer } from "@/components/shared/ContentRenderer";
import { getAllPolicyPages, getPolicyPage } from "@/lib/content";
import { siteConfig } from "@/config/site";

export async function generateStaticParams() {
  return getAllPolicyPages().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getPolicyPage(slug);
  return {
    title: page?.title ?? "Policy",
    description: `${page?.title} — ${siteConfig.shortName} company policy document.`,
  };
}

export default async function PolicyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getPolicyPage(slug);
  if (!page) notFound();

  if (slug === "archiving-guidelines-and-procedures-policy") {
    return (
      <>
        <PageHero
          title="Archiving Guidelines and Procedures Policy"
          subtitle="Document retention, security, and retrieval standards for G3-Biz Ltd"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Policies", href: "/policies" },
            { label: "Archiving Policy" },
          ]}
        />
        <ArchivingPolicyContent />
      </>
    );
  }

  if (slug === "rules-and-regulations") {
    return (
      <>
        <PageHero
          title="Rules and Regulations"
          subtitle="Internal regulations governing recruitment, conduct, benefits, and workplace standards"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Policies", href: "/policies" },
            { label: "Rules and Regulations" },
          ]}
        />
        <RulesAndRegulationsPolicyContent />
      </>
    );
  }

  if (slug === "fleet-policy") {
    return (
      <>
        <PageHero
          title="Fleet Policy"
          subtitle="Guidelines for safe, efficient, and compliant fleet operations at G3-Biz Ltd"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Policies", href: "/policies" },
            { label: "Fleet Policy" },
          ]}
        />
        <FleetPolicyContent />
      </>
    );
  }

  if (slug === "disciplinary-policy") {
    return (
      <>
        <PageHero
          title="Disciplinary Policy"
          subtitle="Procedures and sanctions for maintaining professional workplace conduct"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Policies", href: "/policies" },
            { label: "Disciplinary Policy" },
          ]}
        />
        <DisciplinaryPolicyContent />
      </>
    );
  }

  if (slug === "procurement-policy") {
    return (
      <>
        <PageHero
          title="Procurement Policy"
          subtitle="Principles and procedures for efficient, transparent, and compliant procurement operations"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Policies", href: "/policies" },
            { label: "Procurement Policy" },
          ]}
        />
        <ProcurementPolicyContent />
      </>
    );
  }

  return (
    <>
      <PageHero
        title={page.title}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Policies", href: "/policies" },
          { label: page.title },
        ]}
      />
      <article className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <ContentRenderer html={page.html} />
        </div>
      </article>
    </>
  );
}

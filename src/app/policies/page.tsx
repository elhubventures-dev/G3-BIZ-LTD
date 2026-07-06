import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { ContentRenderer } from "@/components/shared/ContentRenderer";
import { AnimatedContent } from "@/components/shared/AnimatedContent";
import { policyPages } from "@/config/site";
import { getPage } from "@/lib/content";
import { siteConfig } from "@/config/site";
import { FileText, ChevronRight } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/shared/motion";

export const metadata: Metadata = {
  title: "Policies",
  description: `Company policies and guidelines for ${siteConfig.shortName} employees and partners.`,
};

export default function PoliciesPage() {
  const page = getPage("policies");

  return (
    <>
      <PageHero
        title="Policies"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Policies" }]}
      />
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {policyPages.map((policy) => (
              <StaggerItem key={policy.slug}>
                <Link
                  href={`/policies/${policy.slug}`}
                  className="group card-modern flex items-center gap-4 p-6"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-light transition group-hover:bg-brand-yellow/10">
                    <FileText className="h-6 w-6 text-brand-dark transition group-hover:text-brand-yellow" />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-bold text-brand-heading transition-colors group-hover:text-brand-yellow">
                      {policy.title}
                    </h2>
                  </div>
                  <ChevronRight className="h-5 w-5 text-brand-body transition group-hover:translate-x-0.5 group-hover:text-brand-yellow" />
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
          {page?.html && (
            <AnimatedContent className="mt-16">
              <ContentRenderer html={page.html} />
            </AnimatedContent>
          )}
        </div>
      </section>
    </>
  );
}

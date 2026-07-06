import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { ContentRenderer } from "@/components/shared/ContentRenderer";
import { policyPages } from "@/config/site";
import { getPage } from "@/lib/content";
import { siteConfig } from "@/config/site";
import { FileText, ChevronRight } from "lucide-react";

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
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {policyPages.map((policy) => (
              <Link
                key={policy.slug}
                href={`/policies/${policy.slug}`}
                className="group flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:border-brand-yellow hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-light">
                  <FileText className="h-6 w-6 text-brand-dark" />
                </div>
                <div className="flex-1">
                  <h2 className="font-bold text-brand-heading group-hover:text-brand-yellow">
                    {policy.title}
                  </h2>
                </div>
                <ChevronRight className="h-5 w-5 text-brand-body transition group-hover:text-brand-yellow" />
              </Link>
            ))}
          </div>
          {page?.html && (
            <div className="mt-16">
              <ContentRenderer html={page.html} />
            </div>
          )}
        </div>
      </section>
    </>
  );
}

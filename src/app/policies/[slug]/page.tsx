import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/PageHero";
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

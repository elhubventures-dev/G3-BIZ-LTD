import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/PageHero";
import { AnimatedContent } from "@/components/shared/AnimatedContent";
import { ContentRenderer } from "@/components/shared/ContentRenderer";
import { BusinessNumberContent } from "@/components/sections/services/BusinessNumberContent";
import { CustomerCreationContent } from "@/components/sections/services/CustomerCreationContent";
import { FongangsAcademyContent } from "@/components/sections/services/FongangsAcademyContent";
import { GcsaPartnershipContent } from "@/components/sections/services/GcsaPartnershipContent";
import { getAllServices, getService } from "@/lib/content";
import { siteConfig } from "@/config/site";

export async function generateStaticParams() {
  return getAllServices().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  return {
    title: service?.title ?? "Service",
    description: `${service?.title} — ${siteConfig.shortName} services in Limbe, Cameroon.`,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  if (slug === "customer-creation") {
    return (
      <>
        <PageHero
          title="Customer Creation"
          subtitle="Register as a new customer and obtain your buying number"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Customer Creation" },
          ]}
          image="/images/uploads/2024/08/WhatsApp-Image-2024-08-20-at-19.18.08-2-e1725534524931.jpeg"
        />
        <CustomerCreationContent />
      </>
    );
  }

  if (slug === "free-consultation-through-fongangs-academy") {
    return (
      <>
        <PageHero
          title="FONGANG's Academy"
          subtitle="Free business consultation for new and established G3-Biz customers"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "FONGANG's Academy" },
          ]}
          image="/images/uploads/2024/08/WhatsApp-Image-2024-08-20-at-19.18.07.jpeg"
        />
        <FongangsAcademyContent />
      </>
    );
  }

  if (slug === "easy-business-number-registration") {
    return (
      <>
        <PageHero
          title="Easy Business Number Registration"
          subtitle="A streamlined path to your buying number — less paperwork, more growth"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Business Number Registration" },
          ]}
          image="/images/uploads/2024/08/WhatsApp-Image-2024-08-20-at-19.18.17-1.jpeg"
        />
        <BusinessNumberContent />
      </>
    );
  }

  if (slug === "reputable-customer-of-gcsa") {
    return (
      <>
        <PageHero
          title="Reputable Customer of GCSA"
          subtitle="Partner with Limbe's trusted GCSA distributor for growth and reliability"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Reputable Customer of GCSA" },
          ]}
          image="/images/uploads/2024/08/WhatsApp-Image-2024-08-20-at-19.18.08-1.jpeg"
        />
        <GcsaPartnershipContent />
      </>
    );
  }

  return (
    <>
      <PageHero
        title={service.title}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />
      <article className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <Link
            href="/services"
            className="mb-8 inline-flex items-center gap-1 text-sm font-semibold text-brand-heading hover:text-brand-yellow"
          >
            ← Back to services
          </Link>
          <AnimatedContent>
            <ContentRenderer html={service.html} />
          </AnimatedContent>
        </div>
      </article>
    </>
  );
}

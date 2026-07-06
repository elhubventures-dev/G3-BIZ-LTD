import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/PageHero";
import { AnimatedContent } from "@/components/shared/AnimatedContent";
import { ContentRenderer } from "@/components/shared/ContentRenderer";
import { ContactForm } from "@/components/sections/ContactForm";
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

  const isCustomerCreation = slug === "customer-creation";

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
          <AnimatedContent>
            <ContentRenderer html={service.html} />
          </AnimatedContent>
          {isCustomerCreation && (
            <AnimatedContent className="mt-8">
              <div className="rounded-2xl border border-brand-yellow/30 bg-brand-light p-6">
              <h3 className="font-serif text-xl font-bold text-brand-heading">
                Ready to register?
              </h3>
              <p className="mt-2 text-brand-body">
                Submit your documents at our Mile 2 Limbe office, or contact us to begin your
                customer registration.
              </p>
              <Link href="/contact-us" className="btn-primary mt-4 inline-block">
                Contact Us
              </Link>
              </div>
            </AnimatedContent>
          )}
        </div>
      </article>
      <ContactForm />
    </>
  );
}

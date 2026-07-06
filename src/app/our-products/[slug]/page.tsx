import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { QuoteButton } from "@/components/shared/QuoteButton";
import { getAllProducts, getProduct } from "@/lib/content";
import {
  getProductCategory,
  getProductDescription,
  getProductImage,
  productCategories,
} from "@/lib/products";
import { siteConfig } from "@/config/site";

export async function generateStaticParams() {
  return getAllProducts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  return {
    title: product?.title ?? "Product",
    description: getProductDescription(slug, product?.title),
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const category = getProductCategory(slug);
  const categoryLabel = productCategories.find((c) => c.id === category)?.label;
  const description = getProductDescription(slug, product.text);
  const image = getProductImage(slug, product.image);

  return (
    <>
      <PageHero
        title={product.title}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/our-products" },
          { label: product.title },
        ]}
      />
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <Link
            href="/our-products"
            className="mb-8 inline-flex items-center gap-1 text-sm font-semibold text-brand-heading hover:text-brand-yellow"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to products
          </Link>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="flex items-center justify-center rounded-2xl border border-brand-border bg-gradient-to-b from-black to-[#1a1a1a] p-12 shadow-lg">
              <Image
                src={image}
                alt={product.title}
                width={200}
                height={280}
                className="object-contain drop-shadow-2xl"
              />
            </div>

            <div>
              {categoryLabel && (
                <span className="inline-block rounded-full bg-brand-light px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-yellow">
                  {categoryLabel}
                </span>
              )}
              <h2 className="mt-3 font-serif text-3xl font-bold text-brand-heading">{product.title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-brand-body">{description}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <QuoteButton product={product.title} className="btn-primary gap-2" showIcon>
                  Request a Quote
                </QuoteButton>
                <Link
                  href="/services/reputable-customer-of-gcsa"
                  className="inline-flex items-center justify-center rounded-sm border-2 border-brand-charcoal px-6 py-3 text-sm font-bold text-brand-charcoal transition hover:bg-brand-charcoal hover:text-white"
                >
                  Become a Customer
                </Link>
              </div>

              <p className="mt-8 text-sm text-brand-body">
                Distributed by {siteConfig.shortName} · Mile 2, Limbe ·{" "}
                <a href={`tel:${siteConfig.phone}`} className="font-semibold text-brand-heading hover:text-brand-yellow">
                  {siteConfig.phone}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

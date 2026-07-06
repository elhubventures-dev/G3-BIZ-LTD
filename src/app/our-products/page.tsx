import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { ProductCatalog, ProductHighlights } from "@/components/sections/ProductCatalog";
import { QuoteButton } from "@/components/shared/QuoteButton";
import { getAllProducts } from "@/lib/content";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Our Products",
  description: `Browse ${siteConfig.shortName}'s product range — Guinness, Smirnoff, Harp, Origin, Malta Guinness and more.`,
};

export default function ProductsPage() {
  const products = getAllProducts().map((p) => ({
    slug: p.slug,
    title: p.title,
  }));

  return (
    <>
      <PageHero
        title="Our Products"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products" }]}
        image="/images/uploads/2024/08/GUINNESS-1-696x696-1.png"
      />

      {/* Intro */}
      <section className="border-b border-brand-border bg-brand-light py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="top-head">Product Range</span>
              <h2 className="mt-2 font-serif text-3xl font-bold text-brand-heading-alt">
                Guinness & Diageo brands, delivered with excellence
              </h2>
              <p className="mt-4 text-brand-body">
                As the main GCSA distributor in Limbe, G3-Biz Ltd supplies a full portfolio of
                trusted beverages to retailers, hospitality venues, and partners across the South
                West Region.
              </p>
              <ul className="mt-6 space-y-2">
                {[
                  "Primary & secondary distribution",
                  "Safe, professional delivery",
                  "Quarterly bonus programmes",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-brand-heading">
                    <CheckCircle className="h-4 w-4 shrink-0 text-brand-yellow" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative hidden aspect-square max-h-80 justify-self-center lg:block">
              <Image
                src="/images/uploads/2024/09/2.png"
                alt="Guinness products"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>
          <div className="mt-10">
            <ProductHighlights />
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="font-serif text-2xl font-bold text-brand-heading-alt">Browse our catalogue</h2>
              <p className="mt-1 text-sm text-brand-body">
                Filter by brand family or request a quote for any product.
              </p>
            </div>
            <p className="text-sm font-semibold text-brand-body">
              Showing <span className="text-brand-yellow">{products.length}</span> products
            </p>
          </div>
          <ProductCatalog products={products} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-yellow py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 text-center sm:flex-row sm:text-left">
          <div>
            <h2 className="font-serif text-2xl font-bold text-white">Need a bulk order or new account?</h2>
            <p className="mt-1 text-white/85">
              Contact our depot team for pricing, delivery schedules, and customer registration.
            </p>
          </div>
          <QuoteButton
            className="inline-flex shrink-0 items-center gap-2 rounded bg-black px-6 py-3 text-sm font-bold text-white transition hover:bg-black/85"
            showIcon
          >
            Request a Quote
          </QuoteButton>
        </div>
      </section>
    </>
  );
}

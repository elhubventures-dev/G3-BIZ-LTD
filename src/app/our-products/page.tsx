import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { ContentRenderer } from "@/components/shared/ContentRenderer";
import { getAllProducts, getPage } from "@/lib/content";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Our Products",
  description: `Browse ${siteConfig.shortName}'s product range — Guinness, Smirnoff, Harp, Origin, Malta Guinness and more.`,
};

const productImages: Record<string, string> = {
  "big-guinness-l": "/images/uploads/2024/09/2.png",
  ges: "/images/uploads/2024/09/7.png",
  origin: "/images/uploads/2024/09/8.png",
  harp: "/images/uploads/2024/09/3.png",
  "malta-guiness": "/images/uploads/2024/09/4.png",
  "small-guinness-s": "/images/uploads/2024/09/1.png",
  "smirnoff-ice-double-black": "/images/uploads/2024/09/5.png",
  "smirnoff-ice-pineapple": "/images/uploads/2024/09/6.png",
};

export default function ProductsPage() {
  const page = getPage("our-products");
  const products = getAllProducts();

  return (
    <>
      <PageHero
        title="Our Products"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products" }]}
      />
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/our-products/${product.slug}`}
                className="group overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-48 items-center justify-center bg-brand-charcoal p-6">
                  <Image
                    src={productImages[product.slug] ?? "/images/uploads/2024/09/2.png"}
                    alt={product.title}
                    width={100}
                    height={140}
                    className="object-contain transition group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h2 className="font-bold text-brand-heading group-hover:text-brand-yellow">
                    {product.title}
                  </h2>
                  <p className="mt-2 text-sm text-brand-body">Request a quote →</p>
                </div>
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

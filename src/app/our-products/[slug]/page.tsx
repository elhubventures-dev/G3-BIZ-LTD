import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/PageHero";
import { getAllProducts, getProduct } from "@/lib/content";
import { siteConfig } from "@/config/site";

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
    description: `${product?.title} — available from ${siteConfig.shortName}, Limbe Cameroon.`,
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
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <div className="flex h-64 w-64 items-center justify-center rounded-2xl bg-brand-charcoal p-8">
              <Image
                src={productImages[product.slug] ?? "/images/uploads/2024/09/2.png"}
                alt={product.title}
                width={160}
                height={220}
                className="object-contain"
              />
            </div>
            <div className="flex-1">
              <h2 className="font-serif text-2xl font-bold text-brand-heading">{product.title}</h2>
              {product.text && <p className="mt-4 text-brand-body">{product.text}</p>}
              <Link
                href="/contact-us"
                className="mt-6 btn-primary"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

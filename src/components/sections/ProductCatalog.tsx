"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Package } from "lucide-react";
import {
  productCategories,
  getProductCategory,
  getProductDescription,
  getProductImage,
  type ProductCategory,
} from "@/lib/products";
import { cn } from "@/lib/utils";

export interface CatalogProduct {
  slug: string;
  title: string;
}

interface ProductCatalogProps {
  products: CatalogProduct[];
}

export function ProductCatalog({ products }: ProductCatalogProps) {
  const [active, setActive] = useState<ProductCategory>("all");

  const filtered =
    active === "all"
      ? products
      : products.filter((p) => getProductCategory(p.slug) === active);

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-2">
        {productCategories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setActive(cat.id)}
            className={cn(
              "rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wider transition",
              active === cat.id
                ? "bg-brand-yellow text-white shadow-sm"
                : "border border-brand-border bg-white text-brand-heading/70 hover:border-brand-yellow hover:text-brand-heading"
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {filtered.map((product) => {
          const meta = getProductImage(product.slug);
          const description = getProductDescription(product.slug, product.title);

          return (
            <article
              key={product.slug}
              className="group flex flex-col overflow-hidden rounded-xl border border-brand-border bg-white shadow-sm transition hover:-translate-y-1 hover:border-brand-yellow/40 hover:shadow-lg"
            >
              <div className="relative flex h-52 items-center justify-center bg-gradient-to-b from-black to-[#1a1a1a] p-6">
                <Image
                  src={meta}
                  alt={product.title}
                  width={110}
                  height={150}
                  className="object-contain transition duration-300 group-hover:scale-110"
                />
                <span className="absolute left-3 top-3 rounded bg-white/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white/90 backdrop-blur-sm">
                  {productCategories.find((c) => c.id === getProductCategory(product.slug))?.label.split(" ")[0]}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h2 className="font-serif text-lg font-bold text-brand-heading group-hover:text-brand-yellow">
                  {product.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-body line-clamp-3">
                  {description}
                </p>
                <div className="mt-5 flex flex-col gap-2 border-t border-brand-border pt-4 sm:flex-row">
                  <Link
                    href={`/our-products/${product.slug}`}
                    className="inline-flex flex-1 items-center justify-center gap-1 rounded border border-brand-border px-3 py-2 text-xs font-bold uppercase tracking-wide text-brand-heading transition hover:border-brand-heading"
                  >
                    Details
                  </Link>
                  <Link
                    href="/contact-us"
                    className="inline-flex flex-1 items-center justify-center gap-1 rounded bg-brand-yellow px-3 py-2 text-xs font-bold uppercase tracking-wide text-white transition hover:brightness-110"
                  >
                    Quote
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <p className="py-12 text-center text-brand-body">No products in this category.</p>
      )}
    </div>
  );
}

export function ProductHighlights() {
  const highlights = [
    { icon: Package, label: "8+ Products", sub: "Guinness & Diageo range" },
    { label: "GCSA Partner", sub: "Authorized distributor" },
    { label: "Limbe Depot", sub: "Mile 2, South West" },
  ] as const;

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {highlights.map((item, i) => (
        <div
          key={item.label}
          className="flex items-center gap-4 rounded-xl border border-brand-border bg-white p-5 shadow-sm"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-yellow text-white">
            {"icon" in item && item.icon ? (
              <item.icon className="h-5 w-5" />
            ) : (
              <span className="text-sm font-bold">{i + 1}</span>
            )}
          </div>
          <div>
            <p className="font-bold text-brand-heading">{item.label}</p>
            <p className="text-sm text-brand-body">{item.sub}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { featuredProducts } from "@/config/site";

export function ProductsSection() {
  return (
    <section className="bg-brand-light py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <span className="top-head">Depot</span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-brand-heading-alt md:text-4xl">Our Products</h2>
          <p className="mx-auto mt-4 max-w-2xl text-brand-body">
            Main distributor of GCSA (Guinness Cameroon SA) products in Limbe — trusted brands
            delivered with excellence.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {featuredProducts.map((product, i) => (
            <Link
              key={product.slug}
              href={`/our-products/${product.slug}`}
              className="group overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative flex h-48 items-center justify-center bg-brand-charcoal p-6">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={120}
                  height={160}
                  className="object-contain transition group-hover:scale-105"
                />
                <span className="absolute right-4 top-4 text-4xl font-extrabold text-white/20">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-brand-heading group-hover:text-brand-yellow">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm text-brand-body line-clamp-3">{product.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/our-products" className="btn-primary">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}

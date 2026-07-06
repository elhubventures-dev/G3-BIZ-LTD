import Image from "next/image";
import Link from "next/link";
import { productGallery } from "@/config/site";

export function ProductGallerySection() {
  return (
    <section className="bg-brand-light py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <span className="top-head">Our Depot</span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-brand-heading-alt md:text-4xl">
            Products We Distribute
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-brand-body">
            Primary and secondary distribution of Guinness and Diageo products across the South
            West Region of Cameroon.
          </p>
        </div>

        <div className="mt-12 grid gap-4 grid-cols-2 sm:grid-cols-4 lg:grid-cols-8">
          {productGallery.map((src) => (
            <div
              key={src}
              className="flex aspect-square items-center justify-center rounded-2xl bg-brand-charcoal p-4 transition hover:shadow-lg"
            >
              <Image
                src={src}
                alt="G3-Biz product"
                width={120}
                height={160}
                className="object-contain"
              />
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/our-products" className="btn-primary">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}

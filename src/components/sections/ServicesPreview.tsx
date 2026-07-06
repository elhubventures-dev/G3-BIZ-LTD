import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllServices } from "@/lib/content";

export function ServicesPreview() {
  const services = getAllServices().slice(0, 4);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="top-head">Our Services</span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-brand-heading-alt md:text-4xl">
              At G3-Biz, we don&apos;t just distribute Guinness products
            </h2>
            <p className="mt-4 text-lg text-brand-body">
              We empower businesses to succeed. As the main distributor of GCSA products in Limbe,
              Cameroon, we offer consultation services free of charge to ensure you get the most
              out of your partnership with us.
            </p>
            <Link
              href="/services"
              className="mt-6 inline-flex items-center gap-2 font-bold text-brand-heading hover:text-brand-yellow"
            >
              More Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:border-brand-yellow hover:shadow-md"
              >
                <h3 className="font-bold text-brand-heading">{service.title}</h3>
                <p className="mt-2 text-sm text-brand-body line-clamp-3">
                  {service.html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim().slice(0, 120)}…
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

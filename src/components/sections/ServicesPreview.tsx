import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllServices } from "@/lib/content";
import {
  AnimateIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/motion";

export function ServicesPreview() {
  const services = getAllServices().slice(0, 4);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <AnimateIn variant="slideLeft">
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
              className="group mt-6 inline-flex items-center gap-2 font-bold text-brand-heading transition hover:text-brand-yellow"
            >
              More Services{" "}
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
          </AnimateIn>

          <StaggerContainer className="grid gap-4 sm:grid-cols-2">
            {services.map((service) => (
              <StaggerItem key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group card-modern block h-full p-6"
                >
                  <h3 className="font-bold text-brand-heading transition-colors group-hover:text-brand-yellow">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-brand-body line-clamp-3">
                    {service.html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim().slice(0, 120)}…
                  </p>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}

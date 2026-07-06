import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { QuoteButton } from "@/components/shared/QuoteButton";
import {
  AnimateIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/motion";
import { partnerBenefits, serviceCatalog, serviceSteps } from "@/config/services";
import { getAllServices } from "@/lib/content";
import { siteConfig } from "@/config/site";

function ServicesIntro() {
  return (
    <section className="border-b border-brand-border bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <AnimateIn variant="slideLeft">
            <span className="top-head">What We Do</span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-brand-heading-alt md:text-4xl">
              More than distribution — we empower your business
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-brand-body">
              As the main GCSA distributor in Limbe, {siteConfig.shortName} delivers Guinness and
              Diageo products with excellence — plus free consultation services to help partners
              grow.
            </p>
            <p className="mt-4 text-brand-body">
              From customer registration and business number setup to strategic guidance through
              FONGANG&apos;s Academy, we support retailers and hospitality businesses at every
              stage.
            </p>
            <ul className="mt-6 space-y-2">
              {[
                "Primary & secondary distribution",
                "Customer creation & registration",
                "Free business consultation",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-brand-heading">
                  <CheckCircle className="h-4 w-4 shrink-0 text-brand-yellow" />
                  {item}
                </li>
              ))}
            </ul>
          </AnimateIn>

          <AnimateIn variant="slideRight" delay={0.1}>
            <div className="relative min-h-[320px] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/uploads/2024/08/WhatsApp-Image-2024-08-20-at-19.18.08-1.jpeg"
                alt="G3-Biz distribution services"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <p className="absolute bottom-5 left-5 right-5 text-sm font-medium text-white/90">
                GCSA authorised distribution with professional depot operations at Mile 2.
              </p>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

function ServicesCatalog() {
  const services = getAllServices();
  const serviceBySlug = Object.fromEntries(services.map((service) => [service.slug, service]));

  return (
    <section className="bg-brand-light py-20">
      <div className="mx-auto max-w-7xl px-4">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <span className="top-head">Our Services</span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-brand-heading-alt">
            How G3-Biz supports your business
          </h2>
          <p className="mt-3 text-brand-body">
            Explore our core services — each designed to simplify partnership and strengthen
            your growth across Limbe and the South West Region.
          </p>
        </AnimateIn>

        <StaggerContainer className="mt-12 grid gap-6 lg:grid-cols-2">
          {serviceCatalog.map((meta, index) => {
            const service = serviceBySlug[meta.slug];
            if (!service) return null;
            const Icon = meta.icon;

            return (
              <StaggerItem key={meta.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group card-modern flex h-full flex-col overflow-hidden sm:flex-row"
                >
                  {meta.image && (
                    <div className="relative h-48 w-full shrink-0 overflow-hidden sm:h-auto sm:w-44">
                      <Image
                        src={meta.image}
                        alt={service.title}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, 176px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10 sm:bg-gradient-to-t sm:from-black/40 sm:to-transparent" />
                    </div>
                  )}

                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-start justify-between gap-3">
                      <span className="text-sm font-bold text-brand-yellow">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {Icon && (
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-yellow/10">
                          <Icon className="h-5 w-5 text-brand-yellow" />
                        </div>
                      )}
                    </div>

                    <h3 className="mt-2 font-serif text-xl font-bold text-brand-heading transition-colors group-hover:text-brand-yellow">
                      {service.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-body">
                      {meta.summary}
                    </p>

                    <ul className="mt-4 flex flex-wrap gap-2">
                      {meta.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="rounded-full bg-brand-light px-3 py-1 text-xs font-semibold text-brand-heading"
                          >
                            {highlight}
                          </li>
                        ))}
                    </ul>

                    <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-brand-heading">
                      Learn more
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

function ServicesBenefits() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <span className="top-head">Partner Benefits</span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-brand-heading-alt">
            Why businesses choose G3-Biz
          </h2>
        </AnimateIn>

        <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {partnerBenefits.map((benefit) => (
            <StaggerItem key={benefit.title}>
              <div className="card-modern h-full p-6">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-yellow text-sm font-bold text-white">
                  ✓
                </span>
                <h3 className="mt-4 font-serif text-lg font-bold text-brand-heading">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-body">{benefit.text}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function ServicesProcess() {
  return (
    <section className="on-dark section-accent bg-brand-charcoal py-20">
      <div className="mx-auto max-w-7xl px-4">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <span className="top-head">Getting Started</span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-white">
            How to become a G3-Biz customer
          </h2>
          <p className="mt-3 text-white/75">
            A straightforward path from first contact to placing your first order.
          </p>
        </AnimateIn>

        <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {serviceSteps.map((item) => (
            <StaggerItem key={item.step}>
              <div className="card-glass h-full p-6">
                <span className="font-serif text-3xl font-bold text-brand-yellow">{item.step}</span>
                <h3 className="mt-3 font-serif text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">{item.text}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function ServicesCta() {
  return (
    <section className="bg-brand-yellow py-14">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 text-center sm:flex-row sm:text-left">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-white/80">
            Start today
          </p>
          <h2 className="mt-1 font-serif text-2xl font-bold text-white md:text-3xl">
            Ready to register or request a consultation?
          </h2>
          <p className="mt-2 text-white/85">
            Speak with our team at Mile 2 Limbe or submit an enquiry online.
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <QuoteButton
            className="inline-flex items-center justify-center gap-2 rounded bg-black px-6 py-3 text-sm font-bold text-white transition hover:bg-black/85"
            showIcon
          >
            Request a Quote
          </QuoteButton>
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center gap-2 rounded border-2 border-white/40 px-6 py-3 text-sm font-bold text-white transition hover:border-white hover:bg-white/10"
          >
            Contact Us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function ServicesPageContent() {
  return (
    <>
      <ServicesIntro />
      <ServicesCatalog />
      <ServicesBenefits />
      <ServicesProcess />
      <ServicesCta />
    </>
  );
}

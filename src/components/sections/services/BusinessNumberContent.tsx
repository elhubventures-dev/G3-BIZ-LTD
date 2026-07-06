import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Clock,
  FileText,
  ShoppingCart,
  Headphones,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { QuoteButton } from "@/components/shared/QuoteButton";
import {
  AnimateIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/motion";
import { businessNumberBenefits, serviceSteps } from "@/config/services";
import { siteConfig } from "@/config/site";

const benefitIcons: LucideIcon[] = [Clock, FileText, ShoppingCart, Headphones];

function BusinessNumberIntro() {
  return (
    <section className="border-b border-brand-border bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <Link
          href="/services"
          className="mb-8 inline-flex items-center gap-1 text-sm font-semibold text-brand-heading hover:text-brand-yellow"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to services
        </Link>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <AnimateIn variant="slideLeft">
            <span className="top-head">Business Number</span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-brand-heading-alt md:text-4xl">
              Get your number — start growing with G3-Biz
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-brand-body">
              Starting your journey with {siteConfig.shortName} is simple. We have streamlined the
              process of obtaining your business number so you can focus on growing your business
              and less on paperwork.
            </p>
            <p className="mt-4 text-brand-body">
              Your buying number connects you to GCSA distribution, depot ordering, and the full
              range of support services available to G3-Biz customers in Limbe and beyond.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-light px-4 py-2 text-sm font-bold text-brand-heading">
              <BadgeCheck className="h-4 w-4 text-brand-yellow" />
              Hassle-free registration process
            </div>
          </AnimateIn>

          <AnimateIn variant="slideRight" delay={0.1}>
            <div className="relative min-h-[320px] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/uploads/2024/08/WhatsApp-Image-2024-08-20-at-19.18.17-1.jpeg"
                alt="Easy business number registration at G3-Biz"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

function BusinessNumberBenefits() {
  return (
    <section className="bg-brand-light py-20">
      <div className="mx-auto max-w-7xl px-4">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <span className="top-head">Why It&apos;s Easy</span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-brand-heading-alt">
            Built for busy business owners
          </h2>
          <p className="mt-3 text-brand-body">
            We designed registration to be clear, efficient, and supported every step of the way.
          </p>
        </AnimateIn>

        <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {businessNumberBenefits.map((benefit, index) => {
            const Icon = benefitIcons[index] ?? BadgeCheck;
            return (
              <StaggerItem key={benefit.title}>
                <div className="card-modern h-full p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-yellow/10">
                    <Icon className="h-5 w-5 text-brand-yellow" />
                  </div>
                  <h3 className="mt-4 font-serif text-lg font-bold text-brand-heading">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-body">{benefit.text}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

function BusinessNumberProcess() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <span className="top-head">How It Works</span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-brand-heading-alt">
            From enquiry to your first order
          </h2>
        </AnimateIn>

        <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {serviceSteps.map((step) => (
            <StaggerItem key={step.step}>
              <div className="card-modern h-full border-t-4 border-t-brand-yellow p-6">
                <span className="font-serif text-3xl font-bold text-brand-yellow">{step.step}</span>
                <h3 className="mt-3 font-serif text-lg font-bold text-brand-heading">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-body">{step.text}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimateIn className="mt-10" variant="fadeUp" delay={0.1}>
          <div className="rounded-2xl border border-brand-yellow/30 bg-brand-light p-6 text-center md:p-8">
            <h3 className="font-serif text-xl font-bold text-brand-heading">
              Need the full document checklist?
            </h3>
            <p className="mx-auto mt-2 max-w-xl text-sm text-brand-body">
              Visit our Customer Creation page for the complete list of documents required to
              register as a new G3-Biz customer.
            </p>
            <Link
              href="/services/customer-creation"
              className="btn-primary mt-5 inline-flex items-center gap-2 !px-6 !py-2.5 !text-sm"
            >
              View Customer Creation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

function BusinessNumberCta() {
  return (
    <section className="bg-brand-yellow py-14">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 text-center sm:flex-row sm:text-left">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-white/80">
            Get started
          </p>
          <h2 className="mt-1 font-serif text-2xl font-bold text-white md:text-3xl">
            Ready to obtain your business number?
          </h2>
          <p className="mt-2 text-white/85">
            Submit an enquiry or visit our Mile 2 Limbe office to begin registration.
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <QuoteButton
            product="Business Number Registration"
            className="inline-flex items-center justify-center gap-2 rounded bg-black px-6 py-3 text-sm font-bold text-white transition hover:bg-black/85"
          >
            Start Registration
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

export function BusinessNumberContent() {
  return (
    <>
      <BusinessNumberIntro />
      <BusinessNumberBenefits />
      <BusinessNumberProcess />
      <BusinessNumberCta />
    </>
  );
}

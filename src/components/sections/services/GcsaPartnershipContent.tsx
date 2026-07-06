import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Gift,
  ShieldCheck,
  Truck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { QuoteButton } from "@/components/shared/QuoteButton";
import {
  AnimateIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/motion";
import { siteConfig } from "@/config/site";

const partnershipBenefits = [
  {
    title: "Quarterly Bonuses",
    text: "The more you buy, the more you earn. Consistent purchasing unlocks quarterly bonus rewards.",
  },
  {
    title: "Safe & Professional Delivery",
    text: "Our distribution professionals deliver products safely while preserving Guinness quality standards.",
  },
  {
    title: "Trusted Partnership",
    text: "We build long-term relationships through transparent service, dependable supply, and customer support.",
  },
] as const;

const benefitIcons: LucideIcon[] = [Gift, Truck, ShieldCheck];

function GcsaIntro() {
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
            <span className="top-head">GCSA Partnership</span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-brand-heading-alt md:text-4xl">
              Become a reputable customer of GCSA
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-brand-body">
              <strong>{siteConfig.shortName}</strong> is the main distributor of GCSA products in
              Limbe, Cameroon. We combine dependable distribution with free consultation support so
              you get the most from your partnership.
            </p>
            <p className="mt-4 text-brand-body">
              With G3-Biz, you are not just buying products. You are joining a trusted network of
              businesses that thrive with professional logistics, responsive support, and growth
              opportunities.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-light px-4 py-2 text-sm font-bold text-brand-heading">
              <Award className="h-4 w-4 text-brand-yellow" />
              Main GCSA distributor in Limbe
            </div>
          </AnimateIn>

          <AnimateIn variant="slideRight" delay={0.1}>
            <div className="relative min-h-[320px] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/uploads/2024/08/WhatsApp-Image-2024-08-20-at-19.18.08-1.jpeg"
                alt="G3-Biz GCSA distribution partnership"
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

function GcsaBenefits() {
  return (
    <section className="bg-brand-light py-20">
      <div className="mx-auto max-w-7xl px-4">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <span className="top-head">Partnership Benefits</span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-brand-heading-alt">
            Why businesses choose G3-Biz
          </h2>
          <p className="mt-3 text-brand-body">
            More than convenience, our GCSA partnership gives your business practical advantages
            that improve profitability and reliability.
          </p>
        </AnimateIn>

        <StaggerContainer className="mt-12 grid gap-6 md:grid-cols-3">
          {partnershipBenefits.map((benefit, index) => {
            const Icon = benefitIcons[index] ?? Award;
            return (
              <StaggerItem key={benefit.title}>
                <div className="card-modern h-full p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-yellow/10">
                    <Icon className="h-6 w-6 text-brand-yellow" />
                  </div>
                  <h3 className="mt-4 font-serif text-xl font-bold text-brand-heading">
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

function GcsaTrust() {
  return (
    <section className="on-dark section-accent bg-brand-charcoal py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <AnimateIn variant="slideLeft">
            <span className="top-head">Why Trust Us</span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-white">
              A distributor committed to your growth
            </h2>
            <p className="mt-4 text-white/75">
              Choosing G3-Biz means choosing a partner that values product quality, customer
              satisfaction, and long-term business success.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Professional support from registration to delivery",
                "Reliable access to Guinness and Diageo product lines",
                "Operational discipline and accountability in every order",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/85">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-yellow" />
                  {item}
                </li>
              ))}
            </ul>
          </AnimateIn>

          <AnimateIn variant="slideRight" delay={0.1}>
            <div className="card-glass p-8">
              <h3 className="font-serif text-xl font-bold text-white">
                We give you reasons to trust us every step of the way.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/75">
                Choose G3-Biz and take your business to new heights with dependable distribution
                and partnership support.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3 text-center">
                <div className="rounded-lg bg-white/5 p-4">
                  <p className="text-2xl font-extrabold text-brand-yellow">19+</p>
                  <p className="text-xs font-bold uppercase tracking-wide text-white/70">
                    Years of operation
                  </p>
                </div>
                <div className="rounded-lg bg-white/5 p-4">
                  <p className="text-2xl font-extrabold text-brand-yellow">GCSA</p>
                  <p className="text-xs font-bold uppercase tracking-wide text-white/70">
                    Main distributor
                  </p>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

function GcsaCta() {
  return (
    <section className="bg-brand-yellow py-14">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 text-center sm:flex-row sm:text-left">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-white/80">
            Grow with G3-Biz
          </p>
          <h2 className="mt-1 font-serif text-2xl font-bold text-white md:text-3xl">
            Ready to become a reputable GCSA customer?
          </h2>
          <p className="mt-2 text-white/85">
            Request a quote or complete your customer registration with our Mile 2 team.
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <QuoteButton
            product="Reputable Customer of GCSA"
            className="inline-flex items-center justify-center gap-2 rounded bg-black px-6 py-3 text-sm font-bold text-white transition hover:bg-black/85"
            showIcon
          >
            Request a Quote
          </QuoteButton>
          <Link
            href="/services/customer-creation"
            className="inline-flex items-center justify-center gap-2 rounded border-2 border-white/40 px-6 py-3 text-sm font-bold text-white transition hover:border-white hover:bg-white/10"
          >
            Register as Customer
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function GcsaPartnershipContent() {
  return (
    <>
      <GcsaIntro />
      <GcsaBenefits />
      <GcsaTrust />
      <GcsaCta />
    </>
  );
}

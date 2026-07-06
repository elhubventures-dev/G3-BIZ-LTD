import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Building2,
  CheckCircle,
  MapPin,
  Target,
  Users,
} from "lucide-react";
import { Stats } from "@/components/sections/Stats";
import { TeamSection } from "@/components/sections/TeamSection";
import { QuoteButton } from "@/components/shared/QuoteButton";
import {
  AnimateIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/motion";
import {
  objectives,
  quotes,
  siteConfig,
  strategicPillars,
  visionPoints,
} from "@/config/site";

const companyFacts = [
  {
    icon: Building2,
    label: "Established",
    value: "June 2005",
  },
  {
    icon: MapPin,
    label: "Headquarters",
    value: "Mile 2, Limbe",
  },
  {
    icon: Award,
    label: "Partnership",
    value: "GCSA Distributor",
  },
  {
    icon: Users,
    label: "Focus",
    value: "Trust & Growth",
  },
] as const;

function AboutIntro() {
  return (
    <section className="border-b border-brand-border bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimateIn variant="slideLeft">
            <span className="top-head">Who We Are</span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-brand-heading-alt md:text-4xl">
              Cameroon&apos;s trusted beverage distribution partner
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-brand-body">
              {siteConfig.shortName} is a Global Strategic Business Company headquartered in Limbe,
              serving retailers, hospitality venues, and partners across the South West Region with
              primary and secondary distribution of Guinness and Diageo brands.
            </p>
            <p className="mt-4 text-brand-body">
              Since our incorporation in 2005, we have built our reputation on dependable logistics,
              professional depot operations, and relationships grounded in trust — from the warehouse
              floor to the boardroom.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {companyFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-xl border border-brand-border bg-brand-light p-4 transition hover:border-brand-yellow/30"
                >
                  <fact.icon className="h-5 w-5 text-brand-yellow" />
                  <p className="mt-2 text-xs font-bold uppercase tracking-wider text-brand-body/70">
                    {fact.label}
                  </p>
                  <p className="mt-0.5 font-bold text-brand-heading">{fact.value}</p>
                </div>
              ))}
            </div>
          </AnimateIn>

          <AnimateIn variant="slideRight" delay={0.1} className="relative">
            <div className="grid grid-cols-12 gap-3">
              <div className="relative col-span-8 row-span-2 min-h-[320px] overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/images/uploads/2024/08/WhatsApp-Image-2024-08-20-at-19.18.08-2-e1725534524931.jpeg"
                  alt="G3-Biz Ltd operations team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div className="relative col-span-4 min-h-[150px] overflow-hidden rounded-xl shadow-md">
                <Image
                  src="/images/uploads/2024/08/WhatsApp-Image-2024-08-20-at-19.18.08.jpeg"
                  alt="G3-Biz depot"
                  fill
                  className="object-cover"
                  sizes="200px"
                />
              </div>
              <div className="relative col-span-4 min-h-[150px] overflow-hidden rounded-xl shadow-md">
                <Image
                  src="/images/uploads/2024/08/WhatsApp-Image-2024-08-20-at-19.18.08-3.jpeg"
                  alt="G3-Biz distribution"
                  fill
                  className="object-cover"
                  sizes="200px"
                />
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 rounded-2xl bg-brand-yellow px-6 py-4 shadow-lg">
              <p className="text-3xl font-extrabold text-white">19+</p>
              <p className="text-sm font-semibold text-white/90">Years of Operation</p>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

function AboutVision() {
  return (
    <section className="section-accent on-dark bg-brand-charcoal py-20">
      <div className="mx-auto max-w-7xl px-4">
        <AnimateIn className="mx-auto max-w-3xl text-center" variant="fadeUp">
          <span className="top-head">Our Vision</span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
            The most reputable enterprise in Cameroon
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Establish {siteConfig.shortName} as the most reputable enterprise in Cameroon in terms
            of <strong className="text-white">TRUST, EXPANSION, VALUE CREATION/SHARING</strong>
          </p>
        </AnimateIn>

        <StaggerContainer className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {visionPoints.map((point, index) => (
            <StaggerItem key={point}>
              <div className="card-glass h-full p-6">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-yellow text-sm font-bold text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-4 text-sm leading-relaxed text-white/90">{point}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function AboutCulture() {
  return (
    <section className="bg-brand-light py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-8 lg:grid-cols-3">
          <AnimateIn variant="fadeUp" className="lg:col-span-1">
            <div className="card-modern h-full p-8">
              <span className="top-head">Culture</span>
              <h3 className="mt-3 font-serif text-2xl font-bold text-brand-heading">
                Success from Trustful Relationships
              </h3>
              <p className="mt-4 text-brand-body">
                Offering managerial trainings and consultancy, and internship opportunities to
                learners who want to grow with a professional distribution organisation.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-brand-light p-4 text-center">
                  <Users className="mx-auto h-6 w-6 text-brand-yellow" />
                  <p className="mt-2 text-xs font-bold uppercase tracking-wide text-brand-heading">
                    Friendly Team
                  </p>
                </div>
                <div className="rounded-xl bg-brand-light p-4 text-center">
                  <Target className="mx-auto h-6 w-6 text-brand-yellow" />
                  <p className="mt-2 text-xs font-bold uppercase tracking-wide text-brand-heading">
                    Goal Achievement
                  </p>
                </div>
              </div>
            </div>
          </AnimateIn>

          <AnimateIn variant="fadeUp" delay={0.1} className="lg:col-span-1">
            <div className="card-modern h-full p-8">
              <h3 className="font-serif text-xl font-bold text-brand-heading">Strategic Pillars</h3>
              <p className="mt-2 text-sm text-brand-body">
                Four priorities that guide how we scale distribution and serve our partners.
              </p>
              <ul className="mt-6 space-y-3">
                {strategicPillars.map((pillar) => (
                  <li key={pillar} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-yellow" />
                    <span className="font-medium text-brand-heading">{pillar}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateIn>

          <AnimateIn variant="fadeUp" delay={0.2} className="lg:col-span-1">
            <div className="card-dark h-full p-8">
              <h3 className="font-serif text-xl font-bold text-white">Our Objectives</h3>
              <p className="mt-2 text-sm text-white/70">
                What we deliver for customers, learners, and the communities we serve.
              </p>
              <ul className="mt-6 space-y-4">
                {objectives.map((obj, i) => (
                  <li key={obj} className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-yellow text-sm font-bold text-white">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="pt-1 text-white/90">{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

function AboutLeadership() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <AnimateIn className="text-center">
          <span className="top-head">Leadership</span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-brand-heading-alt">
            Principles from our Managing Director
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-brand-body">
            The values that shape how {siteConfig.shortName} operates every day across distribution,
            compliance, and customer partnerships.
          </p>
        </AnimateIn>

        <StaggerContainer className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {quotes.map((quote) => (
            <StaggerItem key={quote.text}>
              <blockquote className="card-modern h-full p-6">
                <p className="font-serif text-lg font-medium italic text-brand-heading">
                  &ldquo;{quote.text}&rdquo;
                </p>
                <cite className="mt-4 block text-sm font-bold text-brand-yellow not-italic">
                  — {quote.author}
                </cite>
              </blockquote>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function AboutCta() {
  return (
    <section className="border-t border-brand-border bg-white py-14">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 text-center sm:flex-row sm:text-left">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-brand-body/70">
            Work with G3-Biz
          </p>
          <h2 className="mt-1 font-serif text-2xl font-bold text-brand-heading md:text-3xl">
            Ready to partner with a distributor you can trust?
          </h2>
          <p className="mt-2 text-brand-body">
            Request pricing, register as a customer, or speak with our depot team in Limbe.
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
            className="inline-flex items-center justify-center gap-2 rounded border-2 border-brand-border bg-white px-6 py-3 text-sm font-bold text-brand-primary transition hover:bg-black hover:text-white"
          >
            Contact Us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function AboutPageContent() {
  return (
    <>
      <AboutIntro />
      <Stats />
      <AboutVision />
      <AboutCulture />
      <AboutLeadership />
      <TeamSection />
      <AboutCta />
    </>
  );
}

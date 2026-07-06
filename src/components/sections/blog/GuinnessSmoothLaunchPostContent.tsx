import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Handshake,
  MapPin,
  Package,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  AnimateIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/motion";
import { QuoteButton } from "@/components/shared/QuoteButton";
import { featuredProducts, siteConfig } from "@/config/site";

const guinnessSmooth = featuredProducts.find((p) => p.slug === "ges")!;

const launchHighlights = [
  {
    icon: Package,
    title: "GES 65cl x12",
    text: "A larger format offering the same distinctive smoothness consumers have loved for years.",
  },
  {
    icon: Award,
    title: "20th Anniversary",
    text: "Celebrating two decades of Guinness Smooth — quality, richness, and consumer satisfaction.",
  },
  {
    icon: Sparkles,
    title: "Bigger & Bolder",
    text: "More volume, same smooth taste — a reward for loyalty to the Guinness Smooth brand.",
  },
  {
    icon: Handshake,
    title: "Trusted Partnership",
    text: "G3-Biz and Guinness Cameroon working together to bring trusted products to Limbe.",
  },
] as const;

const productBenefits = [
  "Same distinctive smoothness in a larger 65cl format",
  "Greater value for loyal Guinness Smooth customers",
  "Available through G3-Biz distribution in Limbe",
  "Part of a milestone celebration for the brand",
] as const;

function PostIntro() {
  return (
    <section className="border-b border-brand-border bg-white py-16">
      <div className="mx-auto max-w-4xl px-4">
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-1 text-sm font-semibold text-brand-heading hover:text-brand-yellow"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to blog
        </Link>

        <AnimateIn>
          <div className="flex flex-wrap items-center gap-3 text-sm text-brand-body">
            <span className="top-head !text-xs">Product Launch</span>
            <span>·</span>
            <span>Guinness Smooth GES</span>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-brand-body">
            {siteConfig.shortName} partners with Guinness Cameroon to launch the new Guinness Smooth
            GES 65cl x12 — right here in the vibrant city of Limbe.
          </p>
          <p className="mt-4 text-brand-body">
            As one of Guinness Cameroon&apos;s trusted distribution partners, we are proud to bring
            this exciting new format to our customers and communities.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}

function ProductSpotlight() {
  return (
    <section className="bg-brand-light py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <AnimateIn variant="slideLeft">
            <div className="relative mx-auto max-w-sm overflow-hidden rounded-2xl bg-white p-8 shadow-xl">
              <div className="relative aspect-square">
                <Image
                  src={guinnessSmooth.image}
                  alt="Guinness Smooth GES 65cl"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 80vw, 400px"
                  priority
                />
              </div>
            </div>
          </AnimateIn>

          <AnimateIn variant="slideRight" delay={0.1}>
            <span className="top-head">New Format</span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-brand-heading-alt">
              Guinness Smooth GES 65cl x12
            </h2>
            <p className="mt-4 text-brand-body">
              This launch marks the 20th anniversary of the Guinness Smooth™ brand — a symbol of
              quality, richness, and consumer satisfaction across Cameroon.
            </p>
            <p className="mt-4 text-brand-body">
              Guinness Cameroon introduces the GES 65cl: a larger size offering the same distinctive
              smoothness that consumers have loved over the years. It&apos;s bigger, bolder, and just
              as smooth.
            </p>

            <ul className="mt-6 space-y-3">
              {productBenefits.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-brand-heading">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-yellow" />
                  {item}
                </li>
              ))}
            </ul>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

function LaunchHighlights() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <span className="top-head">Launch Highlights</span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-brand-heading-alt">
            Why this launch matters
          </h2>
        </AnimateIn>

        <StaggerContainer className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {launchHighlights.map((item) => {
            const Icon = item.icon as LucideIcon;
            return (
              <StaggerItem key={item.title}>
                <div className="card-modern h-full p-6">
                  <Icon className="h-6 w-6 text-brand-yellow" />
                  <h3 className="mt-3 font-serif text-lg font-bold text-brand-heading">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-body">{item.text}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

function PartnershipSection() {
  return (
    <section className="on-dark bg-brand-charcoal py-20">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <AnimateIn>
          <MapPin className="mx-auto h-8 w-8 text-brand-yellow" />
          <span className="top-head mt-4">Limbe Launch</span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-white">
            Delivering value to our customers
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/75">
            At {siteConfig.shortName}, we remain committed to delivering value to our customers. This
            new format is a reward for their loyalty to the Guinness Smooth brand.
          </p>
          <p className="mt-4 text-white/75">
            We&apos;re excited to continue building this journey with Guinness Cameroon — bringing
            trusted products and rewarding experiences to our community.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}

function PostCta() {
  return (
    <section className="bg-brand-yellow py-14">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 text-center sm:flex-row sm:text-left">
        <div>
          <h2 className="font-serif text-2xl font-bold text-white">Explore our product range</h2>
          <p className="mt-2 text-white/85">
            View Guinness Smooth and our full portfolio of Diageo beverages.
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <Link
            href="/our-products/ges"
            className="inline-flex items-center justify-center gap-2 rounded bg-black px-6 py-3 text-sm font-bold text-white transition hover:bg-black/85"
          >
            View Product
            <ArrowRight className="h-4 w-4" />
          </Link>
          <QuoteButton
            product="Guinness Smooth GES 65cl"
            className="inline-flex items-center justify-center gap-2 rounded border-2 border-white/40 px-6 py-3 text-sm font-bold text-white transition hover:border-white hover:bg-white/10"
          >
            Request a Quote
          </QuoteButton>
        </div>
      </div>
    </section>
  );
}

export function GuinnessSmoothLaunchPostContent() {
  return (
    <>
      <PostIntro />
      <ProductSpotlight />
      <LaunchHighlights />
      <PartnershipSection />
      <PostCta />
    </>
  );
}

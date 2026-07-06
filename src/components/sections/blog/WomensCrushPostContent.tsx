import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Crown,
  Heart,
  Shield,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  AnimateIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/motion";
import { siteConfig, teamMembers } from "@/config/site";

const therese = teamMembers.find((m) => m.name === "Therese Tayimfor")!;

const leadershipTraits = [
  {
    icon: Shield,
    title: "Resilience & Persistence",
    text: "Through tough times and periods of growth, she has faced every challenge with remarkable strength.",
  },
  {
    icon: Award,
    title: "Commitment & Discipline",
    text: "Nothing but dedication in every role — from the sales floor to leading the entire depot.",
  },
  {
    icon: Sparkles,
    title: "A Versatile Leader",
    text: "Sweet, sour, or bittersweet — each facet of her personality makes her an all-round leader.",
  },
  {
    icon: Crown,
    title: "Strength & Grace",
    text: "Known affectionately as \"Mami Guinness\" for embodying power and elegance in everything she does.",
  },
] as const;

const careerMilestones = [
  "10+ years of experience in the business",
  "Grew from sales lady to Depot Manager",
  "Leads depot operations with passion and precision",
  "A guiding light for the entire G3-Biz team",
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
            <span className="top-head !text-xs">Women Crush Wednesday</span>
            <span>·</span>
            <span>Team Spotlight</span>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-brand-body">
            Today at {siteConfig.shortName}, we shine a spotlight on an incredible woman who inspires
            us all — our very own Depot Manager, Mme Tayimfor Therese.
          </p>
          <p className="mt-4 text-brand-body">
            With over a decade of experience, she has grown from a sales lady into the powerhouse
            leader she is today. Let&apos;s give her the flowers she truly deserves.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}

function SpotlightProfile() {
  return (
    <section className="bg-brand-light py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <AnimateIn variant="slideLeft">
            <div className="relative mx-auto max-w-md overflow-hidden rounded-2xl shadow-2xl">
              <div className="relative aspect-[3/4]">
                <Image
                  src={therese.image}
                  alt={therese.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 400px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="inline-block rounded bg-brand-yellow px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                    Mami Guinness
                  </span>
                  <h2 className="mt-3 font-serif text-3xl font-bold text-white">{therese.name}</h2>
                  <p className="mt-1 text-sm font-medium uppercase tracking-wide text-white/80">
                    {therese.role}
                  </p>
                </div>
              </div>
            </div>
          </AnimateIn>

          <AnimateIn variant="slideRight" delay={0.1}>
            <span className="top-head">Our Lioness</span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-brand-heading-alt">
              A leader who inspires every day
            </h2>
            <p className="mt-4 text-brand-body">
              Mme Tayimfor Therese is more than a depot manager — she is a symbol of what dedication,
              growth, and authentic leadership look like at G3-Biz.
            </p>
            <p className="mt-4 text-brand-body">
              We affectionately call her &ldquo;Mami Guinness&rdquo; because she embodies strength and
              grace in everything she does — a true lioness in our midst.
            </p>

            <ul className="mt-6 space-y-3">
              {careerMilestones.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-brand-heading">
                  <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-brand-yellow" />
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

function LeadershipTraits() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <span className="top-head">What Makes Her Special</span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-brand-heading-alt">
            Qualities of an all-round leader
          </h2>
        </AnimateIn>

        <StaggerContainer className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {leadershipTraits.map((trait) => {
            const Icon = trait.icon as LucideIcon;
            return (
              <StaggerItem key={trait.title}>
                <div className="card-modern h-full p-6">
                  <Icon className="h-6 w-6 text-brand-yellow" />
                  <h3 className="mt-3 font-serif text-lg font-bold text-brand-heading">
                    {trait.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-body">{trait.text}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

function TributeSection() {
  return (
    <section className="on-dark bg-brand-charcoal py-20">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <AnimateIn>
          <Heart className="mx-auto h-8 w-8 text-brand-yellow" />
          <blockquote className="card-glass mt-8 p-8">
            <p className="font-serif text-xl leading-relaxed text-white/90">
              Thank you, Mme Tayimfor Therese, for your unwavering dedication and for leading us with
              such passion. We are grateful to have you as our guiding light.
            </p>
          </blockquote>
          <p className="mt-6 text-white/60">
            — The entire {siteConfig.shortName} family
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
          <h2 className="font-serif text-2xl font-bold text-white">Meet the rest of our team</h2>
          <p className="mt-2 text-white/85">
            Discover the talented people who make G3-Biz thrive every day.
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <Link
            href="/teams"
            className="inline-flex items-center justify-center gap-2 rounded bg-black px-6 py-3 text-sm font-bold text-white transition hover:bg-black/85"
          >
            Our Team
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center gap-2 rounded border-2 border-white/40 px-6 py-3 text-sm font-bold text-white transition hover:border-white hover:bg-white/10"
          >
            More Articles
          </Link>
        </div>
      </div>
    </section>
  );
}

export function WomensCrushPostContent() {
  return (
    <>
      <PostIntro />
      <SpotlightProfile />
      <LeadershipTraits />
      <TributeSection />
      <PostCta />
    </>
  );
}

export const WCW_POST_SLUG =
  "%f0%9f%8c%9f-women-crush-wednesday-celebrating-mme-tayimfor-therese-%f0%9f%8c%9f";

export function isWcwPostSlug(slug: string) {
  return (
    slug === WCW_POST_SLUG ||
    decodeURIComponent(slug) === decodeURIComponent(WCW_POST_SLUG) ||
    slug.includes("women-crush-wednesday-celebrating-mme-tayimfor-therese")
  );
}

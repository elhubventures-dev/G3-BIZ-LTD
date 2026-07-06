import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Droplets,
  HandHeart,
  HeartHandshake,
  ShieldCheck,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/shared/motion";
import { siteConfig } from "@/config/site";

const impactPoints = [
  {
    icon: Droplets,
    title: "Access to Water",
    text: "A free-for-all water sharing activity supporting immediate community needs.",
  },
  {
    icon: Users,
    title: "Community First",
    text: "Serving people directly and reinforcing meaningful local relationships.",
  },
  {
    icon: HeartHandshake,
    title: "Shared Responsibility",
    text: "Demonstrating that corporate success should include practical social support.",
  },
  {
    icon: ShieldCheck,
    title: "Sustained Commitment",
    text: "Part of a broader culture of responsibility and giving back through action.",
  },
] as const;

const whyItMatters = [
  "Supports households and vulnerable community members",
  "Strengthens trust through visible social contribution",
  "Encourages employee participation in local impact efforts",
  "Aligns business growth with social responsibility values",
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
            <span className="top-head !text-xs">Community Impact</span>
            <span>-</span>
            <span>Water Sharing Initiative</span>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-brand-body">
            At {siteConfig.shortName}, community sharing means taking direct action where it matters
            most. This free-for-all water distribution initiative reflects our commitment to serve
            and support the people around us.
          </p>
          <p className="mt-4 text-brand-body">
            It is a simple but meaningful contribution, rooted in compassion, responsibility, and the
            belief that sustainable businesses should help communities thrive.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}

function VideoSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <AnimateIn variant="slideLeft">
            <span className="top-head">Community Sharing</span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-brand-heading-alt">
              Free for all water to the community
            </h2>
            <p className="mt-4 text-brand-body">
              This activity demonstrates how small, practical actions can have meaningful social
              impact. By making water freely available, we support community well-being and reinforce
              a culture of care.
            </p>
          </AnimateIn>

          <AnimateIn variant="slideRight" delay={0.1}>
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <video controls className="h-full w-full bg-black">
                <source
                  src="/images/uploads/2025/03/WhatsApp-Video-2025-03-22-at-16.25.49.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

function ImpactSection() {
  return (
    <section className="bg-brand-light py-20">
      <div className="mx-auto max-w-7xl px-4">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <span className="top-head">Why It Matters</span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-brand-heading-alt">
            Positive impact through practical support
          </h2>
        </AnimateIn>

        <StaggerContainer className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {impactPoints.map((point) => {
            const Icon = point.icon as LucideIcon;
            return (
              <StaggerItem key={point.title}>
                <div className="card-modern h-full p-6">
                  <Icon className="h-6 w-6 text-brand-yellow" />
                  <h3 className="mt-3 font-serif text-lg font-bold text-brand-heading">{point.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-body">{point.text}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

function ValuesSection() {
  return (
    <section className="on-dark bg-brand-charcoal py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-12 lg:grid-cols-2">
          <AnimateIn variant="slideLeft">
            <span className="top-head">Core Values in Action</span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-white">
              Compassion, dignity, and shared growth
            </h2>
            <p className="mt-4 text-white/75">
              Beyond distribution and operations, {siteConfig.shortName} is committed to community
              well-being. We see social impact as an essential part of long-term success.
            </p>
          </AnimateIn>

          <AnimateIn variant="slideRight" delay={0.1}>
            <div className="card-glass p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-yellow">
                Community Outcomes
              </p>
              <ul className="mt-4 space-y-2">
                {whyItMatters.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white/85">
                    <HandHeart className="mt-0.5 h-4 w-4 shrink-0 text-brand-yellow" />
                    {item}
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

function PostCta() {
  return (
    <section className="bg-brand-yellow py-14">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 text-center sm:flex-row sm:text-left">
        <div>
          <h2 className="font-serif text-2xl font-bold text-white">Follow our community stories</h2>
          <p className="mt-2 text-white/85">
            Discover more updates on how G3-Biz supports people and communities.
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center gap-2 rounded bg-black px-6 py-3 text-sm font-bold text-white transition hover:bg-black/85"
          >
            More Articles
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center gap-2 rounded border-2 border-white/40 px-6 py-3 text-sm font-bold text-white transition hover:border-white hover:bg-white/10"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export function CommunityWaterPostContent() {
  return (
    <>
      <PostIntro />
      <VideoSection />
      <ImpactSection />
      <ValuesSection />
      <PostCta />
    </>
  );
}

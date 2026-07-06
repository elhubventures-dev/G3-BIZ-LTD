import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Handshake,
  Heart,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/shared/motion";
import { siteConfig } from "@/config/site";

const celebrationHighlights = [
  {
    icon: Users,
    title: "Team Appreciation",
    text: "Recognizing the dedication and daily effort of the people who drive G3-Biz forward.",
  },
  {
    icon: Handshake,
    title: "Unity in Service",
    text: "Celebrating the shared mission that connects field teams, depot teams, and leadership.",
  },
  {
    icon: ShieldCheck,
    title: "Pride in Work",
    text: "Honoring discipline, responsibility, and professionalism across all operations.",
  },
  {
    icon: Sparkles,
    title: "Culture & Motivation",
    text: "Strengthening morale and reinforcing a positive, purpose-driven workplace culture.",
  },
] as const;

const galleryImages = [
  "/images/uploads/2025/07/WhatsApp-Image-2025-07-17-at-14.38.12.jpeg",
  "/images/uploads/2025/07/WhatsApp-Image-2025-07-17-at-14.38.13-1.jpeg",
  "/images/uploads/2025/07/WhatsApp-Image-2025-07-17-at-14.38.13.jpeg",
  "/images/uploads/2025/07/WhatsApp-Image-2025-07-17-at-14.38.14.jpeg",
  "/images/uploads/2025/07/WhatsApp-Image-2025-07-17-at-14.38.15.jpeg",
  "/images/uploads/2025/07/WhatsApp-Image-2025-07-17-at-14.38.16.jpeg",
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
            <span className="top-head !text-xs">Labour Day 2025</span>
            <span>-</span>
            <span>Team Celebration</span>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-brand-body">
            On 1st May 2025, {siteConfig.shortName} celebrated Labour Day by honoring the dedication,
            resilience, and commitment of our teams.
          </p>
          <p className="mt-4 text-brand-body">
            This celebration reflects our culture of respect, gratitude, and shared success across
            every role in the company.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}

function HighlightsSection() {
  return (
    <section className="bg-brand-light py-20">
      <div className="mx-auto max-w-7xl px-4">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <span className="top-head">Why It Matters</span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-brand-heading-alt">
            Celebrating the people behind our progress
          </h2>
        </AnimateIn>

        <StaggerContainer className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {celebrationHighlights.map((item) => {
            const Icon = item.icon as LucideIcon;
            return (
              <StaggerItem key={item.title}>
                <div className="card-modern h-full p-6">
                  <Icon className="h-6 w-6 text-brand-yellow" />
                  <h3 className="mt-3 font-serif text-lg font-bold text-brand-heading">{item.title}</h3>
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

function GallerySection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <span className="top-head">Event Gallery</span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-brand-heading-alt">
            1st May 2025 Labour Day moments
          </h2>
        </AnimateIn>

        <StaggerContainer className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((src, index) => (
            <StaggerItem key={src}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-md">
                <Image
                  src={src}
                  alt={`Labour Day celebration photo ${index + 1}`}
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 420px"
                />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function AppreciationSection() {
  return (
    <section className="on-dark bg-brand-charcoal py-20">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <AnimateIn>
          <Heart className="mx-auto h-8 w-8 text-brand-yellow" />
          <h2 className="mt-5 font-serif text-3xl font-bold text-white">Thank you, team G3-Biz</h2>
          <p className="mt-4 text-lg leading-relaxed text-white/75">
            To every member of our team: your hard work, commitment, and professionalism are the
            foundation of our success. This celebration is for you.
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
          <h2 className="font-serif text-2xl font-bold text-white">Explore more company updates</h2>
          <p className="mt-2 text-white/85">
            Follow the latest stories from our team, community initiatives, and events.
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
            href="/teams"
            className="inline-flex items-center justify-center gap-2 rounded border-2 border-white/40 px-6 py-3 text-sm font-bold text-white transition hover:border-white hover:bg-white/10"
          >
            Meet Our Team
          </Link>
        </div>
      </div>
    </section>
  );
}

export function LabourDayPostContent() {
  return (
    <>
      <PostIntro />
      <HighlightsSection />
      <GallerySection />
      <AppreciationSection />
      <PostCta />
    </>
  );
}

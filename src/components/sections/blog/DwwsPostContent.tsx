import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  GraduationCap,
  Target,
  Trophy,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/shared/motion";
import { siteConfig } from "@/config/site";

const dwwsHighlights = [
  {
    icon: GraduationCap,
    title: "Structured Sales Training",
    text: "A focused workshop experience designed to sharpen practical field selling capabilities.",
  },
  {
    icon: Target,
    title: "Execution Excellence",
    text: "Clear methods for approaching outlets, engaging customers, and improving daily execution.",
  },
  {
    icon: Trophy,
    title: "Performance Mindset",
    text: "Team members reinforce discipline, consistency, and accountability in market activities.",
  },
  {
    icon: Users,
    title: "Team Alignment",
    text: "One shared approach across sales teams to improve collaboration and customer outcomes.",
  },
] as const;

const workshopOutcomes = [
  "Improved confidence in customer engagement",
  "Stronger product and route execution habits",
  "More consistent ways of working in the field",
  "Better team communication and coaching",
] as const;

const galleryImages = [
  "/images/uploads/2025/03/WhatsApp-Image-2025-03-10-at-08.06.44.jpeg",
  "/images/uploads/2025/03/WhatsApp-Image-2025-03-10-at-08.06.37-1.jpeg",
  "/images/uploads/2025/03/WhatsApp-Image-2025-03-10-at-08.06.38-1-1.jpeg",
  "/images/uploads/2025/03/WhatsApp-Image-2025-03-10-at-08.06.38-2.jpeg",
  "/images/uploads/2025/03/WhatsApp-Image-2025-03-10-at-08.06.39-2.jpeg",
  "/images/uploads/2025/03/WhatsApp-Image-2025-03-10-at-08.06.40-1-1.jpeg",
  "/images/uploads/2025/03/WhatsApp-Image-2025-03-10-at-08.06.41-2.jpeg",
  "/images/uploads/2025/03/WhatsApp-Image-2025-03-10-at-08.06.44-4.jpeg",
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
            <span className="top-head !text-xs">Sales Training</span>
            <span>-</span>
            <span>DWWS Workshop</span>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-brand-body">
            {siteConfig.shortName} hosted a Diageo World Class Ways of Selling (DWWS) training
            workshop to strengthen field sales execution and team capability.
          </p>
          <p className="mt-4 text-brand-body">
            The session focused on practical selling standards, stronger customer engagement, and
            consistent performance habits across our sales teams.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}

function WorkshopHighlights() {
  return (
    <section className="bg-brand-light py-20">
      <div className="mx-auto max-w-7xl px-4">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <span className="top-head">Workshop Focus</span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-brand-heading-alt">
            Diageo World Class Ways of Selling
          </h2>
        </AnimateIn>

        <StaggerContainer className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {dwwsHighlights.map((item) => {
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

function MediaSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <AnimateIn variant="slideLeft">
            <span className="top-head">Workshop Media</span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-brand-heading-alt">
              Training in action
            </h2>
            <p className="mt-4 text-brand-body">
              The workshop brought together sales teams for hands-on learning and practical
              demonstrations, supported by real market scenarios and team collaboration.
            </p>
            <p className="mt-4 text-brand-body">
              Below is a short clip from the session. The full gallery follows in the next section.
            </p>
          </AnimateIn>

          <AnimateIn variant="slideRight" delay={0.1}>
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <video
                controls
                className="h-full w-full bg-black"
                poster="/images/uploads/2025/03/WhatsApp-Image-2025-03-10-at-08.06.44.jpeg"
              >
                <source
                  src="/images/uploads/2025/03/WhatsApp-Video-2025-03-10-at-08.06.59.mp4"
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

function OutcomesSection() {
  return (
    <section className="on-dark bg-brand-charcoal py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <AnimateIn variant="slideLeft">
            <div className="relative min-h-[300px] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/uploads/2025/03/WhatsApp-Image-2025-03-10-at-08.06.40-2.jpeg"
                alt="DWWS training participants"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </AnimateIn>

          <AnimateIn variant="slideRight" delay={0.1}>
            <span className="top-head">Expected Outcomes</span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-white">
              Better selling standards, stronger teams
            </h2>
            <ul className="mt-6 space-y-3">
              {workshopOutcomes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/85">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-yellow" />
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

function PhotoGallerySection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <span className="top-head">Photo Highlights</span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-brand-heading-alt">
            DWWS workshop moments
          </h2>
        </AnimateIn>

        <StaggerContainer className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((src, idx) => (
            <StaggerItem key={src}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-md">
                <Image
                  src={src}
                  alt={`DWWS workshop photo ${idx + 1}`}
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1280px) 25vw, 320px"
                />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function PostCta() {
  return (
    <section className="bg-brand-yellow py-14">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 text-center sm:flex-row sm:text-left">
        <div>
          <h2 className="font-serif text-2xl font-bold text-white">Explore more team updates</h2>
          <p className="mt-2 text-white/85">
            Read more stories on training, culture, and performance at G3-Biz.
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
            href="/services"
            className="inline-flex items-center justify-center gap-2 rounded border-2 border-white/40 px-6 py-3 text-sm font-bold text-white transition hover:border-white hover:bg-white/10"
          >
            <BookOpen className="h-4 w-4" />
            Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}

export function DwwsPostContent() {
  return (
    <>
      <PostIntro />
      <WorkshopHighlights />
      <MediaSection />
      <OutcomesSection />
      <PhotoGallerySection />
      <PostCta />
    </>
  );
}

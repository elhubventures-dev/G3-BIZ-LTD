import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  CheckCircle2,
  Clock,
  FileText,
  MapPin,
  Megaphone,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/shared/motion";

const roleHighlights = [
  {
    icon: Briefcase,
    title: "Position",
    text: "Brand Ambassador (05)",
  },
  {
    icon: MapPin,
    title: "Territory",
    text: "Limbe–Idenau, South West Region, Cameroon",
  },
  {
    icon: Clock,
    title: "Job type",
    text: "Short term — reports to the Marketing Officer",
  },
  {
    icon: Megaphone,
    title: "Focus",
    text: "Drive consumer demand and brand engagement in bars and outlets",
  },
] as const;

const responsibilities = [
  "Educate consumers on the mechanisms, benefits and participation requirements of marketing activities.",
  "Increase sales volumes and accelerate stock turnover across participating outlets.",
  "Improve brand visibility and consumer engagement at the point of consumption.",
  "Collaborate with bar owners and staff to ensure smooth promotional activities and efficient consumer service.",
  "Strengthen relationships between G3-Biz Ltd, outlet operators and consumers.",
  "Collect market information, consumer feedback and activity performance data for management decisions.",
] as const;

const requirements = [
  "At least a secondary school certificate; training in marketing, sales or communication is an advantage.",
  "Good communication, interpersonal and customer service skills.",
  "Confidence in engaging consumers and explaining promotional activities.",
  "Basic selling, persuasion and problem-solving abilities.",
  "Ability to work effectively with bar owners, managers and serving staff.",
  "Good observation, record-keeping and reporting skills.",
  "Honesty, discipline, punctuality and a strong sense of responsibility.",
  "Ability to work flexible hours, including evenings and weekends during the peak season.",
  "Familiarity with the Limbe–Idenau market and local consumer behaviour is an advantage.",
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
            <span className="top-head !text-xs">Job Vacancy</span>
            <span>-</span>
            <span>Brand Ambassador</span>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-brand-body">
            G3-Biz Ltd is hiring Brand Ambassadors to stimulate consumer demand and increase sales
            and consumption of Guinness Cameroun S.A. products through approved marketing activities.
          </p>
          <p className="mt-4 text-brand-body">
            The role covers bars, snacks and other approved consumption outlets across the
            Limbe–Idenau territory.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}

function RoleSnapshot() {
  return (
    <section className="bg-brand-light py-20">
      <div className="mx-auto max-w-7xl px-4">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <span className="top-head">Role Snapshot</span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-brand-heading-alt">
            Activate outlets and engage consumers
          </h2>
        </AnimateIn>

        <StaggerContainer className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {roleHighlights.map((item) => {
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

function ResponsibilitiesSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-10 lg:grid-cols-2">
          <AnimateIn>
            <span className="top-head">Key Responsibilities</span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-brand-heading-alt">
              What you will do
            </h2>
            <ul className="mt-6 space-y-3">
              {responsibilities.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-brand-heading">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-yellow" />
                  {item}
                </li>
              ))}
            </ul>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <span className="top-head">Qualifications</span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-brand-heading-alt">
              What we are looking for
            </h2>
            <ul className="mt-6 space-y-3">
              {requirements.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-brand-heading">
                  <FileText className="mt-0.5 h-4 w-4 shrink-0 text-brand-yellow" />
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

function HowToApplySection() {
  return (
    <section className="on-dark bg-brand-charcoal py-20">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <AnimateIn>
          <span className="top-head">How To Apply</span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-white">
            Submit your application
          </h2>
          <p className="mt-5 text-white/75">
            Interested candidates should submit their CV and application letter at the G3-Biz Ltd
            office, Mile 2, Limbe, by 6 November 2026 on or before 5:00 pm.
          </p>
          <p className="mt-4 text-sm text-white/60">
            Due to the urgency of the position, G3-Biz Ltd reserves the right to recruit a suitable
            candidate before the stated deadline.
          </p>
          <p className="mt-6 inline-flex rounded bg-brand-yellow px-4 py-2 text-sm font-bold text-white">
            Closing date: 6 November 2026, 5:00 pm
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
          <h2 className="font-serif text-2xl font-bold text-white">Explore more career updates</h2>
          <p className="mt-2 text-white/85">
            Follow company updates, opportunities, and team stories from G3-Biz.
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

export function BrandAmbassadorPostContent() {
  return (
    <>
      <PostIntro />
      <RoleSnapshot />
      <ResponsibilitiesSection />
      <HowToApplySection />
      <PostCta />
    </>
  );
}

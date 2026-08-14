import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  CheckCircle2,
  Clock,
  FileText,
  MapPin,
  Shield,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/shared/motion";

const APPLY_EMAIL = "humanresource@g3-bizltd.com";

const roleHighlights = [
  {
    icon: Briefcase,
    title: "Position",
    text: "Security Guard (01)",
  },
  {
    icon: MapPin,
    title: "Duty station",
    text: "Limbe, South West Region, Cameroon",
  },
  {
    icon: Clock,
    title: "Job type",
    text: "Full time — reports to the Chief of Security",
  },
  {
    icon: Shield,
    title: "Experience",
    text: "Minimum 1 year in security; FMCG, warehouse, or logistics is an advantage",
  },
] as const;

const responsibilities = [
  "Control and monitor entry and exit of persons, vehicles, stock, and company assets.",
  "Maintain accurate visitor and movement registers.",
  "Protect company stock, empties, vehicles, equipment, and facilities against theft, damage, and unauthorized access.",
  "Conduct routine patrols and monitor assigned areas for security risks or unusual activities.",
  "Promptly report security incidents, breaches, damages, and suspicious activities.",
  "Support safety and loss-prevention measures and prepare incident reports when required.",
  "Maintain punctuality, discipline, vigilance, teamwork, and professional conduct.",
] as const;

const requirements = [
  "Minimum GCE A/L.",
  "1 year of relevant security experience; FMCG, warehouse, logistics, or commercial environments are an advantage.",
  "Knowledge of access control, patrol duties, and incident reporting.",
  "Strong integrity, vigilance, discipline, and accountability.",
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
            <span>Security Guard</span>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-brand-body">
            G3-Biz Ltd is seeking a disciplined, vigilant, and ethically grounded Security Guard to
            safeguard our people, stock, vehicles, equipment, facilities, and operations.
          </p>
          <p className="mt-4 text-brand-body">
            The role demands high standards of integrity, accountability, and professionalism at our
            Limbe depot.
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
            Protect people, stock, and operations
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
            <span className="top-head">Minimum Requirements</span>
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
            Interested candidates should submit a cover letter, CV, copy of National ID, and
            relevant certificates.
          </p>
          <p className="mt-2 text-white/75">
            Email subject:{" "}
            <span className="font-semibold text-white">SECURITY GUARD – G3-BIZ LTD</span>
          </p>
          <p className="mt-2 text-white/75">
            Send to:{" "}
            <a
              href={`mailto:${APPLY_EMAIL}?subject=${encodeURIComponent("SECURITY GUARD – G3-BIZ LTD")}`}
              className="font-semibold text-white underline-offset-2 hover:underline"
            >
              {APPLY_EMAIL}
            </a>
          </p>
          <p className="mt-4 text-sm text-white/60">
            Only shortlisted candidates will be contacted. Due to the urgency of the position,
            G3-Biz Ltd reserves the right to recruit a suitable candidate before the stated
            deadline.
          </p>
          <p className="mt-6 inline-flex rounded bg-brand-yellow px-4 py-2 text-sm font-bold text-white">
            Closing date: extended 18 August 2026
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

export function SecurityGuardPostContent() {
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

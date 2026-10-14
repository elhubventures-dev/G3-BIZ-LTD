import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  CheckCircle2,
  Clock,
  FileText,
  MapPin,
  Package,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/shared/motion";

const roleHighlights = [
  {
    icon: Briefcase,
    title: "Position",
    text: "Stock Operator (01)",
  },
  {
    icon: MapPin,
    title: "Duty station",
    text: "Limbe, South West Region, Cameroon",
  },
  {
    icon: Clock,
    title: "Job type",
    text: "Full time — reports to the Stock Management Supervisor",
  },
  {
    icon: Package,
    title: "Experience",
    text: "Warehouse experience preferred; First School Leaving Certificate",
  },
] as const;

const responsibilities = [
  "Receive, move, stack, and arrange products in designated locations, following approved stock rotation procedures.",
  "Load and offload products carefully, verifying quantities against approved documentation.",
  "Support stock checks, audits, and investigations, and promptly report discrepancies, damage, or losses.",
  "Maintain cleanliness and safe stacking in the warehouse and loading areas.",
  "Protect stock from theft, misuse, contamination, and damage. Move or release stock only with proper authorization.",
  "Work cooperatively with the Storekeeper, Drivers, Sales Teams, and fellow Stock Operators.",
  "Follow company procedures, safety rules, and lawful instructions; maintain punctuality and use equipment responsibly.",
] as const;

const requirements = [
  "Minimum qualification: First School Leaving Certificate.",
  "Warehouse experience preferred.",
  "Stock handling, loading and offloading, and warehouse housekeeping.",
  "Honesty, discipline, accountability, and teamwork.",
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
            <span>Stock Operator</span>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-brand-body">
            G3-Biz Ltd is seeking a disciplined, reliable, and honest Stock Operator to support
            stock handling, storage, loading, and offloading.
          </p>
          <p className="mt-4 text-brand-body">
            The role requires accuracy, warehouse cleanliness, safety, and teamwork at our Limbe
            depot.
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
            Keep stock accurate, safe, and ready to move
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
            office, Mile 2, Limbe, by 23 October 2026 on or before 5:00 pm.
          </p>
          <p className="mt-2 text-white/75">
            Point of contact:{" "}
            <a href="tel:+237671612797" className="font-semibold text-white underline-offset-2 hover:underline">
              671 612 797
            </a>
            {" / "}
            <a href="tel:+237653552562" className="font-semibold text-white underline-offset-2 hover:underline">
              653 552 562
            </a>
          </p>
          <p className="mt-4 text-sm text-white/60">
            Due to the urgency of the position, G3-Biz Ltd reserves the right to recruit a suitable
            candidate before the stated deadline.
          </p>
          <p className="mt-6 inline-flex rounded bg-brand-yellow px-4 py-2 text-sm font-bold text-white">
            Closing date: 23 October 2026, 5:00 pm
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

export function StockOperatorPostContent() {
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

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  CheckCircle2,
  FileText,
  MapPin,
  ShieldCheck,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/shared/motion";
import { siteConfig } from "@/config/site";

const roleHighlights = [
  {
    icon: Briefcase,
    title: "Position",
    text: "Human Resource Manager",
  },
  {
    icon: MapPin,
    title: "Location",
    text: "Mile 2, Limbe, South West Region",
  },
  {
    icon: Users,
    title: "Company",
    text: "G3-Biz Ltd (Guinness Cameroon partner)",
  },
  {
    icon: ShieldCheck,
    title: "Experience",
    text: "Minimum 3-5 years in similar HR leadership role",
  },
] as const;

const responsibilities = [
  "Develop and implement HR strategies aligned with company goals and vision",
  "Promote a positive culture of productivity, teamwork, and improvement",
  "Strengthen employee relations and labor-law compliance",
  "Drive performance management and staff capacity-building initiatives",
  "Support strategic workforce planning and talent development",
] as const;

const requirements = [
  "Bachelor's in HR Management, Business Management, or equivalent",
  "Strong knowledge of labor laws and HR best practices",
  "Excellent interpersonal, communication, and leadership skills",
  "Proficiency in Microsoft Office and HR management software",
  "Ability to work independently and in a team-oriented environment",
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
            <span>Human Resource Manager</span>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-brand-body">
            {siteConfig.shortName} is hiring a Human Resource Manager to help attract, develop, and
            retain a highly motivated and competent workforce.
          </p>
          <p className="mt-4 text-brand-body">
            This role is strategic to our long-term vision of building one of Cameroon's most
            reputable companies in trust, expansion, value creation, and value sharing.
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
            Strategic HR leadership opportunity
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
              What you will lead
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
            Send your CV and cover letter addressed to the Managing Director, G3-Biz Ltd, Limbe.
          </p>
          <p className="mt-2 text-white/75">
            Email: <span className="font-semibold text-white">{siteConfig.email}</span>
          </p>
          <p className="mt-2 text-white/75">
            Or submit a hard copy directly to the Depot Manager.
          </p>
          <p className="mt-6 inline-flex rounded bg-brand-yellow px-4 py-2 text-sm font-bold text-white">
            Deadline: 21st October 2025
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

export function HrVacancyPostContent() {
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

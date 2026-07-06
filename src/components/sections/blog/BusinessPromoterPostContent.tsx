import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Briefcase,
  Car,
  CheckCircle2,
  ClipboardList,
  Mail,
  MapPin,
  Megaphone,
  ShieldCheck,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/shared/motion";
import { siteConfig } from "@/config/site";

const roleOverview = [
  { icon: Briefcase, title: "Position", text: "Business Promoter (04)" },
  { icon: MapPin, title: "Duty Station", text: "Limbe, South West Region" },
  { icon: Users, title: "Reporting Line", text: "Sales Supervisor" },
  { icon: ShieldCheck, title: "Experience", text: "1–2 years in FMCG/sales (advantage)" },
] as const;

const responsibilityAreas = [
  {
    icon: Megaphone,
    title: "Market Development & Sales",
    items: [
      "Execute approved journey plans with full territory coverage",
      "Support sales volume and distribution targets",
      "Activate new outlets and increase SKU penetration",
      "Provide timely market and competitor intelligence",
    ],
  },
  {
    icon: Users,
    title: "Customer & Brand Representation",
    items: [
      "Build trust-based customer relationships",
      "Ensure proper product display and visibility",
      "Represent G3-Biz professionally at all times",
      "Resolve and escalate customer concerns promptly",
    ],
  },
  {
    icon: ClipboardList,
    title: "Asset & Operational Discipline",
    items: [
      "Safeguard promotional materials and field tools",
      "Maintain accurate daily reporting and documentation",
      "Respect assigned territory boundaries strictly",
      "Participate in end-of-day operational processes",
    ],
  },
  {
    icon: Car,
    title: "Mobility & Driving",
    items: [
      "Valid driver's license required",
      "Safely operate company or assigned vehicles",
      "Comply with road safety and traffic regulations",
      "Report incidents, damages, or mechanical issues promptly",
    ],
  },
] as const;

const qualifications = [
  "Advanced Level (A-Level) or equivalent qualification",
  "Strong communication and persuasion ability",
  "Basic numerical and reporting competence",
  "Physical readiness for field operations",
  "High ethical standards and professional conduct",
] as const;

const evaluationFactors = [
  "Relevant Experience - 30%",
  "Job Knowledge & Sales Understanding - 40%",
  "Behavioral Competence & Integrity - 30%",
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
            <span>·</span>
            <span>Business Promoter (BP)</span>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-brand-body">
            {siteConfig.shortName} is seeking results-driven and ethically grounded Business
            Promoters to drive market growth while upholding our values of integrity,
            accountability, professionalism, and teamwork.
          </p>
          <p className="mt-4 text-brand-body">
            We are recruiting not just skill, but character — four positions are available in Limbe.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}

function VacancyVisual() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <AnimateIn variant="slideLeft">
            <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/uploads/2026/05/Business-Promoter-BP-scaled.png"
                  alt="Business Promoter vacancy poster"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </AnimateIn>

          <AnimateIn variant="slideRight" delay={0.1}>
            <span className="top-head">General Information</span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-brand-heading-alt">
              Solicitation: G3B/HR/001/05/2026
            </h2>
            <p className="mt-4 text-brand-body">
              Issuance Date: 06/05/2026
              <br />
              Closing Date/Time: 19/05/2026
              <br />
              Job Type: Full Time
            </p>
            <p className="mt-4 text-brand-body">
              Support territory growth, increase product visibility, activate new outlets, and
              strengthen customer relationships while demonstrating discipline, honesty, and
              operational excellence.
            </p>
          </AnimateIn>
        </div>
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
            Field sales and territory growth
          </h2>
        </AnimateIn>

        <StaggerContainer className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {roleOverview.map((item) => {
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

function ResponsibilitiesSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <span className="top-head">Key Responsibilities</span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-brand-heading-alt">
            What you will be accountable for
          </h2>
        </AnimateIn>

        <StaggerContainer className="mt-12 grid gap-5 sm:grid-cols-2">
          {responsibilityAreas.map((area) => {
            const Icon = area.icon as LucideIcon;
            return (
              <StaggerItem key={area.title}>
                <div className="card-modern h-full p-6">
                  <Icon className="h-6 w-6 text-brand-yellow" />
                  <h3 className="mt-3 font-serif text-lg font-bold text-brand-heading">
                    {area.title}
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {area.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-brand-body">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

function QualificationsSection() {
  return (
    <section className="on-dark bg-brand-charcoal py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-10 lg:grid-cols-2">
          <AnimateIn variant="slideLeft">
            <span className="top-head">Minimum Qualifications</span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-white">
              Skills and profile we seek
            </h2>
            <ul className="mt-6 space-y-3">
              {qualifications.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/85">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-yellow" />
                  {item}
                </li>
              ))}
            </ul>
          </AnimateIn>

          <AnimateIn variant="slideRight" delay={0.1}>
            <span className="top-head">Selection Factors</span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-white">
              How candidates are evaluated
            </h2>
            <div className="mt-6 space-y-3">
              {evaluationFactors.map((factor) => (
                <div key={factor} className="card-glass flex items-center gap-3 p-4">
                  <BarChart3 className="h-5 w-5 shrink-0 text-brand-yellow" />
                  <span className="text-sm font-semibold text-white/90">{factor}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm italic text-white/60">
              Due to urgency, G3-Biz may recruit a matching candidate before the stated deadline.
            </p>
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
          <h2 className="font-serif text-2xl font-bold text-white">Apply for this role</h2>
          <p className="mt-2 text-white/85">
            Send your cover letter, CV, National ID copy, and relevant certificates.
          </p>
          <p className="mt-1 text-sm font-semibold text-white">
            Subject: BUSINESS PROMOTER – G3-BIZ LTD
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <Link
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center justify-center gap-2 rounded bg-black px-6 py-3 text-sm font-bold text-white transition hover:bg-black/85"
          >
            <Mail className="h-4 w-4" />
            Email Application
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center gap-2 rounded border-2 border-white/40 px-6 py-3 text-sm font-bold text-white transition hover:border-white hover:bg-white/10"
          >
            More Articles
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function BusinessPromoterPostContent() {
  return (
    <>
      <PostIntro />
      <VacancyVisual />
      <RoleSnapshot />
      <ResponsibilitiesSection />
      <QualificationsSection />
      <PostCta />
    </>
  );
}

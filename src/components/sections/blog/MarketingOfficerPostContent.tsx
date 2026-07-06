import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Briefcase,
  CheckCircle2,
  Compass,
  Mail,
  Megaphone,
  ShieldCheck,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/shared/motion";
import { siteConfig } from "@/config/site";

const roleOverview = [
  { icon: Briefcase, title: "Position", text: "Marketing Officer (01)" },
  { icon: Compass, title: "Duty Type", text: "Full Time" },
  { icon: Users, title: "Reporting Line", text: "Management" },
  { icon: ShieldCheck, title: "Experience", text: "Minimum 2 years (FMCG/distribution preferred)" },
] as const;

const keyResponsibilities = [
  "Plan and execute field marketing activities and promotions",
  "Ensure strong product visibility and merchandising standards",
  "Drive demand with sales teams and support target achievement",
  "Monitor competitor activity, pricing trends, and customer behavior",
  "Build customer and partner relationships with professional brand representation",
] as const;

const qualifications = [
  "Bachelor's degree/training in Marketing, Business, or related field",
  "Practical understanding of field marketing and consumer behavior",
  "Strong communication and interpersonal skills",
  "Basic reporting and data tracking skills",
  "High ethical standards and professional conduct",
] as const;

const evaluationFactors = [
  "Relevant Experience - 30%",
  "Marketing & Business Understanding - 40%",
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
            <span>-</span>
            <span>Marketing Officer</span>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-brand-body">
            {siteConfig.shortName} is seeking a result-driven and innovative Marketing Officer to
            strengthen brand visibility, market engagement, and sales support across assigned territories.
          </p>
          <p className="mt-4 text-brand-body">
            We are recruiting not just skill, but character - integrity, accountability, professionalism,
            and teamwork are essential to this role.
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
                  src="/images/uploads/2026/04/Marketing-Officer-Edited-scaled.png"
                  alt="Marketing Officer vacancy poster"
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
              Solicitation: G3-Biz/HR/01/03/2026
            </h2>
            <p className="mt-4 text-brand-body">
              Issuance Date: 31/03/2026
              <br />
              Closing Date/Time: 14/04/2026
              <br />
              Location: Mile 2, Limbe
            </p>
            <p className="mt-4 text-brand-body">
              As a dynamic distribution company, G3-Biz is committed to disciplined market expansion,
              strong brand positioning, and responsible commercial execution.
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
            Purpose and core focus
          </h2>
          <p className="mt-4 text-brand-body">
            Drive brand visibility, customer engagement, and market expansion through practical
            marketing initiatives while supporting sales performance.
          </p>
        </AnimateIn>

        <StaggerContainer className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {roleOverview.map((item) => {
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

function ResponsibilitiesAndRequirements() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-10 lg:grid-cols-2">
          <AnimateIn>
            <span className="top-head">Key Responsibilities</span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-brand-heading-alt">
              What you will be accountable for
            </h2>
            <ul className="mt-6 space-y-3">
              {keyResponsibilities.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-brand-heading">
                  <Megaphone className="mt-0.5 h-4 w-4 shrink-0 text-brand-yellow" />
                  {item}
                </li>
              ))}
            </ul>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <span className="top-head">Minimum Qualifications</span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-brand-heading-alt">
              Skills and profile we seek
            </h2>
            <ul className="mt-6 space-y-3">
              {qualifications.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-brand-heading">
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

function EvaluationSection() {
  return (
    <section className="on-dark bg-brand-charcoal py-20">
      <div className="mx-auto max-w-5xl px-4">
        <AnimateIn className="text-center">
          <span className="top-head">Selection Factors</span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-white">How candidates are evaluated</h2>
        </AnimateIn>

        <StaggerContainer className="mt-12 grid gap-5 md:grid-cols-3">
          {evaluationFactors.map((factor) => (
            <StaggerItem key={factor}>
              <div className="card-glass h-full p-6 text-center">
                <BarChart3 className="mx-auto h-6 w-6 text-brand-yellow" />
                <p className="mt-3 text-sm font-semibold text-white/90">{factor}</p>
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
          <h2 className="font-serif text-2xl font-bold text-white">Apply for this role</h2>
          <p className="mt-2 text-white/85">
            Send your cover letter, CV, National ID copy, and relevant certificates.
          </p>
          <p className="mt-1 text-sm font-semibold text-white">
            Subject: MARKETING OFFICER - G3-BIZ Ltd
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

export function MarketingOfficerPostContent() {
  return (
    <>
      <PostIntro />
      <VacancyVisual />
      <RoleSnapshot />
      <ResponsibilitiesAndRequirements />
      <EvaluationSection />
      <PostCta />
    </>
  );
}

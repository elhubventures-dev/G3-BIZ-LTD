import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  GraduationCap,
  HeartPulse,
  Leaf,
  Recycle,
  ShieldCheck,
  Truck,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  AnimateIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/motion";
import { siteConfig } from "@/config/site";

const csrPillars = [
  {
    icon: HeartPulse,
    title: "Healthcare Initiatives",
    text: "Support through donations and health-awareness campaigns that promote preventive care and healthier living.",
  },
  {
    icon: GraduationCap,
    title: "Education & Development",
    text: "Scholarships, learning support, and internship pathways that equip students for academic and career success.",
  },
  {
    icon: Recycle,
    title: "Community Clean-Up",
    text: "Monthly participation in Limbe's Keep Clean campaign to improve public spaces and neighborhood health.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    text: "Responsible practices across operations, including waste management, recycling, and environmentally mindful standards.",
  },
] as const;

const logisticsImpact = [
  "Timely, efficient product distribution",
  "Support for local business growth",
  "Job creation across value chains",
  "Stronger supply chain resilience",
] as const;

const talentAreas = [
  "Business Administration",
  "Human Resources Management",
  "Accounting",
  "Management",
  "Sales",
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
            <span className="top-head !text-xs">Corporate Responsibility</span>
            <span>·</span>
            <span>Community Impact</span>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-brand-body">
            At {siteConfig.shortName}, we believe business success goes hand-in-hand with making a
            positive impact on the communities where we operate.
          </p>
          <p className="mt-4 text-brand-body">
            Our Corporate Social Responsibility (CSR) initiatives focus on healthcare, education,
            sustainability, professional development, and local community engagement.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}

function CsrPillars() {
  return (
    <section className="bg-brand-light py-20">
      <div className="mx-auto max-w-7xl px-4">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <span className="top-head">Our CSR Focus</span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-brand-heading-alt">
            Giving back through meaningful action
          </h2>
        </AnimateIn>

        <StaggerContainer className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {csrPillars.map((item) => {
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

function CleanLimbeSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <AnimateIn variant="slideLeft">
            <span className="top-head">A Cleaner Limbe</span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-brand-heading-alt">
              Community engagement every month
            </h2>
            <p className="mt-4 text-brand-body">
              Every first Wednesday of the month, our teams participate in Limbe's Keep Clean
              campaign with residents, businesses, and city officials.
            </p>
            <p className="mt-4 text-brand-body">
              This effort helps reduce litter, clear drains, and improve public spaces to support
              healthier and safer living conditions.
            </p>
          </AnimateIn>

          <AnimateIn variant="slideRight" delay={0.1}>
            <div className="relative min-h-[300px] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/uploads/2024/08/WhatsApp-Image-2024-08-20-at-19.18.11.jpeg"
                alt="G3-Biz community and CSR activity"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

function LogisticsAndTalent() {
  return (
    <section className="on-dark bg-brand-charcoal py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-12 lg:grid-cols-2">
          <AnimateIn variant="slideLeft">
            <span className="top-head">Empowering Through Logistics</span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-white">
              Business impact that supports communities
            </h2>
            <p className="mt-4 text-white/75">
              As a distribution company, we deliver efficient services that support customers and
              contribute to broader economic growth.
            </p>
            <ul className="mt-6 space-y-2">
              {logisticsImpact.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-white/90">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-yellow" />
                  {item}
                </li>
              ))}
            </ul>
          </AnimateIn>

          <AnimateIn variant="slideRight" delay={0.1}>
            <span className="top-head">Local Talent Development</span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-white">
              Employment and internship pathways
            </h2>
            <p className="mt-4 text-white/75">
              We do not only hire talent - we nurture it through practical training, mentoring, and
              career development opportunities.
            </p>
            <div className="card-glass mt-6 p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-yellow">
                Internship Areas
              </p>
              <ul className="mt-3 space-y-2">
                {talentAreas.map((area) => (
                  <li key={area} className="flex items-center gap-2 text-sm text-white/90">
                    <Users className="h-4 w-4 text-brand-yellow" />
                    {area}
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

function CsrConclusion() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <AnimateIn>
          <span className="top-head">Together We Build</span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-brand-heading-alt">
            Stronger, healthier, sustainable communities
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-brand-body">
            Through our CSR initiatives, {siteConfig.shortName} is not just doing business - we are
            building long-term value for people and the environment.
          </p>
          <p className="mt-4 text-brand-body">
            We are proud to contribute to community well-being and invite partners, residents, and
            stakeholders to join us in creating lasting impact.
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
          <h2 className="font-serif text-2xl font-bold text-white">Partner with us for impact</h2>
          <p className="mt-2 text-white/85">
            Learn more about our community programs and how we can do more together.
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center gap-2 rounded bg-black px-6 py-3 text-sm font-bold text-white transition hover:bg-black/85"
          >
            Contact Us
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

export function CsrPostContent() {
  return (
    <>
      <PostIntro />
      <CsrPillars />
      <CleanLimbeSection />
      <LogisticsAndTalent />
      <CsrConclusion />
      <PostCta />
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  Calculator,
  GraduationCap,
  Layers,
  Megaphone,
  Network,
  TrendingUp,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  AnimateIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/motion";
import { siteConfig } from "@/config/site";

const whyIntern = [
  {
    icon: Briefcase,
    title: "Real-World Experience",
    text: "Immerse yourself in the daily operations of a dynamic global company — working on live projects and shadowing seasoned professionals.",
  },
  {
    icon: GraduationCap,
    title: "Mentorship & Guidance",
    text: "Work closely with mentors who are experts in their fields. They'll guide you, provide feedback, and help you grow personally and professionally.",
  },
  {
    icon: Layers,
    title: "Diverse Opportunities",
    text: "Whether you're interested in business administration, HR, accounting, or sales — opportunities tailored to your area of study.",
  },
  {
    icon: Network,
    title: "Networking & Collaboration",
    text: "Work alongside professionals and peers across departments, building a strong network and learning from different perspectives.",
  },
] as const;

const supplyChainFlow = [
  "Procurement",
  "Inbound logistics",
  "Operations",
  "Outbound logistics",
  "Sales & distribution",
  "Customer service",
] as const;

const internshipAreas = [
  {
    icon: Briefcase,
    title: "Business Administration",
    text: "Assist with operations, project management, and strategic planning. See firsthand how decisions are made and how business functions drive success.",
  },
  {
    icon: Users,
    title: "Human Resources Management",
    text: "Support recruitment, onboarding, and employee engagement. Learn how HR maintains a positive work culture aligned with business strategy.",
  },
  {
    icon: Calculator,
    title: "Accounting",
    text: "Gain hands-on experience in financial reporting, budgeting, and auditing — working closely with our finance team on real operations.",
  },
  {
    icon: TrendingUp,
    title: "Management",
    text: "Be involved in decision-making processes at every level. Learn about leadership, organizational behaviour, and balancing short- and long-term goals.",
  },
  {
    icon: Megaphone,
    title: "Sales & Marketing",
    text: "Develop strategies, conduct market research, and identify growth opportunities. Sharpen your customer relationship and sales skills.",
  },
] as const;

const whatYouGain = [
  "Hands-on learning with real projects, challenges, and results",
  "Industry knowledge from a company at the forefront of global distribution",
  "Professional development skills that set you apart in the job market",
  "Networking opportunities with professionals in your field",
  "A pathway to full-time employment — many interns join G3-Biz permanently",
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
            <span className="top-head !text-xs">Careers</span>
            <span>·</span>
            <span>Internships</span>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-brand-body">
            At {siteConfig.shortName}, we believe the key to building a strong future workforce
            lies in nurturing young talent. We offer exciting internship opportunities for students
            ready to take their first steps into the professional world.
          </p>
          <p className="mt-4 text-brand-body">
            Whether you&apos;re studying Business Administration, Human Resources Management,
            Accounting, Management, Sales, or a related field, our program is designed to give you
            hands-on experience and a platform for growth.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}

function WhyInternSection() {
  return (
    <section className="bg-brand-light py-20">
      <div className="mx-auto max-w-7xl px-4">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <span className="top-head">Why G3-Biz</span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-brand-heading-alt">
            The ideal place to kickstart your career
          </h2>
          <p className="mt-4 text-brand-body">
            Internships are about more than credits or padding your résumé — they&apos;re about
            learning, growing, and positioning yourself for long-term success. We provide a
            structured environment where your ideas are valued and your contributions make a
            difference.
          </p>
        </AnimateIn>

        <StaggerContainer className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyIntern.map((item) => {
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

function SupplyChainSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <AnimateIn variant="slideLeft">
            <span className="top-head">Full Supply Chain</span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-brand-heading-alt">
              Experience the complete flow
            </h2>
            <p className="mt-4 text-brand-body">
              At the core of our activities is a blend of full supply chain operations — because our
              customers are at the centre of everything we do. Experience information, physical, and
              financial flows across the business.
            </p>
            <p className="mt-4 text-brand-body">
              You&apos;ll receive hands-on desk training from procurement through inbound logistics,
              operations, outbound logistics, sales and distribution, and customer service. We help
              advise on your professional career — and many interns go on to work with us full-time.
            </p>

            <ul className="mt-6 space-y-2">
              {supplyChainFlow.map((step) => (
                <li key={step} className="flex items-start gap-2 text-sm text-brand-heading">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-yellow" />
                  {step}
                </li>
              ))}
            </ul>
          </AnimateIn>

          <AnimateIn variant="slideRight" delay={0.1}>
            <div className="relative min-h-[300px] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/uploads/2024/08/WhatsApp-Image-2024-08-20-at-19.18.07-1.jpeg"
                alt="G3-Biz internship training"
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

function InternshipAreas() {
  return (
    <section className="on-dark bg-brand-charcoal py-20">
      <div className="mx-auto max-w-7xl px-4">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <span className="top-head">Key Areas</span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-white">
            Internships across the business
          </h2>
        </AnimateIn>

        <StaggerContainer className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {internshipAreas.map((area, index) => {
            const Icon = area.icon as LucideIcon;
            return (
              <StaggerItem key={area.title}>
                <div className="card-glass h-full p-6">
                  <span className="text-sm font-bold text-brand-yellow">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <Icon className="mt-3 h-6 w-6 text-brand-yellow" />
                  <h3 className="mt-3 font-serif text-lg font-bold text-white">{area.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">{area.text}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

function WhatYouGainSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <AnimateIn variant="slideLeft">
            <div className="relative min-h-[300px] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/uploads/2024/08/WhatsApp-Image-2024-08-20-at-19.18.15.jpeg"
                alt="G3-Biz interns and team"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </AnimateIn>

          <AnimateIn variant="slideRight" delay={0.1}>
            <span className="top-head">What You&apos;ll Gain</span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-brand-heading-alt">
              Skills that last a lifetime
            </h2>
            <p className="mt-4 text-brand-body">
              Our internships provide the perfect opportunity to gain practical experience, build a
              professional network, and set the foundation for a successful career.
            </p>

            <ul className="mt-6 space-y-3">
              {whatYouGain.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-brand-heading">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-yellow" />
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

function PostConclusion() {
  return (
    <section className="border-t border-brand-border bg-brand-light py-20">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <AnimateIn>
          <span className="top-head">Your Future</span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-brand-heading-alt">
            Unlock your future with G3-Biz
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-brand-body">
            We&apos;re committed to helping students develop the skills they need to succeed in
            today&apos;s competitive business world. Join us, and let&apos;s shape the future
            together.
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
          <h2 className="font-serif text-2xl font-bold text-white">Ready to apply?</h2>
          <p className="mt-2 text-white/85">
            Get in touch to learn about current internship openings and how to join our team.
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

export function InternshipPostContent() {
  return (
    <>
      <PostIntro />
      <WhyInternSection />
      <SupplyChainSection />
      <InternshipAreas />
      <WhatYouGainSection />
      <PostConclusion />
      <PostCta />
    </>
  );
}

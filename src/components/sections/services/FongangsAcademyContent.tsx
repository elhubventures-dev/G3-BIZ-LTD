import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  GraduationCap,
  Lightbulb,
  Megaphone,
  Target,
  TrendingUp,
  Users,
  Wallet,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { QuoteButton } from "@/components/shared/QuoteButton";
import {
  AnimateIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/motion";
import { academyTopics } from "@/config/services";
import { siteConfig } from "@/config/site";

const topicIcons: LucideIcon[] = [
  Target,
  TrendingUp,
  BarChart3,
  Megaphone,
  Users,
  Lightbulb,
  Wallet,
];

function AcademyIntro() {
  return (
    <section className="border-b border-brand-border bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <Link
          href="/services"
          className="mb-8 inline-flex items-center gap-1 text-sm font-semibold text-brand-heading hover:text-brand-yellow"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to services
        </Link>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <AnimateIn variant="slideLeft">
            <span className="top-head">FONGANG&apos;s Academy</span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-brand-heading-alt md:text-4xl">
              Free business consultation for G3-Biz customers
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-brand-body">
              Running a business requires continuous learning and improvement. That is why{" "}
              {siteConfig.shortName} offers free consultation to new and established customers
              through FONGANG&apos;s Academy.
            </p>
            <p className="mt-4 text-brand-body">
              This initiative helps business owners streamline operations, improve sales, and
              maximize growth potential — at no extra cost as part of your partnership with us.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-light px-4 py-2 text-sm font-bold text-brand-heading">
              <GraduationCap className="h-4 w-4 text-brand-yellow" />
              Complimentary for G3-Biz customers
            </div>
          </AnimateIn>

          <AnimateIn variant="slideRight" delay={0.1}>
            <div className="relative min-h-[320px] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/uploads/2024/08/WhatsApp-Image-2024-08-20-at-19.18.07.jpeg"
                alt="FONGANG's Academy consultation session"
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

function AcademyTopics() {
  return (
    <section className="bg-brand-light py-20">
      <div className="mx-auto max-w-7xl px-4">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <span className="top-head">What You Gain</span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-brand-heading-alt">
            Tailored insights and actionable strategies
          </h2>
          <p className="mt-3 text-brand-body">
            At FONGANG&apos;s Academy, we provide business owners with practical guidance across
            seven core areas of commercial success.
          </p>
        </AnimateIn>

        <StaggerContainer className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {academyTopics.map((topic, index) => {
            const Icon = topicIcons[index] ?? GraduationCap;
            return (
              <StaggerItem key={topic.title}>
                <div className="card-modern h-full p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-yellow/10">
                    <Icon className="h-5 w-5 text-brand-yellow" />
                  </div>
                  <h3 className="mt-4 font-serif text-lg font-bold text-brand-heading">
                    {topic.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-body">{topic.text}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

function AcademyAudience() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <AnimateIn variant="slideLeft">
            <div className="relative min-h-[280px] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/uploads/2024/08/WhatsApp-Image-2024-08-20-at-19.18.17-1.jpeg"
                alt="Business consultation at G3-Biz"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </AnimateIn>

          <AnimateIn variant="slideRight" delay={0.1}>
            <span className="top-head">Who It&apos;s For</span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-brand-heading-alt">
              From startups to established businesses
            </h2>
            <p className="mt-5 text-brand-body">
              Whether you are launching a new outlet or refining an established operation,
              FONGANG&apos;s Academy is committed to helping you thrive in today&apos;s competitive
              landscape.
            </p>
            <p className="mt-4 text-brand-body">
              Sessions are designed around your real challenges — sales, staffing, finance, and
              market growth — so you leave with strategies you can apply immediately.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "New G3-Biz customers building their first outlet",
                "Established partners scaling territory sales",
                "Owners seeking sharper financial and leadership skills",
              ].map((item) => (
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

function AcademyCta() {
  return (
    <section className="bg-brand-yellow py-14">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 text-center sm:flex-row sm:text-left">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-white/80">
            Free consultation
          </p>
          <h2 className="mt-1 font-serif text-2xl font-bold text-white md:text-3xl">
            Ready to unlock your business potential?
          </h2>
          <p className="mt-2 text-white/85">
            Book a consultation through G3-Biz or speak with our team in Limbe.
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <QuoteButton
            product="FONGANG's Academy Consultation"
            className="inline-flex items-center justify-center gap-2 rounded bg-black px-6 py-3 text-sm font-bold text-white transition hover:bg-black/85"
          >
            Request Consultation
          </QuoteButton>
          <Link
            href="/services/customer-creation"
            className="inline-flex items-center justify-center gap-2 rounded border-2 border-white/40 px-6 py-3 text-sm font-bold text-white transition hover:border-white hover:bg-white/10"
          >
            Register as Customer
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function FongangsAcademyContent() {
  return (
    <>
      <AcademyIntro />
      <AcademyTopics />
      <AcademyAudience />
      <AcademyCta />
    </>
  );
}

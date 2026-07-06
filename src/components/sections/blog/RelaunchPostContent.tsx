import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Building2,
  Globe,
  Handshake,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  AnimateIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/motion";
import { quotes, siteConfig } from "@/config/site";

const visionCommitments = [
  {
    icon: TrendingUp,
    title: "Value for Customers",
    text: "Giving customers good value for their investment in every interaction and transaction.",
  },
  {
    icon: Sparkles,
    title: "Social Occasions",
    text: "Creating occasions that enhance social interaction and pleasure across communities.",
  },
  {
    icon: Handshake,
    title: "Trusted Partnerships",
    text: "Offering trustful partnerships to suppliers built on transparency and mutual growth.",
  },
  {
    icon: Users,
    title: "Better Lives",
    text: "Providing a better life for shareholders and employees through shared success.",
  },
] as const;

const strategicPillars = [
  {
    icon: Users,
    title: "Human Resource Optimization",
    text: "Ensuring the workforce is efficient, motivated, and aligned with company goals.",
  },
  {
    icon: BarChart3,
    title: "Exponential Volume Growth",
    text: "Scaling operations and increasing distribution capacity across Cameroon.",
  },
  {
    icon: Globe,
    title: "Market Share Growth",
    text: "Expanding G3-Biz's presence and influence in Cameroon's distribution market.",
  },
  {
    icon: Building2,
    title: "Wise Investment in Assets",
    text: "Making informed, strategic investments that secure long-term success.",
  },
] as const;

const cultureShifts = [
  "100% compliance across all operations",
  "Creativity and innovation in every role",
  "A heightened sense of responsibility at every level",
  "Value creation in every sale — not just volume",
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
            <span className="top-head !text-xs">Company News</span>
            <span>·</span>
            <span>June 12, 2024</span>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-brand-body">
            On June 12, 2024, {siteConfig.shortName} marked a significant milestone with a
            transformative relaunch — introducing a refreshed vision and mission aimed at reshaping
            the company&apos;s future as a prominent player in Cameroon&apos;s distribution industry.
          </p>
          <p className="mt-4 text-brand-body">
            The new vision is clear: establishing {siteConfig.shortName} as the most reputable
            distribution company in Cameroon in terms of trust, expansion, value creation, and value
            sharing — creating lasting value for all stakeholders, from customers to shareholders.
          </p>
        </AnimateIn>

        <AnimateIn className="mt-10" variant="fadeUp" delay={0.1}>
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/images/uploads/2024/08/WhatsApp-Image-2024-08-20-at-19.18.08.jpeg"
              alt="G3-Biz Ltd relaunch"
              fill
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
              priority
            />
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

function VisionCommitments() {
  return (
    <section className="bg-brand-light py-20">
      <div className="mx-auto max-w-7xl px-4">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <span className="top-head">Our Vision</span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-brand-heading-alt">
            A trusted and expansive distributor
          </h2>
          <p className="mt-4 text-brand-body">
            At the core of G3-Biz&apos;s new direction is a commitment to building trust, creating
            value, and sharing success across every stakeholder relationship.
          </p>
        </AnimateIn>

        <StaggerContainer className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {visionCommitments.map((item) => {
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

function StrategicPillars() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <span className="top-head">Strategic Pillars</span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-brand-heading-alt">
            Four pillars driving the new vision
          </h2>
        </AnimateIn>

        <StaggerContainer className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {strategicPillars.map((pillar, index) => {
            const Icon = pillar.icon as LucideIcon;
            return (
              <StaggerItem key={pillar.title}>
                <div className="card-modern h-full p-6">
                  <span className="text-sm font-bold text-brand-yellow">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <Icon className="mt-3 h-6 w-6 text-brand-yellow" />
                  <h3 className="mt-3 font-serif text-lg font-bold text-brand-heading">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-body">{pillar.text}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

function LeadershipSection() {
  return (
    <section className="on-dark bg-brand-charcoal py-20">
      <div className="mx-auto max-w-7xl px-4">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <span className="top-head">Leadership</span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-white">
            Moses Fongang on the new direction
          </h2>
          <p className="mt-4 text-white/75">
            Managing Director Moses Fongang highlights the company&apos;s goal of encouraging
            employees to work harder and make more money — with an emphasis on compliance,
            creativity, innovation, and responsibility across all operations.
          </p>
        </AnimateIn>

        <StaggerContainer className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {quotes.map((quote) => (
            <StaggerItem key={quote.text}>
              <blockquote className="card-glass h-full p-6">
                <p className="text-lg font-medium italic text-white">&ldquo;{quote.text}&rdquo;</p>
                <cite className="mt-4 block text-sm font-semibold text-white/80 not-italic">
                  — {quote.author}
                </cite>
              </blockquote>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function CultureShiftSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <AnimateIn variant="slideLeft">
            <span className="top-head">New Ways of Working</span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-brand-heading-alt">
              Shifting to a culture of value creation
            </h2>
            <p className="mt-4 text-brand-body">
              Before the relaunch, operations faced challenges such as non-compliance and a lack of
              integrity linked to a more laid-back working culture. The new vision transforms this by
              instilling value creation in every sale.
            </p>
            <p className="mt-4 text-brand-body">
              It&apos;s no longer just about selling — it&apos;s about ensuring customers see real
              value in their investment, with both employees and customers benefiting from these
              changes.
            </p>

            <ul className="mt-6 space-y-3">
              {cultureShifts.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-brand-heading">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-yellow" />
                  {item}
                </li>
              ))}
            </ul>
          </AnimateIn>

          <AnimateIn variant="slideRight" delay={0.1}>
            <div className="relative min-h-[320px] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/uploads/2024/08/WhatsApp-Image-2024-08-20-at-19.18.08-2-e1725534524931.jpeg"
                alt="G3-Biz team and operations"
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

function PostConclusion() {
  return (
    <section className="border-t border-brand-border bg-brand-light py-20">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <AnimateIn>
          <span className="top-head">A Promising Future</span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-brand-heading-alt">
            Redefining distribution in Cameroon
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-brand-body">
            With a clear vision and strategic framework in place, {siteConfig.shortName} is set to
            redefine the distribution landscape in Cameroon — prioritising trust, value creation, and
            integrity for long-term success and shared growth.
          </p>
          <p className="mt-4 font-serif text-xl font-bold text-brand-heading">
            Purpose, responsibility, and success — hand in hand.
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
          <h2 className="font-serif text-2xl font-bold text-white">Discover the new G3-Biz</h2>
          <p className="mt-2 text-white/85">
            Explore our services, team, and the vision driving our growth across Cameroon.
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <Link
            href="/about-us"
            className="inline-flex items-center justify-center gap-2 rounded bg-black px-6 py-3 text-sm font-bold text-white transition hover:bg-black/85"
          >
            About Us
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 rounded border-2 border-white/40 px-6 py-3 text-sm font-bold text-white transition hover:border-white hover:bg-white/10"
          >
            Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}

export function RelaunchPostContent() {
  return (
    <>
      <PostIntro />
      <VisionCommitments />
      <StrategicPillars />
      <LeadershipSection />
      <CultureShiftSection />
      <PostConclusion />
      <PostCta />
    </>
  );
}

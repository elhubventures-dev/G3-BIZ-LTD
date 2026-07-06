import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  MessageSquare,
  Music,
  Shield,
  Target,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  AnimateIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/motion";
import { siteConfig } from "@/config/site";

const meetingAgenda = [
  {
    icon: Users,
    title: "Prayers & Introductions",
    text: "Each session begins with reflection, prayers, and introductions — setting a positive, focused atmosphere and reinforcing team unity.",
  },
  {
    icon: Shield,
    title: "Safety & Security",
    text: "We open with safety and security updates so every field team member stays informed, protected, and prepared for unpredictable sales environments.",
  },
  {
    icon: Target,
    title: "Sales Review",
    text: "The heart of the meeting: overall performance trends, team presentations, and strategy discussions led by our Business Promoters.",
  },
  {
    icon: MessageSquare,
    title: "Leadership Feedback",
    text: "Sales Supervisor, Depot Manager, and leadership share guidance on what is working and where teams can improve.",
  },
  {
    icon: Users,
    title: "Staff Concerns",
    text: "An open forum where team members raise operational issues, market challenges, or suggestions — ensuring everyone feels heard.",
  },
  {
    icon: Music,
    title: "Depot War Song",
    text: "We close with our tradition — a unifying moment of motivation, pride, and shared mission across the depot.",
  },
] as const;

const salesReviewTopics = [
  "Sales targets for the week",
  "Achievements against objectives",
  "Market challenges encountered",
  "Growth opportunities identified",
  "Consumer and industry trends",
  "Teamwork across squads",
] as const;

const depotWarLyrics = [
  "Guinness, a drink for every Cameroonian",
  "Arise, employees of G3-Biz",
  "Promote and spread Guinness nationwide",
  "Guinness is great for all",
  "",
  "Zimbabala, Big Guinness",
  "Zimbabala, Small Guinness",
  "Zimbabala!",
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
            <span className="top-head !text-xs">Company Culture</span>
            <span>·</span>
            <span>Tuesday Meetings</span>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-brand-body">
            At {siteConfig.shortName}, every Tuesday holds a significant place in our weekly
            routine. It is more than a workday — it is when we come together to reflect, learn, and
            push the boundaries of what we can achieve.
          </p>
          <p className="mt-4 text-brand-body">
            Our Tuesday presentation meetings are the cornerstone of our sales strategy: reviewing
            progress, sharing insights, and ensuring every team member stays aligned with our goals.
          </p>
        </AnimateIn>

        <AnimateIn className="mt-10" variant="fadeUp" delay={0.1}>
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/images/uploads/2024/08/WhatsApp-Image-2024-08-20-at-19.18.09-1.jpeg"
              alt="G3-Biz Tuesday presentation meeting"
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

function MeetingAgenda() {
  return (
    <section className="bg-brand-light py-20">
      <div className="mx-auto max-w-7xl px-4">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <span className="top-head">Meeting Flow</span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-brand-heading-alt">
            What a typical Tuesday looks like
          </h2>
        </AnimateIn>

        <StaggerContainer className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {meetingAgenda.map((item, index) => {
            const Icon = item.icon as LucideIcon;
            return (
              <StaggerItem key={item.title}>
                <div className="card-modern h-full p-6">
                  <span className="text-sm font-bold text-brand-yellow">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <Icon className="mt-3 h-6 w-6 text-brand-yellow" />
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

function SalesReviewSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <AnimateIn variant="slideLeft">
            <span className="top-head">Sales Review</span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-brand-heading-alt">
              A comprehensive look at performance
            </h2>
            <p className="mt-4 text-brand-body">
              Business Promoters present their teams&apos; results — reviewing past performance and
              shaping strategies for the weeks ahead. The Sales Supervisor emphasises Sales Driver
              Checks to identify opportunities and stay ahead in the market.
            </p>
            <p className="mt-4 text-brand-body">
              The Depot Manager addresses staff directly to minimise operational issues and keep
              morale high across the depot.
            </p>

            <ul className="mt-6 space-y-2">
              {salesReviewTopics.map((topic) => (
                <li key={topic} className="flex items-start gap-2 text-sm text-brand-heading">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-yellow" />
                  {topic}
                </li>
              ))}
            </ul>
          </AnimateIn>

          <AnimateIn variant="slideRight" delay={0.1}>
            <div className="relative min-h-[300px] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/uploads/2024/08/WhatsApp-Image-2024-08-20-at-19.18.09-2.jpeg"
                alt="G3-Biz sales team presentation"
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

function DepotWarSong() {
  return (
    <section className="on-dark bg-brand-charcoal py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <AnimateIn variant="slideLeft">
            <div className="relative min-h-[280px] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/uploads/2024/08/WhatsApp-Image-2024-08-20-at-19.18.07.jpeg"
                alt="G3-Biz depot team"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </AnimateIn>

          <AnimateIn variant="slideRight" delay={0.1}>
            <span className="top-head">G3-Biz Tradition</span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-white">The Depot War Song</h2>
            <p className="mt-4 text-white/75">
              No Tuesday meeting is complete without our Depot War Song — a source of motivation
              and pride that reminds us of our shared mission to promote Guinness across Cameroon.
            </p>

            <blockquote className="card-glass mt-8 p-6">
              {depotWarLyrics.map((line, i) =>
                line ? (
                  <p key={i} className="text-center font-serif text-lg text-white/90">
                    {line}
                  </p>
                ) : (
                  <br key={i} />
                )
              )}
            </blockquote>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

function PostConclusion() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <AnimateIn>
          <span className="top-head">Teamwork</span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-brand-heading-alt">
            The power of meeting together
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-brand-body">
            Our Tuesday presentation meetings are more than routine — they are a testament to
            teamwork, communication, and continuous improvement. They align our goals, share
            valuable insights, and equip every team member for success in a fast-paced sales
            environment.
          </p>
          <p className="mt-4 font-serif text-xl font-bold text-brand-heading">
            At {siteConfig.shortName}, we don&apos;t just meet — we grow, we learn, and we push each
            other to achieve more, together.
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
          <h2 className="font-serif text-2xl font-bold text-white">Explore more from G3-Biz</h2>
          <p className="mt-2 text-white/85">
            Read company updates or learn about life on our sales and depot teams.
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
            href="/teams"
            className="inline-flex items-center justify-center gap-2 rounded border-2 border-white/40 px-6 py-3 text-sm font-bold text-white transition hover:border-white hover:bg-white/10"
          >
            Meet Our Team
          </Link>
        </div>
      </div>
    </section>
  );
}

export function TuesdayMeetingsPostContent() {
  return (
    <>
      <PostIntro />
      <MeetingAgenda />
      <SalesReviewSection />
      <DepotWarSong />
      <PostConclusion />
      <PostCta />
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Briefcase, Heart, Users } from "lucide-react";
import { QuoteButton } from "@/components/shared/QuoteButton";
import {
  AnimateIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/motion";
import { fieldTeams } from "@/config/teams";
import { siteConfig, teamMembers } from "@/config/site";
import { TeamMemberCard } from "./TeamMemberCard";

const cultureHighlights = [
  {
    icon: Users,
    title: "Collaborative Spirit",
    text: "Managers, depot staff, and sales teams working as one unit across Limbe and beyond.",
  },
  {
    icon: Heart,
    title: "Family Culture",
    text: "More than colleagues — a team united by trust, accountability, and shared goals.",
  },
  {
    icon: Briefcase,
    title: "Professional Growth",
    text: "Training, consultancy, and internship pathways for learners and rising talent.",
  },
] as const;

function TeamIntro() {
  return (
    <section className="border-b border-brand-border bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <AnimateIn variant="slideLeft">
            <span className="top-head">Team Spotlight</span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-brand-heading-alt md:text-4xl">
              The dream team behind our success
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-brand-body">
              Meet the people who keep {siteConfig.shortName} running — from depot operations and
              stock management to sales territories, security, and business development across the
              South West Region.
            </p>
            <p className="mt-4 text-brand-body">
              Our team blends operational discipline with a collaborative spirit. Together they
              deliver reliable distribution, support customers on the ground, and uphold the trust
              that defines G3-Biz.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="rounded-xl border border-brand-border bg-brand-light px-5 py-3">
                <p className="text-2xl font-extrabold text-brand-yellow">{teamMembers.length}</p>
                <p className="text-xs font-bold uppercase tracking-wide text-brand-heading">
                  Leadership & Staff
                </p>
              </div>
              <div className="rounded-xl border border-brand-border bg-brand-light px-5 py-3">
                <p className="text-2xl font-extrabold text-brand-yellow">{fieldTeams.length}</p>
                <p className="text-xs font-bold uppercase tracking-wide text-brand-heading">
                  Field Squads
                </p>
              </div>
            </div>
          </AnimateIn>

          <AnimateIn variant="slideRight" delay={0.1}>
            <div className="relative min-h-[320px] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/uploads/2024/08/WhatsApp-Image-2024-08-20-at-19.18.13-3.jpeg"
                alt="G3-Biz team at the depot"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <p className="absolute bottom-5 left-5 right-5 text-sm font-medium text-white/90">
                Mile 2, Limbe — where distribution excellence meets teamwork.
              </p>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

function LeadershipGrid() {
  const [managingDirector, ...rest] = teamMembers;

  return (
    <section className="bg-brand-light py-20">
      <div className="mx-auto max-w-7xl px-4">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <span className="top-head">Leadership & Management</span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-brand-heading-alt">
            Meet our people
          </h2>
          <p className="mt-3 text-brand-body">
            The managers, supervisors, and specialists who lead operations, sales, finance, and
            administration at G3-Biz.
          </p>
        </AnimateIn>

        <AnimateIn className="mt-12" variant="fadeUp" delay={0.1}>
          <TeamMemberCard member={managingDirector} featured />
        </AnimateIn>

        <StaggerContainer className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {rest.map((member) => (
            <StaggerItem key={member.role}>
              <TeamMemberCard member={member} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function FieldSquads() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <span className="top-head">Field Teams</span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-brand-heading-alt">
            Squads on the ground
          </h2>
          <p className="mt-3 text-brand-body">
            Sales territories, depot crews, and support units that bring Guinness and Diageo brands
            to customers every day.
          </p>
        </AnimateIn>

        <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {fieldTeams.map((squad) => (
            <StaggerItem key={squad.name}>
              <article className="group card-modern overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden bg-brand-charcoal img-zoom">
                  <Image
                    src={squad.image}
                    alt={squad.name}
                    fill
                    className="object-contain object-center transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-serif text-xl font-bold text-white">{squad.name}</h3>
                    {"nickname" in squad && squad.nickname && (
                      <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-white">
                        {squad.nickname}
                      </p>
                    )}
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function TeamCulture() {
  return (
    <section className="on-dark section-accent bg-brand-charcoal py-20">
      <div className="mx-auto max-w-7xl px-4">
        <AnimateIn className="text-center">
          <span className="top-head">How We Work</span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-white">
            Built on trust, driven by results
          </h2>
        </AnimateIn>

        <StaggerContainer className="mt-12 grid gap-6 md:grid-cols-3">
          {cultureHighlights.map((item) => (
            <StaggerItem key={item.title}>
              <div className="card-glass h-full p-8 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-yellow">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-5 font-serif text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75">{item.text}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function TeamCta() {
  return (
    <section className="border-t border-brand-border bg-white py-14">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 text-center sm:flex-row sm:text-left">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-brand-body/70">
            Join G3-Biz
          </p>
          <h2 className="mt-1 font-serif text-2xl font-bold text-brand-heading md:text-3xl">
            Interested in careers or internships?
          </h2>
          <p className="mt-2 text-brand-body">
            Explore opportunities with Cameroon&apos;s trusted beverage distribution partner.
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center gap-2 rounded bg-black px-6 py-3 text-sm font-bold text-white transition hover:bg-black/85"
          >
            View Opportunities
            <ArrowRight className="h-4 w-4" />
          </Link>
          <QuoteButton className="inline-flex items-center justify-center gap-2 rounded border-2 border-brand-border bg-white px-6 py-3 text-sm font-bold !text-brand-primary transition hover:bg-black hover:!text-white">
            Get in Touch
          </QuoteButton>
        </div>
      </div>
    </section>
  );
}

export function TeamsPageContent() {
  return (
    <>
      <TeamIntro />
      <LeadershipGrid />
      <FieldSquads />
      <TeamCulture />
      <TeamCta />
    </>
  );
}

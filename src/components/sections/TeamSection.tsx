import Image from "next/image";
import Link from "next/link";
import { teamMembers } from "@/config/site";
import {
  AnimateIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/motion";
import { TeamMemberCard } from "@/components/sections/team/TeamMemberCard";

interface TeamSectionProps {
  limit?: number;
}

export function TeamSection({ limit = 4 }: TeamSectionProps) {
  const members = teamMembers.slice(0, limit);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <AnimateIn>
            <span className="top-head">Team Spotlight</span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-brand-heading-alt md:text-4xl">
              The Dream Team Behind Our Success
            </h2>
          </AnimateIn>
          <AnimateIn variant="fadeIn" delay={0.15}>
            <Link
              href="/teams"
              className="rounded-sm border-2 border-brand-charcoal px-6 py-2 text-sm font-bold text-brand-charcoal transition hover:bg-brand-charcoal hover:text-white"
            >
              More Team Members
            </Link>
          </AnimateIn>
        </div>

        <StaggerContainer className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member) => (
            <StaggerItem key={member.role}>
              <TeamMemberCard member={member} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

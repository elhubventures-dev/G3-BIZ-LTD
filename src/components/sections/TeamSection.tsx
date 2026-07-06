import Image from "next/image";
import Link from "next/link";
import { teamMembers } from "@/config/site";

interface TeamSectionProps {
  limit?: number;
}

export function TeamSection({ limit = 4 }: TeamSectionProps) {
  const members = limit ? teamMembers.slice(0, limit) : teamMembers;
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="top-head">Team Spotlight</span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-brand-heading-alt md:text-4xl">
              The Dream Team Behind Our Success
            </h2>
          </div>
          <Link
            href="/teams"
            className="rounded-sm border-2 border-brand-charcoal px-6 py-2 text-sm font-bold text-brand-charcoal transition hover:bg-brand-charcoal hover:text-white"
          >
            More Team Members
          </Link>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member) => (
            <div
              key={member.name}
              className="group overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-xl"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top transition group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/90 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-white">
                    {member.role}
                  </p>
                  <h3 className="text-lg font-bold text-white">{member.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

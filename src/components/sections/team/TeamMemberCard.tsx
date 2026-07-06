import Image from "next/image";
import type { teamMembers } from "@/config/site";

type TeamMember = (typeof teamMembers)[number];

interface TeamMemberCardProps {
  member: TeamMember;
  featured?: boolean;
}

export function TeamMemberCard({ member, featured = false }: TeamMemberCardProps) {
  const imageAlt = member.name || member.role;

  if (featured) {
    return (
      <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
        <article className="card-modern overflow-hidden shadow-md lg:col-span-7">
          <div className="relative aspect-[16/10] min-h-[240px] sm:min-h-[280px] lg:min-h-[320px]">
            <Image
              src={member.image}
              alt={imageAlt}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </article>

        <article className="card-modern flex flex-col justify-center p-6 shadow-md sm:p-8 lg:col-span-5 lg:p-10">
          {member.name ? (
            <h3 className="font-serif text-3xl font-bold text-brand-heading md:text-4xl">
              {member.name}
            </h3>
          ) : null}
          <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-brand-body">
            {member.role}
          </p>
          <p className="mt-6 text-base leading-relaxed text-brand-body">
            Leading G3-Biz with a focus on trust, compliance, and sustainable growth across
            distribution operations in Limbe and the South West Region.
          </p>
          <div className="mt-8 h-1 w-12 bg-brand-yellow" aria-hidden />
        </article>
      </div>
    );
  }

  return (
    <article className="group card-modern overflow-hidden">
      <div
        className={`relative overflow-hidden img-zoom ${
          featured ? "h-80" : "h-72"
        }`}
      >
        <Image
          src={member.image}
          alt={imageAlt}
          fill
          className="object-cover object-top transition duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent transition duration-500 group-hover:from-black group-hover:via-black/60 group-hover:to-black/20" />
        <div className="absolute inset-x-0 bottom-0 p-5">
          {member.name ? (
            <h3 className="font-serif text-xl font-bold text-white">{member.name}</h3>
          ) : null}
          <p className="mt-1 text-xs font-medium uppercase tracking-wide text-white/75 transition duration-500 group-hover:text-white">
            {member.role}
          </p>
        </div>
      </div>
    </article>
  );
}

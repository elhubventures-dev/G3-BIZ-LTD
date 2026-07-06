import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, CalendarClock, MapPin, Target } from "lucide-react";
import { AnimateIn } from "@/components/shared/motion";
import { siteConfig } from "@/config/site";

function ProjectsIntro() {
  return (
    <section className="border-b border-brand-border bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <AnimateIn className="mx-auto max-w-3xl text-center">
          <span className="top-head">Ongoing Work</span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-brand-heading-alt md:text-4xl">
            Projects that support business growth in Limbe
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-brand-body">
            {siteConfig.shortName} continues to execute practical projects that strengthen operations,
            product availability, and customer service across our distribution network.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}

function ProjectCard() {
  return (
    <section className="bg-brand-light py-20">
      <div className="mx-auto max-w-7xl px-4">
        <AnimateIn className="card-modern mx-auto max-w-4xl p-8 md:p-10">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-yellow/10">
              <BriefcaseBusiness className="h-6 w-6 text-brand-yellow" />
            </div>
            <div>
              <span className="top-head !text-xs">Featured Project</span>
              <h3 className="mt-1 font-serif text-2xl font-bold text-brand-heading">
                G3-Biz Ltd Projects
              </h3>
              <p className="mt-3 text-brand-body">
                Ongoing operational and market-development initiatives focused on disciplined execution,
                customer value, and sustainable distribution growth.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-white p-4">
              <MapPin className="h-5 w-5 text-brand-yellow" />
              <p className="mt-2 text-sm font-semibold text-brand-heading">Location</p>
              <p className="text-sm text-brand-body">Mile 2, Limbe</p>
            </div>
            <div className="rounded-xl bg-white p-4">
              <Target className="h-5 w-5 text-brand-yellow" />
              <p className="mt-2 text-sm font-semibold text-brand-heading">Focus</p>
              <p className="text-sm text-brand-body">Execution & market expansion</p>
            </div>
            <div className="rounded-xl bg-white p-4">
              <CalendarClock className="h-5 w-5 text-brand-yellow" />
              <p className="mt-2 text-sm font-semibold text-brand-heading">Status</p>
              <p className="text-sm text-brand-body">Ongoing</p>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

function ProjectsCta() {
  return (
    <section className="bg-brand-yellow py-14">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 text-center sm:flex-row sm:text-left">
        <div>
          <h2 className="font-serif text-2xl font-bold text-white">Need project support?</h2>
          <p className="mt-2 text-white/85">
            Contact our team to discuss distribution or business development opportunities.
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

export function ProjectsPageContent() {
  return (
    <>
      <ProjectsIntro />
      <ProjectCard />
      <ProjectsCta />
    </>
  );
}

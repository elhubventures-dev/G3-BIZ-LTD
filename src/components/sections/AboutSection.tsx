import Image from "next/image";
import Link from "next/link";
import { visionPoints, strategicPillars, objectives } from "@/config/site";
import { CheckCircle } from "lucide-react";
import {
  AnimateIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/motion";

export function AboutSection() {
  return (
    <section className="section-accent py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-stretch gap-12 lg:grid-cols-2">
          <AnimateIn variant="slideLeft" className="h-full">
            <div className="card-modern flex h-full flex-col p-8 md:p-10">
              <span className="top-head">Who Are We, G3-Biz?</span>
              <h2 className="mt-2 font-serif text-3xl font-bold text-brand-heading-alt md:text-4xl">
                Our Vision
              </h2>
              <p className="mt-4 text-lg font-medium text-brand-heading">
                Establish G3-Biz Ltd as the most reputable enterprise in Cameroon in terms of{" "}
                <strong>TRUST, EXPANSION, VALUE CREATION/SHARING</strong>
              </p>
              <StaggerContainer className="mt-6 flex-1 space-y-3" stagger={0.08}>
                <ul className="space-y-3">
                  {visionPoints.map((point) => (
                    <StaggerItem key={point}>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-yellow" />
                        <span className="text-brand-body">{point}</span>
                      </li>
                    </StaggerItem>
                  ))}
                </ul>
              </StaggerContainer>
              <Link href="/about-us" className="btn-primary mt-8 !text-sm self-start">
                Learn More About Us
              </Link>
            </div>
          </AnimateIn>

          <AnimateIn variant="slideRight" delay={0.1} className="h-full">
            <div className="relative h-full min-h-[280px]">
              <div className="relative h-full min-h-[280px] overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/images/uploads/2024/08/WhatsApp-Image-2024-08-20-at-19.18.08-2-e1725534524931.jpeg"
                  alt="G3-Biz Ltd team and operations"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-2xl bg-brand-yellow p-6 shadow-lg">
                <p className="text-3xl font-extrabold text-white">19+</p>
                <p className="text-sm font-semibold text-white/90">Years of Operation</p>
              </div>
            </div>
          </AnimateIn>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          <AnimateIn variant="fadeUp" delay={0.1}>
            <div className="card-modern h-full p-8">
              <h3 className="font-serif text-xl font-bold text-brand-heading">Culture</h3>
              <p className="mt-2 font-serif text-2xl font-semibold text-brand-heading-alt">
                &ldquo;Success from Trustful Relationships&rdquo;
              </p>
              <p className="mt-4 text-brand-body">
                Offering managerial trainings and consultancy, and internship opportunities to
                learners.
              </p>
              <h4 className="mt-6 font-bold text-brand-heading">Strategic Pillars</h4>
              <ul className="mt-3 space-y-2">
                {strategicPillars.map((pillar) => (
                  <li key={pillar} className="flex items-center gap-2 text-brand-body">
                    <span className="h-2 w-2 rounded-full bg-brand-yellow" />
                    {pillar}
                  </li>
                ))}
              </ul>
            </div>
          </AnimateIn>

          <AnimateIn variant="fadeUp" delay={0.2}>
            <div className="card-dark h-full p-8">
              <h3 className="font-serif text-xl font-bold text-white">Our Objectives</h3>
              <ul className="mt-6 space-y-4">
                {objectives.map((obj, i) => (
                  <li key={obj} className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-yellow text-sm font-bold text-white">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="pt-1">{obj}</span>
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

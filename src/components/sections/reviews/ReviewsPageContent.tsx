import { Quote, Star, Truck, Handshake, ShieldCheck } from "lucide-react";
import {
  AnimateIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/motion";
import { QuoteButton } from "@/components/shared/QuoteButton";
import { customerReviews, reviewHighlights } from "@/config/reviews";
import { siteConfig } from "@/config/site";

const trustPillars = [
  {
    icon: Truck,
    title: "Reliable Delivery",
    text: "Primary and secondary distribution with professional depot operations at Mile 2.",
  },
  {
    icon: Handshake,
    title: "Trusted Partnership",
    text: "Long-standing relationships with retailers, hospitality venues, and GCSA customers.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance First",
    text: "Disciplined processes and accountable service across every customer interaction.",
  },
] as const;

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < count ? "fill-brand-yellow text-brand-yellow" : "text-brand-border"}`}
        />
      ))}
    </div>
  );
}

function ReviewsIntro() {
  const featured = customerReviews[0];

  return (
    <section className="border-b border-brand-border bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <AnimateIn variant="slideLeft">
            <span className="top-head">Clients Love</span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-brand-heading-alt md:text-4xl">
              What customers say about G3-Biz
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-brand-body">
              Retailers, hospitality partners, and buyers across Limbe and the South West Region
              trust {siteConfig.shortName} for dependable Guinness and Diageo distribution.
            </p>
            <p className="mt-4 text-brand-body">
              Our reputation is built on punctual delivery, transparent partnerships, and a depot
              team that treats every account with professionalism.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              {reviewHighlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-brand-border bg-brand-light px-5 py-3"
                >
                  <p className="text-xl font-extrabold text-brand-yellow">{item.value}</p>
                  <p className="text-xs font-bold uppercase tracking-wide text-brand-heading">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </AnimateIn>

          <AnimateIn variant="slideRight" delay={0.1}>
            <blockquote className="card-dark relative p-8 md:p-10">
              <Quote className="absolute right-6 top-6 h-10 w-10 text-brand-yellow/30" />
              <StarRating count={featured.rating} />
              <p className="mt-5 font-serif text-xl font-medium italic leading-relaxed text-white">
                &ldquo;{featured.text}&rdquo;
              </p>
              <footer className="mt-6 border-t border-white/10 pt-5">
                <p className="font-bold text-white">{featured.name}</p>
                <p className="text-sm text-white/70">
                  {featured.role} · {featured.location}
                </p>
              </footer>
            </blockquote>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

function ReviewsGrid() {
  return (
    <section className="bg-brand-light py-20">
      <div className="mx-auto max-w-7xl px-4">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <span className="top-head">Testimonials</span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-brand-heading-alt">
            Customer feedback
          </h2>
          <p className="mt-3 text-brand-body">
            Voices from partners who rely on G3-Biz for distribution, supply, and service.
          </p>
        </AnimateIn>

        <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {customerReviews.map((review) => (
            <StaggerItem key={review.name}>
              <article className="card-modern flex h-full flex-col p-6">
                <StarRating count={review.rating} />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-brand-body">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="mt-6 border-t border-brand-border pt-4">
                  <p className="font-bold text-brand-heading">{review.name}</p>
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-yellow">
                    {review.role}
                  </p>
                  <p className="text-xs text-brand-body/70">{review.location}</p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function ReviewsTrust() {
  return (
    <section className="on-dark section-accent bg-brand-charcoal py-20">
      <div className="mx-auto max-w-7xl px-4">
        <AnimateIn className="text-center">
          <span className="top-head">Why Partners Choose Us</span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-white">
            Trust earned through delivery
          </h2>
        </AnimateIn>

        <StaggerContainer className="mt-12 grid gap-6 md:grid-cols-3">
          {trustPillars.map((pillar) => (
            <StaggerItem key={pillar.title}>
              <div className="card-glass h-full p-8 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-yellow">
                  <pillar.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-5 font-serif text-xl font-bold text-white">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75">{pillar.text}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

export function ReviewsPageContent() {
  return (
    <>
      <ReviewsIntro />
      <ReviewsGrid />
      <ReviewsTrust />
    </>
  );
}

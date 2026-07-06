import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, MapPin, MessageCircle } from "lucide-react";
import { AnimateIn } from "@/components/shared/motion";
import { QuoteButton } from "@/components/shared/QuoteButton";
import { ContactForm } from "@/components/sections/ContactForm";
import { siteConfig } from "@/config/site";

const businessHours = [
  "Tuesday – Saturday: 7:00 AM – 5:00 PM",
  "Sunday: 11:00 AM – 5:00 PM",
] as const;

function ContactIntro() {
  return (
    <section className="border-b border-brand-border bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <AnimateIn variant="slideLeft">
            <span className="top-head">Reach G3-Biz</span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-brand-heading-alt">
              We&apos;re here to support your business
            </h2>
            <p className="mt-4 text-brand-body">
              Contact {siteConfig.shortName} for distribution partnerships, product enquiries,
              consultancy, internship opportunities, or general support.
            </p>
            <p className="mt-4 text-brand-body">
              Our depot team at Mile 2, Limbe is ready to assist retailers, hospitality partners,
              and customers across the South West Region.
            </p>
          </AnimateIn>

          <AnimateIn variant="slideRight" delay={0.1}>
            <div className="relative min-h-[280px] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/uploads/2024/08/WhatsApp-Image-2024-08-20-at-19.22.18.jpeg"
                alt="G3-Biz depot and team"
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

function QuickContactBar() {
  return (
    <section className="bg-brand-light py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-6 md:grid-cols-3">
          <AnimateIn>
            <div className="card-modern flex h-full items-start gap-4 p-6">
              <Clock className="h-6 w-6 shrink-0 text-brand-yellow" />
              <div>
                <h3 className="font-serif text-lg font-bold text-brand-heading">Business Hours</h3>
                <ul className="mt-2 space-y-1 text-sm text-brand-body">
                  {businessHours.map((slot) => (
                    <li key={slot}>{slot}</li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.05}>
            <div className="card-modern flex h-full items-start gap-4 p-6">
              <MapPin className="h-6 w-6 shrink-0 text-brand-yellow" />
              <div>
                <h3 className="font-serif text-lg font-bold text-brand-heading">Visit Us</h3>
                <p className="mt-2 text-sm text-brand-body">{siteConfig.address}</p>
                <p className="mt-1 text-sm text-brand-body">{siteConfig.poBox}</p>
                <p className="mt-1 text-xs text-brand-body/80">Plus code: 26M6+H7P, Limbe</p>
              </div>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <div className="card-modern flex h-full items-start gap-4 p-6">
              <MessageCircle className="h-6 w-6 shrink-0 text-brand-yellow" />
              <div>
                <h3 className="font-serif text-lg font-bold text-brand-heading">WhatsApp</h3>
                <p className="mt-2 text-sm text-brand-body">
                  Message us for quick enquiries and support.
                </p>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex text-sm font-semibold text-brand-heading transition hover:text-brand-yellow"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

function MapSection() {
  return (
    <section className="on-dark bg-brand-charcoal py-20">
      <div className="mx-auto max-w-7xl px-4">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <span className="top-head">Find Us</span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-white">G3-Biz Depot, Mile 2</h2>
          <p className="mt-4 text-white/75">
            Visit our depot in Limbe for product enquiries, partnerships, and customer support.
          </p>
        </AnimateIn>

        <AnimateIn className="mt-10 overflow-hidden rounded-2xl shadow-2xl" delay={0.1}>
          <iframe
            title="G3-Biz Ltd location in Limbe"
            src="https://maps.google.com/maps?q=26M6%2BH7P%2C%20Limbe&t=m&z=15&output=embed&iwloc=near"
            className="h-[420px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </AnimateIn>
      </div>
    </section>
  );
}

function ContactCta() {
  return (
    <section className="bg-brand-yellow py-14">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 text-center sm:flex-row sm:text-left">
        <div>
          <h2 className="font-serif text-2xl font-bold text-white">Need a distribution quote?</h2>
          <p className="mt-2 text-white/85">
            Request pricing and partnership details for Guinness and Diageo products.
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <QuoteButton className="inline-flex items-center justify-center gap-2 rounded bg-black px-6 py-3 text-sm font-bold text-white transition hover:bg-black/85">
            Request a Quote
          </QuoteButton>
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 rounded border-2 border-white/40 px-6 py-3 text-sm font-bold text-white transition hover:border-white hover:bg-white/10"
          >
            Our Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function ContactPageContent() {
  return (
    <>
      <ContactIntro />
      <QuickContactBar />
      <ContactForm />
      <MapSection />
      <ContactCta />
    </>
  );
}

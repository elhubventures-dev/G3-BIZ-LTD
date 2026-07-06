import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  FileCheck,
  Fingerprint,
  Hash,
  Mail,
  MapPin,
  Phone,
  UserPlus,
} from "lucide-react";
import { QuoteButton } from "@/components/shared/QuoteButton";
import {
  AnimateIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/motion";
import { customerCreationDocuments, serviceSteps } from "@/config/services";
import { siteConfig } from "@/config/site";

const documentIcons = {
  id: Fingerprint,
  licence: FileCheck,
  location: MapPin,
  tax: Hash,
} as const;

function CustomerCreationIntro() {
  return (
    <section className="border-b border-brand-border bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <Link
          href="/services"
          className="mb-8 inline-flex items-center gap-1 text-sm font-semibold text-brand-heading hover:text-brand-yellow"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to services
        </Link>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <AnimateIn variant="slideLeft">
            <span className="top-head">New Customer Registration</span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-brand-heading-alt md:text-4xl">
              Get your buying number with G3-Biz
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-brand-body">
              At {siteConfig.shortName}, we make it easy for new customers to register and obtain a
              buying number. Our streamlined process lets you focus on growing your business while
              we handle the paperwork.
            </p>
            <p className="mt-4 text-brand-body">
              Share your contact details so we can keep you updated on orders and account status.
              Submit your complete file at our physical office in Mile 2, Limbe.
            </p>
          </AnimateIn>

          <AnimateIn variant="slideRight" delay={0.1}>
            <div className="relative min-h-[300px] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/uploads/2024/08/WhatsApp-Image-2024-08-20-at-19.18.08-2-e1725534524931.jpeg"
                alt="G3-Biz customer registration"
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

function RequiredDocuments() {
  return (
    <section className="bg-brand-light py-20">
      <div className="mx-auto max-w-7xl px-4">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <span className="top-head">Requirements</span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-brand-heading-alt">
            Documents you need to provide
          </h2>
          <p className="mt-3 text-brand-body">
            Prepare these items before visiting our Mile 2 office to speed up your registration.
          </p>
        </AnimateIn>

        <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {customerCreationDocuments.map((doc, index) => {
            const Icon = documentIcons[doc.icon];
            return (
              <StaggerItem key={doc.title}>
                <div className="card-modern h-full p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-yellow text-sm font-bold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <Icon className="mt-4 h-6 w-6 text-brand-yellow" />
                  <h3 className="mt-3 font-serif text-lg font-bold text-brand-heading">
                    {doc.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-body">{doc.text}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

function RegistrationProcess() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <span className="top-head">The Process</span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-brand-heading-alt">
            Four simple steps to get started
          </h2>
        </AnimateIn>

        <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {serviceSteps.map((step) => (
            <StaggerItem key={step.step}>
              <div className="card-modern h-full border-t-4 border-t-brand-yellow p-6">
                <span className="font-serif text-3xl font-bold text-brand-yellow">{step.step}</span>
                <h3 className="mt-3 font-serif text-lg font-bold text-brand-heading">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-body">{step.text}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function VisitOffice() {
  return (
    <section className="on-dark bg-brand-charcoal py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <AnimateIn variant="slideLeft">
            <span className="top-head">Visit Us</span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-white">
              Submit your file at our Limbe office
            </h2>
            <p className="mt-4 text-white/80">
              Bring your complete documentation to our depot team. We will guide you through
              registration and answer any questions about becoming a GCSA customer.
            </p>

            <ul className="mt-8 space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-yellow" />
                <div>
                  <p className="font-bold text-white">Office Address</p>
                  <p className="text-sm text-white/75">{siteConfig.address}</p>
                  <p className="text-sm text-white/75">{siteConfig.poBox}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand-yellow" />
                <div>
                  <p className="font-bold text-white">Phone</p>
                  <a href={`tel:${siteConfig.phone}`} className="text-sm text-white/75 hover:text-white">
                    {siteConfig.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand-yellow" />
                <div>
                  <p className="font-bold text-white">Email</p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-sm text-white/75 hover:text-white"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </li>
            </ul>
          </AnimateIn>

          <AnimateIn variant="slideRight" delay={0.1}>
            <div className="card-glass p-8">
              <UserPlus className="h-10 w-10 text-brand-yellow" />
              <h3 className="mt-4 font-serif text-xl font-bold text-white">Ready to register?</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/75">
                Start your enquiry online and our team will follow up with next steps. You can also
                visit us directly with your documents.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <QuoteButton
                  product="Customer Creation"
                  className="btn-primary flex-1 justify-center !px-5 !py-2.5 !text-sm"
                >
                  Start Enquiry
                </QuoteButton>
                <Link
                  href="/contact-us"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded border-2 border-white/30 px-5 py-2.5 text-sm font-bold text-white transition hover:border-white hover:bg-white/10"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

function CustomerCreationCta() {
  return (
    <section className="bg-brand-yellow py-14">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 text-center sm:flex-row sm:text-left">
        <div>
          <h2 className="font-serif text-2xl font-bold text-white md:text-3xl">
            Become a GCSA customer today
          </h2>
          <p className="mt-2 text-white/85">
            Join retailers and hospitality partners who trust G3-Biz for distribution in Limbe.
          </p>
        </div>
        <Link
          href="/services/reputable-customer-of-gcsa"
          className="inline-flex shrink-0 items-center gap-2 rounded bg-black px-6 py-3 text-sm font-bold text-white transition hover:bg-black/85"
        >
          Learn about GCSA benefits
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

export function CustomerCreationContent() {
  return (
    <>
      <CustomerCreationIntro />
      <RequiredDocuments />
      <RegistrationProcess />
      <VisitOffice />
      <CustomerCreationCta />
    </>
  );
}

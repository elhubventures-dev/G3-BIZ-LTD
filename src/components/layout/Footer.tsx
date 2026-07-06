import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import {
  siteConfig,
  aboutNavItems,
  moreNavItems,
  policyPages,
  primaryNavItems,
} from "@/config/site";
import { getAllServices } from "@/lib/content";

const serviceLinks = getAllServices().map((s) => ({
  label: s.title,
  href: `/services/${s.slug}`,
}));

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <h3 className="mb-4 text-xs font-bold uppercase tracking-widest !text-white">
        {title}
        <span className="mt-2 block h-0.5 w-8 bg-brand-yellow" />
      </h3>
      {children}
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="text-sm text-white/70 transition hover:translate-x-0.5 hover:text-white"
    >
      {children}
    </Link>
  );
}

export function Footer() {
  const foundedYear = new Date(siteConfig.founded).getFullYear();

  return (
    <footer className="on-dark bg-black text-white/70">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <Image
              src="/images/logo.png"
              alt={siteConfig.shortName}
              width={160}
              height={50}
              className="mb-5 h-11 w-auto object-contain brightness-110"
            />
            <p className="max-w-sm text-sm leading-relaxed text-white/65">
              Established {foundedYear}, {siteConfig.shortName} is Cameroon&apos;s trusted beverage
              distribution partner in Limbe — primary and secondary distribution of Guinness and
              Diageo products across the South West Region.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                WhatsApp
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
              >
                <Mail className="h-3.5 w-3.5" />
                Email Us
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-3">
            <FooterColumn title="Company">
              <ul className="space-y-2.5">
                {aboutNavItems.map((item) => (
                  <li key={item.href}>
                    <FooterLink href={item.href}>{item.label}</FooterLink>
                  </li>
                ))}
                {primaryNavItems
                  .filter((i) => !aboutNavItems.some((a) => a.href === i.href) && i.href !== "/")
                  .map((item) => (
                    <li key={item.href}>
                      <FooterLink href={item.href}>{item.label}</FooterLink>
                    </li>
                  ))}
              </ul>
            </FooterColumn>

            <FooterColumn title="Services">
              <ul className="space-y-2.5">
                <li>
                  <FooterLink href="/services">All Services</FooterLink>
                </li>
                {serviceLinks.map((item) => (
                  <li key={item.href}>
                    <FooterLink href={item.href}>{item.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </FooterColumn>

            <FooterColumn title="Resources">
              <ul className="space-y-2.5">
                {moreNavItems.map((item) => (
                  <li key={item.href}>
                    <FooterLink href={item.href}>{item.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </FooterColumn>
          </div>

          {/* Contact cards */}
          <div className="lg:col-span-3">
            <FooterColumn title="Contact">
              <ul className="space-y-3">
                <li className="flex gap-3 rounded-lg border border-white/10 bg-white/5 p-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white" />
                  <span className="text-sm leading-relaxed">{siteConfig.address}</span>
                </li>
                <li className="flex gap-3 rounded-lg border border-white/10 bg-white/5 p-3">
                  <Phone className="h-4 w-4 shrink-0 text-white" />
                  <div className="text-sm">
                    <a href={`tel:${siteConfig.phone}`} className="block hover:text-white">
                      {siteConfig.phone}
                    </a>
                    <a href={`tel:${siteConfig.phoneAlt}`} className="mt-1 block hover:text-white">
                      {siteConfig.phoneAlt}
                    </a>
                  </div>
                </li>
                <li className="flex gap-3 rounded-lg border border-white/10 bg-white/5 p-3">
                  <Mail className="h-4 w-4 shrink-0 text-white" />
                  <a href={`mailto:${siteConfig.email}`} className="text-sm hover:text-white">
                    {siteConfig.email}
                  </a>
                </li>
                <li className="flex gap-3 rounded-lg border border-white/10 bg-white/5 p-3">
                  <Clock className="h-4 w-4 shrink-0 text-white" />
                  <span className="text-sm">{siteConfig.poBox}</span>
                </li>
              </ul>
            </FooterColumn>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 bg-[#0a0a0a]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-5 text-xs text-white/50 md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.shortName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            {policyPages.map((item) => (
              <Link
                key={item.slug}
                href={`/policies/${item.slug}`}
                className="transition hover:text-white"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { siteConfig, navItems, policyPages } from "@/config/site";

export function Footer() {
  return (
    <footer className="on-dark relative bg-brand-charcoal text-brand-muted">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src="/images/logo.png"
            alt={siteConfig.shortName}
            width={160}
            height={50}
            className="mb-4 h-12 w-auto object-contain brightness-110"
          />
          <p className="text-sm leading-relaxed">
            Established {new Date(siteConfig.founded).getFullYear()}, G3-Biz Ltd is Cameroon&apos;s
            trusted beverage distribution partner in Limbe, specializing in Guinness and Diageo
            products.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-serif text-lg font-bold text-white">Quick Links</h3>
          <ul className="space-y-2">
            {navItems.slice(0, 7).map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-serif text-lg font-bold text-white">Policies</h3>
          <ul className="space-y-2">
            {policyPages.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/policies/${item.slug}`}
                  className="text-sm transition hover:text-white"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-serif text-lg font-bold text-white">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white" />
              <span>{siteConfig.address}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-white" />
              <a href={`tel:${siteConfig.phone}`} className="hover:text-white">
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-white" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 shrink-0 text-white" />
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                WhatsApp Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 bg-brand-dark">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs sm:flex-row">
          <p>&copy; {new Date().getFullYear()} {siteConfig.shortName}. All rights reserved.</p>
          <p>{siteConfig.poBox}</p>
        </div>
      </div>
    </footer>
  );
}

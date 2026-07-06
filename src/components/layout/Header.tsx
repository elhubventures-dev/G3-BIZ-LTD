"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  ChevronDown,
  Home,
  Mail,
  Menu,
  Phone,
  Search,
  X,
} from "lucide-react";
import {
  siteConfig,
  aboutNavItems,
  moreNavItems,
} from "@/config/site";
import { getAllServices } from "@/lib/content";
import { QuoteButton } from "@/components/shared/QuoteButton";
import { cn } from "@/lib/utils";

const servicesNavItems = getAllServices().map((s) => ({
  label: s.title,
  href: `/services/${s.slug}`,
}));

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function isGroupActive(pathname: string, items: readonly { href: string }[]) {
  return items.some((item) => isActive(pathname, item.href));
}

function NavDivider() {
  return <span className="w-px self-stretch bg-brand-border" aria-hidden="true" />;
}

function NavDropdown({
  label,
  items,
  extraHref,
  extraLabel,
}: {
  label: string;
  items: readonly { label: string; href: string }[];
  extraHref?: string;
  extraLabel?: string;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const active = isGroupActive(pathname, items) || (extraHref ? isActive(pathname, extraHref) : false);

  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <div className="relative flex h-full" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "nav-menu-item flex h-full items-center gap-1.5 px-5 text-xs font-bold uppercase tracking-wider transition-colors",
          active || open
            ? "bg-brand-light text-brand-yellow"
            : "text-brand-heading/80 hover:bg-brand-light/80 hover:text-brand-heading"
        )}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {label}
        <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", open && "rotate-180")} />
      </button>

      {open && (
        <div className="absolute left-0 top-full z-50 min-w-[220px] border border-brand-border bg-white py-1 shadow-lg">
          {extraHref && extraLabel && (
            <Link
              href={extraHref}
              onClick={() => setOpen(false)}
              className={cn(
                "block border-b border-brand-border px-4 py-2.5 text-xs font-bold uppercase tracking-wide transition-colors hover:bg-brand-light",
                isActive(pathname, extraHref) ? "text-brand-yellow" : "text-brand-heading"
              )}
            >
              {extraLabel}
            </Link>
          )}
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "block px-4 py-2.5 text-sm font-medium transition-colors hover:bg-brand-light",
                isActive(pathname, item.href) ? "text-brand-yellow" : "text-brand-heading/80"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const active = isActive(pathname, href);

  return (
    <Link
      href={href}
      className={cn(
        "nav-menu-item flex h-full items-center px-5 text-xs font-bold uppercase tracking-wider transition-colors",
        active
          ? "bg-brand-light text-brand-yellow"
          : "text-brand-heading/80 hover:bg-brand-light/80 hover:text-brand-heading"
      )}
    >
      {label}
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const q = searchQuery.trim();
    router.push(q ? `/blog?q=${encodeURIComponent(q)}` : "/blog");
  };

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar */}
      <div className="on-dark hidden border-b border-white/10 bg-black sm:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 text-xs text-white/80">
          <div className="flex items-center gap-5">
            <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-1.5 font-medium transition hover:text-white">
              <Phone className="h-3.5 w-3.5" />
              {siteConfig.phone}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-1.5 font-medium transition hover:text-white">
              <Mail className="h-3.5 w-3.5" />
              {siteConfig.email}
            </a>
          </div>
          <span className="font-medium text-white/60">{siteConfig.address}</span>
        </div>
      </div>

      {/* Logo + corporate nav */}
      <div className="border-b border-brand-border bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 lg:gap-6">
          <Link href="/" className="shrink-0">
            <Image
              src="/images/logo.png"
              alt={siteConfig.shortName}
              width={150}
              height={48}
              className="h-9 w-auto object-contain lg:h-10"
              priority
            />
          </Link>

          {/* Desktop corporate menu bar */}
          <div className="nav-corporate-bar hidden min-w-0 flex-1 lg:flex">
            <Link
              href="/"
              className={cn(
                "flex w-12 shrink-0 items-center justify-center border-r border-brand-border transition-colors",
                isActive(pathname, "/")
                  ? "bg-brand-yellow text-white"
                  : "bg-brand-yellow text-white hover:bg-brand-yellow/90"
              )}
              aria-label="Home"
            >
              <Home className="h-4 w-4" strokeWidth={2.5} />
            </Link>

            <NavDivider />
            <NavLink href="/about-us" label="About" />
            <NavDivider />
            <NavLink href="/teams" label="Our Team" />
            <NavDivider />
            <NavDropdown
              label="Services"
              items={servicesNavItems}
              extraHref="/services"
              extraLabel="All Services"
            />
            <NavDivider />
            <NavLink href="/our-products" label="Products" />
            <NavDivider />
            <NavLink href="/blog" label="Blog" />
            <NavDivider />
            <NavDropdown label="More" items={moreNavItems} />
            <div className="flex items-center px-3">
              <Link
                href="/contact-us"
                className={cn(
                  "inline-flex items-center rounded-sm px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors",
                  isActive(pathname, "/contact-us")
                    ? "bg-brand-yellow text-white"
                    : "bg-brand-yellow text-white hover:bg-brand-yellow/90"
                )}
              >
                Contact
              </Link>
            </div>

            <form
              onSubmit={handleSearch}
              className="ml-auto flex min-w-[140px] flex-1 items-center justify-end border-l border-brand-border px-4"
            >
              <div className="relative w-full max-w-[200px]">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-brand-body/50" />
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search"
                  className="w-full rounded border border-brand-border bg-white py-2 pl-9 pr-3 text-sm text-brand-heading outline-none transition focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow/30"
                  aria-label="Search site"
                />
              </div>
            </form>
          </div>

          <button
            type="button"
            className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded border border-brand-border text-brand-heading transition hover:border-brand-yellow hover:text-brand-yellow lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[60] lg:hidden",
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
        aria-hidden={!mobileOpen}
      >
        <div
          className={cn(
            "absolute inset-0 bg-black/40 transition-opacity duration-300",
            mobileOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={cn(
            "absolute right-0 top-0 flex h-full w-full max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ease-out",
            mobileOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex items-center justify-between border-b border-brand-border px-5 py-4">
            <Image src="/images/logo.png" alt={siteConfig.shortName} width={130} height={42} className="h-8 w-auto object-contain" />
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-brand-heading hover:bg-brand-light"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <form onSubmit={handleSearch} className="border-b border-brand-border px-5 py-4">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-body/50" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search"
                className="w-full rounded border border-brand-border py-2.5 pl-10 pr-3 text-sm outline-none focus:border-brand-yellow"
              />
            </div>
          </form>

          <nav className="flex-1 overflow-y-auto px-3 py-4">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="mb-2 block rounded-lg px-3 py-3 text-sm font-bold uppercase tracking-wide text-brand-heading hover:bg-brand-light"
            >
              Home
            </Link>

            <p className="px-3 pb-1 pt-3 text-xs font-bold uppercase tracking-widest text-brand-body/60">About</p>
            {aboutNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "block rounded-lg px-3 py-2.5 text-sm font-medium",
                  isActive(pathname, item.href) ? "text-brand-yellow" : "text-brand-heading hover:bg-brand-light"
                )}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/teams"
              onClick={() => setMobileOpen(false)}
              className={cn(
                "mt-1 block rounded-lg px-3 py-2.5 text-sm font-bold uppercase tracking-wide",
                isActive(pathname, "/teams") ? "text-brand-yellow" : "text-brand-heading hover:bg-brand-light"
              )}
            >
              Our Team
            </Link>

            <p className="px-3 pb-1 pt-3 text-xs font-bold uppercase tracking-widest text-brand-body/60">Services</p>
            <Link href="/services" onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-2.5 text-sm font-medium text-brand-heading hover:bg-brand-light">
              All Services
            </Link>
            {servicesNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "block rounded-lg px-3 py-2.5 text-sm font-medium",
                  isActive(pathname, item.href) ? "text-brand-yellow" : "text-brand-heading hover:bg-brand-light"
                )}
              >
                {item.label}
              </Link>
            ))}

            <p className="px-3 pb-1 pt-3 text-xs font-bold uppercase tracking-widest text-brand-body/60">Pages</p>
            {[
              { label: "Products", href: "/our-products" },
              { label: "Blog", href: "/blog" },
              { label: "Contact", href: "/contact-us" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "block rounded-lg px-3 py-2.5 text-sm font-medium",
                  isActive(pathname, item.href) ? "text-brand-yellow" : "text-brand-heading hover:bg-brand-light"
                )}
              >
                {item.label}
              </Link>
            ))}

            <p className="px-3 pb-1 pt-3 text-xs font-bold uppercase tracking-widest text-brand-body/60">More</p>
            {moreNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "block rounded-lg px-3 py-2.5 text-sm font-medium",
                  isActive(pathname, item.href) ? "text-brand-yellow" : "text-brand-heading hover:bg-brand-light"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="space-y-3 border-t border-brand-border p-5">
            <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 text-sm font-medium text-brand-heading">
              <Phone className="h-4 w-4 text-brand-yellow" />
              {siteConfig.phone}
            </a>
            <QuoteButton
              className="btn-primary w-full !rounded !text-sm"
              onOpen={() => setMobileOpen(false)}
            >
              Get a Quote
            </QuoteButton>
          </div>
        </div>
      </div>
    </header>
  );
}

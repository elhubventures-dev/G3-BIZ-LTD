"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Mail, Menu, Phone, X } from "lucide-react";
import { siteConfig, primaryNavItems, moreNavItems } from "@/config/site";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function DesktopNavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const active = isActive(pathname, href);

  return (
    <Link
      href={href}
      className={cn(
        "group relative px-3 py-2 text-sm font-semibold tracking-wide transition-colors",
        active ? "text-brand-yellow" : "text-brand-heading/75 hover:text-brand-heading"
      )}
    >
      {label}
      <span
        className={cn(
          "absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-brand-yellow transition-transform origin-left",
          active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
        )}
      />
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMoreOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!moreOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [moreOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const moreActive = moreNavItems.some((item) => isActive(pathname, item.href));

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar */}
      <div className="on-dark hidden border-b border-white/10 bg-black sm:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 text-xs text-white/80">
          <div className="flex items-center gap-5">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-1.5 font-medium transition hover:text-white"
            >
              <Phone className="h-3.5 w-3.5" />
              {siteConfig.phone}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-1.5 font-medium transition hover:text-white"
            >
              <Mail className="h-3.5 w-3.5" />
              {siteConfig.email}
            </a>
          </div>
          <span className="font-medium text-white/60">{siteConfig.address}</span>
        </div>
      </div>

      {/* Main navigation */}
      <div
        className={cn(
          "border-b border-brand-border bg-white/95 backdrop-blur-md transition-shadow duration-300",
          scrolled && "shadow-md"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center gap-6 px-4 py-3 lg:py-3.5">
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

          <nav className="hidden flex-1 items-center justify-center gap-0.5 lg:flex">
            {primaryNavItems
              .filter((item) => item.href !== "/contact-us")
              .map((item) => (
                <DesktopNavLink key={item.href} href={item.href} label={item.label} />
              ))}

            <div className="relative" ref={moreRef}>
              <button
                type="button"
                onClick={() => setMoreOpen((open) => !open)}
                className={cn(
                  "flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold tracking-wide transition-colors",
                  moreActive || moreOpen
                    ? "text-brand-yellow"
                    : "text-brand-heading/75 hover:text-brand-heading"
                )}
                aria-expanded={moreOpen}
                aria-haspopup="true"
              >
                More
                <ChevronDown
                  className={cn("h-4 w-4 transition-transform duration-200", moreOpen && "rotate-180")}
                />
              </button>

              {moreOpen && (
                <div className="absolute left-0 top-full z-50 mt-2 min-w-[200px] overflow-hidden rounded-xl border border-brand-border bg-white py-1.5 shadow-xl">
                  {moreNavItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "block px-4 py-2.5 text-sm font-medium transition-colors hover:bg-brand-light",
                        isActive(pathname, item.href)
                          ? "text-brand-yellow"
                          : "text-brand-heading/80 hover:text-brand-heading"
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <div className="ml-auto flex items-center gap-3">
            <Link
              href="/contact-us"
              className="btn-primary hidden !rounded-lg !px-5 !py-2.5 !text-sm lg:inline-flex"
            >
              Get a Quote
            </Link>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-brand-border text-brand-heading transition hover:border-brand-yellow hover:text-brand-yellow lg:hidden"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
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
            <Image
              src="/images/logo.png"
              alt={siteConfig.shortName}
              width={130}
              height={42}
              className="h-8 w-auto object-contain"
            />
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-brand-heading hover:bg-brand-light"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-3 py-4">
            <p className="px-3 pb-2 text-xs font-bold uppercase tracking-widest text-brand-body/60">
              Menu
            </p>
            {[...primaryNavItems.filter((i) => i.href !== "/contact-us"), ...moreNavItems].map(
              (item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "block rounded-lg px-3 py-3 text-base font-semibold transition-colors",
                    isActive(pathname, item.href)
                      ? "bg-brand-light text-brand-yellow"
                      : "text-brand-heading hover:bg-brand-light"
                  )}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="space-y-3 border-t border-brand-border p-5">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-2 text-sm font-medium text-brand-heading"
            >
              <Phone className="h-4 w-4 text-brand-yellow" />
              {siteConfig.phone}
            </a>
            <Link href="/contact-us" className="btn-primary w-full !rounded-lg !text-sm">
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

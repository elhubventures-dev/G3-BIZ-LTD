"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { QuoteButton } from "@/components/shared/QuoteButton";

export function PreFooterCta() {
  const pathname = usePathname();
  if (pathname === "/services") return null;

  return (
    <div className="border-b border-white/10 bg-brand-yellow">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-14 text-center sm:flex-row sm:text-left">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-white/80">
            Partner with us
          </p>
          <h2 className="mt-1 font-serif text-2xl font-bold text-white md:text-3xl">
            Ready to experience the G3-Biz difference?
          </h2>
          <p className="mt-2 text-white/85">
            Join retailers and hospitality partners who trust our distribution across Limbe.
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <QuoteButton
            className="inline-flex items-center justify-center gap-2 rounded bg-black px-6 py-3 text-sm font-bold text-white transition hover:bg-black/85"
            showIcon
          >
            Request a Quote
          </QuoteButton>
          <Link
            href="/services/reputable-customer-of-gcsa"
            className="inline-flex items-center justify-center gap-2 rounded bg-white px-6 py-3 text-sm font-bold !text-[#8c001d] transition hover:bg-black hover:!text-white [&_svg]:text-current"
          >
            Become a Customer
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

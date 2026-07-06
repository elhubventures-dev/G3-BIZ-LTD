"use client";

import type { ReactNode } from "react";
import { QuoteEnquiryProvider } from "@/context/QuoteEnquiryContext";
import { QuoteEnquiryModal } from "@/components/shared/QuoteEnquiryModal";

export function SiteProviders({ children }: { children: ReactNode }) {
  return (
    <QuoteEnquiryProvider>
      {children}
      <QuoteEnquiryModal />
    </QuoteEnquiryProvider>
  );
}

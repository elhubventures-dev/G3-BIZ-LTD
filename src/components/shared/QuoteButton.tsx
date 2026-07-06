"use client";

import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { useQuoteEnquiry } from "@/context/QuoteEnquiryContext";
import { cn } from "@/lib/utils";

interface QuoteButtonProps {
  children: ReactNode;
  product?: string;
  className?: string;
  showIcon?: boolean;
  onOpen?: () => void;
}

export function QuoteButton({
  children,
  product,
  className,
  showIcon = false,
  onOpen,
}: QuoteButtonProps) {
  const { openQuote } = useQuoteEnquiry();

  return (
    <button
      type="button"
      onClick={() => {
        onOpen?.();
        openQuote({ product });
      }}
      className={cn(className)}
    >
      {children}
      {showIcon && <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />}
    </button>
  );
}

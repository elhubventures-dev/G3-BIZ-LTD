"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

interface QuoteEnquiryOptions {
  product?: string;
}

interface QuoteEnquiryContextValue {
  isOpen: boolean;
  product: string;
  openQuote: (options?: QuoteEnquiryOptions) => void;
  closeQuote: () => void;
}

const QuoteEnquiryContext = createContext<QuoteEnquiryContextValue | null>(null);

export function QuoteEnquiryProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState("");

  const openQuote = useCallback((options?: QuoteEnquiryOptions) => {
    setProduct(options?.product ?? "");
    setIsOpen(true);
  }, []);

  const closeQuote = useCallback(() => {
    setIsOpen(false);
  }, []);

  const value = useMemo(
    () => ({ isOpen, product, openQuote, closeQuote }),
    [isOpen, product, openQuote, closeQuote]
  );

  return (
    <QuoteEnquiryContext.Provider value={value}>{children}</QuoteEnquiryContext.Provider>
  );
}

export function useQuoteEnquiry() {
  const context = useContext(QuoteEnquiryContext);
  if (!context) {
    throw new Error("useQuoteEnquiry must be used within QuoteEnquiryProvider");
  }
  return context;
}

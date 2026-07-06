"use client";

import { type ReactNode } from "react";
import { AnimateIn } from "./motion";

export function AnimatedContent({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <AnimateIn className={className} variant="fadeUp">
      {children}
    </AnimateIn>
  );
}

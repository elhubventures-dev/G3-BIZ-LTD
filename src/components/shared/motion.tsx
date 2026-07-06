"use client";

import { motion, useInView, useReducedMotion, type Variants } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease } },
};

export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease } },
};

export const slideInLeftVariants: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease } },
};

export const slideInRightVariants: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease } },
};

export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

type AnimateInProps = {
  children: ReactNode;
  className?: string;
  variant?: "fadeUp" | "fadeIn" | "scaleIn" | "slideLeft" | "slideRight";
  delay?: number;
  once?: boolean;
  amount?: number;
};

const variantMap = {
  fadeUp: fadeUpVariants,
  fadeIn: fadeInVariants,
  scaleIn: scaleInVariants,
  slideLeft: slideInLeftVariants,
  slideRight: slideInRightVariants,
};

export function AnimateIn({
  children,
  className,
  variant = "fadeUp",
  delay = 0,
  once = true,
  amount = 0.2,
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount });
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variantMap[variant]}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

type StaggerProps = {
  children: ReactNode;
  className?: string;
  once?: boolean;
  amount?: number;
  stagger?: number;
};

export function StaggerContainer({
  children,
  className,
  once = true,
  amount = 0.1,
  stagger = 0.1,
}: StaggerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount });
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: 0.05 } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={className} variants={staggerItemVariants}>
      {children}
    </motion.div>
  );
}

type AnimatedCounterProps = {
  value: string;
  label: string;
  className?: string;
};

function parseNumericValue(value: string): { num: number; suffix: string } {
  const match = value.match(/^([\d,.]+)(.*)$/);
  if (!match) return { num: 0, suffix: value };
  const num = parseFloat(match[1].replace(/,/g, ""));
  return { num: isNaN(num) ? 0 : num, suffix: match[2] };
}

export function AnimatedCounter({ value, label, className }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const prefersReducedMotion = useReducedMotion();
  const { num, suffix } = parseNumericValue(value);
  const [display, setDisplay] = useState(prefersReducedMotion ? value : `0${suffix}`);

  useEffect(() => {
    if (!isInView || prefersReducedMotion) {
      setDisplay(value);
      return;
    }

    const duration = 1500;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(num * eased);
      const formatted = value.includes(",")
        ? current.toLocaleString()
        : String(current);
      setDisplay(`${formatted}${suffix}`);

      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView, num, suffix, value, prefersReducedMotion]);

  return (
    <div ref={ref} className={cn("text-center", className)}>
      <p className="text-4xl font-extrabold text-white md:text-5xl">{display}</p>
      <p className="mt-1 text-sm font-semibold text-white/90">{label}</p>
    </div>
  );
}

type SectionHeaderProps = {
  badge: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  badge,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <AnimateIn className={cn(align === "center" && "text-center", className)}>
      <span className="top-head">{badge}</span>
      <h2
        className={cn(
          "mt-2 font-serif text-3xl font-bold text-brand-heading-alt md:text-4xl",
          align === "center" && "mx-auto"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-brand-body",
            align === "center" && "mx-auto max-w-2xl"
          )}
        >
          {description}
        </p>
      )}
    </AnimateIn>
  );
}

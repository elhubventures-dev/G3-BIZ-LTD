"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const SLIDE_INTERVAL_MS = 5000;

const heroSlides = [
  {
    src: "/images/hero-slide-1.png",
    alt: "G3-Biz Ltd distribution facility with delivery trucks in Limbe",
  },
  {
    src: "/images/hero-slide-2.png",
    alt: "G3-Biz Ltd warehouse and fleet at Mile 2, Limbe",
  },
  {
    src: "/images/hero-slide-3.png",
    alt: "G3-Biz Ltd depot entrance and operations team in Limbe",
  },
] as const;

const heroEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

const textVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 + i * 0.12, duration: 0.7, ease: heroEase },
  }),
};

export function Hero() {
  const [current, setCurrent] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((index) => (index + 1) % heroSlides.length);
    }, SLIDE_INTERVAL_MS);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-brand-charcoal">
      <AnimatePresence mode="sync">
        {heroSlides.map((slide, index) =>
          index === current ? (
            <motion.div
              key={slide.src}
              className="absolute inset-0"
              initial={prefersReducedMotion ? false : { opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0 }}
              transition={{ duration: 1.2, ease: heroEase }}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={index === 0}
                className="object-cover object-center"
                sizes="100vw"
              />
            </motion.div>
          ) : null
        )}
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />

      <div className="relative mx-auto max-w-7xl px-4 py-24">
        <div className="max-w-3xl">
          <motion.span
            className="top-head mb-4"
            custom={0}
            initial={prefersReducedMotion ? false : "hidden"}
            animate="visible"
            variants={textVariants}
          >
            Est. 2005 · Limbe, Cameroon
          </motion.span>
          <motion.h1
            className="font-serif text-4xl font-bold leading-tight !text-white md:text-6xl"
            custom={1}
            initial={prefersReducedMotion ? false : "hidden"}
            animate="visible"
            variants={textVariants}
          >
            Global Strategic Business Company
          </motion.h1>
          <motion.span
            className="hero-brand-badge"
            custom={2}
            initial={prefersReducedMotion ? false : "hidden"}
            animate="visible"
            variants={textVariants}
          >
            (G3-Biz Ltd)
          </motion.span>
          <motion.p
            className="mt-6 text-lg text-gray-200 md:text-xl"
            custom={3}
            initial={prefersReducedMotion ? false : "hidden"}
            animate="visible"
            variants={textVariants}
          >
            Cameroon&apos;s most trusted beverage distribution partner — delivering Guinness,
            Diageo, and world-class products across the South West Region.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap gap-4"
            custom={4}
            initial={prefersReducedMotion ? false : "hidden"}
            animate="visible"
            variants={textVariants}
          >
            <Link href="/services" className="btn-primary gap-2">
              Our Services
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/our-products" className="btn-outline gap-2">
              View Products
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setCurrent(index)}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              index === current ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/70"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-yellow" />
    </section>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
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

export function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((index) => (index + 1) % heroSlides.length);
    }, SLIDE_INTERVAL_MS);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-brand-charcoal">
      {heroSlides.map((slide, index) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          priority={index === 0}
          className={cn(
            "object-cover object-center transition-opacity duration-1000 ease-in-out",
            index === current ? "opacity-100" : "opacity-0"
          )}
          sizes="100vw"
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />

      <div className="relative mx-auto max-w-7xl px-4 py-24">
        <div className="max-w-3xl">
          <span className="top-head mb-4">Est. 2005 · Limbe, Cameroon</span>
          <h1 className="font-serif text-4xl font-bold leading-tight !text-white md:text-6xl">
            Global Strategic Business Company
          </h1>
          <span className="hero-brand-badge">(G3-Biz Ltd)</span>
          <p className="mt-6 text-lg text-gray-200 md:text-xl">
            Cameroon&apos;s most trusted beverage distribution partner — delivering Guinness,
            Diageo, and world-class products across the South West Region.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/services" className="btn-primary gap-2">
              Our Services
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/our-products" className="btn-outline gap-2">
              View Products
            </Link>
          </div>
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

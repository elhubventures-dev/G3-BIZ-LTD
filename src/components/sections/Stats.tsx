"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { stats } from "@/config/site";
import { StaggerContainer, StaggerItem, AnimatedCounter } from "@/components/shared/motion";

const whiteCardValues = new Set(["22", "40"]);

function getCardStyles(value: string, isActive: boolean) {
  if (whiteCardValues.has(value)) {
    return isActive
      ? "border-[#ac002f]/35 bg-[#fde8ec] shadow-[0_0_0_1px_rgba(172,0,47,0.15),0_12px_28px_rgba(172,0,47,0.2)]"
      : "border-black/10 bg-white shadow-[0_4px_16px_rgba(0,0,0,0.08)]";
  }

  return isActive
    ? "border-white/55 bg-white/20 shadow-[0_0_0_1px_rgba(255,255,255,0.15),0_12px_28px_rgba(0,0,0,0.2)]"
    : "border-white/20 bg-white/10";
}

export function Stats() {
  const prefersReducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % stats.length);
    }, 2200);

    return () => window.clearInterval(timer);
  }, [prefersReducedMotion]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#9f0028] via-[#ac002f] to-[#850021] py-14 sm:py-16">
      <div className="pointer-events-none absolute inset-0 opacity-15">
        <div className="absolute -left-20 top-0 h-56 w-56 rounded-full bg-white blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-black/20 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="mb-8 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/75">Our Impact</p>
          <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">Trusted growth, measured in numbers</h2>
        </div>
        <StaggerContainer className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-5">
          {stats.map((stat, index) => {
            const isWhiteCard = whiteCardValues.has(stat.value);
            const isActive = activeIndex === index;

            return (
              <StaggerItem
                key={stat.label}
                className={index === stats.length - 1 ? "col-span-2 md:col-span-1" : undefined}
              >
                <motion.div
                  className={`relative h-full overflow-hidden rounded-2xl border p-5 transition duration-300 ${
                    isWhiteCard ? "" : "backdrop-blur-sm"
                  } ${getCardStyles(stat.value, isActive)}`}
                  animate={
                    prefersReducedMotion
                      ? undefined
                      : {
                          y: isActive ? [0, -4, 0] : [0, -2, 0],
                          scale: isActive ? [1, 1.02, 1] : 1,
                          ...(isWhiteCard && {
                            backgroundColor: isActive
                              ? ["#ffffff", "#fde8ec", "#fce4ea", "#ffffff"]
                              : "#ffffff",
                          }),
                        }
                  }
                  transition={{
                    duration: isActive ? 1.6 : 2.2,
                    repeat: prefersReducedMotion ? 0 : Infinity,
                    ease: "easeInOut",
                  }}
                  whileHover={
                    prefersReducedMotion
                      ? undefined
                      : {
                          y: -6,
                          scale: 1.03,
                          backgroundColor: isWhiteCard
                            ? "#fce4ea"
                            : "rgba(255,255,255,0.22)",
                        }
                  }
                  whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                >
                  {isWhiteCard && isActive && !prefersReducedMotion && (
                    <motion.div
                      className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-[#ac002f]/15 to-transparent"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                    />
                  )}
                  <div className="relative z-10">
                  <AnimatedCounter
                    value={stat.value}
                    label={stat.label}
                    className={index === stats.length - 1 ? "md:text-center" : undefined}
                    valueClassName={`text-3xl sm:text-4xl md:text-[2.6rem] ${
                      isWhiteCard ? "text-black" : "text-white"
                    }`}
                    labelClassName={`mt-2 text-xs font-semibold tracking-wide sm:text-sm ${
                      isWhiteCard ? "text-black/80" : "text-white/85"
                    }`}
                  />
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

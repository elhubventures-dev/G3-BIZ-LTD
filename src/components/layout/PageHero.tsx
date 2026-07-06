import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { AnimateIn } from "@/components/shared/motion";
import { pageHeroImage } from "@/config/site";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href?: string }[];
  image?: string;
}

export function PageHero({
  title,
  subtitle,
  breadcrumbs,
  image = pageHeroImage,
}: PageHeroProps) {
  return (
    <section className="on-dark relative flex min-h-[280px] items-center overflow-hidden bg-brand-charcoal">
      <Image
        src={image}
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/68 to-black/52" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/42 to-black/18" />
      <div className="absolute inset-0 bg-[#8c001d]/8" />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-16">
        <AnimateIn variant="fadeUp">
          <h1 className="font-serif text-4xl font-bold !text-white md:text-5xl">{title}</h1>
          {subtitle && (
            <p className="mt-3 max-w-2xl text-lg text-white/80">{subtitle}</p>
          )}
        </AnimateIn>
        {breadcrumbs && (
          <AnimateIn variant="fadeIn" delay={0.15}>
            <nav aria-label="Breadcrumb" className="mt-4">
              <ol className="flex flex-wrap items-center gap-1 text-sm text-white/70">
                {breadcrumbs.map((crumb, i) => (
                  <li key={crumb.label} className="flex items-center gap-1">
                    {i > 0 && <ChevronRight className="h-3.5 w-3.5 text-white/50" />}
                    {crumb.href ? (
                      <Link href={crumb.href} className="transition hover:text-white">
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="text-white">{crumb.label}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          </AnimateIn>
        )}
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-yellow" />
    </section>
  );
}

import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
  title: string;
  breadcrumbs?: { label: string; href?: string }[];
  image?: string;
}

export function PageHero({ title, breadcrumbs, image }: PageHeroProps) {
  return (
    <section
      className="on-dark relative flex min-h-[280px] items-center bg-brand-charcoal"
      style={
        image
          ? {
              backgroundImage: `linear-gradient(rgba(0,0,0,0.82), rgba(0,0,0,0.9)), url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      <div className="mx-auto w-full max-w-7xl px-4 py-16">
        <h1 className="font-serif text-4xl font-bold !text-white md:text-5xl">{title}</h1>
        {breadcrumbs && (
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
        )}
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-yellow" />
    </section>
  );
}

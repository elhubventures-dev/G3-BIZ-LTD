import { quotes } from "@/config/site";
import {
  AnimateIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/motion";

export function QuotesSection() {
  return (
    <section className="on-dark relative overflow-hidden bg-brand-charcoal py-20">
      <div className="pointer-events-none absolute inset-0 opacity-5">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-brand-yellow blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-brand-yellow blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4">
        <AnimateIn className="text-center" variant="fadeUp">
          <h2 className="font-serif text-3xl font-bold text-white">Moses Fongang</h2>
          <p className="mt-1 text-white/80">Quotes</p>
        </AnimateIn>

        <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {quotes.map((quote) => (
            <StaggerItem key={quote.text}>
              <blockquote className="card-glass h-full p-6">
                <p className="text-lg font-medium italic text-white">&ldquo;{quote.text}&rdquo;</p>
                <cite className="mt-4 block text-sm font-semibold text-white/80 not-italic">
                  — {quote.author}
                </cite>
              </blockquote>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

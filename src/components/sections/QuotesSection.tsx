import { quotes } from "@/config/site";

export function QuotesSection() {
  return (
    <section className="on-dark bg-brand-charcoal py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold text-white">Moses Fongang</h2>
          <p className="mt-1 text-white/80">Quotes</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {quotes.map((quote) => (
            <blockquote
              key={quote.text}
              className="rounded-2xl border border-brand-yellow/20 bg-white/5 p-6 backdrop-blur"
            >
              <p className="text-lg font-medium italic text-white">&ldquo;{quote.text}&rdquo;</p>
              <cite className="mt-4 block text-sm font-semibold text-white/80 not-italic">
                — {quote.author}
              </cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

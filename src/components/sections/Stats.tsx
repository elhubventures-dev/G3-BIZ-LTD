import { stats } from "@/config/site";

export function Stats() {
  return (
    <section className="bg-brand-yellow py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 md:grid-cols-5">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-4xl font-extrabold text-white md:text-5xl">{stat.value}</p>
            <p className="mt-1 text-sm font-semibold text-white/90">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

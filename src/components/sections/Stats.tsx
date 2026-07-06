import { stats } from "@/config/site";
import { StaggerContainer, StaggerItem, AnimatedCounter } from "@/components/shared/motion";

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-brand-yellow py-12">
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-white blur-3xl" />
      </div>
      <StaggerContainer className="relative mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 md:grid-cols-5">
        {stats.map((stat) => (
          <StaggerItem key={stat.label}>
            <AnimatedCounter value={stat.value} label={stat.label} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}

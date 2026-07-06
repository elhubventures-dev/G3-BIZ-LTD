import Link from "next/link";
import { AnimateIn } from "@/components/shared/motion";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <AnimateIn variant="scaleIn">
        <h1 className="gradient-text text-8xl font-extrabold">404</h1>
      </AnimateIn>
      <AnimateIn variant="fadeUp" delay={0.1}>
        <h2 className="mt-4 text-2xl font-bold text-brand-dark">Page Not Found</h2>
        <p className="mt-2 text-brand-body">The page you&apos;re looking for doesn&apos;t exist.</p>
      </AnimateIn>
      <AnimateIn variant="fadeUp" delay={0.2}>
        <Link href="/" className="btn-primary mt-8">
          Back to Home
        </Link>
      </AnimateIn>
    </section>
  );
}

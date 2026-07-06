import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl font-extrabold text-brand-yellow">404</h1>
      <h2 className="mt-4 text-2xl font-bold text-brand-dark">Page Not Found</h2>
      <p className="mt-2 text-brand-body">The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link
        href="/"
        className="btn-primary mt-8"
      >
        Back to Home
      </Link>
    </section>
  );
}

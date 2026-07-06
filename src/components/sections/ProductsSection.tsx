import Image from "next/image";
import Link from "next/link";
import { featuredProducts } from "@/config/site";
import {
  SectionHeader,
  StaggerContainer,
  StaggerItem,
  AnimateIn,
} from "@/components/shared/motion";

export function ProductsSection() {
  return (
    <section className="bg-brand-light py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          badge="Depot"
          title="Our Products"
          description="Main distributor of GCSA (Guinness Cameroon SA) products in Limbe — trusted brands delivered with excellence."
          align="center"
        />

        <StaggerContainer className="mt-12 grid gap-8 md:grid-cols-3">
          {featuredProducts.map((product, i) => (
            <StaggerItem key={product.slug}>
              <Link href={`/our-products/${product.slug}`} className="group card-modern block">
                <div className="relative flex h-48 items-center justify-center bg-brand-charcoal p-6 img-zoom">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={120}
                    height={160}
                    className="object-contain transition duration-500 group-hover:scale-110"
                  />
                  <span className="absolute right-4 top-4 text-4xl font-extrabold text-white/20">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-brand-heading transition-colors group-hover:text-brand-yellow">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm text-brand-body line-clamp-3">{product.description}</p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimateIn className="mt-10 text-center" variant="fadeIn" delay={0.2}>
          <Link href="/our-products" className="btn-primary">
            View All Products
          </Link>
        </AnimateIn>
      </div>
    </section>
  );
}

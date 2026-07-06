import Image from "next/image";
import Link from "next/link";
import { productGallery } from "@/config/site";
import {
  SectionHeader,
  StaggerContainer,
  StaggerItem,
  AnimateIn,
} from "@/components/shared/motion";

export function ProductGallerySection() {
  return (
    <section className="bg-brand-light py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          badge="Our Depot"
          title="Products We Distribute"
          description="Primary and secondary distribution of Guinness and Diageo products across the South West Region of Cameroon."
          align="center"
        />

        <StaggerContainer className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8" stagger={0.05}>
          {productGallery.map((src) => (
            <StaggerItem key={src}>
              <div className="group flex aspect-square items-center justify-center rounded-2xl bg-brand-charcoal p-4 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20">
                <Image
                  src={src}
                  alt="G3-Biz product"
                  width={120}
                  height={160}
                  className="object-contain transition duration-500 group-hover:scale-110"
                />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimateIn className="mt-8 text-center" variant="fadeIn" delay={0.15}>
          <Link href="/our-products" className="btn-primary">
            View All Products
          </Link>
        </AnimateIn>
      </div>
    </section>
  );
}

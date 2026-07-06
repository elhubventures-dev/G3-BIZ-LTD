import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { ProductGallerySection } from "@/components/sections/ProductGallerySection";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { TeamSection } from "@/components/sections/TeamSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { QuotesSection } from "@/components/sections/QuotesSection";
import { ContactForm } from "@/components/sections/ContactForm";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <AboutSection />
      <ProductsSection />
      <ProductGallerySection />
      <ServicesPreview />
      <TeamSection />
      <BlogSection />
      <QuotesSection />
      <ContactForm />
    </>
  );
}

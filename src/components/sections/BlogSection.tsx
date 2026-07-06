import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/content";
import { ArrowRight } from "lucide-react";
import {
  AnimateIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/motion";

function getPostImage(images: string[]): string | null {
  const local = images.find((img) => img.startsWith("/images/"));
  return local ?? null;
}

export function BlogSection() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <section className="bg-brand-light py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <AnimateIn>
            <span className="top-head">News & Events</span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-brand-heading-alt md:text-4xl">
              Latest News
            </h2>
          </AnimateIn>
          <AnimateIn variant="fadeIn" delay={0.1}>
            <Link
              href="/blog"
              className="group flex items-center gap-1 text-sm font-bold text-brand-heading hover:text-brand-yellow"
            >
              Read More{" "}
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
          </AnimateIn>
        </div>

        <StaggerContainer className="mt-12 grid gap-8 md:grid-cols-3">
          {posts.map((post) => {
            const image = getPostImage(post.images);
            return (
              <StaggerItem key={post.id}>
                <Link href={`/blog/${encodeURIComponent(post.slug)}`} className="group card-modern block">
                  <div className="relative h-48 overflow-hidden bg-brand-charcoal img-zoom">
                    {image ? (
                      <Image
                        src={image}
                        alt={post.title}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <span className="text-4xl font-bold text-white/20">G3</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <span className="top-head !text-xs">G3-Biz Ltd</span>
                    <h3 className="mt-2 font-bold text-brand-heading line-clamp-2 transition-colors group-hover:text-brand-yellow">
                      {post.title}
                    </h3>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

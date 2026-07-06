import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { getAllPosts } from "@/lib/content";
import { siteConfig } from "@/config/site";
import { StaggerContainer, StaggerItem } from "@/components/shared/motion";

export const metadata: Metadata = {
  title: "Blog",
  description: `Latest news and events from ${siteConfig.shortName} — corporate updates, community initiatives, and industry news.`,
};

function getPostImage(images: string[]): string | null {
  return images.find((img) => img.startsWith("/images/")) ?? null;
}

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <PageHero
        title="Blog"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => {
              const image = getPostImage(post.images);
              return (
                <StaggerItem key={post.id}>
                  <Link
                    href={`/blog/${encodeURIComponent(post.slug)}`}
                    className="group card-modern block"
                  >
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
                      <h2 className="mt-2 font-bold text-brand-heading line-clamp-2 transition-colors group-hover:text-brand-yellow">
                        {post.title}
                      </h2>
                      {post.text && (
                        <p className="mt-2 text-sm text-brand-body line-clamp-3">{post.text}</p>
                      )}
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}

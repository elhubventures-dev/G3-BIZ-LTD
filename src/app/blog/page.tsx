import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { getAllPosts } from "@/lib/content";
import { siteConfig } from "@/config/site";

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
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => {
              const image = getPostImage(post.images);
              return (
                <Link
                  key={post.id}
                  href={`/blog/${encodeURIComponent(post.slug)}`}
                  className="group overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-48 bg-brand-charcoal">
                    {image ? (
                      <Image
                        src={image}
                        alt={post.title}
                        fill
                        className="object-cover transition group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <span className="text-4xl font-bold text-white/20">G3</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <span className="top-head !text-xs">G3-Biz Ltd</span>
                    <h2 className="mt-2 font-bold text-brand-heading line-clamp-2 group-hover:text-brand-yellow">
                      {post.title}
                    </h2>
                    {post.text && (
                      <p className="mt-2 text-sm text-brand-body line-clamp-3">{post.text}</p>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

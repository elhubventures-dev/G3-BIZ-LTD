import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/content";
import { ArrowRight } from "lucide-react";

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
          <div>
            <span className="top-head">News & Events</span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-brand-heading-alt md:text-4xl">Latest News</h2>
          </div>
          <Link
            href="/blog"
            className="flex items-center gap-1 text-sm font-bold text-brand-heading hover:text-brand-yellow"
          >
            Read More <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
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
                  <h3 className="mt-2 font-bold text-brand-heading line-clamp-2 group-hover:text-brand-yellow">
                    {post.title}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

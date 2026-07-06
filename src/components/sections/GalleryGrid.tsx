"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import type { GalleryCategory } from "@/lib/content";

interface GalleryGridProps {
  categories: GalleryCategory[];
}

interface GalleryImage {
  src: string;
  category: string;
}

export function GalleryGrid({ categories }: GalleryGridProps) {
  const [active, setActive] = useState(categories[0]?.slug ?? "all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const allImages = categories.flatMap((c) =>
    c.images.map((src) => ({ src, category: c.title }))
  );

  const images: GalleryImage[] =
    active === "all"
      ? allImages
      : (categories.find((c) => c.slug === active)?.images ?? []).map((src) => ({
          src,
          category: categories.find((c) => c.slug === active)?.title ?? "",
        }));

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const showPrev = useCallback(() => {
    setLightboxIndex((index) =>
      index === null ? null : (index - 1 + images.length) % images.length
    );
  }, [images.length]);

  const showNext = useCallback(() => {
    setLightboxIndex((index) =>
      index === null ? null : (index + 1) % images.length
    );
  }, [images.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [lightboxIndex, closeLightbox, showPrev, showNext]);

  useEffect(() => {
    setLightboxIndex(null);
  }, [active]);

  if (categories.length === 0) {
    return <p className="text-center text-brand-body">Gallery images coming soon.</p>;
  }

  const current = lightboxIndex !== null ? images[lightboxIndex] : null;

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActive("all")}
          className={`rounded-full px-4 py-2 text-sm font-bold transition ${
            active === "all"
              ? "bg-brand-charcoal text-white"
              : "bg-brand-light text-brand-heading hover:bg-brand-yellow hover:text-white"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.slug}
            type="button"
            onClick={() => setActive(cat.slug)}
            className={`rounded-full px-4 py-2 text-sm font-bold transition ${
              active === cat.slug
                ? "bg-brand-charcoal text-white"
                : "bg-brand-light text-brand-heading hover:bg-brand-yellow hover:text-white"
            }`}
          >
            {cat.title}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {images.map((item, i) => (
          <button
            key={`${item.src}-${i}`}
            type="button"
            onClick={() => setLightboxIndex(i)}
            className="group relative aspect-square overflow-hidden rounded-2xl bg-brand-charcoal text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2"
            aria-label={`View ${item.category || "gallery"} image ${i + 1}`}
          >
            <Image
              src={item.src}
              alt={item.category || "G3-Biz gallery"}
              fill
              className="object-cover transition duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition group-hover:bg-black/30">
              <ZoomIn className="h-8 w-8 text-white opacity-0 transition group-hover:opacity-100" />
            </span>
          </button>
        ))}
      </div>

      {current && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Close preview"
          >
            <X className="h-6 w-6" />
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  showPrev();
                }}
                className="absolute left-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-6"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  showNext();
                }}
                className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          <div
            className="relative flex max-h-[90vh] w-full max-w-6xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[min(80vh,720px)] w-full">
              <Image
                src={current.src}
                alt={current.category || "G3-Biz gallery"}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
            <p className="mt-4 text-center text-sm font-medium text-white/80">
              {current.category}
              {images.length > 1 && (
                <span className="text-white/50">
                  {" "}
                  · {lightboxIndex + 1} / {images.length}
                </span>
              )}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

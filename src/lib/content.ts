import contentData from "../../content/content.json";

export interface ContentPost {
  id: number;
  title: string;
  slug: string;
  type: string;
  parent: number;
  excerpt?: string;
  html: string;
  text?: string;
  images: string[];
  price?: string;
  regular_price?: string;
  image?: string | null;
}

export interface GalleryCategory {
  id: number;
  title: string;
  slug: string;
  images: string[];
}

export interface ContentData {
  site: Record<string, string>;
  pages: ContentPost[];
  posts: ContentPost[];
  products: ContentPost[];
  services?: ContentPost[];
  gallery?: Record<string, GalleryCategory>;
}

const data = contentData as ContentData;

/** WordPress spam posts injected by hackers — not legitimate G3-Biz content */
const EXCLUDED_POST_SLUGS = new Set(["tadagra-what-to-know-warnings-results"]);

function isExcludedPost(post: ContentPost) {
  return EXCLUDED_POST_SLUGS.has(post.slug);
}

export function getPage(slug: string): ContentPost | undefined {
  return data.pages.find((p) => p.slug === slug);
}

export function getPost(slug: string): ContentPost | undefined {
  const decoded = decodeURIComponent(slug);
  const post = data.posts.find(
    (p) => p.slug === slug || p.slug === decoded || decodeURIComponent(p.slug) === decoded
  );
  if (!post || isExcludedPost(post)) return undefined;
  return post;
}

export function getAllPosts(): ContentPost[] {
  return data.posts.filter((p) => !isExcludedPost(p));
}

export function getAllProducts(): ContentPost[] {
  return data.products;
}

export function getProduct(slug: string): ContentPost | undefined {
  return data.products.find((p) => p.slug === slug);
}

export function getPolicyPage(slug: string): ContentPost | undefined {
  return data.pages.find((p) => p.slug === slug && p.parent === 5292);
}

export function getAllPolicyPages(): ContentPost[] {
  return data.pages.filter((p) => p.parent === 5292);
}

export function getAllServices(): ContentPost[] {
  return data.services ?? [];
}

export function getService(slug: string): ContentPost | undefined {
  return getAllServices().find((s) => s.slug === slug);
}

export function getGalleryCategories(): GalleryCategory[] {
  const gallery = data.gallery ?? {};
  return Object.values(gallery).sort((a, b) => a.id - b.id);
}

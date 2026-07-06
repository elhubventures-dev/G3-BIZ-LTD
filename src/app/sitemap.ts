import type { MetadataRoute } from "next";
import { getAllPosts, getAllProducts, getAllPolicyPages, getAllServices } from "@/lib/content";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  const staticPages = [
    "",
    "/about-us",
    "/services",
    "/our-products",
    "/teams",
    "/projects",
    "/gallery",
    "/blog",
    "/policies",
    "/contact-us",
    "/reviews",
  ];

  const posts = getAllPosts().map((p) => ({
    url: `${base}/blog/${encodeURIComponent(p.slug)}`,
    lastModified: new Date(),
  }));

  const products = getAllProducts().map((p) => ({
    url: `${base}/our-products/${p.slug}`,
    lastModified: new Date(),
  }));

  const policies = getAllPolicyPages().map((p) => ({
    url: `${base}/policies/${p.slug}`,
    lastModified: new Date(),
  }));

  const services = getAllServices().map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: new Date(),
  }));

  return [
    ...staticPages.map((path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
    })),
    ...posts,
    ...products,
    ...policies,
    ...services,
  ];
}

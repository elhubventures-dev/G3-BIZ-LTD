import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // WordPress home page slug → root
      { source: "/home", destination: "/", permanent: true },
      // WordPress product URLs
      { source: "/product/:slug", destination: "/our-products/:slug", permanent: true },
      { source: "/shop", destination: "/our-products", permanent: true },
      { source: "/shop/:slug", destination: "/our-products/:slug", permanent: true },
      // WordPress blog post ID URLs
      { source: "/:year(\\d{4})/:month(\\d{2})/:slug", destination: "/blog/:slug", permanent: true },
      // WordPress category/tag
      { source: "/category/:slug", destination: "/blog", permanent: true },
      { source: "/tag/:slug", destination: "/blog", permanent: true },
      // Removed spam post (injected pharma content)
      {
        source: "/blog/tadagra-what-to-know-warnings-results",
        destination: "/blog",
        permanent: true,
      },
      // WordPress admin/login
      { source: "/wp-admin/:path*", destination: "/", permanent: false },
      { source: "/wp-login.php", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;

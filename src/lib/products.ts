export type ProductCategory = "all" | "guinness" | "smirnoff" | "other";

export const productCategories = [
  { id: "all" as const, label: "All Products" },
  { id: "guinness" as const, label: "Guinness & Malta" },
  { id: "smirnoff" as const, label: "Smirnoff" },
  { id: "other" as const, label: "Harp & Origin" },
];

export interface ProductMeta {
  image: string;
  description: string;
  category: Exclude<ProductCategory, "all">;
  tag?: string;
}

export const productMeta: Record<string, ProductMeta> = {
  "big-guinness-l": {
    image: "/images/uploads/2024/09/2.png",
    category: "guinness",
    tag: "Iconic",
    description:
      "World-famous Irish stout with a deep, dark colour and rich creamy head — one of the most iconic beers globally.",
  },
  "small-guinness-s": {
    image: "/images/uploads/2024/09/6.png",
    category: "guinness",
    description: "Compact format Guinness stout, perfect for retail outlets and on-the-go consumption.",
  },
  ges: {
    image: "/images/uploads/2024/09/7.png",
    category: "guinness",
    tag: "Popular",
    description:
      "A lighter, more approachable Guinness with a milder flavour profile and smooth finish.",
  },
  "malta-guiness": {
    image: "/images/uploads/2024/09/3.png",
    category: "guinness",
    description: "Non-alcoholic malt drink with the distinctive Guinness character and nourishing taste.",
  },
  harp: {
    image: "/images/uploads/2024/09/1.png",
    category: "other",
    description: "Premium lager with a crisp, refreshing taste — a favourite across Cameroon.",
  },
  origin: {
    image: "/images/uploads/2024/09/8.png",
    category: "other",
    tag: "Refreshing",
    description:
      "Fruity, vibrant alcoholic beverage made from natural fruit flavours with a lower alcohol content.",
  },
  "smirnoff-ice-double-black": {
    image: "/images/uploads/2024/09/5.png",
    category: "smirnoff",
    description: "Bold vodka-based ready-to-drink with a smooth, premium taste for adult consumers.",
  },
  "smirnoff-ice-pineapple": {
    image: "/images/uploads/2024/09/4.png",
    category: "smirnoff",
    description: "Tropical pineapple-flavoured vodka cooler — light, fruity, and refreshing.",
  },
};

export function getProductImage(slug: string, fallback?: string | null) {
  return productMeta[slug]?.image ?? fallback ?? "/images/uploads/2024/09/2.png";
}

export function getProductDescription(slug: string, fallback?: string) {
  return productMeta[slug]?.description ?? fallback ?? "Available from G3-Biz Ltd, Limbe.";
}

export function getProductCategory(slug: string): Exclude<ProductCategory, "all"> {
  return productMeta[slug]?.category ?? "other";
}

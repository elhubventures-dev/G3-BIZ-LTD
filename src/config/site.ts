export const siteConfig = {
  name: "Global Strategic Business Company",
  shortName: "G3-Biz Ltd",
  description:
    "G3-Biz Ltd — Cameroon's trusted beverage distribution partner. Primary and secondary distribution of Guinness and Diageo products in Limbe.",
  url: "https://g3-bizltd.com",
  email: "info@g3-bizltd.com",
  phone: "+237 6 53 55 25 62",
  phoneAlt: "+237 681 966 816",
  address: "Mile 2, Limbe, South West Region, Cameroon",
  poBox: "P.O. Box 291, Limbe",
  founded: "2005-06-22",
  whatsapp: "237653552562",
} as const;

export const primaryNavItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/our-products" },
  { label: "Teams", href: "/teams" },
  { label: "Contact", href: "/contact-us" },
] as const;

export const moreNavItems = [
  { label: "Projects", href: "/projects" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Policies", href: "/policies" },
  { label: "Reviews", href: "/reviews" },
] as const;

export const navItems = [
  ...primaryNavItems.slice(0, -1),
  ...moreNavItems,
  primaryNavItems[primaryNavItems.length - 1],
] as const;

export const stats = [
  { value: "43", label: "Years of Experience" },
  { value: "22", label: "Completed Projects" },
  { value: "8", label: "Drinks Marketed" },
  { value: "40", label: "Awards Won" },
  { value: "19", label: "Years of Operation" },
] as const;

export const visionPoints = [
  "Giving customers good value for their investment",
  "Creating occasions that enhance social interaction and pleasure",
  "Offering trustful partnership to suppliers",
  "Providing a better life to shareholders and employees",
] as const;

export const strategicPillars = [
  "Human Resource optimization",
  "Exponential Volume Growth",
  "Market Share Growth",
  "Investing with wisdom on assets",
] as const;

export const objectives = [
  "Primary and secondary distribution of finished products",
  "Management training / Consultancy",
  "Offering internship training opportunities",
] as const;

export const teamMembers = [
  {
    name: "Moses Fongang Kem",
    role: "Managing Director / Business Consultant",
    image: "/images/uploads/2024/09/44444444444444.png",
  },
  {
    name: "Therese Tayimfor",
    role: "Depot Manager",
    image: "/images/uploads/2024/08/WhatsApp-Image-2024-08-20-at-19.18.14-3-e1725983060288.jpeg",
  },
  {
    name: "Constance Njumanuh A.",
    role: "HOD Human Resource & Administration",
    image: "/images/uploads/2024/09/333333333333.png",
  },
  {
    name: "Herman Ache Ayiseh",
    role: "HOD Business Development",
    image: "/images/uploads/2024/08/WhatsApp-Image-2024-08-20-at-19.18.16-1-e1725984427929.jpeg",
  },
  {
    name: "Amadine Mbaku",
    role: "Accountant",
    image: "/images/uploads/2024/08/WhatsApp-Image-2024-08-20-at-19.18.16-2-e1725984500570.jpeg",
  },
  {
    name: "Dominic Nchindia",
    role: "Stock Management Supervisor",
    image: "/images/uploads/2024/08/WhatsApp-Image-2024-08-20-at-19.18.15-1-e1725984814673.jpeg",
  },
  {
    name: "Emmanuel Fongang Teke",
    role: "Sales Supervisor",
    image: "/images/uploads/2024/08/WhatsApp-Image-2024-08-20-at-19.18.16-3-e1725984942398.jpeg",
  },
  {
    name: "Leonard Tarh Formubad",
    role: "Territory Development Assistant",
    image: "/images/uploads/2024/10/WhatsApp-Image-2024-08-20-at-19.18.07-2-e1727887554160.jpeg",
  },
  {
    name: "Jerry Gha Mua",
    role: "Administrator (Fleet/Procurement)",
    image: "/images/uploads/2024/10/WhatsApp-Image-2024-10-02-at-18.20.02.jpeg",
  },
  {
    name: "Jonas Fongang N.",
    role: "Chief of Security",
    image: "/images/uploads/2024/08/WhatsApp-Image-2024-08-20-at-19.18.16-e1725999640189.jpeg",
  },
  {
    name: "Franklin Teba",
    role: "I.T. Officer",
    image: "/images/uploads/2024/08/WhatsApp-Image-2024-08-20-at-19.18.15-2-e1725999894854.jpeg",
  },
] as const;

export const featuredProducts = [
  {
    name: "Guinness",
    slug: "big-guinness-l",
    description:
      "World-famous Irish stout, known for its deep, dark color and rich, creamy head — one of the most iconic beers globally.",
    image: "/images/uploads/2024/09/2.png",
  },
  {
    name: "Guinness Smooth",
    slug: "ges",
    description:
      "A lighter, more approachable version of the original Guinness stout with a milder flavor profile and less bitterness.",
    image: "/images/uploads/2024/09/7.png",
  },
  {
    name: "Origin",
    slug: "origin",
    description:
      "A fruity and refreshing alcoholic beverage made from natural fruit flavors — vibrant taste with lower alcohol content.",
    image: "/images/uploads/2024/09/8.png",
  },
] as const;

export const productGallery = [
  "/images/uploads/2024/09/1.png",
  "/images/uploads/2024/09/2.png",
  "/images/uploads/2024/09/3.png",
  "/images/uploads/2024/09/4.png",
  "/images/uploads/2024/09/5.png",
  "/images/uploads/2024/09/6.png",
  "/images/uploads/2024/09/7.png",
  "/images/uploads/2024/09/8.png",
] as const;

export const quotes = [
  { text: "Work harder and make more money", author: "Moses Fongang" },
  { text: "100% focus on compliance", author: "Moses Fongang" },
  { text: "Be creative and innovative", author: "Moses Fongang" },
  { text: "Take responsibility", author: "Moses Fongang" },
] as const;

export const policyPages = [
  { title: "Rules and Regulations", slug: "rules-and-regulations" },
  { title: "Fleet Policy", slug: "fleet-policy" },
  { title: "Disciplinary Policy", slug: "disciplinary-policy" },
  { title: "Procurement Policy", slug: "procurement-policy" },
  {
    title: "Archiving Guidelines and Procedures",
    slug: "archiving-guidelines-and-procedures-policy",
  },
] as const;

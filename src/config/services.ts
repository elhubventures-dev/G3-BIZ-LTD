import type { LucideIcon } from "lucide-react";
import {
  Award,
  BadgeCheck,
  GraduationCap,
  UserPlus,
} from "lucide-react";

export interface ServiceMeta {
  slug: string;
  summary: string;
  highlights: string[];
  image?: string;
  icon: LucideIcon;
}

export const serviceCatalog: ServiceMeta[] = [
  {
    slug: "reputable-customer-of-gcsa",
    summary:
      "Partner with Cameroon's trusted GCSA distributor — quarterly bonuses, professional delivery, and free consultation.",
    highlights: ["Quarterly bonuses", "Safe delivery", "Trusted partnership"],
    image: "/images/uploads/2024/08/WhatsApp-Image-2024-08-20-at-19.18.08-1.jpeg",
    icon: Award,
  },
  {
    slug: "customer-creation",
    summary:
      "Register as a new customer and obtain your buying number with a streamlined process at our Mile 2 office.",
    highlights: ["Simple registration", "Document checklist", "Depot support"],
    image: "/images/uploads/2024/08/WhatsApp-Image-2024-08-20-at-19.18.08-2-e1725534524931.jpeg",
    icon: UserPlus,
  },
  {
    slug: "free-consultation-through-fongangs-academy",
    summary:
      "Free business consultation for new and established customers through FONGANG's Academy.",
    highlights: ["Sales growth", "Operations", "Leadership skills"],
    image: "/images/uploads/2024/08/WhatsApp-Image-2024-08-20-at-19.18.07.jpeg",
    icon: GraduationCap,
  },
  {
    slug: "easy-business-number-registration",
    summary:
      "A hassle-free process to get your business number so you can focus on growing with G3-Biz.",
    highlights: ["Fast setup", "Less paperwork", "Ready to order"],
    image: "/images/uploads/2024/08/WhatsApp-Image-2024-08-20-at-19.18.17-1.jpeg",
    icon: BadgeCheck,
  },
];

export const partnerBenefits = [
  {
    title: "Quarterly Bonuses",
    text: "Consistent purchasing unlocks quarterly bonus rewards for loyal GCSA customers.",
  },
  {
    title: "Professional Delivery",
    text: "Expert distribution teams ensure products arrive safely and on schedule.",
  },
  {
    title: "Free Consultation",
    text: "Additional business support at no extra cost through FONGANG's Academy.",
  },
  {
    title: "Trusted Partnership",
    text: "19+ years of dependable service built on integrity and customer satisfaction.",
  },
] as const;

export const serviceSteps = [
  {
    step: "01",
    title: "Get in touch",
    text: "Contact our depot team or visit the Mile 2 Limbe office to discuss your needs.",
  },
  {
    step: "02",
    title: "Submit documents",
    text: "Provide ID, liquor licence, location plan, and tax identification as required.",
  },
  {
    step: "03",
    title: "Receive your number",
    text: "Complete registration and obtain your buying number through our streamlined process.",
  },
  {
    step: "04",
    title: "Start ordering",
    text: "Place orders with confidence — backed by GCSA distribution and depot support.",
  },
] as const;

export const businessNumberBenefits = [
  {
    title: "Fast Setup",
    text: "A streamlined registration path so you can start trading with G3-Biz without unnecessary delays.",
  },
  {
    title: "Less Paperwork",
    text: "We guide you through requirements clearly — focus on your business, not admin bottlenecks.",
  },
  {
    title: "Ready to Order",
    text: "Once registered, place orders immediately through our depot with full GCSA product access.",
  },
  {
    title: "Ongoing Support",
    text: "Our Mile 2 team stays available for account updates, delivery, and consultation.",
  },
] as const;

export const customerCreationDocuments = [
  {
    title: "ID Card",
    text: "A photocopy of your national identification card.",
    icon: "id" as const,
  },
  {
    title: "Liquor Licence",
    text: "A valid liquor licence for your business premises.",
    icon: "licence" as const,
  },
  {
    title: "Location Plan",
    text: "A location plan showing your business premises.",
    icon: "location" as const,
  },
  {
    title: "Tax ID Number",
    text: "Your Unique Identification Number (tax payment number).",
    icon: "tax" as const,
  },
] as const;

export const academyTopics = [
  {
    title: "Streamline Operations",
    text: "Optimize workflows, reduce unnecessary costs, and improve productivity across your business.",
  },
  {
    title: "Improve Sales Performance",
    text: "Learn effective sales techniques, retention strategies, and how to build lasting client relationships.",
  },
  {
    title: "Maximize Growth Potential",
    text: "Identify market opportunities, implement growth strategies, and scale sustainably.",
  },
  {
    title: "Enhance Marketing Efforts",
    text: "Stay competitive with branding, customer engagement, and modern marketing approaches.",
  },
  {
    title: "Develop Leadership Skills",
    text: "Gain management tools to guide your team, build culture, and achieve business goals.",
  },
  {
    title: "Industry Trends",
    text: "Access up-to-date knowledge on emerging trends, technology, and best practices.",
  },
  {
    title: "Financial Planning",
    text: "Manage cash flow, create robust financial plans, and make informed long-term decisions.",
  },
] as const;

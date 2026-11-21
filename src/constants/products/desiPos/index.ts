import { Coffee } from "lucide-react";
import type { Product } from "@/types/index";

export const desiPosProduct: Product = {
  slug: "desi-pos",
  name: "Desi POS",
  shortName: "Desi POS",
  brandName: "Desi POS",
  category: "Counter Billing Software",
  status: "In development",
  icon: Coffee,
  theme: "green",
  tagline: "Your counter. Your rhythm. All sorted.",
  summary: "A simpler counter-billing workspace designed for Indian thadis and cafés, with a focus on fast billing and daily cash clarity.",
  intro: "Designed around the pace of everyday counters, not complicated back-office processes.",
  heroHeadline: "Good business starts at the counter.",
  heroSubtext: "Desi by heart. Smart by design.",
  description: "Desi POS is a developing counter-billing product focused on the everyday needs of Indian thadis and cafés. Its public website currently shows a private business-workspace login, not an open product demo.\n\nThe product direction emphasizes fast billing, daily hisaab, and cash clarity. Additional workflow capabilities should be demonstrated only when verified in the signed-in application.",
  platforms: ["Web"],
  audience: ["Thadi owners", "Café operators", "Small counter-service businesses"],
  highlights: [
    { label: "Focus", value: "Fast billing" },
    { label: "Daily operations", value: "Daily hisaab" },
    { label: "Money visibility", value: "Cash clarity" },
  ],
  features: [
    "Counter-first billing experience",
    "Simple daily business workflow",
    "Cash visibility as a product priority",
    "Private business workspace sign-in",
  ],
  ctas: {
    primary: { label: "Explore Desi POS", href: "https://desi-pos.vercel.app/restaurant" },
    secondary: { label: "Ask for a Walkthrough", href: "/#contact" },
  },
  ctaSection: {
    title: "Built for the rhythm of everyday counters.",
    description: "See the public product introduction or contact TechFi Labs for a guided walkthrough.",
  },
  links: { website: "https://desi-pos.vercel.app/restaurant" },
  coverImage: "https://desi-pos.vercel.app/apple-icon",
  coverAlt: "Official Desi POS app icon",
  screenshots: [],
};

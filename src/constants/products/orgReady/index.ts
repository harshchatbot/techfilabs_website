import { Code2 } from "lucide-react";
import type { Product } from "@/types/index";

export const orgReadyProduct: Product = {
  slug: "orgready",
  name: "OrgReady",
  shortName: "OrgReady",
  brandName: "OrgReady",
  category: "Salesforce Learning Platform",
  status: "Available",
  icon: Code2,
  theme: "green",
  tagline: "Practice Salesforce the way interviews and real projects test you.",
  summary: "Focused Salesforce practice for developers: learn concepts, solve Apex and scenario challenges, and improve with feedback.",
  intro: "Move beyond reading concepts to applying them in realistic Salesforce development situations.",
  heroHeadline: "Practice the thinking behind the solution.",
  heroSubtext: "Learn, practice, and improve your Salesforce engineering skills.",
  description: "OrgReady brings focused learning and hands-on challenges together for Salesforce developers. Work through Apex, triggers, bulkification, SOQL, and project scenarios.\n\nSelected Apex challenges are checked against Salesforce for compilation and expected behavior, with feedback on practical engineering patterns. Not every challenge uses Salesforce-backed validation.",
  platforms: ["Web"],
  audience: ["Salesforce developers", "Interview candidates", "Developers improving practical Apex skills"],
  highlights: [
    { label: "Learning", value: "Focused concepts" },
    { label: "Practice", value: "Apex + scenarios" },
    { label: "Feedback", value: "Learn and retry" },
  ],
  features: [
    "Focused Salesforce concepts and guided preparation",
    "Apex, multiple-choice, and scenario challenges",
    "Practice bulk-safe trigger and governor-limit patterns",
    "Salesforce compilation and behavior checks for selected Apex challenges",
    "Feedback to help review and improve solutions",
  ],
  ctas: {
    primary: { label: "Start Practicing Free", href: "https://www.orgready.in/signup" },
    secondary: { label: "Explore Challenges", href: "https://www.orgready.in/challenges" },
  },
  ctaSection: {
    title: "Learn less. Practice better.",
    description: "Pick a Salesforce challenge, apply your skills, and learn from the feedback.",
  },
  links: { website: "https://www.orgready.in/" },
  coverImage: "https://www.orgready.in/og-image.png",
  coverAlt: "Official OrgReady website share artwork",
  screenshots: [],
};

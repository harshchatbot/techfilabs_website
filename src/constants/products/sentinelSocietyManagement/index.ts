import { ShieldCheck } from "lucide-react";
import type { Product } from "@/types/index";

export const sentinelSocietyManagementProduct: Product = {
  slug: "sentinel-society-management",
  name: "Sentinel Society Management",
  shortName: "Sentinel",
  category: "Mobile App",
  status: "Live",
  icon: ShieldCheck,
  theme: "sentinel",
  tagline: "Reduce gate delays, improve security response, and streamline society operations.",
  summary:
    "Sentinel helps gated communities reduce entry friction, improve operational visibility, and handle incidents faster from one system.",
  description:
    "Built for modern societies that need faster approvals, transparent communication, and dependable daily execution. Residents, guards, and admins use role-specific flows to improve response time and accountability.",
  platforms: ["Android"],
  audience: ["Resident Welfare Associations", "Property Managers", "Security Teams"],
  highlights: [
    { label: "Gate entry approval", value: "Under 10 sec" },
    { label: "Role-specific workflows", value: "3 user types" },
    { label: "Operations visibility", value: "Real-time" },
  ],
  features: [
    "Visitor and delivery approvals with instant resident notifications",
    "Guard panel for fast check-in, logs, and incident reporting",
    "Complaint and maintenance ticket workflows",
    "Broadcast announcements and emergency alerts",
    "Daily operations dashboard for admins",
  ],
  ctas: {
    primary: { label: "Book Sentinel Demo", href: "/#contact" },
    secondary: { label: "Chat on WhatsApp", href: "https://wa.me/917976111087" },
  },
  links: {
    playStore: "https://play.google.com/store/apps",
  },
  screenshots: [
    "/products/sentinel/sentinel1.jpg",
    "/products/sentinel/sentinel2.jpg",
    "/products/sentinel/sentinel3.jpg",
    "/products/sentinel/sentinel4.jpg",
    "/products/sentinel/sentinel5.jpg",
    "/products/sentinel/sentinel6.jpg",
    "/products/sentinel/sentinel7.jpg",
    "/products/sentinel/sentinel8.jpg",
    "/products/sentinel/sentinel9.jpg",
    "/products/sentinel/sentinel10.jpg",
    "/products/sentinel/sentinel11.jpg",
    "/products/sentinel/sentinel12.jpg",
  ],
};

import { Database } from "lucide-react";
import type { Product } from "@/types/index";

export const fieldlensForSalesforceProduct: Product = {
  slug: "fieldlens-for-salesforce",
  name: "FieldLens for Salesforce",
  shortName: "FieldLens",
  category: "Chrome Extension",
  status: "Live",
  icon: Database,
  theme: "green",
  tagline: "Instant field impact analysis in Salesforce Lightning before you make changes.",
  summary:
    "FieldLens helps admins and developers quickly detect field dependencies across validation rules, Apex, flows, layouts, list views, and permissions to reduce release risk.",
  description:
    "FieldLens turns manual field dependency checks into a fast, repeatable workflow inside Salesforce Lightning. It supports quick scans, deep scans, FLS and permission visibility, non-permissionable field handling, org cache control, and export-ready summaries for collaboration.",
  platforms: ["Chrome", "Salesforce Lightning"],
  audience: ["Salesforce Admins", "Salesforce Developers", "Delivery Teams"],
  highlights: [
    { label: "Impact checks", value: "Instant scan" },
    { label: "Release confidence", value: "Lower regressions" },
    { label: "Dependency depth", value: "Quick + Deep" },
  ],
  features: [
    "Instant field impact scan from Salesforce Lightning pages",
    "Auto-detect context on Object Manager field detail pages and record pages",
    "Quick Scan across Validation Rules, Apex Classes, Apex Triggers, Flows, and FLS/Permissions",
    "Deep Scan across Formula Fields, Page Layouts, List Views, and Report Types",
    "FLS and Permission visibility with Profile vs Permission Set context",
    "Non-permissionable field intelligence with [NP] markers and object-level fallback permissions",
    "Clear Org Cache for fresh metadata fetch on demand",
    "Copy Summary (Markdown) and Export CSV for sharing and audits",
    "Right-side slide panel, accordions with counts, global search, retry actions, and diagnostics",
  ],
  ctas: {
    primary: { label: "Book FieldLens Walkthrough", href: "/#contact" },
    secondary: { label: "Talk on WhatsApp", href: "https://wa.me/917976111087" },
  },
  links: {
    chromeWebStore:
      "https://chromewebstore.google.com/detail/nllmdajkbbgnkpokfcjoabhakebfoljk?utm_source=item-share-cb",
  },
  screenshots: [
    "/products/fieldlens/fl_snap1.png",
    "/products/fieldlens/fl_snap2.png",
    "/products/fieldlens/fl_snap3.png",
    "/products/fieldlens/fl_snap4.png",
    "/products/fieldlens/fl_snap5.png",
  ],
};

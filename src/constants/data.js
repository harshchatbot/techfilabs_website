import {
  Bot,
  Building2,
  Cpu,
  Database,
  Globe,
  MessageCircle,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Zap,
} from "lucide-react";

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

export const SITE_CONFIG = {
  company: {
    name: "TechFi Labs",
    initials: "TF",
    email: "thetechfilabs@gmail.com",
    phone: "+91 7976111087",
    address: "Jaipur, Rajasthan 302001",
    logo: "/techfilabs_all_variations_logo.png",
  },
  navigation: {
    menuItems: ["home", "products", "services", "about", "contact"],
    ctaButton: {
      text: "Book a Strategy Call",
      action: () => scrollToSection("contact"),
    },
  },
};

export const PRODUCTS_DATA = [
  {
    slug: "sentinel-society-management",
    name: "Sentinel Society Management",
    shortName: "Sentinel",
    category: "Mobile App",
    status: "Live",
    icon: ShieldCheck,
    theme: "emerald",
    tagline: "Smart residential security and operations in one app.",
    summary:
      "Sentinel helps gated communities manage visitor approvals, staff tracking, complaints, announcements, and emergency workflows from one control center.",
    description:
      "Built for modern societies that need secure access, transparent communication, and reliable daily operations. Residents, guards, and admins all work from dedicated flows designed for speed and accountability.",
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
    screenshots: [],
  },
  {
    slug: "opsflow-control-center",
    name: "OpsFlow Control Center",
    shortName: "OpsFlow",
    category: "Web App",
    status: "Coming Soon",
    icon: Building2,
    theme: "lime",
    tagline: "A single command dashboard for multi-site operations.",
    summary:
      "Web-first command console to monitor operations, service SLAs, and incident timelines across locations.",
    description:
      "Designed for teams running distributed operations and requiring fast decisions with structured visibility.",
    platforms: ["Web"],
    audience: ["Operations Heads", "Enterprise Admin Teams"],
    highlights: [
      { label: "KPI feeds", value: "Live" },
      { label: "Workflows", value: "Configurable" },
      { label: "Reports", value: "Executive-ready" },
    ],
    features: [
      "Cross-site performance dashboards",
      "SLA and ticket tracking with escalations",
      "Custom workflow automation",
      "Team-level access controls",
    ],
    ctas: {
      primary: { label: "Join Waitlist", href: "/#contact" },
      secondary: { label: "Talk to Team", href: "https://wa.me/917976111087" },
    },
    links: {},
    screenshots: [],
  },
  {
    slug: "salespilot-ai",
    name: "SalesPilot AI",
    shortName: "SalesPilot",
    category: "AI Tool",
    status: "In Development",
    icon: Bot,
    theme: "teal",
    tagline: "AI-led lead qualification and follow-up automation.",
    summary:
      "An AI assistant layer that qualifies leads, runs follow-ups, and syncs insights into CRM workflows.",
    description:
      "Created for growth teams that need higher conversion velocity without increasing manual effort.",
    platforms: ["Web", "WhatsApp", "Voice"],
    audience: ["Sales Teams", "Founders", "Inside Sales"],
    highlights: [
      { label: "Lead response", value: "24/7" },
      { label: "CRM sync", value: "Automated" },
      { label: "Workflows", value: "AI-assisted" },
    ],
    features: [
      "AI lead qualification and routing",
      "WhatsApp and email follow-ups",
      "CRM enrichment and activity logging",
      "Intent scoring and summary dashboards",
    ],
    ctas: {
      primary: { label: "Request Early Access", href: "/#contact" },
      secondary: { label: "WhatsApp Us", href: "https://wa.me/917976111087" },
    },
    links: {},
    screenshots: [],
  },
];

export const SERVICES_DATA = [
  {
    icon: Zap,
    title: "Salesforce Consulting & Implementation",
    description:
      "End-to-end Salesforce consulting and CRM implementation for startups and growing businesses.",
    features: [
      "Salesforce CRM setup and architecture",
      "Custom object and automation workflows",
      "Lightning migration and optimization",
      "Ongoing admin and growth support",
    ],
  },
  {
    icon: Database,
    title: "Salesforce Data Migration & ETL",
    description:
      "Secure migration pipelines with mapping, validation, and post-go-live QA.",
    features: [
      "Data discovery and mapping plans",
      "Cleansing and deduplication",
      "Transformation and bulk migration",
      "Post-migration quality checks",
    ],
  },
  {
    icon: Globe,
    title: "Website & Web Application Development",
    description:
      "Performance-focused websites and web apps designed for growth and conversion.",
    features: [
      "Custom product websites and portals",
      "Progressive web apps and integrations",
      "Modernization of legacy systems",
      "UX, performance, and accessibility focus",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile products from UX architecture to launch and support.",
    features: [
      "Android and iOS app development",
      "Flutter and React Native builds",
      "Secure backend and API integrations",
      "Testing, release, and maintenance",
    ],
  },
  {
    icon: Cpu,
    title: "AI Agents & Automation",
    description:
      "Custom AI agents for lead capture, support, and repetitive workflow automation.",
    features: [
      "AI voice and chat assistants",
      "Feedback and lead automation",
      "Salesforce and HubSpot integrations",
      "n8n and LangChain orchestration",
    ],
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Automation Solutions",
    description:
      "Automated customer journeys for support, marketing, and transactional updates.",
    features: [
      "Conversational WhatsApp bots",
      "Lead qualification journeys",
      "Campaign and broadcast automation",
      "Payment and booking workflows",
    ],
  },
];

export const TESTIMONIALS_DATA = [
  {
    name: "Rajesh Kumar",
    role: "Managing Director, Digital Solutions India",
    content:
      "TechFi Labs implemented Salesforce across our teams and productivity increased significantly within a quarter.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Founder, Mumbai Ecommerce Brand",
    content:
      "Their team translated our vision into a product-ready platform with strong design and dependable delivery.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    role: "IT Director, Manufacturing Solutions",
    content:
      "They automated our sales operations with clean architecture and measurable business impact.",
    rating: 5,
  },
];

export const ABOUT_DATA = {
  stats: [
    { number: "25+", label: "Products & IT Projects" },
    { number: "40+", label: "Business Clients" },
    { number: "10+", label: "Years of Experience" },
    { number: "24/7", label: "Support Mindset" },
  ],
  features: [
    "Product-first engineering",
    "Fast design-to-deployment cycles",
    "Business-focused technology decisions",
    "Long-term support and iteration",
  ],
};

export const CONTACT_INFO = {
  phone: SITE_CONFIG.company.phone,
  email: SITE_CONFIG.company.email,
  address: SITE_CONFIG.company.address,
};

export const FOOTER_DATA = {
  services: [
    "Salesforce Consulting",
    "Web & Mobile Product Engineering",
    "AI Agents & Automation",
    "WhatsApp Workflows",
  ],
  company: [
    { name: "Products", href: "#products" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "/#contact" },
  ],
  socialLinks: [
    { name: "Instagram", icon: "instagram", href: "#" },
    {
      name: "LinkedIn",
      icon: "linkedin",
      href: "https://www.linkedin.com/company/the-technology-fiction/",
    },
  ],
};

export const PRODUCT_PAGE_FALLBACK = {
  title: "Product not found",
  description: "We could not find this product. Please check the URL.",
  cta: { label: "Back to Home", href: "/" },
  icon: Sparkles,
};

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
    logo: "/techfilabs_logo_2026.png",
  },
  navigation: {
    menuItems: ["home", "products", "services", "case-studies", "about", "contact"],
    ctaButton: {
      text: "Book a Consultation",
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
  },
  {
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
    slug: "rangmanch-ai",
    name: "RangManch AI",
    shortName: "RangManch",
    brandName: "RangManch AI by TechFi Labs",
    category: "SaaS Platform",
    status: "Beta",
    icon: Sparkles,
    theme: "green",
    tagline: "The AI Studio for Viral Videos, Creator Content, and Digital Storytelling.",
    summary:
      "RangManch AI is an all-in-one AI creator platform that lets you generate cinematic videos, viral reels, infographic visuals, and AI influencer content from simple prompts.",
    intro:
      "Build social media content, marketing videos, educational explainers, and storytelling visuals in seconds without editing skills.",
    heroHeadline: "Create Viral AI Videos and Cinematic Content in Seconds",
    heroSubtext:
      "RangManch AI is the creator studio for the next generation of digital storytellers — generate AI videos, influencer visuals, and viral social content with a single prompt.",
    description:
      "RangManch AI is a next-generation AI content creation platform built for the creator economy.\n\nIt transforms simple prompts into cinematic videos, AI-generated visuals, influencer-style images, and viral social media content. With powerful templates, intelligent prompt generation, and automated rendering pipelines, creators can produce professional-quality content in seconds.\n\nThe platform is designed for speed, creativity, and scale — allowing creators, educators, marketers, and startups to generate engaging content without expensive software, editing tools, or production teams.\n\nFrom viral reels to cinematic storytelling, RangManch AI turns ideas into visual content instantly.",
    platforms: ["Web", "Mobile Web"],
    audience: [
      "Content creators and influencers",
      "Social media marketers",
      "YouTubers and Instagram creators",
      "Educators and knowledge creators",
      "Startups and digital brands",
      "Agencies producing marketing content",
    ],
    highlights: [
      { label: "Cinematic AI Video Generation", value: "Vertical social videos and storytelling content" },
      { label: "Creator Template Engine", value: "Viral-ready reels, explainers, maps, and infographics" },
      { label: "AI Influencer Studio", value: "Consistent digital influencers and character-led content" },
    ],
    features: [
      "AI video generation from text prompts",
      "AI cinematic image generation",
      "Viral content templates",
      "Infographic and educational visuals",
      "AI influencer character generation",
      "Smart script and prompt enhancement",
      "Async video rendering pipeline",
      "Creator dashboard for content management",
      "Social media optimized outputs (9:16, 1:1)",
      "Multi-model AI routing (Sora / Veo / other providers)",
    ],
    ctas: {
      primary: { label: "Start Creating with RangManch AI", href: "https://rangmanchai.com" },
      secondary: { label: "Explore Viral Templates", href: "https://rangmanchai.com/templates" },
    },
    ctaSection: {
      title: "Launch content production faster with RangManch AI",
      description:
        "Create reels, visual explainers, influencer-led assets, and cinematic storytelling content from one AI workflow.",
    },
    links: {
      website: "https://rangmanchai.com",
    },
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
    slug: "salesforce-consulting",
    icon: Zap,
    title: "Salesforce Consulting & Implementation",
    description:
      "Improve sales execution and pipeline visibility with Salesforce systems aligned to your real business workflow.",
    features: [
      "Salesforce CRM setup and architecture",
      "Custom object and automation workflows",
      "Lightning migration and optimization",
      "Ongoing admin and growth support",
    ],
  },
  {
    slug: "salesforce-data-migration",
    icon: Database,
    title: "Salesforce Data Migration & ETL",
    description:
      "Migrate data with lower risk and higher reliability using validated ETL, reconciliation checks, and cutover controls.",
    features: [
      "Data discovery and mapping plans",
      "Cleansing and deduplication",
      "Transformation and bulk migration",
      "Post-migration quality checks",
    ],
  },
  {
    slug: "web-application-development",
    icon: Globe,
    title: "Website & Web Application Development",
    description:
      "Build conversion-focused websites and web applications that support faster growth and cleaner operations.",
    features: [
      "Custom product websites and portals",
      "Progressive web apps and integrations",
      "Modernization of legacy systems",
      "UX, performance, and accessibility focus",
    ],
  },
  {
    slug: "mobile-app-development",
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Launch mobile products that increase retention, improve user experience, and support long-term business scale.",
    features: [
      "Android and iOS app development",
      "Flutter and React Native builds",
      "Secure backend and API integrations",
      "Testing, release, and maintenance",
    ],
  },
  {
    slug: "ai-agents-automation",
    icon: Cpu,
    title: "AI Agents & Automation",
    description:
      "Automate repetitive operations and improve team productivity with AI agents connected to your business systems.",
    features: [
      "AI voice and chat assistants",
      "Feedback and lead automation",
      "Salesforce and HubSpot integrations",
      "n8n and LangChain orchestration",
    ],
  },
  {
    slug: "whatsapp-automation-solutions",
    icon: MessageCircle,
    title: "WhatsApp Automation Solutions",
    description:
      "Improve response speed and lead conversion with WhatsApp journeys for support, follow-up, and engagement.",
    features: [
      "Conversational WhatsApp bots",
      "Lead qualification journeys",
      "Campaign and broadcast automation",
      "Payment and booking workflows",
    ],
  },
];

export const SERVICE_LANDING_DATA = {
  "salesforce-consulting": {
    slug: "salesforce-consulting",
    title: "Salesforce Consulting & Implementation Services",
    heroTitle: "Salesforce Consulting Services for Growth-Focused Teams",
    heroSubtitle:
      "TechFi Labs helps companies design, implement, and optimize Salesforce with clear business outcomes, better adoption, and scalable architecture.",
    seoTitle:
      "Salesforce Consulting Services in Ajmer, Jaipur & Global | TechFi Labs",
    seoDescription:
      "Expert Salesforce consulting and implementation services by TechFi Labs. We support setup, customization, automation, integrations, and ongoing optimization for businesses in Ajmer, Jaipur, India, and global markets.",
    canonical: "https://techfilabs.com/services/salesforce-consulting",
    intro:
      "From discovery to go-live, we translate sales, service, and operations requirements into a Salesforce system your team can actually use and scale.",
    outcomes: [
      "Faster sales pipeline movement with cleaner CRM processes",
      "Higher team adoption through role-specific workflows",
      "Reliable dashboards for leadership-level decisions",
    ],
    capabilities: [
      "Sales Cloud and Service Cloud implementation",
      "Custom objects, flows, validation rules, and automations",
      "Lead lifecycle and opportunity pipeline optimization",
      "Third-party integrations and API-based extensions",
      "Post-launch support and admin governance",
    ],
    process: ["Discovery & process audit", "Architecture & implementation", "Training, launch, and optimization"],
    faq: [
      {
        q: "Do you work with startups and enterprise teams?",
        a: "Yes. We support early-stage teams and established businesses with scalable Salesforce implementation models.",
      },
      {
        q: "Can you optimize an existing Salesforce org?",
        a: "Yes. We perform org health checks, clean up automations, and improve performance and reporting accuracy.",
      },
    ],
  },
  "salesforce-data-migration": {
    slug: "salesforce-data-migration",
    title: "Salesforce Data Migration & ETL Services",
    heroTitle: "Secure Salesforce Data Migration & ETL Services",
    heroSubtitle:
      "Migrate to Salesforce with confidence using validated mapping, transformation logic, and quality controls built for production reliability.",
    seoTitle:
      "Salesforce Data Migration Services in Ajmer, Jaipur & Global | TechFi Labs",
    seoDescription:
      "TechFi Labs delivers Salesforce data migration and ETL services including mapping, cleansing, transformation, deduplication, and validation for businesses in India and global markets.",
    canonical: "https://techfilabs.com/services/salesforce-data-migration",
    intro:
      "We reduce migration risk by combining technical ETL execution with governance and QA checkpoints that protect data integrity.",
    outcomes: [
      "Reduced data loss and mapping errors during migration",
      "Higher CRM trust through deduplication and validation",
      "Smooth cutover planning with rollback-ready execution",
    ],
    capabilities: [
      "Source system discovery and data classification",
      "Field mapping and transformation strategy",
      "Data cleansing and deduplication workflows",
      "Bulk migration execution with QA logs",
      "Post-migration validation and reporting",
    ],
    process: ["Source audit & mapping", "ETL execution & QA", "Cutover, validation, and stabilization"],
    faq: [
      {
        q: "Can you migrate from Excel, legacy CRM, or custom systems?",
        a: "Yes. We support structured and semi-structured sources with custom mapping and transformation layers.",
      },
      {
        q: "How do you ensure data quality after migration?",
        a: "We run reconciliation checks, duplicate scans, and validation reports before and after cutover.",
      },
    ],
  },
  "mobile-app-development": {
    slug: "mobile-app-development",
    title: "Mobile App Development Services",
    heroTitle: "Mobile App Development for Android, iOS, and Cross-Platform",
    heroSubtitle:
      "Build reliable, fast, and user-friendly mobile products with TechFi Labs across native and cross-platform stacks.",
    seoTitle:
      "Mobile App Development Company in Ajmer, Jaipur & Global | TechFi Labs",
    seoDescription:
      "TechFi Labs is a mobile app development company building Android, iOS, and Flutter apps with strong UX, secure architecture, and scalable release workflows for local and global businesses.",
    canonical: "https://techfilabs.com/services/mobile-app-development",
    intro:
      "We handle product planning, UI/UX, development, testing, launch, and post-release iteration with a business-first approach.",
    outcomes: [
      "Faster launch cycles with clear product roadmaps",
      "Better retention through UX-first app flows",
      "Lower operational risk with tested release pipelines",
    ],
    capabilities: [
      "Android and iOS native app development",
      "Flutter and cross-platform app engineering",
      "Backend APIs, auth, and data synchronization",
      "Play Store/App Store release management",
      "Versioned maintenance and feature expansion",
    ],
    process: ["Product discovery & UX", "Build, test, and release", "Monitoring and growth iteration"],
    faq: [
      {
        q: "Do you build both B2B and consumer apps?",
        a: "Yes. We build internal operations apps, marketplace flows, and consumer-facing mobile products.",
      },
      {
        q: "Can you maintain and upgrade an existing app?",
        a: "Yes. We can audit existing codebases and implement structured modernization and feature delivery.",
      },
    ],
  },
  "web-application-development": {
    slug: "web-application-development",
    title: "Website & Web Application Development Services",
    heroTitle: "Web App Development Services for Scalable Digital Platforms",
    heroSubtitle:
      "TechFi Labs builds high-performance websites and web applications focused on conversion, usability, and long-term maintainability.",
    seoTitle:
      "Web Application Development Company in Ajmer, Jaipur & Global | TechFi Labs",
    seoDescription:
      "TechFi Labs provides website and web application development services including UX, frontend, backend, integrations, and performance optimization for businesses in India and global markets.",
    canonical: "https://techfilabs.com/services/web-application-development",
    intro:
      "We engineer web products that help teams launch faster, improve user engagement, and support business growth with stable architecture.",
    outcomes: [
      "Faster release cycles with scalable web architecture",
      "Improved lead conversion through UX and page performance",
      "Reliable integrations with CRM and business systems",
    ],
    capabilities: [
      "Marketing websites and conversion-focused landing pages",
      "Custom admin panels and business web portals",
      "API integrations with CRM, payments, and analytics tools",
      "Performance tuning and Core Web Vitals improvements",
      "Post-launch optimization and support",
    ],
    process: ["Discovery & UX direction", "Build and integration", "Launch, monitoring, and iteration"],
    faq: [
      {
        q: "Do you build both marketing sites and complex web apps?",
        a: "Yes. We build everything from high-converting websites to full-featured web platforms.",
      },
      {
        q: "Can you improve an existing slow website?",
        a: "Yes. We audit and optimize performance, UX, and content architecture for better conversion and SEO.",
      },
    ],
  },
  "ai-agents-automation": {
    slug: "ai-agents-automation",
    title: "AI Agents & Automation Services",
    heroTitle: "AI Agents and Automation Systems for Business Operations",
    heroSubtitle:
      "TechFi Labs designs AI-driven workflows that automate repetitive tasks, improve response times, and integrate with your core systems.",
    seoTitle: "AI Automation Agency in Ajmer, Jaipur & Global | TechFi Labs",
    seoDescription:
      "TechFi Labs builds AI agents and automation workflows for sales, support, and operations, with CRM integration and process orchestration for global businesses.",
    canonical: "https://techfilabs.com/services/ai-agents-automation",
    intro:
      "From conversational agents to backend process orchestration, we create practical AI systems that reduce manual load and improve execution speed.",
    outcomes: [
      "24/7 AI-assisted lead and support handling",
      "Reduced manual operations across repetitive workflows",
      "Better process visibility through unified automation layers",
    ],
    capabilities: [
      "AI chat and voice assistant implementation",
      "Workflow orchestration with n8n and custom logic",
      "CRM-connected automation for lead and support pipelines",
      "Prompt flow design and response quality controls",
      "Monitoring and continuous model-assisted optimization",
    ],
    process: ["Use-case mapping", "Agent and workflow implementation", "Testing, rollout, and optimization"],
    faq: [
      {
        q: "Can AI workflows integrate with Salesforce and WhatsApp?",
        a: "Yes. We design cross-system automation that connects AI assistants with CRM and communication channels.",
      },
      {
        q: "Do you build production-ready systems or prototypes?",
        a: "We build production-ready automation systems with monitoring, safeguards, and support.",
      },
    ],
  },
  "whatsapp-automation-solutions": {
    slug: "whatsapp-automation-solutions",
    title: "WhatsApp Automation Solutions",
    heroTitle: "WhatsApp Automation for Sales, Support, and Engagement",
    heroSubtitle:
      "TechFi Labs creates WhatsApp automation flows that improve response times, qualify leads, and streamline customer communication.",
    seoTitle:
      "WhatsApp Automation Services in Ajmer, Jaipur & Global | TechFi Labs",
    seoDescription:
      "TechFi Labs delivers WhatsApp automation solutions including chatbot flows, lead qualification, campaign messaging, and CRM integration for businesses in India and global markets.",
    canonical: "https://techfilabs.com/services/whatsapp-automation-solutions",
    intro:
      "We build business-grade WhatsApp journeys that combine fast communication with structured workflows for marketing, sales, and support teams.",
    outcomes: [
      "Faster customer response times on WhatsApp",
      "Automated lead qualification and follow-up journeys",
      "Improved campaign consistency and conversion tracking",
    ],
    capabilities: [
      "WhatsApp chatbot and conversation flow design",
      "Lead capture, routing, and sales follow-up automation",
      "Campaign and notification workflow setup",
      "CRM and backend integration for unified records",
      "Analytics setup and optimization support",
    ],
    process: ["Journey design", "Automation setup and integration", "Testing and optimization"],
    faq: [
      {
        q: "Can you connect WhatsApp with our CRM?",
        a: "Yes. We integrate WhatsApp workflows with Salesforce, HubSpot, and custom backend systems.",
      },
      {
        q: "Do you support both support and sales workflows?",
        a: "Yes. We design separate or combined flows for support, lead qualification, and campaign engagement.",
      },
    ],
  },
};

export const CASE_STUDIES_DATA = [
  {
    slug: "ctccs-clinical-trial-contact-center-solution",
    title: "Clinical Trial Contact Center Solution on Salesforce",
    industry: "Life Sciences / Clinical Trial Operations",
    period: "Representative Delivery Experience",
    summary:
      "Delivered a Salesforce-based contact center solution supporting patient engagement, clinical site coordination, hotline operations, and safety workflows in a regulated life sciences environment.",
    outcomes: [
      "Patient concierge and clinical trial hotline workflows",
      "Virtual research coordination support",
      "Adverse event intake and escalation",
      "Compliance-focused case management",
      "Audit trail, SLA, and communication tracking",
      "Site and participant lifecycle architecture",
      "Go-live and hypercare support",
    ],
    keywords: [
      "Salesforce Life Sciences implementation",
      "Clinical trial contact center Salesforce",
      "FDA compliance Salesforce workflows",
      "Adverse event intake Salesforce",
      "Computer system validation IQ OQ PQ",
    ],
    technologies: [
      "Salesforce CRM",
      "Apex",
      "LWC",
      "Flows",
      "Gearset",
      "Azure DevOps",
      "Agile Delivery",
    ],
  },
  {
    slug: "rems-compliance-platform-experience-cloud-portal",
    title: "REMS Compliance Platform & Experience Cloud Portal",
    industry: "Healthcare / Life Sciences",
    period: "Representative Delivery Experience",
    summary:
      "Delivered a configurable Salesforce REMS platform with admin console capabilities, enrollment automation, and a secure Experience Cloud portal for external stakeholders.",
    outcomes: [
      "REMS program setup and user management",
      "Program switching and configuration-driven workflows",
      "External Experience Cloud portal",
      "Dynamic UI layouts",
      "Enrollment automation",
      "Case-to-account mapping",
      "Duplicate checks and participant association",
      "Document submission workflows",
    ],
    keywords: [
      "Salesforce REMS platform",
      "Experience Cloud healthcare portal",
      "Salesforce enrollment automation",
      "Life sciences compliance workflows",
      "Metadata driven Salesforce configuration",
    ],
    technologies: [
      "Salesforce CRM",
      "Experience Cloud",
      "Apex",
      "LWC",
      "Flows",
      "Metadata-driven configuration",
    ],
  },
  {
    slug: "field-operations-platform-mobile-maps",
    title: "Field Operations Platform with Mobile & Maps",
    industry: "Field Service / Mobile Operations",
    period: "Representative Delivery Experience",
    summary:
      "Delivered a Salesforce field operations platform with mobile workflows, map-based assignment, geo-audit capabilities, and supervisor visibility.",
    outcomes: [
      "Salesforce mobile workflows",
      "Offline-ready execution",
      "Map-based routing and assignment",
      "Nearest-resource logic",
      "GPS-tagged visit attempts",
      "Geo-audit workflows",
      "Supervisor dashboards",
      "External survey integration",
    ],
    keywords: [
      "Salesforce field operations platform",
      "Salesforce mobile workflow delivery",
      "Map based routing Salesforce",
      "Geo audit Salesforce solution",
      "Forsta Salesforce integration",
    ],
    technologies: [
      "Salesforce",
      "Apex",
      "LWC",
      "Flows",
      "Salesforce Mobile",
      "Google Maps APIs",
      "REST APIs",
    ],
  },
];

export const ABOUT_DATA = {
  stats: [
    { number: "Consult", label: "Advisory and planning" },
    { number: "Build", label: "Implementation delivery" },
    { number: "Support", label: "Managed services and ops" },
    { number: "Scale", label: "Flexible team extension" },
  ],
  features: [
    "Work with Salesforce professionals who understand implementation, support, integrations, automation, and release execution.",
    "Start with project support, staff augmentation, production support, or a managed services model based on your delivery needs.",
    "We focus on maintainable solutions, clear documentation, stable releases, and smooth handover.",
    "We help teams move beyond go-live with continuous support, optimization, and platform improvements.",
  ],
};

export const HOMEPAGE_TRUST_STRIP = [
  "Salesforce Consulting",
  "Implementation Support",
  "Managed Services",
  "Production Support",
  "Staff Augmentation",
  "Experience Cloud & Integrations",
];

export const HOMEPAGE_SERVICES_DATA = [
  {
    title: "Salesforce Consulting",
    description:
      "Get practical guidance on Salesforce solution design, architecture, process improvement, and delivery planning.",
    features: [
      "Solution direction and delivery planning",
      "Architecture and process review",
      "Org improvement recommendations",
      "Practical advisory for delivery decisions",
    ],
    icon: Zap,
  },
  {
    title: "Salesforce Implementation",
    description:
      "Design, customize, integrate, and deploy Salesforce solutions aligned to your business processes and user experience goals.",
    features: [
      "Process-aligned solution implementation",
      "Configuration, custom development, and deployment",
      "Integration and environment coordination",
      "User-focused delivery and rollout support",
    ],
    icon: Globe,
  },
  {
    title: "Managed Services",
    description:
      "Keep your Salesforce org stable, optimized, and continuously improving with ongoing support, enhancements, and release management.",
    features: [
      "Enhancements, fixes, and org administration",
      "Backlog and release management support",
      "Monitoring and continuous optimization",
      "Reliable ongoing execution coverage",
    ],
    icon: Cpu,
  },
  {
    title: "Production Support",
    description:
      "Resolve incidents, improve system reliability, manage change requests, and support business users with structured Salesforce support.",
    features: [
      "Incident and change request handling",
      "Business-user and admin support",
      "Reliability improvements and issue resolution",
      "Release stabilization and support processes",
    ],
    icon: Database,
  },
  {
    title: "Staff Augmentation",
    description:
      "Extend your Salesforce team with skilled developers, admins, consultants, technical leads, and support professionals.",
    features: [
      "Developers, admins, consultants, and support roles",
      "Flexible team extension options",
      "Structured collaboration with your internal team",
      "Capacity for delivery and support needs",
    ],
    icon: Smartphone,
  },
  {
    title: "Experience Cloud & Integrations",
    description:
      "Build portals, automate workflows, connect systems, and create seamless experiences across Salesforce and external platforms.",
    features: [
      "Portals for external users and stakeholders",
      "Workflow automation and connected processes",
      "System integration across Salesforce and external tools",
      "Experience design for seamless user journeys",
    ],
    icon: MessageCircle,
  },
];

export const HOMEPAGE_ENGAGEMENT_MODELS = [
  {
    title: "Understand",
    description:
      "We begin by understanding your business process, Salesforce landscape, delivery goals, and current challenges.",
  },
  {
    title: "Design",
    description:
      "We define the right solution approach, delivery plan, architecture, and team model.",
  },
  {
    title: "Implement",
    description:
      "We build, configure, integrate, test, and deploy Salesforce capabilities with a focus on quality and maintainability.",
  },
  {
    title: "Support",
    description:
      "We help stabilize, optimize, and continuously improve your Salesforce environment after go-live.",
  },
];

export const HOMEPAGE_CAPABILITIES = [
  "Apex",
  "LWC",
  "Flows",
  "SOQL",
  "Sales Cloud",
  "Service Cloud",
  "Experience Cloud",
  "Health Cloud",
  "CPQ",
  "Data Cloud",
  "CRM Analytics",
  "Integrations",
  "Data Migration",
  "Reports & Dashboards",
  "Production Support",
  "Release Support",
];

export const CONTACT_INFO = {
  phone: SITE_CONFIG.company.phone,
  email: SITE_CONFIG.company.email,
  address: SITE_CONFIG.company.address,
};

export const FOOTER_DATA = {
  services: [
    "Salesforce Staff Augmentation",
    "Salesforce Production Support",
    "Salesforce Managed Services",
    "Salesforce Implementation Support",
  ],
  company: [
    { name: "Products", href: "#products" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "/#contact" },
  ],
  socialLinks: [
    { name: "Instagram", icon: "instagram", href: "#" },
    {
      name: "Facebook",
      icon: "facebook",
      href: "https://www.facebook.com/thetechnologyfiction/",
    },
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

import { Smartphone } from "lucide-react";
import type { Service, ServiceLandingItem } from "@/types/index";
import { ORGANIZATION_CONFIG } from "@/config/organization";

export const mobileAppDevelopmentService: Service = {
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
};

export const mobileAppDevelopmentLandingData: ServiceLandingItem = {
  slug: "mobile-app-development",
  title: "Mobile App Development Services",
  heroTitle: "Mobile App Development for Android, iOS, and Cross-Platform",
  heroSubtitle:
    "Build reliable, fast, and user-friendly mobile products with TechFi Labs across native and cross-platform stacks.",
  seoTitle:
    `Mobile App Development Company in Ajmer, Jaipur & Global | ${ORGANIZATION_CONFIG.name}`,
  seoDescription:
    `${ORGANIZATION_CONFIG.name} is a mobile app development company building Android, iOS, and Flutter apps with strong UX, secure architecture, and scalable release workflows for local and global businesses.`,
  canonical: `${ORGANIZATION_CONFIG.url}/services/mobile-app-development`,
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
};

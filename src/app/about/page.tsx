import type { Metadata } from "next";
import About from "@/components/sections/About";
import MissionValues from "@/components/sections/MissionValues";
import EngagementModels from "@/components/sections/EngagementModels";
import { ABOUT_DATA, MISSION_VALUES_DATA, HOMEPAGE_ENGAGEMENT_MODELS } from "@/constants/data";
import { ORGANIZATION_CONFIG } from "@/config/organization";

export const metadata: Metadata = {
  title: `About ${ORGANIZATION_CONFIG.name} | AI Automation & Salesforce Studio`,
  description:
    `Discover how ${ORGANIZATION_CONFIG.name} helps modern enterprise teams streamline workflows, deploy custom AI agents, and build robust Salesforce CRM systems in ${ORGANIZATION_CONFIG.contact.city} and globally.`,
  alternates: {
    canonical: `${ORGANIZATION_CONFIG.url}/about`,
  },
  openGraph: {
    title: `About ${ORGANIZATION_CONFIG.name} | AI Automation & Salesforce Studio`,
    description:
      "Learn about our engineering philosophy, AI automation approach, and Salesforce delivery expertise.",
    url: `${ORGANIZATION_CONFIG.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <div className="pt-24">
      <About items={ABOUT_DATA.reasons} isPageHeader={true} />
      <MissionValues
        mission={MISSION_VALUES_DATA.mission}
        whoWeAre={MISSION_VALUES_DATA.whoWeAre}
        values={MISSION_VALUES_DATA.values}
        commitment={MISSION_VALUES_DATA.commitment}
      />
      <EngagementModels models={HOMEPAGE_ENGAGEMENT_MODELS} />
    </div>
  );
}

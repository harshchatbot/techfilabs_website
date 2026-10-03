import type { Metadata } from "next";
import About from "@/components/sections/About";
import MissionValues from "@/components/sections/MissionValues";
import EngagementModels from "@/components/sections/EngagementModels";
import FAQSection from "@/components/sections/FAQSection";
import Schema from "@/components/Schema";
import { ABOUT_DATA, MISSION_VALUES_DATA, HOMEPAGE_ENGAGEMENT_MODELS, ABOUT_PAGE_FAQS } from "@/constants";
import { ORGANIZATION_CONFIG } from "@/config/organization";
import { createPageMetadata } from "@/utils/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "About Our AI & Salesforce Delivery Team",
  description:
    `Learn how ${ORGANIZATION_CONFIG.name} helps business teams streamline workflows, build practical AI automation, and improve Salesforce operations from ${ORGANIZATION_CONFIG.contact.city}, India.`,
  path: "/about",
});

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${ORGANIZATION_CONFIG.url}/about/#webpage`,
        url: `${ORGANIZATION_CONFIG.url}/about`,
        name: `About ${ORGANIZATION_CONFIG.name}`,
        description: "Learn about our engineering philosophy, AI automation approach, and Salesforce delivery expertise.",
        mainEntity: {
          "@type": "Organization",
          name: ORGANIZATION_CONFIG.name,
          url: ORGANIZATION_CONFIG.url,
          logo: ORGANIZATION_CONFIG.logoUrl,
          description: ORGANIZATION_CONFIG.description,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: ORGANIZATION_CONFIG.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "About",
            item: `${ORGANIZATION_CONFIG.url}/about`,
          },
        ],
      },
    ],
  };

  return (
    <div className="pt-24">
      <Schema id="about-page-jsonld" data={aboutSchema} />
      <About items={ABOUT_DATA.reasons} isPageHeader={true} />
      <MissionValues
        mission={MISSION_VALUES_DATA.mission}
        whoWeAre={MISSION_VALUES_DATA.whoWeAre}
        values={MISSION_VALUES_DATA.values}
        commitment={MISSION_VALUES_DATA.commitment}
      />
      <EngagementModels models={HOMEPAGE_ENGAGEMENT_MODELS} />
      <FAQSection
        eyebrow="About TechFi Labs FAQ"
        title="Engineering Philosophy & Team FAQ"
        faqs={ABOUT_PAGE_FAQS}
        schemaId="about-page-faq-schema"
      />
    </div>
  );
}

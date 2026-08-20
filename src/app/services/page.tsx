import type { Metadata } from "next";
import Schema from "@/components/Schema";
import ServicesClientContent from "@/components/pages/ServicesClientContent";
import { ORGANIZATION_CONFIG } from "@/config/organization";

export const metadata: Metadata = {
  title: `AI Automation & Salesforce Delivery Services | ${ORGANIZATION_CONFIG.name}`,
  description:
    `Explore ${ORGANIZATION_CONFIG.name} enterprise services including AI Agents, n8n Workflow Automation, WhatsApp & Email AI Integration, and Salesforce CRM Consulting.`,
  alternates: {
    canonical: `${ORGANIZATION_CONFIG.url}/services`,
  },
  openGraph: {
    title: `AI Automation & Salesforce Delivery Services | ${ORGANIZATION_CONFIG.name}`,
    description:
      "Production-ready AI workflows, WhatsApp integrations, and Salesforce CRM architectures engineered for enterprise impact.",
    url: `${ORGANIZATION_CONFIG.url}/services`,
  },
};

export default function ServicesPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
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
        name: "Services",
        item: `${ORGANIZATION_CONFIG.url}/services`,
      },
    ],
  };

  return (
    <>
      <Schema id="services-page-breadcrumb" data={breadcrumbSchema} />
      <ServicesClientContent />
    </>
  );
}

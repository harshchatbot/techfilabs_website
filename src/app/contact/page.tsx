import type { Metadata } from "next";
import Contact from "@/components/sections/Contact";
import { CONTACT_INFO, PRODUCTS_DATA } from "@/constants/data";
import { ORGANIZATION_CONFIG } from "@/config/organization";

export const metadata: Metadata = {
  title: `Contact ${ORGANIZATION_CONFIG.name} | Book a Strategy Call & Project Intake`,
  description:
    `Get in touch with ${ORGANIZATION_CONFIG.name} for AI agent development, n8n workflow automation, WhatsApp & Email AI integration, or Salesforce CRM consulting in ${ORGANIZATION_CONFIG.contact.city} and worldwide.`,
  alternates: {
    canonical: `${ORGANIZATION_CONFIG.url}/contact`,
  },
  openGraph: {
    title: `Contact ${ORGANIZATION_CONFIG.name} | Book a Strategy Call & Project Intake`,
    description:
      "Schedule a call with our automation architects to streamline your business workflows.",
    url: `${ORGANIZATION_CONFIG.url}/contact`,
  },
};

export default function ContactPage() {
  const serializableProducts = PRODUCTS_DATA.map((product) => ({
    slug: product.slug,
    name: product.name,
  }));

  return (
    <div className="pt-24">
      <Contact
        contactInfo={CONTACT_INFO}
        products={serializableProducts}
        showLeadMagnet={true}
        isPageHeader={true}
      />
    </div>
  );
}

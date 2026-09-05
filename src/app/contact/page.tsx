import type { Metadata } from "next";
import Contact from "@/components/sections/Contact";
import FAQSection from "@/components/sections/FAQSection";
import Schema from "@/components/Schema";
import { CONTACT_INFO, PRODUCTS_DATA, CONTACT_PAGE_FAQS } from "@/constants";
import { ORGANIZATION_CONFIG } from "@/config/organization";
import { createPageMetadata } from "@/utils/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Contact TechFi Labs: Discuss Your Automation Project",
  description:
    `Get in touch with ${ORGANIZATION_CONFIG.name} for AI agent development, n8n workflow automation, WhatsApp & Email AI integration, or Salesforce CRM consulting in ${ORGANIZATION_CONFIG.contact.city} and worldwide.`,
  path: "/contact",
});

export default function ContactPage() {
  const serializableProducts = PRODUCTS_DATA.map((product) => ({
    slug: product.slug,
    name: product.name,
  }));

  const contactSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": `${ORGANIZATION_CONFIG.url}/contact/#webpage`,
        url: `${ORGANIZATION_CONFIG.url}/contact`,
        name: `Contact ${ORGANIZATION_CONFIG.name}`,
        description: "Schedule a strategy call or get in touch for AI automation and Salesforce CRM consulting.",
        mainEntity: {
          "@type": "Organization",
          name: ORGANIZATION_CONFIG.name,
          telephone: ORGANIZATION_CONFIG.contact.phone,
          email: ORGANIZATION_CONFIG.contact.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: ORGANIZATION_CONFIG.contact.streetAddress,
            addressLocality: ORGANIZATION_CONFIG.contact.city,
            addressRegion: ORGANIZATION_CONFIG.contact.region,
            postalCode: ORGANIZATION_CONFIG.contact.postalCode,
            addressCountry: ORGANIZATION_CONFIG.contact.countryCode,
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: ORGANIZATION_CONFIG.contact.phone,
            contactType: "customer service",
            email: ORGANIZATION_CONFIG.contact.email,
            areaServed: ORGANIZATION_CONFIG.areasServed,
            availableLanguage: ["English", "Hindi"],
          },
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
            name: "Contact",
            item: `${ORGANIZATION_CONFIG.url}/contact`,
          },
        ],
      },
    ],
  };

  return (
    <div className="pt-24">
      <Schema id="contact-page-jsonld" data={contactSchema} />
      <Contact
        contactInfo={CONTACT_INFO}
        products={serializableProducts}
        showLeadMagnet={true}
        isPageHeader={true}
      />
      <FAQSection
        eyebrow="Project Intake FAQ"
        title="Consultation & Security FAQ"
        faqs={CONTACT_PAGE_FAQS}
        schemaId="contact-page-faq-schema"
      />
    </div>
  );
}

import type { Metadata } from "next";
import Schema from "@/components/Schema";
import ProductsClientContent from "@/components/pages/ProductsClientContent";
import { ORGANIZATION_CONFIG } from "@/config/organization";

export const metadata: Metadata = {
  title: `Proprietary Software Products & Accelerators | ${ORGANIZATION_CONFIG.name}`,
  description:
    `Discover ${ORGANIZATION_CONFIG.name} software products, Chrome extensions, and operational automation platforms including Sentinel Society Management and FieldLens for Salesforce.`,
  alternates: {
    canonical: `${ORGANIZATION_CONFIG.url}/products`,
  },
  openGraph: {
    title: `Proprietary Software Products & Accelerators | ${ORGANIZATION_CONFIG.name}`,
    description:
      "High-impact SaaS tools, Chrome extensions, and operational automation platforms built for modern enterprises.",
    url: `${ORGANIZATION_CONFIG.url}/products`,
  },
};

export default function ProductsPage() {
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
        name: "Products",
        item: `${ORGANIZATION_CONFIG.url}/products`,
      },
    ],
  };

  return (
    <>
      <Schema id="products-page-breadcrumb" data={breadcrumbSchema} />
      <ProductsClientContent />
    </>
  );
}

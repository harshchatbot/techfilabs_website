import type { Metadata } from "next";
import Schema from "@/components/Schema";
import ProductsClientContent from "@/components/pages/ProductsClientContent";
import { ORGANIZATION_CONFIG } from "@/config/organization";
import { createPageMetadata } from "@/utils/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Software Products & Accelerators",
  description:
    `Discover ${ORGANIZATION_CONFIG.name} software products, Chrome extensions, and operational automation platforms including Sentinel Society Management and FieldLens for Salesforce.`,
  path: "/products",
});

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

import type { Metadata } from "next";
import { ORGANIZATION_CONFIG } from "@/config/organization";

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
}

export function absoluteUrl(path = "/"): string {
  return new URL(path, `${ORGANIZATION_CONFIG.url}/`).toString();
}

function withoutBrandSuffix(title: string): string {
  const escapedBrand = ORGANIZATION_CONFIG.name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return title.replace(new RegExp(`(?:\\s*\\|\\s*${escapedBrand})+$`, "i"), "").trim();
}

export function createPageMetadata({
  title,
  description,
  path,
  image = ORGANIZATION_CONFIG.logo,
  keywords,
}: PageMetadataOptions): Metadata {
  const baseTitle = withoutBrandSuffix(title);
  const fullTitle =
    baseTitle === ORGANIZATION_CONFIG.name
      ? baseTitle
      : `${baseTitle} | ${ORGANIZATION_CONFIG.name}`;
  const canonical = absoluteUrl(path);
  const socialImage = absoluteUrl(image);

  return {
    title: { absolute: fullTitle },
    description,
    keywords,
    alternates: { canonical },
    openGraph: {
      title: fullTitle,
      description,
      type: "website",
      locale: "en_US",
      url: canonical,
      siteName: ORGANIZATION_CONFIG.name,
      images: [{ url: socialImage, alt: fullTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [socialImage],
    },
  };
}

export function createNotFoundMetadata(entity: string): Metadata {
  return {
    title: { absolute: `${entity} Not Found | ${ORGANIZATION_CONFIG.name}` },
    robots: { index: false, follow: false },
  };
}

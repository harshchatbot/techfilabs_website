import type { Metadata } from "next";
import { ORGANIZATION_CONFIG } from "@/config/organization";

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
  indexable?: boolean;
}

export function absoluteUrl(path = "/"): string {
  return new URL(path, `${ORGANIZATION_CONFIG.url}/`).toString();
}

function withoutBrandSuffix(title: string): string {
  const escapedBrand = ORGANIZATION_CONFIG.name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return title.replace(new RegExp(`(?:\\s*\\|\\s*${escapedBrand})+$`, "i"), "").trim();
}

function conciseDescription(description: string, maxLength = 160): string {
  const normalized = description.replace(/\s+/g, " ").trim();
  if (normalized.length <= maxLength) return normalized;

  const candidate = normalized.slice(0, maxLength - 1);
  const lastSpace = candidate.lastIndexOf(" ");
  return `${candidate.slice(0, lastSpace > 100 ? lastSpace : candidate.length).replace(/[,:;.!?-]+$/, "")}.`;
}

export function createPageMetadata({
  title,
  description,
  path,
  image = ORGANIZATION_CONFIG.socialImage,
  keywords,
  indexable = true,
}: PageMetadataOptions): Metadata {
  const baseTitle = withoutBrandSuffix(title);
  const fullTitle =
    baseTitle === ORGANIZATION_CONFIG.name
      ? baseTitle
      : `${baseTitle} | ${ORGANIZATION_CONFIG.name}`;
  const canonical = absoluteUrl(path);
  const socialImage = absoluteUrl(image);
  const metaDescription = conciseDescription(description);

  return {
    title: { absolute: fullTitle },
    description: metaDescription,
    keywords,
    robots: indexable
      ? { index: true, follow: true }
      : { index: false, follow: true, noarchive: true },
    alternates: { canonical },
    openGraph: {
      title: fullTitle,
      description: metaDescription,
      type: "website",
      locale: "en_US",
      url: canonical,
      siteName: ORGANIZATION_CONFIG.name,
      images: [{ url: socialImage, alt: fullTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: metaDescription,
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

import type { MetadataRoute } from "next";
import {
  SERVICE_LANDING_DATA,
  PRODUCTS_DATA,
  CASE_STUDIES_DATA,
} from "@/constants/data";
import { ORGANIZATION_CONFIG } from "@/config/organization";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = ORGANIZATION_CONFIG.url;

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/products`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = Object.keys(
    SERVICE_LANDING_DATA
  ).map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const productPages: MetadataRoute.Sitemap = PRODUCTS_DATA.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const caseStudyPages: MetadataRoute.Sitemap = CASE_STUDIES_DATA.map(
    (study) => ({
      url: `${baseUrl}/case-studies/${study.slug}`,
      changeFrequency: "monthly",
      priority: 0.7,
    })
  );

  return [
    ...staticPages,
    ...servicePages,
    ...productPages,
    ...caseStudyPages,
  ];
}

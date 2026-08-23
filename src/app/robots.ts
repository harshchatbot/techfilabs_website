import type { MetadataRoute } from "next";
import { ORGANIZATION_CONFIG } from "@/config/organization";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = ORGANIZATION_CONFIG.url;

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "Google-Extended",
          "PerplexityBot",
          "ClaudeBot",
          "Claude-Web",
          "Applebot-Extended",
          "Bytespider",
          "CCBot",
        ],
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

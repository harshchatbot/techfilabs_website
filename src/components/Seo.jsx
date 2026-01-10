import { useEffect } from "react";

// Helper for standard meta tags (name="description")
function upsertMeta(name, content) {
  if (!content) return;
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

// Helper for Social/Open Graph tags (property="og:title")
function upsertProperty(property, content) {
  if (!content) return;
  let tag = document.querySelector(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function upsertLink(rel, href) {
  if (!href) return;
  let tag = document.querySelector(`link[rel="${rel}"]`);
  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", rel);
    document.head.appendChild(tag);
  }
  tag.setAttribute("href", href);
}

export default function Seo({ 
  title, 
  description, 
  canonical, 
  image = "/favicon.jpg", // Default image if none provided
  type = "website" 
}) {
  useEffect(() => {
    // 1. Update Title
    if (title) document.title = title;

    // 2. Update Standard SEO
    upsertMeta("description", description);
    upsertLink("canonical", canonical);

    // 3. Update Open Graph (Facebook/LinkedIn/WhatsApp)
    upsertProperty("og:title", title);
    upsertProperty("og:description", description);
    upsertProperty("og:image", window.location.origin + image); // Ensure absolute URL
    upsertProperty("og:type", type);
    upsertProperty("og:url", canonical || window.location.href);

    // 4. Update Twitter Card
    upsertMeta("twitter:title", title);
    upsertMeta("twitter:description", description);
    upsertMeta("twitter:image", window.location.origin + image);
    upsertMeta("twitter:card", "summary_large_image");

  }, [title, description, canonical, image, type]);

  return null;
}
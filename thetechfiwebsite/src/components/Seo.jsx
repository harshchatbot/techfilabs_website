import { useEffect } from "react";

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

export default function Seo({ title, description, canonical }) {
  useEffect(() => {
    if (title) document.title = title;
    upsertMeta("description", description);
    upsertLink("canonical", canonical);
  }, [title, description, canonical]);

  return null;
}

import Script from "next/script";

interface SchemaProps {
  id?: string;
  data: Record<string, unknown> | Record<string, unknown>[];
}

export default function Schema({ id = "jsonld-schema", data }: SchemaProps) {
  if (!data) return null;

  return (
    <Script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

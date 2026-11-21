"use client";

interface TrustStripProps {
  items?: string[];
}

export default function TrustStrip({ items = [] }: TrustStripProps) {
  const visible = items.filter((item) => ["AI Agents", "n8n Workflows", "Salesforce AI"].includes(item));
  return (
    <section aria-label="Our areas of work" className="border-y border-[#24231F]/10 bg-[#F1EEE7] py-5">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-7 gap-y-2 px-5 text-xs font-medium tracking-[0.04em] text-[#625F59] sm:px-6 sm:text-sm lg:px-8">
        <span className="font-semibold text-[#24231F]">What we do</span>
        {visible.map((item) => (
          <span key={item} className="inline-flex items-center gap-2.5">
            <span aria-hidden="true" className="h-1 w-1 rounded-full bg-[#A45137]" />
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

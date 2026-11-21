import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Schema from "@/components/Schema";
import { CASE_STUDIES_DATA } from "@/constants";
import { ORGANIZATION_CONFIG } from "@/config/organization";
import { createPageMetadata } from "@/utils/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Representative Salesforce Delivery Experience",
  description:
    "Explore representative Salesforce delivery experience across life sciences, healthcare, Experience Cloud, and mobile field operations.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  const pageUrl = `${ORGANIZATION_CONFIG.url}/case-studies`;
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${pageUrl}/#webpage`,
        url: pageUrl,
        name: "Representative Salesforce Delivery Experience",
        description:
          "Representative Salesforce delivery experience with confidential client details omitted.",
        isPartOf: { "@id": `${ORGANIZATION_CONFIG.url}/#website` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: ORGANIZATION_CONFIG.url },
          { "@type": "ListItem", position: 2, name: "Case Studies", item: pageUrl },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] px-5 pb-20 pt-32 text-[#24231F] sm:px-6 sm:pt-40">
      <Schema id="case-studies-index-schema" data={schemaData} />
      <div className="mx-auto max-w-7xl">
        <header className="max-w-4xl pb-14 sm:pb-20">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#9B482E]">Delivery experience</p>
          <h1 className="font-serif text-[clamp(2.8rem,6vw,5.5rem)] font-normal leading-[1.05] tracking-[-0.055em]">
            Experience behind the work.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#625F59] sm:text-lg">
            Selected Salesforce delivery examples. Confidential client details are omitted.
          </p>
        </header>
        <section aria-label="Case studies" className="grid border-t border-[#24231F]/15 md:grid-cols-2 lg:grid-cols-3">
          {CASE_STUDIES_DATA.map((study, index) => (
            <article key={study.slug} className={`border-b border-[#24231F]/15 py-8 md:pr-7 lg:py-10 ${index % 3 !== 0 ? "lg:border-l lg:pl-7" : ""}`}>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#9B482E]">{study.industry}</p>
              <h2 className="mt-4 font-serif text-2xl font-normal leading-tight tracking-[-0.035em] sm:text-3xl">{study.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-[#625F59]">{study.summary}</p>
              <Link href={`/case-studies/${study.slug}`} className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#9B482E] hover:underline">
                Read overview <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}

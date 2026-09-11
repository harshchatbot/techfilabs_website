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
    <div className="min-h-screen bg-emerald-950 px-6 pb-20 pt-32 text-white sm:pt-36">
      <Schema id="case-studies-index-schema" data={schemaData} />
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">Delivery Experience</p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Representative Salesforce Delivery Experience
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-emerald-100/80 sm:text-lg">
            Selected examples of Salesforce implementation and support experience. Client names and confidential details are intentionally omitted.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {CASE_STUDIES_DATA.map((study) => (
            <article key={study.slug} className="flex min-w-0 flex-col rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_52px_rgba(3,41,29,0.2)] sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300">{study.industry}</p>
              <h2 className="mt-4 text-2xl font-bold text-white">{study.title}</h2>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-emerald-100/75">{study.summary}</p>
              <Link href={`/case-studies/${study.slug}`} className="mt-6 inline-flex min-h-[48px] items-center gap-2 self-start rounded-full border border-emerald-200/20 bg-white/5 px-5 py-3 font-semibold text-emerald-50 transition-colors hover:bg-white/10">
                View delivery overview <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

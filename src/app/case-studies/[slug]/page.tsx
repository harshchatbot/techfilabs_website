import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Schema from "@/components/Schema";
import { CASE_STUDIES_DATA } from "@/constants/data";
import { ORGANIZATION_CONFIG } from "@/config/organization";
import { createNotFoundMetadata, createPageMetadata } from "@/utils/metadata";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CASE_STUDIES_DATA.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = CASE_STUDIES_DATA.find((item) => item.slug === slug);

  if (!study) {
    return createNotFoundMetadata("Case Study");
  }

  return createPageMetadata({
    title: study.seoTitle,
    description: study.summary,
    path: `/case-studies/${study.slug}`,
  });
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const study = CASE_STUDIES_DATA.find((item) => item.slug === slug);

  if (!study) {
    notFound();
  }

  const caseStudyUrl = `${ORGANIZATION_CONFIG.url}/case-studies/${study.slug}`;
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${caseStudyUrl}/#webpage`,
        url: caseStudyUrl,
        name: study.title,
        about: [study.industry, ...study.technologies],
        description: study.summary,
        isPartOf: { "@id": `${ORGANIZATION_CONFIG.url}/#website` },
        publisher: { "@id": `${ORGANIZATION_CONFIG.url}/#organization` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${caseStudyUrl}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: ORGANIZATION_CONFIG.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Case Studies",
            item: `${ORGANIZATION_CONFIG.url}/case-studies`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: study.title,
            item: caseStudyUrl,
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] pb-20 pt-32 text-[#24231F] sm:pt-40">
      <Schema id={`case-study-${study.slug}-schema`} data={schemaData} />
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <header className="max-w-4xl">
          <Link href="/case-studies" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#9B482E] hover:underline">
            <ArrowLeft aria-hidden="true" className="h-4 w-4" /> All case studies
          </Link>
          <p className="mb-5 mt-9 text-xs font-semibold uppercase tracking-[0.2em] text-[#9B482E]">{study.industry}</p>
          <h1 className="font-serif text-[clamp(2.8rem,6vw,5.3rem)] font-normal leading-[1.05] tracking-[-0.055em]">{study.title}</h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#625F59] sm:text-lg">{study.summary}</p>
          <p className="mt-5 text-xs text-[#77726A]">{study.period} · Representative delivery experience; client identities and confidential details omitted.</p>
        </header>
        <div className="mt-14 grid gap-12 border-t border-[#24231F]/10 pt-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <section>
            <h2 className="font-serif text-2xl font-normal sm:text-3xl">Delivery highlights</h2>
          </section>
          <ul className="border-t border-[#24231F]/10">
            {study.outcomes.map((item) => (
              <li key={item} className="border-b border-[#24231F]/10 py-4 text-sm leading-relaxed text-[#625F59]">{item}</li>
            ))}
          </ul>
        </div>
        <section className="mt-14 border-t border-[#24231F]/10 pt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9B482E]">Technology</p>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
            {study.technologies.map((item) => <span key={item} className="text-sm text-[#625F59]">{item}</span>)}
          </div>
        </section>
      </div>
    </div>
  );
}

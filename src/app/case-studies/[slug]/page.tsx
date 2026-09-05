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
    title: `${study.title} | Salesforce Case Study`,
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
        about: study.keywords,
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
            name: study.title,
            item: caseStudyUrl,
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-emerald-950 text-white pt-28 pb-20">
      <Schema id={`case-study-${study.slug}-schema`} data={schemaData} />

      <main>
        <section className="max-w-7xl mx-auto px-6">
          <Link href="/" className="inline-flex items-center gap-2 text-lime-200 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>

          <div className="mt-8 max-w-5xl">
            <p className="text-xs uppercase tracking-[0.2em] text-lime-200 mb-4">Salesforce Case Study</p>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4">{study.title}</h1>
            <p className="text-lime-100/90 text-lg mb-3">Industry: {study.industry}</p>
            <p className="text-emerald-100/75 mb-8">Timeline: {study.period}</p>
            <p className="text-emerald-100/85 leading-relaxed text-lg">{study.summary}</p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 mt-16 grid lg:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-bold mb-4">Project Scope</h2>
            <p className="text-emerald-100/85 leading-relaxed">
              Led and delivered enterprise Salesforce and AI solutions, supporting operations across critical phases in regulated environments. Enabled concierge services, virtual research coordination, and automated hotlines to manage engagement, coordination, and safety workflows.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-bold mb-4">Business Outcomes</h2>
            <ul className="space-y-3 text-emerald-50/90">
              {study.outcomes.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 mt-16">
          <div className="rounded-3xl border border-white/10 bg-emerald-900/30 p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-5">Key Contributions</h2>
            <div className="grid md:grid-cols-2 gap-4 text-emerald-50/90">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">Designed scalable CRM and AI workflow architecture</div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">Implemented intake, documentation, and escalation workflows</div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">Built compliance-driven case management with audit trail controls and SLA tracking</div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">Contributed to CSV execution including IQ, OQ, and PQ activities</div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">Authored validation artifacts and system specs</div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">Standardized data handling and audit-readiness for reporting</div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">Architected intelligent routing and automated matching</div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">Led enterprise go-live, hypercare stabilization, and ongoing optimization</div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 mt-16">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-5">Technologies and Keywords</h2>
            <div className="flex flex-wrap gap-2">
              {[...study.technologies, ...study.keywords].map((item) => (
                <span key={item} className="rounded-full border border-white/20 px-3 py-1 text-sm text-emerald-50">{item}</span>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

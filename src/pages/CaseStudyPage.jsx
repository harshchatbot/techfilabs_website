import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Footer, Navigation } from "../components";
import Schema from "../components/Schema";
import Seo from "../components/Seo";
import { CASE_STUDIES_DATA, FOOTER_DATA, SITE_CONFIG } from "../constants/data";

export default function CaseStudyPage() {
  const { slug } = useParams();
  const study = CASE_STUDIES_DATA.find((item) => item.slug === slug);

  if (!study) {
    return (
      <div className="min-h-screen bg-emerald-950 text-white">
        <Navigation
          logo={SITE_CONFIG.company}
          menuItems={SITE_CONFIG.navigation.menuItems}
          ctaButton={SITE_CONFIG.navigation.ctaButton}
        />
        <main className="pt-36 pb-24 px-6 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-black mb-4">Case study not found</h1>
          <p className="text-emerald-100/80 mb-8">Please return to home and open a valid case study.</p>
          <Link to="/" className="inline-flex items-center gap-2 rounded-full bg-lime-300 px-6 py-3 font-semibold text-emerald-950">
            Back to Home
          </Link>
        </main>
      </div>
    );
  }

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.title,
    about: study.keywords,
    datePublished: "2025-01-01",
    author: {
      "@type": "Organization",
      name: "TechFi Labs",
    },
    publisher: {
      "@type": "Organization",
      name: "TechFi Labs",
      url: "https://techfilabs.com/",
    },
    mainEntityOfPage: `https://techfilabs.com/case-studies/${study.slug}`,
    description: study.summary,
  };

  return (
    <div className="min-h-screen bg-emerald-950 text-white">
      <Seo
        title={`${study.title} | Salesforce Case Study | TechFi Labs`}
        description={study.summary}
        canonical={`https://techfilabs.com/case-studies/${study.slug}`}
        type="article"
        keywords={study.keywords.join(", " )}
      />
      <Schema id={`case-study-${study.slug}-schema`} data={schemaData} />

      <Navigation
        logo={SITE_CONFIG.company}
        menuItems={SITE_CONFIG.navigation.menuItems}
        ctaButton={SITE_CONFIG.navigation.ctaButton}
      />

      <main className="pt-32 pb-20">
        <section className="max-w-7xl mx-auto px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-lime-200 hover:text-white transition-colors">
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
              Led and delivered CTCCS, an enterprise Salesforce-based Clinical Trial Contact Center Solution supporting patient-centric operations across pre-trial, active, and post-trial phases in an FDA-regulated Life Sciences environment. The platform enabled Patient Concierge Services, Virtual Research Coordination Center (VRCC), and Clinical Trial Hotline programs to manage participant engagement, site coordination, and safety workflows in a compliance-sensitive setting.
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
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">Designed scalable patient and clinical site lifecycle architecture in Salesforce CRM</div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">Implemented Adverse Event intake, documentation, and escalation workflows aligned with FDA safety standards</div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">Built compliance-driven case management with audit trail controls and SLA tracking</div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">Contributed to CSV execution including IQ, OQ, and PQ activities</div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">Authored validation artifacts: system design specs, data model docs, and test protocols</div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">Standardized Date/DateTime handling and audit-readiness for regulatory reporting</div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">Architected intelligent routing including distance-based site matching</div>
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

      <Footer
        logo={SITE_CONFIG.company}
        services={FOOTER_DATA.services}
        company={FOOTER_DATA.company}
        socialLinks={FOOTER_DATA.socialLinks}
      />
    </div>
  );
}

"use client";

import { MoveRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

function StudyVisual({ study, featured = false }: { study: any; featured?: boolean }) {
  return (
    <div
      className={`relative isolate overflow-hidden rounded-[1.75rem] border border-green-100 bg-gradient-to-br from-green-50 via-white to-emerald-50 ${
        featured ? "aspect-[14/9]" : "aspect-[16/10]"
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.14),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(22,163,74,0.12),transparent_36%)]" />
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-green-200/35 blur-3xl" />
      <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-emerald-200/35 blur-3xl" />

      <div className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-8">
        <div className="flex flex-wrap gap-2">
          {study.technologies.slice(0, featured ? 5 : 3).map((item: string) => (
            <span
              key={item}
              className="rounded-full border border-green-200 bg-white/80 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-green-700"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="rounded-2xl border border-white/70 bg-white/80 p-4 shadow-[0_18px_50px_rgba(22,101,52,0.08)] backdrop-blur-sm">
          <p className="text-xs uppercase tracking-[0.18em] text-green-600 mb-2">Representative Delivery</p>
          <div className="grid gap-2 sm:grid-cols-2">
            {study.outcomes.slice(0, featured ? 4 : 2).map((item: string) => (
              <div key={item} className="rounded-xl border border-green-100 bg-green-50/60 px-3 py-2 text-sm text-gray-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function StudyHeader({ study }: { study: any }) {
  const primaryIndustry = study.industry.split(" / ")[0];
  const initials = study.industry
    .split(/[ /&-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part: string) => part[0])
    .join("");

  return (
    <div className="flex items-start gap-3">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-green-200 bg-green-50 text-sm font-bold uppercase tracking-[0.14em] text-green-700">
        {initials}
      </div>
      <div className="min-w-0">
        <p className="text-xl font-semibold text-gray-900 sm:text-2xl">{primaryIndustry}</p>
        <p className="mt-1 text-sm text-slate-500">{study.industry}</p>
      </div>
    </div>
  );
}

function ReadLink({ study, showLinks }: { study: any; showLinks: boolean }) {
  if (!showLinks) {
    return <div className="flex items-center gap-2 font-medium text-green-700">Delivery overview</div>;
  }

  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className="inline-flex items-center gap-2 font-medium text-green-700 transition-colors duration-300 hover:text-green-800"
    >
      Read case study
      <MoveRight className="h-4 w-4 transition-transform duration-500 ease-out group-hover:translate-x-1" />
    </Link>
  );
}

interface CaseStudiesProps {
  title?: string;
  subtitle?: string;
  disclaimer?: string;
  studies?: any[];
  showLinks?: boolean;
}

export default function CaseStudies({
  title = "Representative Salesforce Delivery Experience",
  subtitle = "Examples of Salesforce delivery experience across regulated environments, portals, and field operations programs.",
  disclaimer = "",
  studies = [],
  showLinks = true,
}: CaseStudiesProps) {
  if (!studies.length) return null;

  const [featuredStudy, ...secondaryStudies] = studies;

  return (
    <section id="case-studies" className="py-22 md:py-28 bg-[linear-gradient(180deg,#ffffff_0%,#f7fbff_100%)]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="max-w-4xl mb-10 md:mb-12"
        >
          <p className="inline-flex items-center rounded-full border border-green-200 bg-green-50 px-4 py-1 text-xs tracking-[0.2em] uppercase text-green-700 mb-5">
            Salesforce Delivery Experience
          </p>
          <h2 className="mb-4 text-3xl md:text-6xl font-medium tracking-tight text-gray-900">{title}</h2>
          <p className="text-base md:text-lg text-slate-600">{subtitle}</p>
          {disclaimer ? (
            <p className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm leading-relaxed text-slate-600 md:px-5 md:py-4">
              {disclaimer}
            </p>
          ) : null}
        </motion.div>

        <div className="overflow-hidden rounded-[1.75rem] md:rounded-[2rem] border border-gray-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.06)]">
          <div className="grid gap-6 px-5 transition-colors duration-500 ease-out hover:bg-green-50/30 lg:grid-cols-2 md:px-6 xl:px-12">
            <div className="flex flex-col justify-between gap-5 pt-7 md:gap-6 md:pt-12 lg:pb-12">
              <StudyHeader study={featuredStudy} />
              <div>
                <span className="text-xs uppercase tracking-[0.18em] text-green-700 sm:text-sm">
                  {featuredStudy.industry}
                </span>
                <h3 className="mt-4 mb-4 text-xl md:text-2xl font-semibold text-balance text-gray-900 sm:text-4xl sm:leading-tight">
                  {featuredStudy.title}
                </h3>
                <p className="mb-5 max-w-2xl text-sm md:text-base leading-relaxed text-gray-600">{featuredStudy.summary}</p>
                <ReadLink study={featuredStudy} showLinks={showLinks} />
              </div>
            </div>

            <div className="relative isolate py-8 md:py-10 lg:py-12">
              <StudyVisual study={featuredStudy} featured />
            </div>
          </div>

          <div className="border-t border-gray-200">
            <div className="grid flex-1 lg:grid-cols-2">
              {secondaryStudies.map((study, idx) => (
                <div
                  key={study.slug}
                  className={`group flex h-full flex-col justify-between gap-6 bg-white px-5 py-7 transition-colors duration-500 ease-out hover:bg-green-50/30 md:px-6 md:py-10 ${
                    idx === 0 ? "" : "border-t lg:border-l lg:border-t-0"
                  } border-gray-200`}
                >
                  <StudyHeader study={study} />
                  <div className="flex flex-1 flex-col">
                    <h3 className="mb-4 text-xl font-semibold text-balance text-gray-900 md:text-2xl xl:text-[1.9rem] xl:leading-10">
                      {study.title}
                    </h3>
                    <p className="mb-5 flex-1 text-sm leading-relaxed text-gray-600 md:text-base">{study.summary}</p>
                    <div className="pt-1">
                      <ReadLink study={study} showLinks={showLinks} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

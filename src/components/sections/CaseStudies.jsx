import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function StudyVisual({ study, featured = false }) {
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
          {study.technologies.slice(0, featured ? 5 : 3).map((item) => (
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
            {study.outcomes.slice(0, featured ? 4 : 2).map((item) => (
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

function StudyHeader({ study }) {
  return (
    <div className="flex items-center gap-3 text-xl font-semibold text-gray-900 sm:text-2xl">
      <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-green-200 bg-green-50 text-sm font-bold uppercase tracking-[0.14em] text-green-700">
        {study.industry
          .split(/[ /&-]+/)
          .filter(Boolean)
          .slice(0, 2)
          .map((part) => part[0])
          .join("")}
      </div>
      <span>{study.industry.split(" / ")[0]}</span>
    </div>
  );
}

function ReadLink({ study, showLinks }) {
  if (!showLinks) {
    return (
      <div className="flex items-center gap-2 font-medium text-green-700">
        Representative delivery snapshot
      </div>
    );
  }

  return (
    <Link
      to={`/case-studies/${study.slug}`}
      className="inline-flex items-center gap-2 font-medium text-green-700 transition-colors duration-300 hover:text-green-800"
    >
      Read case study
      <MoveRight className="h-4 w-4 transition-transform duration-500 ease-out group-hover:translate-x-1" />
    </Link>
  );
}

export default function CaseStudies({
  title = "Representative Salesforce Delivery Experience",
  subtitle = "Examples of Salesforce delivery experience across regulated environments, portals, and field operations programs.",
  disclaimer = "",
  studies = [],
  showLinks = true,
}) {
  if (!studies.length) return null;

  const [featuredStudy, ...secondaryStudies] = studies;

  return (
    <section id="case-studies" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="max-w-4xl mb-12"
        >
          <p className="inline-flex items-center rounded-full border border-green-200 bg-green-50 px-4 py-1 text-xs tracking-[0.2em] uppercase text-green-700 mb-5">
            Salesforce Delivery Experience
          </p>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-gray-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-600">{subtitle}</p>
          {disclaimer ? (
            <p className="mt-5 rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-sm leading-relaxed text-gray-600">
              {disclaimer}
            </p>
          ) : null}
        </motion.div>

        <div className="overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.06)]">
          <div className="grid gap-6 px-6 transition-colors duration-500 ease-out hover:bg-green-50/30 lg:grid-cols-2 xl:px-12">
            <div className="flex flex-col justify-between gap-6 pt-8 md:pt-12 lg:pb-12">
              <StudyHeader study={featuredStudy} />
              <div>
                <span className="text-xs uppercase tracking-[0.18em] text-green-700 sm:text-sm">
                  {featuredStudy.industry}
                </span>
                <h3 className="mt-4 mb-5 text-2xl font-semibold text-balance text-gray-900 sm:text-4xl sm:leading-tight">
                  {featuredStudy.title}
                  <span className="font-medium text-green-700/65"> {featuredStudy.summary}</span>
                </h3>
                <ReadLink study={featuredStudy} showLinks={showLinks} />
              </div>
            </div>

            <div className="relative isolate py-10 lg:py-12">
              <StudyVisual study={featuredStudy} featured />
            </div>
          </div>

          <div className="flex border-t border-gray-200">
            <div className="hidden w-20 shrink-0 bg-[radial-gradient(#16a34a_1px,transparent_1px)] [background-size:10px_10px] opacity-[0.08] xl:block" />
            <div className="grid flex-1 lg:grid-cols-2">
              {secondaryStudies.map((study, idx) => (
                <div
                  key={study.slug}
                  className={`group flex flex-col justify-between gap-10 bg-white px-6 py-8 transition-colors duration-500 ease-out hover:bg-green-50/30 md:py-12 xl:gap-12 ${
                    idx === 0 ? "xl:border-l xl:pl-8" : "border-t lg:border-l lg:border-t-0 xl:border-r xl:pl-8"
                  } border-gray-200`}
                >
                  <StudyHeader study={study} />
                  <div>
                    <span className="text-xs uppercase tracking-[0.18em] text-green-700 sm:text-sm">
                      {study.industry}
                    </span>
                    <h3 className="mt-4 mb-5 text-2xl font-semibold text-balance text-gray-900 sm:text-3xl sm:leading-10">
                      {study.title}
                      <span className="font-medium text-green-700/65"> {study.summary}</span>
                    </h3>
                    <ReadLink study={study} showLinks={showLinks} />
                  </div>
                </div>
              ))}
            </div>
            <div className="hidden w-20 shrink-0 bg-[radial-gradient(#16a34a_1px,transparent_1px)] [background-size:10px_10px] opacity-[0.08] xl:block" />
          </div>
        </div>
      </div>
    </section>
  );
}

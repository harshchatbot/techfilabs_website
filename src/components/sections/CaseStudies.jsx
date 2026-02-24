import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CaseStudies({
  title = "Case studies with enterprise delivery depth",
  subtitle = "Proof of Salesforce execution in compliance-heavy and business-critical programs.",
  studies = [],
}) {
  return (
    <section id="case-studies" className="py-28 bg-emerald-900/80 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(190,242,100,0.14),transparent_45%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mb-12"
        >
          <p className="inline-flex items-center rounded-full border border-lime-300/40 bg-lime-300/10 px-4 py-1 text-xs tracking-[0.2em] uppercase text-lime-100 mb-5">
            Salesforce Case Studies
          </p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-4">{title}</h2>
          <p className="text-lg text-emerald-100/85">{subtitle}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {studies.map((study, index) => (
            <motion.article
              key={study.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/12 bg-emerald-950/45 p-7"
            >
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="rounded-full border border-lime-300/35 bg-lime-300/10 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-lime-100">
                  {study.industry}
                </span>
                <span className="text-xs text-emerald-100/70">{study.period}</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">{study.title}</h3>
              <p className="text-emerald-100/80 mb-6 leading-relaxed">{study.summary}</p>

              <ul className="space-y-2 mb-6 text-sm text-emerald-50/90">
                {study.outcomes.map((outcome) => (
                  <li key={outcome}>• {outcome}</li>
                ))}
              </ul>

              <Link
                to={`/case-studies/${study.slug}`}
                className="inline-flex items-center gap-2 rounded-full bg-lime-300 px-4 py-2.5 text-sm font-semibold text-emerald-950 hover:bg-lime-200 transition-colors"
              >
                Read Case Study
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { ArrowRight, Tag } from "lucide-react";
import { Link } from "react-router-dom";

// Map case study slugs to relevant thumbnail images already in /public
const CASE_THUMBNAILS = {
  "ctccs-clinical-trial-contact-center-solution":
    "/products/sentinel/sentinel3.jpg",
  "rems-compliance-platform-experience-cloud-portal":
    "/products/fieldlens/fl_snap2.png",
  "field-operations-platform-mobile-maps": "/products/sentinel/sentinel6.jpg",
};

// Fallback Unsplash images by industry keyword (no download, direct URL)
const INDUSTRY_THUMBNAILS = {
  "Life Sciences":
    "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=600&q=80&auto=format&fit=crop",
  Healthcare:
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80&auto=format&fit=crop",
  "Field Service":
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80&auto=format&fit=crop",
};

function getThumbnail(study) {
  if (CASE_THUMBNAILS[study.slug]) return CASE_THUMBNAILS[study.slug];
  for (const key of Object.keys(INDUSTRY_THUMBNAILS)) {
    if (study.industry?.includes(key)) return INDUSTRY_THUMBNAILS[key];
  }
  return "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80&auto=format&fit=crop";
}

export default function CaseStudies({
  title = "Representative Salesforce Delivery Experience",
  subtitle = "Examples of Salesforce delivery experience across regulated environments, portals, and field operations programs.",
  disclaimer = "",
  studies = [],
  showLinks = false,
}) {
  return (
    <section
      id="case-studies"
      className="py-28 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-14"
        >
          <p className="text-xs uppercase tracking-[0.22em] text-green-600 mb-4">
            Case Studies
          </p>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-500">{subtitle}</p>
          {disclaimer && (
            <p className="mt-4 text-xs text-gray-500 leading-relaxed border-l-2 border-green-300 bg-green-50 pl-4 py-2 rounded-r-lg">
              {disclaimer}
            </p>
          )}
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {studies.map((study, index) => (
            <motion.article
              key={study.slug}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-gray-100 bg-white shadow-sm overflow-hidden group hover:shadow-md transition-all duration-300"
            >
              {/* Thumbnail */}
              <div className="relative h-44 overflow-hidden bg-gray-50">
                <img
                  src={getThumbnail(study)}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  loading="lazy"
                />
                {/* Industry badge over image */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 border border-green-100 px-3 py-1 text-xs font-medium text-green-700">
                    <Tag className="w-3 h-3" />
                    {study.industry}
                  </span>
                </div>
              </div>

              <div className="p-7">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-snug">
                  {study.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  {study.summary}
                </p>

                {/* Technology tags */}
                {study.technologies?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-5">
                    {study.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-gray-50 border border-gray-100 px-3 py-1 text-xs text-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                    {study.technologies.length > 4 && (
                      <span className="rounded-full bg-gray-50 border border-gray-100 px-3 py-1 text-xs text-gray-400">
                        +{study.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                )}

                {showLinks && study.slug && (
                  <Link
                    to={`/case-studies/${study.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-green-600 hover:text-green-800 transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

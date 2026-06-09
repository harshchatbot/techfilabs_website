import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  fadeSlideUpVariants,
  getAnimationConfig,
  prefersReducedMotion,
} from "../../utils/motionConfig";

// Inline SVG illustrations — one per card, brand-matched, no external CDN
const ILLUSTRATIONS = [
  // 0 — Salesforce Consulting: document + checklist
  <svg
    key="0"
    viewBox="0 0 160 90"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    <rect
      x="12"
      y="10"
      width="52"
      height="65"
      rx="5"
      fill="#064e3b"
      stroke="#34d399"
      strokeWidth="1.5"
    />
    <rect x="22" y="22" width="32" height="3.5" rx="1.5" fill="#6ee7b7" />
    <rect
      x="22"
      y="31"
      width="24"
      height="3"
      rx="1.5"
      fill="#34d399"
      opacity="0.6"
    />
    <rect
      x="22"
      y="39"
      width="28"
      height="3"
      rx="1.5"
      fill="#34d399"
      opacity="0.5"
    />
    <rect
      x="22"
      y="47"
      width="20"
      height="3"
      rx="1.5"
      fill="#34d399"
      opacity="0.4"
    />
    <rect
      x="22"
      y="55"
      width="26"
      height="3"
      rx="1.5"
      fill="#34d399"
      opacity="0.3"
    />
    <rect
      x="78"
      y="10"
      width="52"
      height="65"
      rx="5"
      fill="#064e3b"
      stroke="#a3e635"
      strokeWidth="1.5"
    />
    <circle
      cx="104"
      cy="38"
      r="13"
      fill="#14532d"
      stroke="#a3e635"
      strokeWidth="1.5"
    />
    <path
      d="M97 38 L102 43 L111 32"
      stroke="#a3e635"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="88"
      y="58"
      width="32"
      height="3"
      rx="1.5"
      fill="#6ee7b7"
      opacity="0.5"
    />
    <path
      d="M64 42 L78 42"
      stroke="#a3e635"
      strokeWidth="1.5"
      strokeDasharray="4 3"
    />
    <circle cx="64" cy="42" r="2.5" fill="#a3e635" />
    <circle cx="78" cy="42" r="2.5" fill="#a3e635" />
  </svg>,

  // 1 — Implementation Support: Kanban board
  <svg
    key="1"
    viewBox="0 0 160 90"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    <rect
      x="10"
      y="8"
      width="140"
      height="70"
      rx="6"
      fill="#064e3b"
      stroke="#34d399"
      strokeWidth="1.5"
    />
    <rect x="10" y="8" width="140" height="18" rx="6" fill="#065f46" />
    <rect x="10" y="18" width="140" height="8" fill="#065f46" />
    <circle cx="24" cy="17" r="4" fill="#f87171" />
    <circle cx="36" cy="17" r="4" fill="#fbbf24" />
    <circle cx="48" cy="17" r="4" fill="#34d399" />
    <rect
      x="20"
      y="32"
      width="34"
      height="18"
      rx="3"
      fill="#065f46"
      stroke="#6ee7b7"
      strokeWidth="1"
    />
    <rect
      x="23"
      y="36"
      width="20"
      height="2.5"
      rx="1"
      fill="#6ee7b7"
      opacity="0.7"
    />
    <rect
      x="23"
      y="41"
      width="15"
      height="2.5"
      rx="1"
      fill="#6ee7b7"
      opacity="0.4"
    />
    <rect
      x="63"
      y="32"
      width="34"
      height="18"
      rx="3"
      fill="#065f46"
      stroke="#6ee7b7"
      strokeWidth="1"
    />
    <rect
      x="66"
      y="36"
      width="20"
      height="2.5"
      rx="1"
      fill="#6ee7b7"
      opacity="0.7"
    />
    <rect
      x="66"
      y="41"
      width="13"
      height="2.5"
      rx="1"
      fill="#6ee7b7"
      opacity="0.4"
    />
    <rect
      x="63"
      y="54"
      width="34"
      height="16"
      rx="3"
      fill="#065f46"
      stroke="#6ee7b7"
      strokeWidth="1"
    />
    <rect
      x="66"
      y="58"
      width="18"
      height="2.5"
      rx="1"
      fill="#6ee7b7"
      opacity="0.6"
    />
    <rect
      x="106"
      y="32"
      width="34"
      height="38"
      rx="3"
      fill="#14532d"
      stroke="#a3e635"
      strokeWidth="1.5"
    />
    <path
      d="M116 51 L121 56 L130 44"
      stroke="#a3e635"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,

  // 2 — Managed Services: bar chart uptrend
  <svg
    key="2"
    viewBox="0 0 160 90"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    <rect
      x="10"
      y="10"
      width="140"
      height="65"
      rx="6"
      fill="#064e3b"
      stroke="#34d399"
      strokeWidth="1.5"
    />
    <line
      x1="30"
      y1="20"
      x2="30"
      y2="68"
      stroke="#34d399"
      strokeWidth="1"
      opacity="0.4"
    />
    <line
      x1="30"
      y1="68"
      x2="148"
      y2="68"
      stroke="#34d399"
      strokeWidth="1"
      opacity="0.4"
    />
    <rect
      x="38"
      y="44"
      width="16"
      height="24"
      rx="2"
      fill="#065f46"
      stroke="#6ee7b7"
      strokeWidth="1"
    />
    <rect
      x="62"
      y="36"
      width="16"
      height="32"
      rx="2"
      fill="#065f46"
      stroke="#6ee7b7"
      strokeWidth="1"
    />
    <rect
      x="86"
      y="28"
      width="16"
      height="40"
      rx="2"
      fill="#065f46"
      stroke="#6ee7b7"
      strokeWidth="1"
    />
    <rect
      x="110"
      y="18"
      width="16"
      height="50"
      rx="2"
      fill="#14532d"
      stroke="#a3e635"
      strokeWidth="1.5"
    />
    <path
      d="M46 44 L70 36 L94 28 L118 18"
      stroke="#a3e635"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="46" cy="44" r="3" fill="#a3e635" />
    <circle cx="70" cy="36" r="3" fill="#a3e635" />
    <circle cx="94" cy="28" r="3" fill="#a3e635" />
    <circle cx="118" cy="18" r="3" fill="#a3e635" />
  </svg>,

  // 3 — Production Support: clock / SLA
  <svg
    key="3"
    viewBox="0 0 160 90"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    <circle
      cx="80"
      cy="45"
      r="35"
      fill="#064e3b"
      stroke="#34d399"
      strokeWidth="1.5"
    />
    <circle
      cx="80"
      cy="45"
      r="25"
      fill="#065f46"
      stroke="#6ee7b7"
      strokeWidth="1"
    />
    <path
      d="M80 22 L80 45 L96 56"
      stroke="#a3e635"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="80" cy="45" r="4" fill="#a3e635" />
    <circle cx="80" cy="12" r="3.5" fill="#34d399" opacity="0.5" />
    <circle cx="113" cy="28" r="3.5" fill="#34d399" opacity="0.5" />
    <circle cx="113" cy="62" r="3.5" fill="#34d399" opacity="0.5" />
    <circle cx="80" cy="78" r="3.5" fill="#34d399" opacity="0.5" />
    <circle cx="47" cy="62" r="3.5" fill="#34d399" opacity="0.5" />
    <circle cx="47" cy="28" r="3.5" fill="#34d399" opacity="0.5" />
    <rect
      x="20"
      y="6"
      width="32"
      height="10"
      rx="5"
      fill="#14532d"
      stroke="#a3e635"
      strokeWidth="1"
    />
    <rect
      x="23"
      y="9"
      width="16"
      height="4"
      rx="2"
      fill="#a3e635"
      opacity="0.7"
    />
  </svg>,

  // 4 — Staff Augmentation: people + plus
  <svg
    key="4"
    viewBox="0 0 160 90"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    <circle
      cx="50"
      cy="32"
      r="13"
      fill="#065f46"
      stroke="#6ee7b7"
      strokeWidth="1.5"
    />
    <path
      d="M26 72 C26 56 74 56 74 72"
      fill="#064e3b"
      stroke="#6ee7b7"
      strokeWidth="1.5"
    />
    <circle
      cx="110"
      cy="32"
      r="13"
      fill="#14532d"
      stroke="#a3e635"
      strokeWidth="1.5"
    />
    <path
      d="M86 72 C86 56 134 56 134 72"
      fill="#064e3b"
      stroke="#a3e635"
      strokeWidth="1.5"
    />
    <circle cx="50" cy="32" r="5" fill="#6ee7b7" opacity="0.6" />
    <circle cx="110" cy="32" r="5" fill="#a3e635" opacity="0.8" />
    <rect x="76" y="18" width="18" height="3.5" rx="1.5" fill="#a3e635" />
    <rect x="83" y="11" width="3.5" height="18" rx="1.5" fill="#a3e635" />
  </svg>,

  // 5 — Experience Cloud & Integrations: hub + spokes
  <svg
    key="5"
    viewBox="0 0 160 90"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    <circle
      cx="80"
      cy="45"
      r="16"
      fill="#14532d"
      stroke="#a3e635"
      strokeWidth="2"
    />
    <circle cx="80" cy="45" r="6" fill="#a3e635" />
    <circle
      cx="25"
      cy="20"
      r="10"
      fill="#064e3b"
      stroke="#6ee7b7"
      strokeWidth="1.5"
    />
    <circle
      cx="135"
      cy="20"
      r="10"
      fill="#064e3b"
      stroke="#6ee7b7"
      strokeWidth="1.5"
    />
    <circle
      cx="25"
      cy="70"
      r="10"
      fill="#064e3b"
      stroke="#6ee7b7"
      strokeWidth="1.5"
    />
    <circle
      cx="135"
      cy="70"
      r="10"
      fill="#064e3b"
      stroke="#6ee7b7"
      strokeWidth="1.5"
    />
    <path
      d="M35 24 L64 37"
      stroke="#34d399"
      strokeWidth="1.5"
      strokeDasharray="4 3"
    />
    <path
      d="M96 37 L125 24"
      stroke="#34d399"
      strokeWidth="1.5"
      strokeDasharray="4 3"
    />
    <path
      d="M35 66 L64 53"
      stroke="#34d399"
      strokeWidth="1.5"
      strokeDasharray="4 3"
    />
    <path
      d="M96 53 L125 66"
      stroke="#34d399"
      strokeWidth="1.5"
      strokeDasharray="4 3"
    />
  </svg>,
];

export default function Services({
  title = "Services focused on growth outcomes",
  subtitle = "We align technology with your business goals to improve conversion, efficiency, and execution speed.",
  services = [],
}) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const reduceMotion = prefersReducedMotion();

  return (
    <section
      id="services"
      className="py-28 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              variants={getAnimationConfig(fadeSlideUpVariants, {
                visible: () => ({ opacity: 1, y: 0 }),
              })}
              initial="hidden"
              whileInView="visible"
              custom={reduceMotion ? 0 : index * 0.08}
              viewport={{ once: true, margin: "-60px" }}
              whileHover={reduceMotion ? {} : { y: -6 }}
              onMouseEnter={() => !reduceMotion && setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="h-full rounded-3xl border border-gray-100 bg-white shadow-sm overflow-hidden hover:shadow-md hover:border-green-100 transition-all duration-300"
            >
              {/* Illustration banner */}
              <div className="w-full h-32 bg-green-50 border-b border-gray-100 flex items-center justify-center px-8 py-4">
                {ILLUSTRATIONS[index] || ILLUSTRATIONS[0]}
              </div>

              <div className="p-7">
                <div
                  className={`w-12 h-12 rounded-2xl border border-green-100 bg-green-50 flex items-center justify-center mb-6 transition-colors duration-300`}
                >
                  {service.icon ? (
                    <service.icon className="w-6 h-6 text-green-600" />
                  ) : null}
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-500 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3 pt-5 border-t border-gray-100">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-gray-600"
                    >
                      <Check className="w-4 h-4 mt-0.5 text-green-500 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {service.slug && (
                  <Link
                    to={`/services/${service.slug}`}
                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-green-200 px-4 py-2 text-sm font-semibold text-green-700 hover:bg-green-50 transition-colors"
                  >
                    Learn More
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

"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { useState } from "react";
import { fadeSlideUpVariants, hoverLiftVariants, getAnimationConfig, prefersReducedMotion } from "../../utils/motionConfig";

interface TestimonialsProps {
  title?: string;
  subtitle?: string;
  testimonials?: any[];
}

export default function Testimonials({
  title = "Client & Partner Feedback",
  subtitle = "Explore representative delivery experience and engagement models.",
  testimonials = [],
}: TestimonialsProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const reduceMotion = prefersReducedMotion();

  return (
    <section id="testimonials" className="py-28 bg-emerald-925/60 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(190,242,100,0.14),transparent_40%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-6xl font-medium text-white tracking-tight mb-4">{title}</h2>
          <p className="text-lg text-stone-300 max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        {testimonials.length ? (
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {testimonials.map((testimonial, index) => (
              <motion.article
                key={`${testimonial.name}-${index}`}
                variants={getAnimationConfig(fadeSlideUpVariants, { visible: () => ({ opacity: 1, y: 0 }) })}
                initial="hidden"
                whileInView="visible"
                custom={reduceMotion ? 0 : index * 0.08}
                viewport={{ once: true, margin: "-60px" }}
                whileHover={reduceMotion ? {} : { y: -6 }}
                onMouseEnter={() => !reduceMotion && setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`rounded-3xl border transition-colors duration-300 bg-emerald-900/55 p-7 cursor-pointer ${
                  hoveredIndex === index ? "border-emerald-200/40" : "border-white/10"
                }`}
              >
                <Quote className="w-8 h-8 text-emerald-200/50 mb-4" />

                <div className="flex items-center gap-1 mb-5">
                  {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                    <Star key={starIndex} className="w-4 h-4 fill-emerald-200 text-emerald-200" />
                  ))}
                </div>

                <p className="text-stone-300 mb-6 leading-relaxed">"{testimonial.content}"</p>

                <div className="pt-5 border-t border-white/10">
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-xs uppercase tracking-[0.16em] text-emerald-100/65 mt-1">{testimonial.role}</p>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto rounded-3xl border border-white/10 bg-emerald-900/55 p-8 text-center"
          >
            <p className="text-white text-lg leading-relaxed">
              Explore representative delivery experience and engagement models.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}

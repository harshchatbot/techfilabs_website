import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
// FIX: Changed "../" to "../../" to reach the root src folder
import { fadeInUp, staggerContainer, cardVariant } from '../../utils/motion'; 

const Services = ({ 
  title = "Our Expertise",
  subtitle = "We architect scalable digital ecosystems using cutting-edge technologies.",
  services = [], 
  className = ""
}) => {
  return (
    <section id="services" className={`py-32 bg-black relative overflow-hidden ${className}`}>
      
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER: Uses standard fadeInUp */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }} // Triggers 100px before element hits bottom
          variants={fadeInUp}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 mb-6">
            {title}
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-light">
            {subtitle}
          </p>
        </motion.div>

        {/* GRID: Uses staggerContainer to control children */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariant} // Child automatically inherits the timing from parent
              className="group relative h-full"
            >
              <div className="h-full flex flex-col p-8 rounded-3xl bg-zinc-900/40 border border-white/5 hover:border-white/10 hover:bg-zinc-900/60 transition-all duration-300 backdrop-blur-sm">
                
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand/20 group-hover:scale-110 transition-all duration-300 border border-white/5 shrink-0">
                  <div className="text-zinc-300 group-hover:text-brand transition-colors">
                     {service.icon && <service.icon size={28} strokeWidth={1.5} />}
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight">
                  {service.title}
                </h3>
                
                <p className="text-zinc-400 mb-8 leading-relaxed flex-grow">
                  {service.description}
                </p>

                <ul className="space-y-4 border-t border-white/5 pt-6 mt-auto">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm text-zinc-300/80">
                      <Check className="w-4 h-4 text-brand mr-3 mt-0.5 shrink-0" />
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services;
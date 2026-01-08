import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
// FIX: Added one more "../" to reach the root src folder
import { fadeInUp, zoomIn } from '../../utils/motion'; 

const About = ({ 
  title = "About The Technology Fiction",
  subtitle = "We don't just write code; we architect digital futures.",
  description = "With over a decade of deep expertise in Salesforce ecosystems and modern web frameworks, we bridge the gap between complex enterprise requirements and elegant user experiences.",
  stats = [],
  features = [],
  logo, 
  className = ""
}) => {
  return (
    <section id="about" className={`py-32 bg-black relative overflow-hidden ${className}`}>
      
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT SIDE: Text Fades Up */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-white/5 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-xs font-medium text-zinc-300 uppercase tracking-widest">
                Our Story
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Engineering the <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white/50">
                Impossible.
              </span>
            </h2>
            
            <p className="text-xl text-zinc-400 mb-6 font-light">
              {subtitle}
            </p>
            <p className="text-zinc-500 mb-10 leading-relaxed text-lg">
              {description}
            </p>
            
            <div className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                    <CheckCircle className="w-4 h-4 text-blue-500" />
                  </div>
                  <span className="text-zinc-300 font-medium group-hover:text-white transition-colors">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE: Card Zooms In */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={zoomIn} 
            className="relative"
          >
            <div className="relative z-10 bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden group hover:border-white/20 transition-colors">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-16 h-16 rounded-full border border-white/10 overflow-hidden bg-black">
                     {logo && logo.logo ? (
                        <img 
                        src={logo.logo} 
                        alt="Logo" 
                        className="w-full h-full object-cover opacity-80"
                        />
                     ) : (
                        <div className="w-full h-full bg-zinc-800" />
                     )}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl tracking-tight">
                      The Tech<span className="text-blue-500">Fi</span> Standard
                    </h3>
                    <p className="text-zinc-500 text-sm">Excellence Since 2015</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                      <div className="text-3xl font-bold text-white mb-1 tracking-tight">
                        {stat.number}
                      </div>
                      <div className="text-xs text-zinc-400 uppercase tracking-wider font-medium">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[2.5rem] opacity-20 blur-2xl -z-10 group-hover:opacity-30 transition-opacity" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About;
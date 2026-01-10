import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

function getNextQuarterText() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;

  let quarter;
  let displayYear = year;

  if (month <= 3) quarter = 2;
  else if (month <= 6) quarter = 3;
  else if (month <= 9) quarter = 4;
  else {
    quarter = 1;
    displayYear = year + 1;
  }

  return `Accepting Projects for Q${quarter} ${displayYear}`;
  // Alternative (converts better):
  // return "Now booking new client projects";
}

const Hero = ({
  subtitle = "TechfiLabs helps startups and growing businesses scale with Salesforce consulting, AI automation, WhatsApp solutions, and modern web & mobile app development.",
  primaryButton = { text: "Get Free Consultation", action: () => {} },
}) => {
  const handleScrollDown = () => {
    const nextSection = document.getElementById("services");
    if (nextSection) nextSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full h-screen min-h-[800px] pt-32 flex flex-col items-center justify-center overflow-hidden text-center bg-black">
      {/* VIDEO BACKGROUND */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-60">
          <source src="/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10" />

      {/* ATMOSPHERIC GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/20 rounded-[100%] blur-[120px] pointer-events-none mix-blend-screen z-10" />

      {/* CONTENT */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 mt-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/10 border border-white/10 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs md:text-sm font-medium text-zinc-200 tracking-wider uppercase">
            {getNextQuarterText()}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-8 leading-[1.1]"
        >
          <span className="text-zinc-200/90">TechfiLabs</span>
          <span className="text-zinc-200/70"> builds </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-white">
           digital systems
          </span>
          <span className="text-zinc-200/70"> for growing businesses.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="max-w-3xl mx-auto text-lg md:text-xl text-zinc-300 leading-relaxed mb-12 drop-shadow-lg"
        >
          {subtitle}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <button
            onClick={primaryButton.action}
            className="group relative px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 flex items-center gap-3 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
          >
            {primaryButton.text}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-400 flex flex-col items-center gap-2 cursor-pointer hover:text-white transition-colors z-20"
        onClick={handleScrollDown}
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;

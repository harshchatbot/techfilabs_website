import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Mascot from "../ui/Mascot";

function getDeliveryText() {
  const now = new Date();
  return `Shipping product and automation builds • ${now.getFullYear()}`;
}

export default function Hero({
  subtitle = "TechFi Labs designs, builds, and scales digital products for ambitious companies, from residential apps like Sentinel to AI and automation systems.",
  primaryButton = { text: "Explore Products", action: () => {} },
}) {
  const [showGreeting, setShowGreeting] = useState(false);
  const speechScript =
    "Hi, I am Mr. Green. At TechFi Labs, we build products and provide Salesforce consulting services from development to data migration.";
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    setShowGreeting(true);
    let index = 0;
    const typingTimer = setInterval(() => {
      index += 1;
      setTypedText(speechScript.slice(0, index));
      if (index >= speechScript.length) {
        clearInterval(typingTimer);
      }
    }, 32);

    const hideTimer = setTimeout(() => setShowGreeting(false), 9000);

    return () => {
      clearInterval(typingTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const handleScrollDown = () => {
    const nextSection = document.getElementById("products");
    if (nextSection) nextSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 md:pt-32 pb-16 overflow-hidden bg-[#0f3b22]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(190,242,100,0.32),transparent_40%),radial-gradient(circle_at_90%_10%,rgba(34,197,94,0.2),transparent_35%),linear-gradient(180deg,#14532d_0%,#052e16_100%)]" />
      <div className="absolute left-0 right-0 bottom-0 h-32 bg-gradient-to-t from-emerald-950 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 md:px-6 relative z-10 grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center rounded-full border border-lime-300/40 bg-lime-300/10 px-4 py-2 mb-7"
          >
            <span className="text-xs tracking-[0.16em] uppercase text-lime-100">{getDeliveryText()}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="text-5xl md:text-7xl xl:text-8xl leading-[0.95] font-black tracking-tight text-white mb-7"
          >
            Build products that users love and teams can scale.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="text-lg md:text-xl text-emerald-50/90 max-w-2xl leading-relaxed mb-10"
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={primaryButton.action}
              className="inline-flex items-center gap-2 rounded-full bg-lime-300 px-7 py-3.5 text-base font-bold text-emerald-950 hover:bg-lime-200 transition-colors"
            >
              {primaryButton.text}
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="/products/sentinel-society-management"
              className="inline-flex items-center gap-2 rounded-full border border-lime-100/35 px-7 py-3.5 text-base font-semibold text-lime-100 hover:bg-lime-100/10 transition-colors"
            >
              View Sentinel
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="relative lg:justify-self-end"
        >
          <div className="relative rounded-[2rem] border border-lime-300/30 bg-emerald-900/30 p-8 backdrop-blur-md max-w-[420px]">
            <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-lime-300/20 blur-2xl" />
            <AnimatePresence>
              {showGreeting && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -5, scale: 0.96 }}
                  transition={{ duration: 0.45 }}
                  className="z-20 w-full max-w-[360px] mx-auto mb-3 md:mb-0 md:absolute md:top-2 md:left-1/2 md:-translate-x-1/2 md:w-[min(92vw,380px)]"
                >
                  <div className="relative rounded-2xl bg-lime-100 text-emerald-950 px-4 py-3 text-xs md:text-sm font-bold shadow-xl leading-relaxed">
                    {typedText}
                    <span className="ml-0.5 inline-block w-1.5 h-4 bg-emerald-950/80 align-[-2px] animate-pulse" />
                    <span className="hidden md:block absolute left-1/2 -translate-x-1/2 top-full border-x-8 border-x-transparent border-t-8 border-t-lime-100" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <Mascot size="md" className="mx-auto mb-4 md:mt-16" />
            <p className="text-center text-lime-100/90 text-sm font-semibold">Meet Mr. Green, our product mascot.</p>
          </div>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.7 }}
        onClick={handleScrollDown}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 inline-flex flex-col items-center text-lime-100/80 hover:text-white"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase mb-1">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </motion.button>
    </section>
  );
}

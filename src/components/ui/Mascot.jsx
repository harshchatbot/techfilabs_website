import { useEffect } from "react";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";

export default function Mascot({ className = "", size = "md" }) {
  const sizeClasses = {
    sm: "w-28 h-28",
    md: "w-40 h-40",
    lg: "w-56 h-56",
  };
  const eyeControls = useAnimation();

  const blink = () => {
    eyeControls.start({
      scaleY: [1, 0.08, 1],
      transition: { duration: 0.2, times: [0, 0.5, 1], ease: "easeInOut" },
    });
  };

  useEffect(() => {
    let timeoutId;
    let active = true;

    const scheduleBlink = () => {
      const waitMs = 2600 + Math.floor(Math.random() * 2600);
      timeoutId = setTimeout(() => {
        if (!active) return;
        blink();
        scheduleBlink();
      }, waitMs);
    };

    scheduleBlink();
    return () => {
      active = false;
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <motion.div
      initial={{ y: 8 }}
      animate={{ y: [-4, 8, -4] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      className={`relative ${sizeClasses[size]} ${className} cursor-pointer`}
      role="button"
      tabIndex={0}
      aria-label="Mr Green mascot"
      onClick={blink}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          blink();
        }
      }}
    >
      <motion.div
        animate={{ rotate: [14, -10, 14] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-9 top-[40%] origin-right"
      >
        <div className="w-8 h-2 rounded-full bg-green-400" />
        <div className="w-3 h-3 rounded-full bg-lime-200 absolute -left-2 -top-0.5" />
      </motion.div>
      <div className="absolute -right-9 top-[43%]">
        <div className="w-8 h-2 rounded-full bg-green-400" />
        <div className="w-3 h-3 rounded-full bg-lime-200 absolute -right-2 -top-0.5" />
      </div>

      <div className="absolute inset-0 rounded-[36%] bg-gradient-to-b from-lime-300 to-green-500 shadow-[0_28px_60px_-20px_rgba(34,197,94,0.55)]" />
      <div className="absolute inset-[10%] rounded-[34%] border-2 border-white/30" />

      <motion.div
        animate={{ rotate: [0, -6, 0, 6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-6 top-7 w-8 h-8 rounded-full bg-lime-200"
      />
      <motion.div
        animate={{ rotate: [0, 8, 0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-5 top-9 w-7 h-7 rounded-full bg-lime-100"
      />

      <motion.div
        className="absolute top-[34%] left-[28%] w-6 h-6 rounded-full bg-white flex items-center justify-center"
        animate={eyeControls}
        style={{ transformOrigin: "center center" }}
      >
        <div className="w-2.5 h-2.5 rounded-full bg-zinc-900" />
      </motion.div>
      <motion.div
        className="absolute top-[34%] right-[28%] w-6 h-6 rounded-full bg-white flex items-center justify-center"
        animate={eyeControls}
        style={{ transformOrigin: "center center" }}
      >
        <div className="w-2.5 h-2.5 rounded-full bg-zinc-900" />
      </motion.div>

      <div className="absolute bottom-[28%] left-1/2 -translate-x-1/2 w-16 h-8 border-b-[5px] border-zinc-900 rounded-b-full" />
      <div className="absolute -bottom-3 left-[35%] w-2 h-7 rounded-full bg-green-500" />
      <div className="absolute -bottom-3 right-[35%] w-2 h-7 rounded-full bg-green-500" />
      <div className="absolute -bottom-5 left-[31%] w-4 h-2 rounded-full bg-lime-100" />
      <div className="absolute -bottom-5 right-[31%] w-4 h-2 rounded-full bg-lime-100" />
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-20 h-6 rounded-full bg-green-950/20 blur-md" />
    </motion.div>
  );
}

import { motion } from "framer-motion";
import { prefersReducedMotion } from "../../utils/motionConfig";

export default function BorderBeam({
  duration = 8,
  delay = 0,
  size = 220,
  colorFrom = "#10B981",
  colorTo = "#A7F3D0",
  opacity = 0.65,
  className = "",
}) {
  const reduceMotion = prefersReducedMotion();

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 rounded-[inherit] p-px ${className}`}
      style={{
        WebkitMask:
          "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
      }}
    >
      <motion.div
        className="absolute left-1/2 top-1/2 rounded-full"
        style={{
          width: size,
          height: size,
          marginLeft: -(size / 2),
          marginTop: -(size / 2),
          background: `conic-gradient(from 90deg, transparent 0deg, ${colorFrom} 60deg, ${colorTo} 115deg, transparent 180deg, transparent 360deg)`,
          opacity,
        }}
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={
          reduceMotion
            ? undefined
            : {
                duration,
                delay,
                repeat: Infinity,
                ease: "linear",
              }
        }
      />
      <motion.div
        className="absolute left-1/2 top-1/2 rounded-full blur-xl"
        style={{
          width: size * 0.72,
          height: size * 0.72,
          marginLeft: -(size * 0.36),
          marginTop: -(size * 0.36),
          background: `conic-gradient(from 90deg, transparent 0deg, ${colorFrom} 70deg, ${colorTo} 120deg, transparent 180deg, transparent 360deg)`,
          opacity: opacity * 0.38,
        }}
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={
          reduceMotion
            ? undefined
            : {
                duration,
                delay,
                repeat: Infinity,
                ease: "linear",
              }
        }
      />
    </div>
  );
}

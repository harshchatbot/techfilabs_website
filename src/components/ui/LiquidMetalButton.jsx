import { motion } from "framer-motion";
import { prefersReducedMotion } from "../../utils/motionConfig";

export default function LiquidMetalButton({
  as: Component = "button",
  children,
  className = "",
  disabled = false,
  type = "button",
  ...props
}) {
  const reduceMotion = prefersReducedMotion();

  const sharedClassName = [
    "group relative inline-flex min-h-[54px] items-center justify-center gap-2 overflow-hidden rounded-full",
    "border border-emerald-200/25 bg-[linear-gradient(135deg,#064e2f_0%,#059669_58%,#10b981_100%)]",
    "px-6 py-3.5 font-bold text-emerald-50 shadow-[0_18px_42px_rgba(5,150,105,0.26)]",
    "transition-all duration-300 hover:translate-y-[-1px] hover:shadow-[0_24px_54px_rgba(5,150,105,0.32)]",
    "focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:ring-offset-2",
    "disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      <span className="absolute inset-[1px] rounded-full bg-[linear-gradient(135deg,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.04)_32%,rgba(255,255,255,0.08)_100%)] opacity-80" />
      <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_20%_20%,rgba(167,243,208,0.22),transparent_34%),radial-gradient(circle_at_78%_82%,rgba(6,78,47,0.22),transparent_38%)]" />
      {!reduceMotion ? (
        <>
          <motion.span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-[-30%] left-[-18%] w-[34%] rounded-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.34),transparent)] blur-sm"
            animate={{ x: ["0%", "420%"] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.1 }}
          />
          <motion.span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-full"
            animate={{
              boxShadow: [
                "inset 0 1px 0 rgba(255,255,255,0.12), 0 0 0 rgba(16,185,129,0.0)",
                "inset 0 1px 0 rgba(255,255,255,0.18), 0 0 22px rgba(16,185,129,0.18)",
                "inset 0 1px 0 rgba(255,255,255,0.12), 0 0 0 rgba(16,185,129,0.0)",
              ],
            }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      ) : null}
      <span className="relative z-10 flex items-center gap-2 [text-shadow:0_1px_10px_rgba(3,41,29,0.35)]">
        {children}
      </span>
    </>
  );

  if (Component === "button") {
    return (
      <button type={type} disabled={disabled} className={sharedClassName} {...props}>
        {content}
      </button>
    );
  }

  return (
    <Component className={sharedClassName} {...props}>
      {content}
    </Component>
  );
}

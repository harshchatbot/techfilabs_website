"use client";

import type { ReactNode, ElementType, ButtonHTMLAttributes } from "react";

interface LiquidMetalButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  as?: ElementType;
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  href?: string;
  target?: string;
  rel?: string;
}

export default function LiquidMetalButton({
  as: Component = "button",
  children,
  className = "",
  disabled = false,
  type = "button",
  ...props
}: LiquidMetalButtonProps) {
  const sharedClassName = [
    "group relative inline-flex min-h-12 max-w-full items-center justify-center gap-2 rounded-full",
    "border border-[#24231F] bg-[#24231F] px-6 py-3 text-center text-sm font-semibold text-white",
    "transition-colors duration-200 hover:bg-[#49433E] hover:border-[#49433E]",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A45137]",
    "disabled:cursor-not-allowed disabled:opacity-60",
    className,
  ].filter(Boolean).join(" ");

  if (Component === "button") {
    return <button type={type} disabled={disabled} className={sharedClassName} {...props}>{children}</button>;
  }

  return <Component className={sharedClassName} {...props}>{children}</Component>;
}

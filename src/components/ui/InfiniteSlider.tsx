"use client";

import { useMemo, useState, ReactNode } from "react";

interface InfiniteSliderProps {
  children?: ReactNode;
  gap?: number;
  reverse?: boolean;
  speed?: number;
  speedOnHover?: number;
  className?: string;
}

export default function InfiniteSlider({
  children,
  gap = 42,
  reverse = false,
  speed = 80,
  speedOnHover = 25,
  className = "",
}: InfiniteSliderProps) {
  const [isHovered, setIsHovered] = useState(false);

  const duration = useMemo(() => {
    const activeSpeed = isHovered ? speedOnHover : speed;
    return `${activeSpeed}s`;
  }, [isHovered, speed, speedOnHover]);

  return (
    <div
      className={`relative flex overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="flex min-w-max shrink-0 items-center will-change-transform"
        style={{
          gap,
          animationName: reverse ? "logo-marquee-reverse" : "logo-marquee",
          animationDuration: duration,
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}

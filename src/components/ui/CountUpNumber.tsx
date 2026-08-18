"use client";

import { useEffect, useRef } from 'react';
import { prefersReducedMotion } from '../../utils/motionConfig';

interface CountUpNumberProps {
  value?: string;
  duration?: number;
}

export default function CountUpNumber({ value = '0', duration = 1200 }: CountUpNumberProps) {
  const elementRef = useRef<HTMLSpanElement>(null);
  const reducedMotion = prefersReducedMotion();

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const match = value.match(/^(\d+)(.*?)$/);
    if (!match) {
      element.textContent = value;
      return;
    }

    const targetNumber = parseInt(match[1], 10);
    const suffix = match[2];

    if (reducedMotion) {
      element.textContent = value;
      return;
    }

    let animationFrameId: number;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry.isIntersecting) return;

        const startTime = Date.now();
        const startValue = 0;

        const animate = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easeProgress = 1 - Math.pow(1 - progress, 3);
          const currentNumber = Math.floor(startValue + (targetNumber - startValue) * easeProgress);

          if (element) {
            element.textContent = currentNumber + suffix;
          }

          if (progress < 1) {
            animationFrameId = requestAnimationFrame(animate);
          }
        };

        animationFrameId = requestAnimationFrame(animate);
      },
      { threshold: 0.5 }
    );

    observer.observe(element);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      observer.disconnect();
    };
  }, [value, duration, reducedMotion]);

  return <span ref={elementRef}>{value}</span>;
}

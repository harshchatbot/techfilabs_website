import { useEffect, useRef } from 'react';
import { prefersReducedMotion } from '../../utils/motionConfig';

/**
 * CountUpNumber: Animates a number from 0 to the target value when in viewport.
 * Preserves suffixes like "+", "/", "%", etc.
 *
 * @param {string} value - The target value (e.g., "25+", "10/", "100%")
 * @param {number} duration - Animation duration in milliseconds
 */
export default function CountUpNumber({ value = '0', duration = 1200 }) {
  const elementRef = useRef(null);
  const reducedMotion = prefersReducedMotion();

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Extract numeric part and suffix
    const match = value.match(/^(\d+)(.*?)$/);
    if (!match) {
      element.textContent = value;
      return;
    }

    const targetNumber = parseInt(match[1], 10);
    const suffix = match[2];

    // If user prefers reduced motion, just show the final value
    if (reducedMotion) {
      element.textContent = value;
      return;
    }

    // Intersection Observer to trigger animation when element enters viewport
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry.isIntersecting) return;

        // Start the animation
        const startTime = Date.now();
        const startValue = 0;
        let animationFrameId;

        const animate = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);

          // Easing function: easeOut
          const easeProgress = 1 - Math.pow(1 - progress, 3);
          const currentNumber = Math.floor(startValue + (targetNumber - startValue) * easeProgress);

          element.textContent = currentNumber + suffix;

          if (progress < 1) {
            animationFrameId = requestAnimationFrame(animate);
          }
        };

        animationFrameId = requestAnimationFrame(animate);

        // Cleanup on unmount or when observer is done
        return () => {
          if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
          }
        };
      },
      { threshold: 0.5 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [value, duration, reducedMotion]);

  return <span ref={elementRef}>{value}</span>;
}

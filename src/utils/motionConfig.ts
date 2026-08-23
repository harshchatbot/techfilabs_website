/**
 * Motion configuration utility that respects prefers-reduced-motion
 * and provides consistent animation settings across the site.
 */

export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Returns animation config based on user preference
 * If prefers-reduced-motion is set, returns minimal animations
 */
export const getAnimationConfig = (enabledConfig: any, disabledConfig: any = {}) => {
  return prefersReducedMotion() ? disabledConfig : enabledConfig;
};

/**
 * Standard scroll-triggered animation variants
 * Used for fade + slide up effects
 */
export const fadeSlideUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: 'easeOut',
      delay: custom,
    },
  }),
};

/**
 * Hover lift effect for cards
 */
export const hoverLiftVariants = {
  rest: { y: 0 },
  hover: { y: -6, transition: { duration: 0.3, ease: 'easeOut' } },
};

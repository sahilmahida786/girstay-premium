import { Variants } from "framer-motion";

/**
 * Luxury Motion Design Tokens
 * Follows the specified easing and duration system.
 */

// Easing
export const luxuryEase = [0.22, 1, 0.36, 1]; // Smooth, calm, premium out easing

// Durations (in seconds)
export const duration = {
  fast: 0.15,
  normal: 0.25,
  luxury: 0.4,
  pageTransition: 0.5,
};

// Transition configurations
export const transitionNormal = { duration: duration.normal, ease: luxuryEase };
export const transitionLuxury = { duration: duration.luxury, ease: luxuryEase };
export const transitionSpring = { type: "spring", stiffness: 300, damping: 30 };

/**
 * Reusable Motion Variants
 */

// Page Transition: Fade + TranslateY (16px). Never slide left/right.
export const pageTransitionVariants: Variants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: duration.pageTransition, ease: luxuryEase } },
  exit: { opacity: 0, y: -8, transition: { duration: duration.fast, ease: luxuryEase } },
};

// Fade Variants (Tooltips, Overlays)
export const fadeVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: transitionNormal },
  exit: { opacity: 0, transition: { duration: duration.fast, ease: luxuryEase } },
};

// Input Validation Shake (Error)
export const shakeVariants: Variants = {
  initial: { x: 0 },
  shake: { 
    x: [0, -4, 4, -4, 4, 0], 
    transition: { duration: 0.4, ease: "easeInOut" } 
  },
};

// Add-on Card Lift & Select
export const cardSelectVariants: Variants = {
  idle: { scale: 1, y: 0, boxShadow: "0 4px 20px rgba(0,0,0,0.15)" },
  selected: { 
    scale: 1.01, 
    y: -2, 
    boxShadow: "0 10px 40px rgba(217,169,77,0.15)",
    transition: transitionLuxury 
  },
};

// Checkmark Draw Animation
export const checkmarkDrawVariants = {
  initial: { pathLength: 0, opacity: 0 },
  animate: { 
    pathLength: 1, 
    opacity: 1, 
    transition: { duration: duration.luxury, ease: "easeOut" } 
  }
};

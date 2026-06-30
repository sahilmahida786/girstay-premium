export const luxuryEasing: [number, number, number, number] = [0.25, 0.1, 0.25, 1]; // Smooth, elegant glide
export const snappyEasing: [number, number, number, number] = [0.16, 1, 0.3, 1]; // Quick but soft finish

export const transitions = {
  slowReveal: { duration: 0.8, ease: luxuryEasing },
  mediumReveal: { duration: 0.5, ease: luxuryEasing },
  snappy: { duration: 0.3, ease: snappyEasing },
  micro: { type: "spring", stiffness: 400, damping: 30 }, // No bounce, fast settle
};

export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: transitions.mediumReveal 
  },
};

export const fadeUpStagger = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: transitions.snappy 
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: transitions.mediumReveal 
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: transitions.mediumReveal },
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: transitions.mediumReveal },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: transitions.mediumReveal },
};

// ─── Interactive presets ───

/** Subtle lift on hover — use with whileHover */
export const cardHover = {
  scale: 1.015,
  transition: { duration: 0.25, ease: luxuryEasing },
};

/** Press-down feedback — use with whileTap */
export const tapScale = { scale: 0.97 };

/** Standard viewport trigger config */
export const viewportReveal = { once: true, margin: "-80px" as const };

/** Image fade-in on load */
export const imageReveal = {
  hidden: { opacity: 0, scale: 1.02 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.4, ease: luxuryEasing } 
  },
};

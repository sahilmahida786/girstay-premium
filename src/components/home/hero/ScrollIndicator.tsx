"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function ScrollIndicator() {
  const { scrollY } = useScroll();
  
  // Fade out quickly when user starts scrolling (hidden by 100px)
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);
  const pointerEvents = useTransform(scrollY, [0, 100], ["auto", "none"]);

  return (
    <motion.div
      style={{ opacity, pointerEvents }}
      className="flex flex-col items-center justify-center pt-2"
    >
      {/* Premium Minimal Mouse Outline */}
      <div className="relative w-[22px] h-[36px] rounded-full border-[1.5px] border-white/20 flex justify-center p-1 bg-white/[0.02] backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.05)]">
        {/* Animated dot/wheel */}
        <motion.div
          animate={{
            y: [0, 12, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-1 h-1.5 rounded-full bg-gradient-to-b from-[#FFD27A] to-[#D4AF37] shadow-[0_0_8px_rgba(255,210,122,0.8)]"
        />
      </div>
    </motion.div>
  );
}

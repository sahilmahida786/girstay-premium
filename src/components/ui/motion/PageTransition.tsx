"use client";

import React from "react";
import { m } from "framer-motion";
import { pageTransitionVariants } from "@/lib/motion-tokens";

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
  // Use a key to trigger unmount/remount animation during route changes
  animationKey?: string; 
}

export function PageTransition({ children, className, animationKey }: PageTransitionProps) {
  return (
    <m.div
      key={animationKey}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransitionVariants}
      className={className}
      // Use will-change to optimize GPU compositing
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </m.div>
  );
}

"use client";

import React from "react";
import { LazyMotion, domAnimation, MotionConfig } from "framer-motion";

export function LazyMotionProvider({ children }: { children: React.ReactNode }) {
  return (
    // LazyMotion loads framer-motion features asynchronously to keep bundle size small
    <LazyMotion features={domAnimation} strict>
      {/* Respect user's OS preference for reduced motion */}
      <MotionConfig reducedMotion="user">
        {children}
      </MotionConfig>
    </LazyMotion>
  );
}

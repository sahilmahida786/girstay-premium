"use client";

import React from "react";
import { m } from "framer-motion";

interface ConfirmationHeaderProps {
  guestName: string;
}

export function ConfirmationHeader({ guestName }: ConfirmationHeaderProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-6 pt-10 pb-6">
      {/* Animated Checkmark */}
      <m.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 200, 
          damping: 20,
          delay: 0.1
        }}
        className="relative w-24 h-24 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shadow-[0_0_40px_rgba(16,185,129,0.15)]"
      >
        <div className="absolute inset-0 rounded-full bg-emerald-500/10 animate-ping opacity-50" />
        <svg 
          className="w-12 h-12 text-emerald-400 relative z-10" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor" 
          strokeWidth={3}
        >
          <m.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </m.div>

      {/* Typography */}
      <div className="space-y-2">
        <m.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="luxury-heading text-4xl sm:text-5xl"
        >
          Your Stay is Confirmed
        </m.h1>
        <m.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-white/60 text-lg max-w-md mx-auto"
        >
          Thank you, {guestName}. We look forward to welcoming you to the wilderness of Gir.
        </m.p>
      </div>
    </div>
  );
}

"use client";

import React from "react";
import { m } from "framer-motion";

interface MobileStepIndicatorProps {
  currentStep: number;
  totalSteps: number;
  stepLabel: string;
}

export function MobileStepIndicator({ currentStep, totalSteps, stepLabel }: MobileStepIndicatorProps) {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="lg:hidden sticky top-0 z-30 luxury-bg pt-4 pb-2 px-4 border-b border-white/5">
      <div className="flex justify-between items-end mb-2">
        <span className="text-xs text-white/60 font-medium tracking-wider uppercase">
          Step {currentStep} of {totalSteps}
        </span>
        <span className="text-sm luxury-gold-text font-medium">
          {stepLabel}
        </span>
      </div>
      
      {/* Progress Bar Background */}
      <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
        {/* Animated Progress Fill */}
        <m.div 
          className="h-full luxury-gold-gradient rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        />
      </div>
    </div>
  );
}

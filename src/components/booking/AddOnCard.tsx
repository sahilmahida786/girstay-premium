"use client";

import React from "react";
import { m, AnimatePresence, useReducedMotion } from "framer-motion";
import { Check, Clock, Sparkles } from "lucide-react";
import { formatPrice, cn } from "@/lib/utils";

export interface ExperienceData {
  id: string;
  name: string;
  description: string;
  price: number;
  duration?: string;
  imageUrl: string;
  badge?: "Most Popular" | "Limited Slots" | "Sold Out" | "Bundle";
  isBundle?: boolean;
  savings?: number;
}

interface AddOnCardProps {
  experience: ExperienceData;
  isSelected: boolean;
  onToggle: (id: string) => void;
}

export function AddOnCard({ experience, isSelected, onToggle }: AddOnCardProps) {
  const isSoldOut = experience.badge === "Sold Out";
  const prefersReducedMotion = useReducedMotion();

  return (
    <m.button
      type="button"
      role="switch"
      aria-checked={isSelected}
      aria-label={`${experience.name}, ${formatPrice(experience.price)}`}
      onClick={() => !isSoldOut && onToggle(experience.id)}
      disabled={isSoldOut}
      initial={false}
      animate={{
        y: prefersReducedMotion ? 0 : (isSelected ? -4 : 0),
        scale: prefersReducedMotion ? 1 : (isSelected ? 1.02 : 1),
      }}
      whileHover={!isSoldOut && !isSelected && !prefersReducedMotion ? { y: -2, scale: 1.01 } : {}}
      transition={prefersReducedMotion ? { duration: 0 } : { type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "relative w-full overflow-hidden text-left transition-all duration-300 rounded-2xl touch-manipulation focus-visible:ring-2 focus-visible:ring-[#D9A94D] focus-visible:outline-none min-h-[48px]",
        "bg-white/5 backdrop-blur-sm border",
        isSelected
          ? "border-[#D9A94D] shadow-[0_8px_30px_rgba(217,169,77,0.15)] bg-white/10"
          : "border-white/10 hover:border-white/20",
        isSoldOut && "opacity-50 grayscale cursor-not-allowed"
      )}
    >
      {/* Selection Glow Indicator */}
      <AnimatePresence>
        {isSelected && !prefersReducedMotion && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gradient-to-b from-[#D9A94D]/5 to-transparent pointer-events-none z-0"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <div className="flex flex-col sm:flex-row h-full relative z-10">
        {/* Image Section */}
        <div className="relative w-full sm:w-[140px] h-32 sm:h-auto shrink-0 overflow-hidden bg-black/20" aria-hidden="true">
          <img 
            src={experience.imageUrl} 
            alt=""
            loading="lazy"
            className="w-full h-full object-cover"
          />
          
          {/* Badge */}
          {experience.badge && (
            <div className="absolute top-2 left-2 z-20">
              <span className={cn(
                "px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md backdrop-blur-md",
                experience.badge === "Most Popular" && "bg-white/90 text-black",
                experience.badge === "Limited Slots" && "bg-red-500/90 text-white",
                experience.badge === "Sold Out" && "bg-black/80 text-white",
                experience.badge === "Bundle" && "bg-[#D9A94D] text-black"
              )}>
                {experience.badge}
              </span>
            </div>
          )}

          {/* Duration overlay on mobile */}
          {experience.duration && (
            <div className="absolute bottom-2 left-2 z-20 sm:hidden flex items-center gap-1 text-[10px] font-medium text-white/90 bg-black/50 px-2 py-0.5 rounded-full backdrop-blur-md">
              <Clock className="w-3 h-3" /> {experience.duration}
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="flex flex-col flex-1 p-4 sm:p-5">
          <div className="flex justify-between items-start gap-4 mb-2">
            <div>
              <h4 className="font-heading font-medium text-white/90 text-base sm:text-lg">
                {experience.name}
              </h4>
              <p className="text-sm text-white/50 mt-1 line-clamp-2">
                {experience.description}
              </p>
            </div>
            
            {/* Desktop Checkmark */}
            <div className="hidden sm:flex shrink-0">
              <div className={cn(
                "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300",
                isSelected
                  ? "border-[#D9A94D] bg-[#D9A94D]"
                  : "border-white/20"
              )} aria-hidden="true">
                <AnimatePresence>
                  {isSelected && (
                    <m.div
                      initial={prefersReducedMotion ? { opacity: 0 } : { scale: 0 }}
                      animate={prefersReducedMotion ? { opacity: 1 } : { scale: 1 }}
                      exit={prefersReducedMotion ? { opacity: 0 } : { scale: 0 }}
                    >
                      <Check className="w-4 h-4 text-black" />
                    </m.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          <div className="mt-auto pt-4 flex items-end justify-between">
            {/* Desktop Duration */}
            <div className="hidden sm:flex items-center gap-1 text-xs text-white/40">
              {experience.duration && (
                <>
                  <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>{experience.duration}</span>
                </>
              )}
            </div>

            {/* Pricing */}
            <div className="text-right sm:text-left ml-auto sm:ml-0 flex flex-col items-end sm:items-start w-full sm:w-auto">
              <div className="flex items-center gap-2">
                {experience.savings && (
                  <span className="text-xs text-emerald-400 line-through opacity-70">
                    <span className="sr-only">Original price </span>
                    {formatPrice(experience.price + experience.savings)}
                  </span>
                )}
                <span className={cn(
                  "font-medium text-lg sm:text-xl tabular-nums",
                  isSelected ? "text-[#D9A94D]" : "text-white/90"
                )}>
                  {formatPrice(experience.price)}
                </span>
              </div>
              
              {/* Bundle Savings Label */}
              {experience.savings && (
                <span className="text-[10px] text-emerald-400 font-medium flex items-center gap-1 mt-0.5">
                  <Sparkles className="w-3 h-3" aria-hidden="true" /> 
                  <span>Save {formatPrice(experience.savings)}</span>
                </span>
              )}
            </div>

            {/* Mobile Checkmark */}
            <div className="sm:hidden ml-4">
              <div className={cn(
                "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300",
                isSelected
                  ? "border-[#D9A94D] bg-[#D9A94D]"
                  : "border-white/20"
              )} aria-hidden="true">
                <AnimatePresence>
                  {isSelected && (
                    <m.div
                      initial={prefersReducedMotion ? { opacity: 0 } : { scale: 0 }}
                      animate={prefersReducedMotion ? { opacity: 1 } : { scale: 1 }}
                      exit={prefersReducedMotion ? { opacity: 0 } : { scale: 0 }}
                    >
                      <Check className="w-4 h-4 text-black" />
                    </m.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </m.button>
  );
}

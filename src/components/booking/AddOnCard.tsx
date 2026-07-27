"use client";

import React from "react";
import { m, AnimatePresence, useReducedMotion } from "framer-motion";
import { Check, Clock, Sparkles, Plus } from "lucide-react";
import { formatPrice, cn } from "@/lib/utils";
import { SafeImage as Image } from "@/components/ui/SafeImage";

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
    <m.div
      initial={false}
      animate={{
        y: prefersReducedMotion ? 0 : (isSelected ? -2 : 0),
        scale: prefersReducedMotion ? 1 : (isSelected ? 1.01 : 1),
      }}
      whileHover={!isSoldOut && !isSelected && !prefersReducedMotion ? { y: -2, scale: 1.01 } : {}}
      transition={prefersReducedMotion ? { duration: 0 } : { type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "relative w-full overflow-hidden text-left transition-all duration-300 rounded-2xl",
        "bg-white/5 backdrop-blur-sm border",
        isSelected
          ? "border-[#D9A94D] shadow-[0_4px_20px_rgba(217,169,77,0.15)] bg-white/10"
          : "border-white/10 hover:border-white/20",
        isSoldOut && "opacity-50 grayscale"
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

      <div className="flex flex-row p-3 gap-3 h-[140px] sm:h-auto sm:flex-col sm:p-5 relative z-10">
        {/* Image Section */}
        <div className="relative w-[96px] h-[96px] sm:w-full sm:h-40 shrink-0 overflow-hidden bg-black/20 rounded-xl" aria-hidden="true">
          <Image 
            src={experience.imageUrl} 
            alt={experience.name}
            fill
            sizes="(max-width: 640px) 96px, 100vw"
            className="object-cover"
          />
          
          {/* Badge */}
          {experience.badge && (
            <div className="absolute top-1 left-1 sm:top-2 sm:left-2 z-20">
              <span className={cn(
                "px-1.5 py-0.5 sm:px-2 sm:py-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider rounded-md backdrop-blur-md",
                experience.badge === "Most Popular" && "bg-white/90 text-black",
                experience.badge === "Limited Slots" && "bg-red-500/90 text-white",
                experience.badge === "Sold Out" && "bg-black/80 text-white",
                experience.badge === "Bundle" && "bg-[#D9A94D] text-black"
              )}>
                {experience.badge}
              </span>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="flex flex-col flex-1 min-w-0">
          <div className="flex-1">
            <h4 className="font-heading font-medium text-white/90 text-sm sm:text-lg leading-tight truncate">
              {experience.name}
            </h4>
            <p className="text-xs text-white/50 mt-1 line-clamp-2 leading-snug pr-2">
              {experience.description}
            </p>
            
            <div className="flex items-center gap-2 mt-1 sm:mt-2">
              {experience.duration && (
                <div className="flex items-center gap-1 text-[10px] sm:text-xs text-white/40">
                  <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" aria-hidden="true" />
                  <span>{experience.duration}</span>
                </div>
              )}
            </div>

            <div className="flex items-center gap-2 mt-1.5 sm:mt-3">
              {experience.savings && (
                <span className="text-[10px] sm:text-xs text-emerald-400 line-through opacity-70">
                  <span className="sr-only">Original price </span>
                  {formatPrice(experience.price + experience.savings)}
                </span>
              )}
              <span className={cn(
                "font-medium text-base sm:text-xl tabular-nums leading-none",
                isSelected ? "text-[#D9A94D]" : "text-white/90"
              )}>
                {formatPrice(experience.price)}
              </span>
            </div>
            {experience.savings && (
              <span className="text-[9px] sm:text-[10px] text-emerald-400 font-medium flex items-center gap-1 mt-0.5">
                <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3" aria-hidden="true" /> 
                <span>Save {formatPrice(experience.savings)}</span>
              </span>
            )}
          </div>

          {/* Quantity / Add Button - Absolute on mobile bottom right, flexible on desktop */}
          <div className="absolute right-3 bottom-3 sm:static sm:mt-4 sm:flex sm:justify-end">
            <button
              type="button"
              onClick={() => !isSoldOut && onToggle(experience.id)}
              disabled={isSoldOut}
              className={cn(
                "h-12 sm:h-12 px-5 sm:px-6 rounded-xl text-sm sm:text-sm font-semibold transition-all flex items-center gap-2 touch-manipulation focus-visible:ring-2 focus-visible:ring-[#D9A94D] focus-visible:outline-none min-w-[80px] justify-center",
                isSelected 
                  ? "bg-[#D9A94D] text-black" 
                  : "bg-white/10 text-white hover:bg-white/20 border border-white/5",
                isSoldOut && "opacity-50 cursor-not-allowed"
              )}
              aria-label={isSelected ? `Remove ${experience.name}` : `Add ${experience.name}`}
            >
              {isSelected ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Added</span>
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4" />
                  <span>Add</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </m.div>
  );
}

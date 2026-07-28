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
      transition={prefersReducedMotion ? { duration: 0 } : { type: "spring", stiffness: 400, damping: 30 }}
      className={cn(
        "relative w-full overflow-hidden text-left transition-all duration-500 rounded-[24px]",
        "bg-[#0a0a0a]/60 backdrop-blur-2xl border transform-gpu",
        isSelected
          ? "border-[#D4AF37] shadow-[0_8px_32px_rgba(212,175,55,0.15)] bg-gradient-to-br from-[#D4AF37]/10 to-transparent"
          : "border-white/5 hover:border-white/10 hover:bg-white/[0.02]",
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
            className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 via-transparent to-transparent pointer-events-none z-0"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <div className="flex flex-row p-3.5 gap-4 h-auto min-h-[160px] sm:flex-col sm:p-5 relative z-10">
        {/* Image Section - Portrait Aspect Ratio on Mobile for Luxury Feel */}
        <div className="relative w-[110px] h-auto shrink-0 overflow-hidden bg-black/40 rounded-[18px]" aria-hidden="true">
          <Image 
            src={experience.imageUrl} 
            alt={experience.name}
            fill
            sizes="(max-width: 640px) 110px, 100vw"
            className="object-cover transition-transform duration-700 hover:scale-110"
          />
          
          {/* Badge */}
          {experience.badge && (
            <div className="absolute top-2 left-2 z-20">
              <span className={cn(
                "px-2 py-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest rounded-md backdrop-blur-md",
                experience.badge === "Most Popular" && "bg-white/95 text-black shadow-lg",
                experience.badge === "Limited Slots" && "bg-red-500/90 text-white",
                experience.badge === "Sold Out" && "bg-black/80 text-white",
                experience.badge === "Bundle" && "bg-gradient-to-r from-[#D4AF37] to-[#F8E7B5] text-black shadow-gold"
              )}>
                {experience.badge}
              </span>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="flex flex-col flex-1 min-w-0 justify-between py-1">
          <div>
            <h4 className="font-heading font-medium text-white/95 text-[15px] sm:text-lg leading-tight tracking-wide mb-1">
              {experience.name}
            </h4>
            <p className="text-[12px] text-white/50 line-clamp-2 leading-relaxed font-light">
              {experience.description}
            </p>
            
            <div className="flex items-center gap-3 mt-2.5">
              {experience.duration && (
                <div className="flex items-center gap-1.5 text-[11px] text-white/40 font-medium tracking-wide">
                  <Clock className="w-3 h-3" aria-hidden="true" />
                  <span>{experience.duration}</span>
                </div>
              )}
            </div>
          </div>

          {/* Bottom Area: Price & Action */}
          <div className="flex items-end justify-between mt-4">
            <div className="flex flex-col">
              {experience.savings && (
                <span className="text-[10px] text-emerald-400 line-through opacity-60 mb-0.5 font-medium">
                  <span className="sr-only">Original price </span>
                  {formatPrice(experience.price + experience.savings)}
                </span>
              )}
              <span className={cn(
                "font-medium text-base sm:text-xl tabular-nums tracking-tight",
                isSelected ? "text-[#D4AF37]" : "text-white/90"
              )}>
                {formatPrice(experience.price)}
              </span>
              {experience.savings && (
                <span className="text-[10px] text-emerald-400 font-medium flex items-center gap-1 mt-1">
                  <Sparkles className="w-2.5 h-2.5" aria-hidden="true" /> 
                  Save {formatPrice(experience.savings)}
                </span>
              )}
            </div>

            {/* Action Button */}
            <button
              type="button"
              onClick={() => !isSoldOut && onToggle(experience.id)}
              disabled={isSoldOut}
              className={cn(
                "h-9 px-4 rounded-full text-[12px] font-semibold transition-all duration-300 flex items-center gap-1.5 touch-manipulation focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:outline-none shrink-0",
                isSelected 
                  ? "bg-[#D4AF37] text-black shadow-[0_0_15px_rgba(212,175,55,0.4)]" 
                  : "bg-white/5 text-white hover:bg-white/10 border border-white/10",
                isSoldOut && "opacity-50 cursor-not-allowed"
              )}
              aria-label={isSelected ? `Remove ${experience.name}` : `Add ${experience.name}`}
            >
              {isSelected ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Added</span>
                </>
              ) : (
                <>
                  <Plus className="w-3.5 h-3.5" />
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

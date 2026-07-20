"use client";

import React from "react";
import { m, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface PaymentMethodCardProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  isSelected: boolean;
  onSelect: (id: string) => void;
  disabled?: boolean;
}

export function PaymentMethodCard({
  id,
  title,
  description,
  icon,
  isSelected,
  onSelect,
  disabled = false,
}: PaymentMethodCardProps) {
  return (
    <m.button
      onClick={() => !disabled && onSelect(id)}
      disabled={disabled}
      initial={false}
      animate={{
        y: isSelected ? -2 : 0,
        scale: isSelected ? 1.01 : 1,
      }}
      whileHover={!disabled && !isSelected ? { y: -1, scale: 1.005 } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "relative w-full overflow-hidden text-left transition-all duration-300 rounded-xl p-4 sm:p-5",
        "bg-white/5 backdrop-blur-sm border flex items-center gap-4",
        isSelected
          ? "border-[#D9A94D] shadow-[0_4px_20px_rgba(217,169,77,0.15)] bg-white/10"
          : "border-white/10 hover:border-white/20",
        disabled && "opacity-50 cursor-not-allowed"
      )}
    >
      {/* Selection Glow Indicator */}
      <AnimatePresence>
        {isSelected && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gradient-to-r from-[#D9A94D]/10 to-transparent pointer-events-none z-0"
          />
        )}
      </AnimatePresence>

      <div className="relative z-10 shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-black/40 border border-white/10 text-[#D9A94D]">
        {icon}
      </div>

      <div className="relative z-10 flex-1 min-w-0">
        <h4 className="font-heading font-medium text-white/90 text-base">
          {title}
        </h4>
        <p className="text-xs text-white/50 mt-0.5 line-clamp-1">
          {description}
        </p>
      </div>

      <div className="relative z-10 shrink-0 ml-2">
        <div className={cn(
          "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300",
          isSelected
            ? "border-[#D9A94D] bg-[#D9A94D]"
            : "border-white/20"
        )}>
          <AnimatePresence>
            {isSelected && (
              <m.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
              >
                <Check className="w-4 h-4 text-black" />
              </m.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </m.button>
  );
}

"use client";

import React, { useState } from "react";
import { m } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { LuxuryBottomSheet } from "@/components/ui/LuxuryBottomSheet";
import { AnimatedNumber } from "@/components/ui/motion/AnimatedNumber";
import { LuxuryButton } from "@/components/ui/LuxuryButton";
import { PriceSummaryDetails } from "@/components/booking/PriceSummaryDetails";
import { formatPrice } from "@/lib/utils";

interface MobilePriceSummaryProps {
  roomName: string;
  nights: number;
  roomCharges: number;
  addOnTotal: number;
  discountAmount?: number;
  gst: number;
  total: number;
  advance: number;
  onNextStep: () => void;
  nextStepLabel: string;
  isLastStep?: boolean;
  disabled?: boolean;
  isCalculating?: boolean;
}

export function MobilePriceSummary({
  roomName,
  nights,
  roomCharges,
  addOnTotal,
  discountAmount = 0,
  gst,
  total,
  advance,
  onNextStep,
  nextStepLabel,
  isLastStep,
  disabled,
  isCalculating = false
}: MobilePriceSummaryProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      {/* Sticky Bottom Bar (Always visible on mobile) */}
      <m.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-0 left-0 right-0 z-40 luxury-bg border-t border-white/10 p-4 pb-[env(safe-area-inset-bottom)] lg:hidden flex items-center justify-between shadow-[0_-10px_40px_rgba(0,0,0,0.5)]"
      >
        <button 
          onClick={() => setIsExpanded(true)}
          className="flex flex-col items-start active:opacity-70 transition-opacity touch-manipulation min-h-[52px] justify-center focus-visible:ring-2 focus-visible:ring-[#D9A94D] focus-visible:outline-none rounded-lg px-2 -ml-2"
          aria-expanded={isExpanded}
          aria-haspopup="dialog"
          aria-label={`Total Price: ${formatPrice(total)}. Tap to view price details.`}
        >
          <span className="text-xs text-white/60 flex items-center gap-1 mb-0.5">
            Total Price <ChevronUp className="w-3 h-3" aria-hidden="true" />
          </span>
          <span className="luxury-price text-xl tabular-nums" aria-hidden="true">
            {isCalculating ? (
              <span className="text-sm text-white/50 animate-pulse">Calculating...</span>
            ) : (
              <>₹<AnimatedNumber value={total} /></>
            )}
          </span>
        </button>

        <LuxuryButton 
          onClick={onNextStep}
          className="h-[52px] px-8 min-w-[140px] touch-manipulation"
          disabled={disabled || isCalculating}
          aria-label={isLastStep ? "Pay Now" : nextStepLabel}
        >
          {isLastStep ? "Pay Now" : nextStepLabel}
        </LuxuryButton>
      </m.div>

      {/* Expanded Price Details Sheet */}
      <LuxuryBottomSheet
        isOpen={isExpanded}
        onClose={() => setIsExpanded(false)}
        title="Price Summary"
        id="mobile-price-summary-sheet"
      >
        <div className="pb-8">
          <PriceSummaryDetails 
            roomName={roomName}
            nights={nights}
            roomCharges={roomCharges}
            addOnTotal={addOnTotal}
            discountAmount={discountAmount}
            gst={gst}
            total={total}
            advance={advance}
            isCalculating={isCalculating}
          />
        </div>
      </LuxuryBottomSheet>
    </>
  );
}

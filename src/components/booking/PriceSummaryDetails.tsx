"use client";

import React, { useMemo } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Shield, CheckCircle2, Info, Tag, CreditCard } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { AnimatedNumber } from "@/components/ui/motion/AnimatedNumber";
import { luxuryEase, duration } from "@/lib/motion-tokens";

interface PriceSummaryDetailsProps {
  roomName: string;
  nights: number;
  roomCharges: number;
  addOnTotal: number;
  discountAmount?: number;
  gst: number;
  total: number;
  advance: number;
  isCalculating?: boolean;
}

export function PriceSummaryDetails({
  roomName,
  nights,
  roomCharges,
  addOnTotal,
  discountAmount = 0,
  gst,
  total,
  advance,
  isCalculating = false,
}: PriceSummaryDetailsProps) {
  // Memoize values to prevent unnecessary re-renders during animations
  const subtotal = useMemo(() => roomCharges + addOnTotal, [roomCharges, addOnTotal]);
  const remaining = useMemo(() => total - advance, [total, advance]);

  return (
    <div className="space-y-6 relative">
      {/* Loading Overlay */}
      <AnimatePresence>
        {isCalculating && (
          <m.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm z-20 flex items-center justify-center rounded-xl border border-white/5"
          >
            <div className="flex flex-col items-center gap-3">
              <div className="w-8 h-8 border-2 border-white/20 border-t-[#D9A94D] rounded-full animate-spin" />
              <span className="text-sm text-white/70 font-medium">Verifying Booking...</span>
            </div>
          </m.div>
        )}
      </AnimatePresence>

      {/* 1. Core Breakdown */}
      <div className="space-y-3 text-sm">
        <div className="flex justify-between items-center group">
          <span className="text-white/60 flex items-center gap-1.5 cursor-help">
            {roomName} × {nights} nights
          </span>
          <span className="text-white/90 font-medium">
            ₹<AnimatedNumber value={roomCharges} />
          </span>
        </div>

        <AnimatePresence>
          {addOnTotal > 0 && (
            <m.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="flex justify-between items-center overflow-hidden"
            >
              <span className="text-white/60">Add-ons</span>
              <span className="text-white/90 font-medium">
                ₹<AnimatedNumber value={addOnTotal} />
              </span>
            </m.div>
          )}
        </AnimatePresence>

        <div className="luxury-divider my-2 opacity-30" />

        <div className="flex justify-between items-center">
          <span className="text-white/80 font-medium">Subtotal</span>
          <span className="text-white/90 font-medium">
            ₹<AnimatedNumber value={subtotal} />
          </span>
        </div>

        <div className="flex justify-between items-center group">
          <span className="text-white/60 flex items-center gap-1.5 cursor-help relative">
            Taxes & Fees (18% GST)
            <Info className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="absolute left-0 bottom-full mb-2 w-48 p-2 text-xs bg-black/90 border border-white/10 rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-10">
              Government required Goods & Services Tax.
            </div>
          </span>
          <span className="text-white/90 font-medium">
            ₹<AnimatedNumber value={gst} />
          </span>
        </div>

        {/* 2. Savings Experience */}
        <AnimatePresence>
          {discountAmount > 0 && (
            <m.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="p-3 my-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex flex-col gap-1 overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-emerald-500/5 animate-pulse-slow pointer-events-none" />
              <div className="flex justify-between items-center text-emerald-400 font-medium relative z-10">
                <span className="flex items-center gap-1.5">
                  <Tag className="w-4 h-4" />
                  Discount Applied
                </span>
                <span>
                  -₹<AnimatedNumber value={discountAmount} />
                </span>
              </div>
              <p className="text-emerald-400/80 text-xs relative z-10">
                You saved ₹{formatPrice(discountAmount)} on this booking!
              </p>
            </m.div>
          )}
        </AnimatePresence>

        <div className="luxury-divider my-2 opacity-50" />

        <div className="flex justify-between items-end">
          <span className="luxury-heading text-lg">Grand Total</span>
          <span className="luxury-price text-2xl tracking-tight">
            ₹<AnimatedNumber value={total} />
          </span>
        </div>
      </div>

      {/* 3. Payment Summary */}
      <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-3">
        <div className="flex justify-between items-center text-[#D9A94D] font-medium">
          <span className="flex items-center gap-2">
            <CreditCard className="w-4 h-4" />
            Pay Today (50%)
          </span>
          <span className="text-lg">
            ₹<AnimatedNumber value={advance} />
          </span>
        </div>
        <div className="flex justify-between items-center text-white/40 text-sm">
          <span>Remaining at Check-in</span>
          <span>
            ₹<AnimatedNumber value={remaining} />
          </span>
        </div>
      </div>

      {/* 4. Trust Elements */}
      <div className="grid grid-cols-2 gap-2 mt-6">
        <div className="flex items-start gap-2 p-2 rounded-lg hover:bg-white/5 transition-colors">
          <Shield className="w-4 h-4 text-[#D9A94D] shrink-0 mt-0.5" />
          <span className="text-[11px] text-white/60 leading-tight">Secure 256-bit<br/>Encrypted Payment</span>
        </div>
        <div className="flex items-start gap-2 p-2 rounded-lg hover:bg-white/5 transition-colors">
          <CheckCircle2 className="w-4 h-4 text-[#D9A94D] shrink-0 mt-0.5" />
          <span className="text-[11px] text-white/60 leading-tight">Instant Booking<br/>Confirmation</span>
        </div>
        <div className="flex items-start gap-2 p-2 rounded-lg hover:bg-white/5 transition-colors">
          <CheckCircle2 className="w-4 h-4 text-[#D9A94D] shrink-0 mt-0.5" />
          <span className="text-[11px] text-white/60 leading-tight">Free Cancellation<br/>Up to 48 hours</span>
        </div>
        <div className="flex items-start gap-2 p-2 rounded-lg hover:bg-white/5 transition-colors">
          <CheckCircle2 className="w-4 h-4 text-[#D9A94D] shrink-0 mt-0.5" />
          <span className="text-[11px] text-white/60 leading-tight">No Hidden Charges<br/>or Credit Card Fees</span>
        </div>
      </div>
    </div>
  );
}

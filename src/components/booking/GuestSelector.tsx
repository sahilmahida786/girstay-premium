"use client";

import React, { useState, useCallback } from "react";
import { Users, Plus, Minus } from "lucide-react";
import { LuxuryBottomSheet } from "@/components/ui/LuxuryBottomSheet";
import { useBookingStore, DEFAULT_BOOKING } from "@/store/useBookingStore";
import { useShallow } from "zustand/react/shallow";

interface GuestSelectorProps {
  propertyId: string;
}

export function GuestSelector({ propertyId }: GuestSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const updateBooking = useBookingStore(state => state.updateBooking);
  const { adults, children } = useBookingStore(
    useShallow(state => state.bookings[propertyId] || DEFAULT_BOOKING)
  );

  const setAdults = useCallback((val: number) => updateBooking(propertyId, { adults: val }), [propertyId, updateBooking]);
  const setChildren = useCallback((val: number) => updateBooking(propertyId, { children: val }), [propertyId, updateBooking]);

  const totalGuests = adults + children;
  const guestLabel = `${totalGuests} Guest${totalGuests !== 1 ? "s" : ""}`;

  return (
    <>
      {/* Trigger Button */}
      <button
        id="guest-selector-trigger"
        onClick={() => setIsOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls="guest-selector-sheet"
        aria-label={`Guests: ${guestLabel}. Tap to change.`}
        className="w-full relative text-left h-12 luxury-input flex items-center justify-between group touch-manipulation"
      >
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-white/40 group-hover:text-[#D9A94D] transition-colors" aria-hidden="true" />
          <span className="text-white/90">{guestLabel}</span>
        </div>
      </button>

      {/* aria-live announcement region */}
      <div
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {isOpen ? `${guestLabel} selected` : ""}
      </div>

      {/* Bottom Sheet / Dialog */}
      <LuxuryBottomSheet
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Select Guests"
        id="guest-selector-sheet"
      >
        <div className="space-y-6 pb-6">
          {/* Adults */}
          <div className="flex items-center justify-between" role="group" aria-labelledby="adults-label">
            <div id="adults-label">
              <p className="luxury-heading text-base">Adults</p>
              <p className="luxury-description text-sm text-white/50">Ages 13 or above</p>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => adults > 1 && setAdults(adults - 1)}
                disabled={adults <= 1}
                aria-label="Decrease adults"
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center disabled:opacity-30 active:scale-95 transition-all touch-manipulation"
              >
                <Minus className="w-4 h-4 text-white" aria-hidden="true" />
              </button>
              <span 
                className="w-6 text-center luxury-heading text-lg tabular-nums"
                aria-label={`${adults} adult${adults !== 1 ? 's' : ''}`}
              >
                {adults}
              </span>
              <button
                onClick={() => adults < 6 && setAdults(adults + 1)}
                disabled={adults >= 6}
                aria-label="Increase adults"
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center active:scale-95 transition-all touch-manipulation"
              >
                <Plus className="w-4 h-4 text-white" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="luxury-divider my-2" />

          {/* Children */}
          <div className="flex items-center justify-between" role="group" aria-labelledby="children-label">
            <div id="children-label">
              <p className="luxury-heading text-base">Children</p>
              <p className="luxury-description text-sm text-white/50">Ages 2–12</p>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => children > 0 && setChildren(children - 1)}
                disabled={children <= 0}
                aria-label="Decrease children"
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center disabled:opacity-30 active:scale-95 transition-all touch-manipulation"
              >
                <Minus className="w-4 h-4 text-white" aria-hidden="true" />
              </button>
              <span 
                className="w-6 text-center luxury-heading text-lg tabular-nums"
                aria-label={`${children} child${children !== 1 ? 'ren' : ''}`}
              >
                {children}
              </span>
              <button
                onClick={() => children < 4 && setChildren(children + 1)}
                disabled={children >= 4}
                aria-label="Increase children"
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center active:scale-95 transition-all touch-manipulation"
              >
                <Plus className="w-4 h-4 text-white" aria-hidden="true" />
              </button>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="w-full luxury-button mt-6 min-h-[48px] touch-manipulation"
            aria-label={`Apply guest selection: ${guestLabel}`}
          >
            Apply
          </button>
        </div>
      </LuxuryBottomSheet>
    </>
  );
}

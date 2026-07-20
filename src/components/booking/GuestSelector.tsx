"use client";

import React, { useState } from "react";
import { Users, Plus, Minus } from "lucide-react";
import { LuxuryBottomSheet } from "@/components/ui/LuxuryBottomSheet";

export function GuestSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const totalGuests = adults + children;

  return (
    <>
      {/* Trigger Button (Looks like an input) */}
      <button
        onClick={() => setIsOpen(true)}
        className="w-full relative text-left h-12 luxury-input flex items-center justify-between group"
      >
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-white/40 group-hover:text-[#D9A94D] transition-colors" />
          <span className="text-white/90">
            {totalGuests} Guest{totalGuests > 1 ? "s" : ""}
          </span>
        </div>
      </button>

      {/* Mobile Bottom Sheet & Desktop Modal */}
      <LuxuryBottomSheet
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Select Guests"
      >
        <div className="space-y-6 pb-6">
          {/* Adults */}
          <div className="flex items-center justify-between">
            <div>
              <p className="luxury-heading text-base">Adults</p>
              <p className="luxury-description text-sm">Ages 13 or above</p>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => adults > 1 && setAdults(adults - 1)}
                disabled={adults <= 1}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center disabled:opacity-30 active:scale-95 transition-all"
              >
                <Minus className="w-4 h-4 text-white" />
              </button>
              <span className="w-4 text-center luxury-heading text-lg">{adults}</span>
              <button
                onClick={() => adults < 6 && setAdults(adults + 1)}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center active:scale-95 transition-all"
              >
                <Plus className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>

          <div className="luxury-divider my-2" />

          {/* Children */}
          <div className="flex items-center justify-between">
            <div>
              <p className="luxury-heading text-base">Children</p>
              <p className="luxury-description text-sm">Ages 2-12</p>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => children > 0 && setChildren(children - 1)}
                disabled={children <= 0}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center disabled:opacity-30 active:scale-95 transition-all"
              >
                <Minus className="w-4 h-4 text-white" />
              </button>
              <span className="w-4 text-center luxury-heading text-lg">{children}</span>
              <button
                onClick={() => children < 4 && setChildren(children + 1)}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center active:scale-95 transition-all"
              >
                <Plus className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="w-full luxury-button mt-6"
          >
            Apply
          </button>
        </div>
      </LuxuryBottomSheet>
    </>
  );
}

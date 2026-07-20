"use client";

import React, { useState, useEffect } from "react";
import { format, differenceInDays } from "date-fns";
import { CalendarDays, ChevronDown, Check } from "lucide-react";
import { DateRange } from "react-day-picker";
import { m, AnimatePresence } from "framer-motion";
import { LuxuryCalendar } from "@/components/booking/LuxuryCalendar";
import { LuxuryBottomSheet } from "@/components/ui/LuxuryBottomSheet";
import { LuxuryButton } from "@/components/ui/LuxuryButton";
import { AnimatedNumber } from "@/components/ui/motion/AnimatedNumber";

interface DateSelectorProps {
  date?: DateRange;
  onDateChange?: (date: DateRange | undefined) => void;
}

export function DateSelector({ date, onDateChange }: DateSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  // Local state fallback if not controlled (for backward compatibility if used elsewhere)
  const [localDate, setLocalDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(new Date().setDate(new Date().getDate() + 3)),
  });

  const activeDate = date !== undefined ? date : localDate;
  const handleDateChange = (newDate: DateRange | undefined) => {
    if (onDateChange) onDateChange(newDate);
    setLocalDate(newDate);
  };

  const nights = activeDate?.from && activeDate?.to ? differenceInDays(activeDate.to, activeDate.from) : 0;
  
  // Mock total calculation (assume avg 4500/night for demo)
  const estimatedTotal = nights * 4500;

  // Handle click outside for desktop popover (simplified for this demo by just using an overlay)
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <>
      {/* Trigger Inputs */}
      <div className="grid grid-cols-2 gap-4" onClick={() => setIsOpen(true)}>
        <button className="w-full relative text-left h-12 luxury-input flex items-center justify-between group">
          <div className="flex items-center gap-2 overflow-hidden">
            <CalendarDays className="w-4 h-4 text-white/40 group-hover:text-[#D9A94D] shrink-0 transition-colors" />
            <span className="text-white/90 truncate text-sm sm:text-base">
              {activeDate?.from ? format(activeDate.from, "MMM dd, yyyy") : "Check-in"}
            </span>
          </div>
        </button>
        <button className="w-full relative text-left h-12 luxury-input flex items-center justify-between group">
          <div className="flex items-center gap-2 overflow-hidden">
            <CalendarDays className="w-4 h-4 text-white/40 group-hover:text-[#D9A94D] shrink-0 transition-colors" />
            <span className="text-white/90 truncate text-sm sm:text-base">
              {activeDate?.to ? format(activeDate.to, "MMM dd, yyyy") : "Check-out"}
            </span>
          </div>
        </button>
      </div>

      {/* Desktop Popover */}
      <AnimatePresence>
        {isOpen && (
          <div className="hidden lg:block fixed inset-0 z-50">
            <div 
              className="absolute inset-0 bg-black/40 backdrop-blur-sm" 
              onClick={() => setIsOpen(false)} 
            />
            <m.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 luxury-bg border border-white/10 p-6 rounded-3xl shadow-2xl w-max"
            >
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="luxury-heading text-xl">Select Dates</h3>
                  <p className="text-sm text-white/60 mt-1">Minimum stay: 1 night</p>
                </div>
                {nights > 0 && (
                  <div className="text-right">
                    <p className="text-sm text-[#D9A94D] font-medium">{nights} Nights</p>
                    <p className="luxury-price text-xl tracking-tight">₹<AnimatedNumber value={estimatedTotal} /> <span className="text-xs text-white/40 font-normal">est. total</span></p>
                  </div>
                )}
              </div>
              
              <LuxuryCalendar 
                selected={activeDate}
                onSelect={handleDateChange}
                numberOfMonths={2}
              />
              
              <div className="mt-6 flex justify-end gap-3 pt-6 border-t border-white/10">
                <button 
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-2 rounded-full text-white/60 hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <LuxuryButton 
                  onClick={() => setIsOpen(false)}
                  className="px-8 py-2 min-h-0 h-10"
                >
                  Confirm Dates
                </LuxuryButton>
              </div>
            </m.div>
          </div>
        )}
      </AnimatePresence>

      {/* Mobile Bottom Sheet */}
      <LuxuryBottomSheet
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Select Dates"
        className="h-[90vh] flex flex-col pb-0" // override padding to allow sticky footer
      >
        <div className="flex-1 overflow-y-auto px-1 pb-[120px] scrollbar-hide">
          <LuxuryCalendar 
            selected={activeDate}
            onSelect={handleDateChange}
            numberOfMonths={6} // Render 6 months on mobile for vertical scrolling
            isMobile={true}
          />
        </div>

        {/* Mobile Sticky Action Footer - Smart Insights */}
        <div className="absolute bottom-0 left-0 right-0 p-4 pb-safe-offset bg-black/60 backdrop-blur-xl border-t border-white/10">
          <div className="flex justify-between items-center mb-3 px-2">
            <div>
              <p className="text-xs text-white/60 uppercase tracking-widest">
                {activeDate?.from ? format(activeDate.from, "MMM d") : "Check-in"} - {activeDate?.to ? format(activeDate.to, "MMM d") : "Check-out"}
              </p>
              {nights > 0 ? (
                <p className="text-[#D9A94D] text-sm font-medium mt-0.5">{nights} Nights</p>
              ) : (
                <p className="text-white/40 text-sm mt-0.5">Select check-out date</p>
              )}
            </div>
            {nights > 0 && (
              <div className="text-right">
                <p className="luxury-price text-lg">₹<AnimatedNumber value={estimatedTotal} /></p>
                <p className="text-[10px] text-white/40">Taxes excluded</p>
              </div>
            )}
          </div>
          
          <LuxuryButton 
            onClick={() => setIsOpen(false)}
            className="w-full h-12 gap-2"
            disabled={!activeDate?.from || !activeDate?.to}
          >
            Confirm Dates
          </LuxuryButton>
        </div>
      </LuxuryBottomSheet>
    </>
  );
}

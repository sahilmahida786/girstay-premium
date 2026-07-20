"use client";

import React from "react";
import { DayPicker, DateRange } from "react-day-picker";
import { format, isBefore, startOfToday, isWeekend } from "date-fns";
import { cn } from "@/lib/utils";

// Mock data generator for pricing and availability
const getDayDetails = (date: Date) => {
  const isPast = isBefore(date, startOfToday());
  if (isPast) return null;

  // Simulate higher prices on weekends
  const basePrice = isWeekend(date) ? 6500 : 4500;
  
  // Randomly simulate limited availability on some dates (deterministic based on date)
  const dayNum = date.getDate();
  const isLimited = dayNum % 7 === 0;
  const isSoldOut = dayNum === 15;

  return {
    price: basePrice,
    isLimited,
    isSoldOut,
  };
};

export interface LuxuryCalendarProps {
  selected?: DateRange;
  onSelect?: (range: DateRange | undefined) => void;
  numberOfMonths?: number;
  className?: string;
  isMobile?: boolean;
}

export function LuxuryCalendar({
  selected,
  onSelect,
  numberOfMonths = 2,
  className,
  isMobile = false,
}: LuxuryCalendarProps) {
  return (
    <div className={cn("luxury-calendar-wrapper", className)}>
      <DayPicker
        mode="range"
        selected={selected}
        onSelect={onSelect}
        numberOfMonths={numberOfMonths}
        pagedNavigation={!isMobile}
        disabled={[{ before: startOfToday() }, (date) => getDayDetails(date)?.isSoldOut === true]}
        className="w-full"
        classNames={{
          months: "flex flex-col sm:flex-row space-y-4 sm:space-x-8 sm:space-y-0",
          month: "space-y-4",
          caption: "flex justify-center pt-1 relative items-center mb-4",
          caption_label: "text-lg luxury-heading font-medium",
          nav: "space-x-1 flex items-center",
          nav_button: "h-9 w-9 bg-transparent p-0 opacity-50 hover:opacity-100 transition-opacity border border-white/10 rounded-full flex items-center justify-center",
          nav_button_previous: "absolute left-1",
          nav_button_next: "absolute right-1",
          table: "w-full border-collapse space-y-1",
          head_row: "flex",
          head_cell: "text-white/40 rounded-md w-12 sm:w-14 font-medium text-[0.8rem] uppercase tracking-widest",
          row: "flex w-full mt-2",
          cell: cn(
            "relative p-0 text-center text-sm focus-within:relative focus-within:z-20",
            "first:[&:has([aria-selected])]:rounded-l-xl last:[&:has([aria-selected])]:rounded-r-xl"
          ),
          day: cn(
            "h-14 sm:h-16 w-12 sm:w-14 p-0 font-normal aria-selected:opacity-100 hover:bg-white/5 transition-colors rounded-xl flex flex-col items-center justify-center gap-0.5",
            "focus-ring"
          ),
          day_range_start: "day-range-start bg-transparent",
          day_range_end: "day-range-end bg-transparent",
          day_selected: "bg-transparent text-white",
          day_today: "text-[#D9A94D] font-bold border border-[#D9A94D]/30",
          day_outside: "text-white/20 opacity-50 aria-selected:bg-white/10 aria-selected:text-white/50 aria-selected:opacity-30",
          day_disabled: "text-white/20 opacity-50 cursor-not-allowed",
          day_range_middle: "aria-selected:bg-[#F7D58B]/10 aria-selected:text-white aria-selected:rounded-none",
          day_hidden: "invisible",
        }}
        components={{
          DayContent: ({ date, activeModifiers }) => {
            const details = getDayDetails(date);
            const isSelected = activeModifiers.selected;
            const isRangeStart = activeModifiers.range_start;
            const isRangeEnd = activeModifiers.range_end;
            const isRangeMiddle = activeModifiers.range_middle;

            const isEndpoint = isRangeStart || isRangeEnd;

            return (
              <div 
                className={cn(
                  "w-full h-full flex flex-col items-center justify-center rounded-xl transition-all relative z-10",
                  isEndpoint && "luxury-gold-gradient text-black shadow-gold scale-105",
                  isRangeMiddle && "rounded-none",
                )}
              >
                <span className="text-[15px] leading-none mb-1">{date.getDate()}</span>
                {details && !details.isSoldOut && (
                  <span className={cn(
                    "text-[9px] sm:text-[10px] leading-none font-medium tracking-tighter opacity-70",
                    isEndpoint ? "text-black/70" : "text-[#D9A94D]"
                  )}>
                    ₹{(details.price / 1000).toFixed(1)}k
                  </span>
                )}
                
                {/* Demand Indicator */}
                {details?.isLimited && !isEndpoint && !isRangeMiddle && (
                  <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                )}
              </div>
            );
          },
        }}
      />
    </div>
  );
}

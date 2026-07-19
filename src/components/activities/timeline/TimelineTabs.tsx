"use client";

import { cn } from "@/lib/utils";

type TimelinePeriod = "morning" | "afternoon" | "evening" | "night";

interface TimelineTabsProps {
  activeTab: TimelinePeriod;
  onTabChange: (tab: TimelinePeriod) => void;
}

const periodLabels: Record<TimelinePeriod, string> = {
  morning: "☀️ Morning",
  afternoon: "🌤️ Afternoon",
  evening: "🌅 Evening",
  night: "🌙 Night",
};

export function TimelineTabs({ activeTab, onTabChange }: TimelineTabsProps) {
  return (
    <div className="relative z-30 flex justify-start sm:justify-center w-full px-4 mb-12 sm:mb-20 sticky top-24 pt-4 pb-4 bg-transparent">
      {/* Sticky Fade Mask on Mobile */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-[#050505]/40 to-transparent -z-10 blur-xl block sm:hidden" />
      
      <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-3 sm:gap-4 mask-fade-edges w-full max-w-2xl sm:mx-auto">
        {(Object.keys(periodLabels) as Array<TimelinePeriod>).map((period) => {
          const isActive = activeTab === period;
          
          return (
            <button
              key={period}
              onClick={() => onTabChange(period)}
              className={cn(
                "relative shrink-0 snap-center px-6 py-3.5 rounded-full text-sm sm:text-base font-semibold transition-all duration-500 overflow-hidden group min-w-[120px]",
                isActive
                  ? "text-black shadow-[0_0_20px_rgba(212,175,55,0.4)] scale-105"
                  : "bg-white/[0.03] backdrop-blur-md border border-white/10 text-white/70 hover:bg-white/[0.08] hover:border-white/20 hover:text-white"
              )}
            >
              {isActive && (
                <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] via-[#F8E7B5] to-[#D4AF37]">
                  {/* Tiny pulse every 8s */}
                  <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12 animate-shimmer-slow" />
                </div>
              )}
              
              <span className="relative z-10">{periodLabels[period]}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

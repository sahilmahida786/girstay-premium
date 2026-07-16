"use client";

import { Star, ShieldCheck, Flame, Camera } from "lucide-react";
import { cn } from "@/lib/utils";

const INFO_ITEMS = [
  {
    id: "rating",
    icon: Star,
    text: "4.9 Rating",
    glow: "bg-yellow-500/20",
    textClass: "text-[#FFD27A]",
  },
  {
    id: "verified",
    icon: ShieldCheck,
    text: "Verified Luxury",
    glow: "bg-blue-500/20",
    textClass: "text-blue-400",
  },
  {
    id: "guests",
    icon: Flame,
    text: "500+ Happy Guests",
    glow: "bg-orange-500/20",
    textClass: "text-orange-400",
  },
  {
    id: "experts",
    icon: Camera,
    text: "Gir Safari Experts",
    glow: "bg-[#D4AF37]/20",
    textClass: "text-[#D4AF37]",
  },
];

export function HeroBottomPanel() {
  return (
    <div className="relative w-full max-w-4xl mx-auto flex justify-center">
      {/* Floating Glass Pill */}
      <div className="relative flex items-center overflow-hidden rounded-full bg-[#060606]/40 backdrop-blur-3xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
        
        {/* Ambient Inner Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent pointer-events-none" />
        
        {/* Scrollable Container (for mobile) */}
        <div className="flex items-center gap-6 sm:gap-10 overflow-x-auto scrollbar-hide px-6 py-4 sm:px-10 sm:py-5">
          {INFO_ITEMS.map((item, index) => (
            <div
              key={item.id}
              className="group flex items-center gap-2.5 shrink-0 cursor-default"
            >
              {/* Icon */}
              <div className="relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/[0.03] border border-white/5 transition-colors duration-500 group-hover:bg-white/[0.08]">
                <div className={cn("absolute inset-0 rounded-full blur-[8px] opacity-0 group-hover:opacity-100 transition-opacity duration-500", item.glow)} />
                <item.icon className={cn("w-3.5 h-3.5 sm:w-4 sm:h-4 relative z-10 transition-transform duration-500 group-hover:scale-110", item.textClass)} />
              </div>
              
              {/* Text */}
              <span className="text-[12px] sm:text-[13px] text-white/70 font-medium whitespace-nowrap group-hover:text-white transition-colors duration-500 tracking-wide">
                {item.text}
              </span>

              {/* Divider */}
              {index !== INFO_ITEMS.length - 1 && (
                <div className="w-px h-5 bg-white/10 ml-6 sm:ml-10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

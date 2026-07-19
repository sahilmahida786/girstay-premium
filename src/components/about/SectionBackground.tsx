"use client";

import { cn } from "@/lib/utils";
import { memo } from "react";

interface SectionBackgroundProps {
  theme?: "charcoal" | "espresso" | "forest" | "gold";
  hasTopFade?: boolean;
  hasBottomFade?: boolean;
  intensity?: "light" | "medium" | "heavy";
  className?: string;
}

// Wrapping in React.memo to prevent unnecessary re-renders during page scroll
export const SectionBackground = memo(function SectionBackground({
  theme = "charcoal",
  hasTopFade = false,
  hasBottomFade = false,
  intensity = "medium",
  className,
}: SectionBackgroundProps) {
  
  // Theme variants optimized for GPU rendering (No mix-blend-modes)
  const bgGradients = {
    charcoal: "from-[#0a0a0a] via-[#121212] to-[#0a0a0a]",
    espresso: "from-[#1A140D] via-[#0B0B0B] to-[#121212]",
    forest: "from-[#0E120E] via-[#0B0B0B] to-[#0a0a0a]",
    gold: "from-[#2A2211] via-[#0B0B0B] to-[#0a0a0a]",
  };

  const glowGradients = {
    charcoal: "bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_60%)]",
    espresso: "bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)]",
    forest: "bg-[radial-gradient(circle_at_center,rgba(46,60,46,0.15)_0%,transparent_70%)]",
    gold: "bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12)_0%,transparent_60%)]",
  };

  // Replaced expensive shadow-[inset...] with cheap linear-gradients
  const vignetteStyles = {
    light: "bg-[linear-gradient(to_bottom,rgba(0,0,0,0.4)_0%,transparent_10%,transparent_90%,rgba(0,0,0,0.4)_100%)]",
    medium: "bg-[linear-gradient(to_bottom,rgba(0,0,0,0.7)_0%,transparent_15%,transparent_85%,rgba(0,0,0,0.7)_100%)]",
    heavy: "bg-[linear-gradient(to_bottom,rgba(0,0,0,0.9)_0%,transparent_20%,transparent_80%,rgba(0,0,0,0.9)_100%)]",
  };

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none z-0", className)}>
      {/* Layer 1: Base Gradient */}
      <div className={cn("absolute inset-0 bg-gradient-to-b", bgGradients[theme])} />
      
      {/* Layer 2: Radial Glow - Hardware accelerated opacity animation only */}
      <div className={cn("absolute inset-0 animate-breathe-slow will-change-opacity", glowGradients[theme])} />
      
      {/* Layer 3: Ambient Light - Transform only */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.04)_0%,transparent_50%)] animate-light-ray-sweep will-change-transform" />
      
      {/* Layer 4: Topographic Contour SVG (Opacity only, no mix-blend-overlay) */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIj48cGF0aCBkPSJNMCAwaDQwMHY0MDBIMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMTAwIDEwMGM1MC01MCAxNTAgMCAyMDAgMHM1MCAxNTAgMCAyMDBzLTE1MCAwLTIwMCAwcy01MC0xNTAtMTUwLTUwcTAgMCAwIDB6IiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] bg-repeat" />
      
      {/* Layer 5: Floating Dust - Max 6 elements for scroll performance using translate3d */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#FFD27A] animate-dust-float will-change-transform"
            style={{
              top: `${(i * 37) % 100}%`,
              left: `${(i * 61) % 100}%`,
              width: `${(i % 3) + 1}px`,
              height: `${(i % 3) + 1}px`,
              animationDelay: `-${i * 2}s`,
              animationDuration: `${15 + i * 3}s`,
              transform: 'translate3d(0,0,0)', // Force GPU layer
            }}
          />
        ))}
      </div>

      {/* Layer 6: Static Glowing Orbs (Removed massive CSS blur-[120px] -> Replaced with pre-blurred radial gradient) */}
      <div className="absolute top-0 -left-[20%] w-[40%] h-[40%] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03)_0%,transparent_70%)] animate-pulse-slow will-change-opacity" />
      <div className="absolute bottom-0 -right-[20%] w-[40%] h-[40%] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03)_0%,transparent_70%)] animate-pulse-slow will-change-opacity" style={{ animationDelay: "2s" }} />

      {/* Layer 7: Noise Texture (Opacity only) */}
      <div className="absolute inset-0 bg-noise opacity-10" />

      {/* Layer 8: Luxury Vignette (Cheap Linear Gradient) */}
      <div className={cn("absolute inset-0", vignetteStyles[intensity])} />
      
      {/* Layer 9: Fade Transitions */}
      {hasTopFade && (
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#0B0B0B] to-transparent" />
      )}
      {hasBottomFade && (
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#0B0B0B] to-transparent" />
      )}
    </div>
  );
});

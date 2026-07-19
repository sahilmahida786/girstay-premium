"use client";

import { cn } from "@/lib/utils";

interface SectionBackgroundProps {
  theme?: "charcoal" | "espresso" | "forest" | "gold";
  hasTopFade?: boolean;
  hasBottomFade?: boolean;
  intensity?: "light" | "medium" | "heavy";
  className?: string;
}

export function SectionBackground({
  theme = "charcoal",
  hasTopFade = false,
  hasBottomFade = false,
  intensity = "medium",
  className,
}: SectionBackgroundProps) {
  
  // Theme variants
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

  const vignetteOpacity = {
    light: "shadow-[inset_0_0_60px_rgba(0,0,0,0.5)]",
    medium: "shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]",
    heavy: "shadow-[inset_0_0_150px_rgba(0,0,0,0.95)]",
  };

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none z-0", className)}>
      {/* Layer 1: Base Gradient */}
      <div className={cn("absolute inset-0 bg-gradient-to-b", bgGradients[theme])} />
      
      {/* Layer 2: Radial Glow */}
      <div className={cn("absolute inset-0 animate-breathe-slow", glowGradients[theme])} />
      
      {/* Layer 3 & 4: Ambient Light & Spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.04)_0%,transparent_50%)] animate-light-ray-sweep" />
      
      {/* Layer 5: Topographic Contour SVG */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIj48cGF0aCBkPSJNMCAwaDQwMHY0MDBIMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMTAwIDEwMGM1MC01MCAxNTAgMCAyMDAgMHM1MCAxNTAgMCAyMDBzLTE1MCAwLTIwMCAwcy01MC0xNTAtMTUwLTUwcTAgMCAwIDB6IiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] bg-repeat" />
      
      {/* Layer 6: Floating Dust */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#FFD27A] blur-[1px] animate-dust-float"
            style={{
              top: `${(i * 37) % 100}%`,
              left: `${(i * 61) % 100}%`,
              width: `${(i % 3) + 1}px`,
              height: `${(i % 3) + 1}px`,
              animationDelay: `-${i * 2}s`,
              animationDuration: `${15 + i * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Layer 7: Blurred Glowing Orb */}
      <div className="absolute top-1/4 -left-[20%] w-[40%] h-[40%] rounded-full bg-[#D4AF37]/5 blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-[20%] w-[40%] h-[40%] rounded-full bg-[#D4AF37]/5 blur-[120px] animate-pulse-slow" style={{ animationDelay: "2s" }} />

      {/* Layer 8: Noise Texture */}
      <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay" />

      {/* Layer 9: Luxury Vignette & Transitions */}
      <div className={cn("absolute inset-0", vignetteOpacity[intensity])} />
      
      {hasTopFade && (
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#0B0B0B] to-transparent" />
      )}
      {hasBottomFade && (
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#0B0B0B] to-transparent" />
      )}
    </div>
  );
}

"use client";

import Image from "next/image";

export function ContactBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#050505]">
      {/* 1. Base Image - Blurred Forest Silhouette with Ken Burns */}
      <div className="absolute inset-[-5%] w-[110%] h-[110%] animate-cinematic-pan">
        <Image 
          src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=2500&auto=format&fit=crop"
          alt="Luxury Safari Lodge"
          fill
          className="object-cover object-center opacity-[0.4] blur-[8px]"
          priority
          sizes="100vw"
        />
      </div>

      {/* 2. Topographic & Noise Overlays */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay" />
      <div className="absolute inset-0 bg-[#050505]/70 backdrop-blur-sm" />

      {/* 3. Deep Espresso Gradient (Top to Bottom) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#110e0c]/80 via-transparent to-[#050505]" />

      {/* 4. Warm Champagne Gold Radial Glow (Top Left) */}
      <div 
        className="absolute top-0 left-0 w-[150vw] h-[150vw] sm:w-[1200px] sm:h-[1200px] -translate-x-1/3 -translate-y-1/3"
        style={{ background: "radial-gradient(circle at center, rgba(255, 180, 100, 0.08) 0%, transparent 60%)" }} 
      />

      {/* 5. Forest Green Ambient Light (Bottom Right) */}
      <div 
        className="absolute bottom-0 right-0 w-[120vw] h-[120vw] sm:w-[1000px] sm:h-[1000px] translate-x-1/3 translate-y-1/3"
        style={{ background: "radial-gradient(circle at center, rgba(16, 96, 72, 0.1) 0%, transparent 60%)" }} 
      />

      {/* 6. Soft Moving Light Beams */}
      <div className="absolute top-[-20%] right-[10%] w-[100px] h-[140%] bg-gradient-to-b from-transparent via-[#FFD27A]/5 to-transparent rotate-[35deg] blur-2xl animate-breathe-slow" />
      <div className="absolute top-[-20%] right-[30%] w-[150px] h-[140%] bg-gradient-to-b from-transparent via-[#FFD27A]/5 to-transparent rotate-[35deg] blur-3xl animate-breathe-slow" style={{ animationDelay: "4s" }} />

      {/* 7. Floating Luxury Particles (Bokeh) */}
      {[...Array(20)].map((_, i) => (
        <div
          key={`dust-${i}`}
          className="absolute rounded-full bg-[#FFD27A] blur-[1px] sm:blur-[2px] animate-dust-float"
          style={{
            top: `${(i * 17) % 100}%`,
            left: `${(i * 31) % 100}%`,
            width: `${(i % 3) + 2}px`,
            height: `${(i % 3) + 2}px`,
            opacity: ((i * 7) % 30) / 100 + 0.03,
            animationDelay: `-${(i * 3) % 15}s`,
            animationDuration: `${(i % 10) + 25}s`,
          }}
        />
      ))}

      {/* 8. Premium Vignette */}
      <div className="absolute inset-0 vignette-heavy" />
    </div>
  );
}

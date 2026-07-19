"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Home, Compass, Map, Sparkles, User } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Home", href: "/", icon: Home },
  { label: "Discover", href: "/properties", icon: Compass },
  { label: "Book", href: "/properties", icon: Sparkles, isCenter: true },
  { label: "Safari", href: "/activities", icon: Map },
  { label: "Account", href: "/dashboard", icon: User },
];

export function BottomNav() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const [shadowLevel, setShadowLevel] = useState("high");

  // Scroll driven physics
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    
    // Allow hiding on scroll down past 100px
    if (latest > previous && latest > 100) {
      setHidden(true);
      setOpacity(0.92);
      setShadowLevel("low");
    } else {
      setHidden(false);
      setOpacity(1);
      setShadowLevel("high");
    }
  });

  // Hide entirely on booking flow to reduce distractions
  if (pathname.startsWith("/booking")) return null;

  return (
    <motion.div 
      className="fixed bottom-0 left-0 right-0 z-[100] lg:hidden pointer-events-none pb-safe flex justify-center pb-6"
      initial={{ y: 0, opacity: 1 }}
      animate={{ 
        y: hidden ? 15 : 0, // Moves down slightly, but not fully off-screen
        opacity: opacity 
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30, mass: 0.8 }}
    >
      <nav
        className={cn(
          "pointer-events-auto relative flex items-center justify-between w-[92%] max-w-[420px] h-[80px] rounded-full overflow-hidden transition-shadow duration-500",
          shadowLevel === "high" ? "shadow-[0_20px_50px_rgba(0,0,0,0.6)]" : "shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
        )}
        aria-label="Mobile Navigation"
      >
        {/* === 9-Layer Cinematic Background Engine === */}
        {/* Layer 1: Deep charcoal gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#18181B] to-[#09090B] -z-20" />
        {/* Layer 2: Warm espresso gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#1A140D]/80 via-transparent to-[#0a0a0a]/50 -z-20" />
        {/* Layer 3: Soft golden radial glow behind center */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.15)_0%,transparent_50%)] -z-20 animate-breathe" />
        {/* Layer 4: Very subtle glass blur */}
        <div className="absolute inset-0 backdrop-blur-2xl bg-white/[0.01] -z-10" />
        {/* Layer 5: Luxury vignette */}
        <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.8)] -z-10" />
        {/* Layer 6: Floating golden dust particles */}
        <div className="absolute inset-0 -z-10 opacity-30 mix-blend-screen pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={`nav-dust-${i}`}
              className="absolute rounded-full bg-[#FFD27A] blur-[0.5px] animate-dust-float"
              style={{
                top: `${(i * 20) % 100}%`,
                left: `${(i * 30) % 100}%`,
                width: `${(i % 2) + 1}px`,
                height: `${(i % 2) + 1}px`,
                animationDelay: `-${i * 1.5}s`,
                animationDuration: `${10 + i * 2}s`,
              }}
            />
          ))}
        </div>
        {/* Layer 7: Moving ambient light */}
        <div className="absolute -inset-[100%] bg-[linear-gradient(to_right,transparent,rgba(212,175,55,0.03),transparent)] animate-light-ray-sweep -z-10" />
        {/* Layer 8: Noise texture */}
        <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay -z-10" />
        {/* Layer 9: Soft reflection on top edge */}
        <div className="absolute inset-0 border border-white/5 border-t-white/20 rounded-full -z-10 pointer-events-none" />

        {/* === Navigation Items === */}
        <div className="relative flex items-center justify-between w-full h-full px-2">
          {NAV_ITEMS.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && !item.isCenter && pathname.startsWith(item.href));
            const Icon = item.icon;

            if (item.isCenter) {
              return (
                <div key="center-cta" className="relative z-20 flex-shrink-0 mx-2">
                  <Link href={item.href} aria-label="Book a stay" className="block focus-ring rounded-full">
                    {/* Magnetic hover physics via framer-motion */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.9, transition: { duration: 0.15 } }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className="w-[60px] h-[60px] rounded-full flex items-center justify-center relative overflow-hidden group shadow-[0_0_30px_rgba(212,175,55,0.3)]"
                    >
                      {/* Base Gold Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37] via-[#F8E7B5] to-[#8B7355]" />
                      
                      {/* Inner highlight */}
                      <div className="absolute inset-0 rounded-full border border-white/40 mix-blend-overlay" />
                      
                      {/* Glass reflection */}
                      <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent opacity-50" />
                      
                      {/* Animated shimmer sweep */}
                      <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_20%,rgba(255,255,255,0.4)_50%,transparent_80%)] bg-[length:200%_100%] animate-shimmer-slow mix-blend-overlay" />
                      
                      {/* Soft pulse behind button */}
                      <div className="absolute inset-0 rounded-full bg-[#D4AF37] blur-xl opacity-0 animate-soft-pulse -z-10" />

                      <Icon className="w-7 h-7 text-black relative z-10 drop-shadow-sm" strokeWidth={2} />
                    </motion.div>
                  </Link>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative flex flex-col items-center justify-center flex-1 min-w-[56px] h-[56px] rounded-full group focus-ring touch-manipulation"
                aria-label={item.label}
                aria-current={isActive ? "page" : undefined}
              >
                <motion.div
                  whileTap={{ scale: 0.88 }}
                  transition={{ duration: 0.2 }}
                  className="relative z-10 flex flex-col items-center justify-center w-full h-full"
                >
                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.div
                        layoutId="active-nav-bg"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        className="absolute inset-0 m-auto w-12 h-12 bg-gradient-to-b from-[#D4AF37]/20 to-transparent rounded-full border border-[#D4AF37]/30 shadow-[inset_0_2px_10px_rgba(212,175,55,0.2)] -z-10"
                      />
                    )}
                  </AnimatePresence>

                  <motion.div 
                    initial={false}
                    animate={{ y: isActive ? -4 : 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    className="relative"
                  >
                    <Icon
                      className={cn(
                        "w-6 h-6 transition-colors duration-300",
                        isActive ? "text-[#FFD27A]" : "text-white/40 group-hover:text-white/80"
                      )}
                      strokeWidth={isActive ? 2.5 : 2}
                    />
                    
                    {/* Micro Sparkle on Active */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0, y: 10 }}
                          animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0], y: -5 }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                          className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-[#FFD27A] rounded-full blur-[1px]"
                        />
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Label - fades smoothly */}
                  <div className="h-[12px] mt-1 relative flex items-center justify-center overflow-hidden">
                    <AnimatePresence mode="wait">
                      {isActive ? (
                        <motion.span
                          key="active-label"
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.2 }}
                          className="text-[10px] font-semibold tracking-wide text-[#FFD27A] absolute whitespace-nowrap"
                        >
                          {item.label}
                        </motion.span>
                      ) : (
                        <motion.span
                          key="inactive-label"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="text-[10px] font-medium tracking-wide text-white/40 group-hover:text-white/70 transition-colors absolute whitespace-nowrap"
                        >
                          {item.label}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  {/* Luxury Gold Underline for active state */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        layoutId="active-nav-indicator"
                        className="absolute bottom-0 w-4 h-[2px] rounded-t-full bg-gradient-to-r from-transparent via-[#FFD27A] to-transparent opacity-80"
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        exit={{ opacity: 0, scaleX: 0 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </AnimatePresence>

                </motion.div>
              </Link>
            );
          })}
        </div>
      </nav>
    </motion.div>
  );
}

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
  { label: "Safari", href: "/activities", icon: Map },
  { label: "Account", href: "/dashboard", icon: User },
];

export function BottomNav() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  // Scroll driven physics
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    const isScrollingDown = latest > previous && latest > 100;
    
    if (hidden !== isScrollingDown) {
      setHidden(isScrollingDown);
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
        opacity: hidden ? 0.92 : 1 
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30, mass: 0.8 }}
    >
      <nav
        className={cn(
          "pointer-events-auto relative flex items-center justify-between w-[92%] max-w-[420px] h-[80px] rounded-full overflow-hidden transition-shadow duration-500",
          !hidden ? "shadow-[0_20px_50px_rgba(0,0,0,0.6)]" : "shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
        )}
        aria-label="Mobile Navigation"
      >
        {/* === Optimized 3-Layer Background Engine === */}
        {/* Layer 1: Deep charcoal solid gradient (Replaces blur for performance) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#18181B] to-[#09090B] -z-20 opacity-95" />
        {/* Layer 2: Warm espresso gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#1A140D]/80 via-transparent to-[#0a0a0a]/50 -z-20" />
        {/* Layer 3: Soft reflection on top edge */}
        <div className="absolute inset-0 border border-white/5 border-t-white/20 rounded-full -z-10 pointer-events-none" />

        {/* === Navigation Items === */}
        <div className="relative flex items-center justify-between w-full h-full px-2">
          {NAV_ITEMS.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative flex flex-col items-center justify-center flex-1 min-w-[56px] h-[56px] rounded-full group focus-ring touch-manipulation"
                aria-label={item.label}
                aria-current={isActive ? "page" : undefined}
              >
                {/* ACTIVE BACKGROUND & INDICATOR (OUTSIDE SCALE) */}
                <AnimatePresence>
                  {isActive && (
                    <>
                      <motion.div
                        layoutId="active-nav-bg"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        className="absolute inset-0 m-auto w-12 h-12 bg-gradient-to-b from-[#D4AF37]/20 to-transparent rounded-full border border-[#D4AF37]/30 shadow-[inset_0_2px_10px_rgba(212,175,55,0.2)] z-0"
                      />
                      <motion.div
                        layoutId="active-nav-indicator"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] rounded-t-full bg-gradient-to-r from-transparent via-[#FFD27A] to-transparent opacity-80 z-10"
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        exit={{ opacity: 0, scaleX: 0 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    </>
                  )}
                </AnimatePresence>

                <motion.div
                  whileTap={{ scale: 0.88 }}
                  transition={{ duration: 0.2 }}
                  className="relative z-10 flex flex-col items-center justify-center w-full h-full"
                >
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

                  {/* Label - crossfades smoothly */}
                  <div className="h-[12px] mt-1 relative flex items-center justify-center">
                    <AnimatePresence>
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
                </motion.div>
              </Link>
            );
          })}
        </div>
      </nav>
    </motion.div>
  );
}

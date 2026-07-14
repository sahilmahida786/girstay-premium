"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Compass, Map, Sparkles, User } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Home", href: "/", icon: Home },
  { label: "Explore", href: "/properties", icon: Compass },
  { label: "Book", href: "/properties", icon: Sparkles, isCenter: true },
  { label: "Safari", href: "/activities", icon: Map },
  { label: "Profile", href: "/dashboard", icon: User },
];

export function BottomNav() {
  const pathname = usePathname();

  // Hide on booking flow to reduce distractions
  if (pathname.startsWith("/booking")) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden pointer-events-none pb-safe-offset">
      <nav
        className="pointer-events-auto mx-4 mb-4 bg-card/70 backdrop-blur-3xl border border-white/10 rounded-[2rem] shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative overflow-hidden"
        aria-label="Mobile navigation"
      >
        <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />
        
        <div className="relative flex items-center justify-between px-2 py-2">
          {NAV_ITEMS.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && !item.isCenter && pathname.startsWith(item.href));
            const Icon = item.icon;

            if (item.isCenter) {
              return (
                <div key="book-cta" className="relative -mt-6 z-20">
                  <Link href={item.href} aria-label="Book a stay" className="block focus-ring rounded-full">
                    <motion.div
                      whileTap={{ scale: 0.9 }}
                      className="w-14 h-14 rounded-full gradient-gold shadow-gold-lg flex items-center justify-center relative overflow-hidden group"
                    >
                      <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <Icon className="w-6 h-6 text-black relative z-10" strokeWidth={2.5} />
                    </motion.div>
                  </Link>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative flex flex-col items-center justify-center w-full min-h-[50px] py-1 rounded-full group focus-ring"
                aria-label={item.label}
                aria-current={isActive ? "page" : undefined}
              >
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      layoutId="bottom-nav-active"
                      className="absolute inset-0 bg-primary/10 rounded-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </AnimatePresence>
                <motion.div
                  whileTap={{ scale: 0.85 }}
                  className={cn(
                    "relative z-10 flex flex-col items-center gap-1 transition-colors duration-300",
                    isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                  )}
                >
                  <Icon
                    className={cn(
                      "w-5 h-5 transition-transform duration-300",
                      isActive ? "scale-110" : "scale-100"
                    )}
                    strokeWidth={isActive ? 2.5 : 2}
                  />
                  <span className="text-[9px] font-semibold tracking-wide">
                    {item.label}
                  </span>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}

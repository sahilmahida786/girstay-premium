"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Home, Compass, Map, Sparkles, User } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Home", href: "/", icon: Home },
  { label: "Explore", href: "/properties", icon: Compass },
  { label: "Book", href: "/properties", icon: Sparkles, isCenter: true },
  { label: "Safari", href: "/activities/safari", icon: Map },
  { label: "Profile", href: "/dashboard", icon: User },
];

export function BottomNav() {
  const pathname = usePathname();

  // Hide on booking flow to reduce distractions
  if (pathname.startsWith("/booking")) return null;

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-card/95 backdrop-blur-xl border-t border-border/50 shadow-[0_-8px_30px_-15px_rgba(0,0,0,0.5)]"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
      aria-label="Main navigation"
    >
      <div className="flex items-end justify-around px-1 pt-1.5 pb-1.5">
        {NAV_ITEMS.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/" && !item.isCenter && pathname.startsWith(item.href));
          const Icon = item.icon;

          if (item.isCenter) {
            return (
              <Link
                key="book-cta"
                href={item.href}
                className="flex flex-col items-center justify-center -mt-4"
                aria-label="Book a stay"
              >
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  className="w-14 h-14 rounded-full gradient-gold shadow-gold-lg flex items-center justify-center"
                >
                  <Icon className="w-6 h-6 text-black" strokeWidth={2.5} />
                </motion.div>
                <span className="text-[10px] font-semibold text-primary mt-1">
                  {item.label}
                </span>
              </Link>
            );
          }

          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center justify-center w-full min-h-[56px] py-1 gap-0.5 group"
              aria-label={item.label}
              aria-current={isActive ? "page" : undefined}
            >
              <motion.div
                whileTap={{ scale: 0.85 }}
                className={cn(
                  "relative p-2 rounded-2xl transition-colors duration-200",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground group-active:text-foreground"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-2xl bg-primary/10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <Icon
                  className={cn(
                    "relative z-10 w-5 h-5 transition-transform duration-200",
                    isActive ? "scale-110" : "scale-100"
                  )}
                  strokeWidth={isActive ? 2.5 : 2}
                />
              </motion.div>
              <span
                className={cn(
                  "text-[10px] font-medium transition-colors",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

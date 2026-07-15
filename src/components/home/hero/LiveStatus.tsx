"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STATUSES = [
  {
    id: "browsing",
    icon: (
      <span className="relative flex h-[8px] w-[8px]">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
        <span className="relative inline-flex rounded-full h-[8px] w-[8px] bg-emerald-400" />
      </span>
    ),
    text: "38 Guests Browsing",
  },
  {
    id: "rating",
    icon: <span className="text-yellow-400 text-[14px]">⭐</span>,
    text: "Rated 4.9 by 1,800+ Guests",
  },
  {
    id: "verified",
    icon: <span className="text-emerald-400 text-[14px]">🛡</span>,
    text: "Verified Luxury Stays",
  },
  {
    id: "bookings",
    icon: <span className="text-orange-500 text-[14px]">🔥</span>,
    text: "12 Bookings Today",
  },
];

export function LiveStatus() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % STATUSES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-8 flex items-center">
      {/* Subtle background glow fixed behind the changing text */}
      <div className="absolute inset-0 bg-[#D4AF37]/10 blur-[15px] rounded-full pointer-events-none" />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={STATUSES[index].id}
          initial={{ opacity: 0, y: 5, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -5, filter: "blur(4px)" }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
          className="relative z-10 flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/40 border border-white/10 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
        >
          <div className="flex items-center justify-center w-4 h-4">
            {STATUSES[index].icon}
          </div>
          <span className="text-[12px] sm:text-[13px] font-medium text-white/90 tracking-wide drop-shadow-sm">
            {STATUSES[index].text}
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

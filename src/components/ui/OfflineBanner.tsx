"use client";

import { useNetworkState } from "@/hooks/useNetworkState";
import { m, AnimatePresence } from "framer-motion";
import { WifiOff, Wifi } from "lucide-react";
import { useEffect, useState } from "react";

export function OfflineBanner() {
  const { isOnline } = useNetworkState();
  const [showRestored, setShowRestored] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (hasMounted && isOnline) {
      // Show restored briefly when coming back online
      setShowRestored(true);
      const timer = setTimeout(() => setShowRestored(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [isOnline, hasMounted]);

  if (!hasMounted) return null;

  return (
    <AnimatePresence>
      {!isOnline && (
        <m.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed top-0 left-0 right-0 z-[100] flex justify-center pointer-events-none p-4"
          role="alert"
          aria-live="assertive"
        >
          <div className="bg-red-950/90 border border-red-500/30 backdrop-blur-md px-6 py-3 rounded-full flex items-center gap-3 shadow-[0_10px_40px_rgba(220,38,38,0.3)] pointer-events-auto">
            <div className="w-8 h-8 rounded-full bg-red-900/50 flex items-center justify-center">
              <WifiOff className="w-4 h-4 text-red-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-red-50">You are wandering offline</p>
              <p className="text-xs text-red-400/80">Check your connection to continue booking</p>
            </div>
          </div>
        </m.div>
      )}

      {showRestored && (
        <m.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed top-0 left-0 right-0 z-[100] flex justify-center pointer-events-none p-4"
          role="alert"
          aria-live="polite"
        >
          <div className="bg-emerald-950/90 border border-emerald-500/30 backdrop-blur-md px-6 py-3 rounded-full flex items-center gap-3 shadow-[0_10px_40px_rgba(16,185,129,0.3)] pointer-events-auto">
            <div className="w-8 h-8 rounded-full bg-emerald-900/50 flex items-center justify-center">
              <Wifi className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-emerald-50">Connection Restored</p>
              <p className="text-xs text-emerald-400/80">You are back online.</p>
            </div>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
}

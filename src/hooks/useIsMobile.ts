"use client";

import { useState, useEffect } from "react";

/**
 * Returns true on touch-primary devices (phones/tablets).
 * Uses `pointer: coarse` + `hover: none` to match the CSS media query.
 * Falls back to false during SSR to avoid hydration mismatch.
 */
export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: coarse) and (hover: none)");
    setIsMobile(mq.matches);

    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return isMobile;
}

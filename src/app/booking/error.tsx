"use client";

import { useEffect, useRef } from "react";
import { AlertCircle, RefreshCw, Home } from "lucide-react";
import Link from "next/link";
import { Logger } from "@/lib/logger";

export default function BookingError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    Logger.error("Booking Route Error", "BOOKING_ROUTE_FAIL", { error: error.message, digest: error.digest });
    // Focus the error container for screen readers
    containerRef.current?.focus();
  }, [error]);

  return (
    <div 
      ref={containerRef}
      tabIndex={-1}
      className="min-h-[80vh] flex flex-col items-center justify-center p-4 outline-none"
      role="alert"
      aria-live="assertive"
    >
      <div className="max-w-md w-full bg-[#0A0A0A] border border-red-500/10 rounded-3xl p-8 text-center shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(220,38,38,0.05),transparent_50%)] pointer-events-none" />
        
        <div className="w-16 h-16 rounded-full bg-red-950/30 flex items-center justify-center mx-auto mb-6 border border-red-900/30">
          <AlertCircle className="w-8 h-8 text-red-500/80" />
        </div>
        
        <h2 className="text-2xl font-serif text-white mb-3">Booking Interrupted</h2>
        
        <p className="text-white/60 mb-8 font-light text-sm">
          We encountered an issue loading your booking session. Your selections are safe, but we need to reload the page.
        </p>
        
        <div className="flex flex-col gap-3">
          <button
            onClick={() => reset()}
            className="w-full py-3.5 rounded-xl bg-white/10 text-white font-medium hover:bg-white/15 transition-colors flex items-center justify-center gap-2"
          >
            <RefreshCw className="w-4 h-4" /> Try Again
          </button>
          
          <Link
            href="/"
            className="w-full py-3.5 rounded-xl border border-white/10 text-white/70 font-medium hover:text-white hover:border-white/20 transition-colors flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" /> Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}

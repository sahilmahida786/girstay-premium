"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, ArrowLeft } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service like Sentry
    console.error("Application Error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-[#0A0A0A] border border-[#D4AF37]/20 rounded-3xl p-8 text-center shadow-2xl relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.1),transparent_50%)] pointer-events-none" />
        
        <div className="w-16 h-16 rounded-full bg-red-900/20 flex items-center justify-center mx-auto mb-6 border border-red-500/20">
          <AlertTriangle className="w-8 h-8 text-red-400" />
        </div>
        
        <h2 className="text-3xl font-serif text-white mb-4">Something went wrong</h2>
        
        <p className="text-white/60 mb-8 font-light text-sm">
          We encountered an unexpected error. Our engineering team has been notified.
        </p>
        
        <div className="flex flex-col gap-3">
          <button
            onClick={() => reset()}
            className="w-full py-4 rounded-xl bg-[#D4AF37] text-black font-semibold uppercase tracking-widest text-xs hover:bg-[#F8E7B5] transition-colors"
          >
            Try Again
          </button>
          
          <Link
            href="/"
            className="w-full py-4 rounded-xl bg-white/5 text-white font-semibold uppercase tracking-widest text-xs border border-white/10 hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" /> Return to Sanctuary
          </Link>
        </div>
      </div>
    </div>
  );
}

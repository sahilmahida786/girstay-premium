"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCcw } from "lucide-react";
import { Logger } from "@/lib/logger";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    Logger.error("Fatal Application Error", "FATAL_LAYOUT_ERROR", { error: error.message, digest: error.digest });
  }, [error]);

  return (
    <html lang="en">
      <body className="bg-black text-white antialiased min-h-screen flex items-center justify-center p-4">
        <div className="max-w-lg w-full bg-[#0A0A0A] border border-[#D4AF37]/20 rounded-3xl p-10 text-center shadow-2xl relative overflow-hidden">
          {/* Decorative background glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.1),transparent_50%)] pointer-events-none" />
          
          <div className="w-20 h-20 rounded-full bg-red-950/40 flex items-center justify-center mx-auto mb-8 border border-red-900/50">
            <AlertTriangle className="w-10 h-10 text-red-500" strokeWidth={1.5} />
          </div>
          
          <h2 className="text-3xl font-serif text-[#D4AF37] mb-4">Critical System Error</h2>
          
          <p className="text-white/60 mb-8 font-light text-sm leading-relaxed">
            The sanctuary has encountered an unexpected interruption. Our engineers have been alerted. We apologize for the inconvenience.
          </p>
          
          <button
            onClick={() => window.location.reload()}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F8E7B5] to-[#D4AF37] bg-[length:200%_auto] text-black font-semibold uppercase tracking-widest text-xs hover:bg-[100%_auto] transition-all duration-500 shadow-[0_4px_20px_rgba(212,175,55,0.2)] flex items-center justify-center gap-2 group"
          >
            <RefreshCcw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-700" /> Hard Reset
          </button>
        </div>
      </body>
    </html>
  );
}

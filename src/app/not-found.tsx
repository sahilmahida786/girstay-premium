import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-[#0A0A0A] border border-[#D4AF37]/20 rounded-3xl p-10 text-center shadow-2xl relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(212,175,55,0.05),transparent_60%)] pointer-events-none" />
        
        <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-8 border border-white/10">
          <Compass className="w-10 h-10 text-[#D4AF37]" strokeWidth={1.5} />
        </div>
        
        <h2 className="text-6xl font-serif text-[#D4AF37] mb-2 tracking-tighter">404</h2>
        <h3 className="text-xl font-medium text-white mb-4 uppercase tracking-widest">Uncharted Territory</h3>
        
        <p className="text-white/50 mb-10 font-light text-sm leading-relaxed">
          The path you are looking for has faded into the forest. Let us guide you back to luxury.
        </p>
        
        <Link
          href="/"
          className="w-full py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F8E7B5] to-[#D4AF37] bg-[length:200%_auto] text-black font-semibold uppercase tracking-widest text-xs hover:bg-[100%_auto] transition-all duration-500 shadow-[0_4px_20px_rgba(212,175,55,0.2)] flex items-center justify-center gap-2 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Return to Sanctuary
        </Link>
      </div>
    </div>
  );
}

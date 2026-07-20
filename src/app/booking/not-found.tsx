import Link from "next/link";
import { Compass, Search } from "lucide-react";

export default function BookingNotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-[#0A0A0A] border border-[#D9A94D]/10 rounded-3xl p-10 text-center shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(217,169,77,0.05),transparent_50%)] pointer-events-none" />
        
        <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6 border border-white/10">
          <Compass className="w-10 h-10 text-[#D9A94D]" strokeWidth={1.5} />
        </div>
        
        <h2 className="text-2xl font-serif text-white mb-3">Property Unavailable</h2>
        
        <p className="text-white/50 mb-8 font-light text-sm leading-relaxed">
          The sanctuary you are trying to book is no longer available or the link has expired.
        </p>
        
        <Link
          href="/properties"
          className="w-full py-4 rounded-xl bg-gradient-to-r from-[#D9A94D] via-[#F8E7B5] to-[#D9A94D] bg-[length:200%_auto] text-black font-semibold uppercase tracking-widest text-xs hover:bg-[100%_auto] transition-all duration-500 shadow-[0_4px_20px_rgba(217,169,77,0.2)] flex items-center justify-center gap-2 group"
        >
          <Search className="w-4 h-4" /> Explore Destinations
        </Link>
      </div>
    </div>
  );
}

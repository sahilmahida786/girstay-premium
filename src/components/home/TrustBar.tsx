"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Star, Clock, Award } from "lucide-react";
import { cn } from "@/lib/utils";

const trustItems = [
  {
    icon: Star,
    text: "4.8/5 from 500+ reviews",
    glow: "bg-yellow-500/20",
    textClass: "text-yellow-500",
  },
  {
    icon: Clock,
    text: "Free cancellation up to 48 hrs",
    glow: "bg-emerald-500/20",
    textClass: "text-emerald-400",
  },
  {
    icon: ShieldCheck,
    text: "Best price guarantee",
    glow: "bg-blue-500/20",
    textClass: "text-blue-400",
  },
  {
    icon: Award,
    text: "Personally inspected properties",
    glow: "bg-[#D4AF37]/20",
    textClass: "text-[#FFD27A]",
  },
];

export function TrustBar() {
  return (
    <section className="relative py-8 sm:py-12 overflow-hidden bg-[#060606]">
      {/* ── Suble background transition blend ── */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#060606] to-transparent pointer-events-none z-10" />

      <div className="relative z-20 max-w-[1400px] mx-auto px-4 sm:px-6">
        
        {/* Floating Glassmorphism Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          className="relative rounded-[32px] sm:rounded-full bg-[#0a0a0a]/60 backdrop-blur-2xl border border-white/5 shadow-[0_20px_40px_rgba(0,0,0,0.4)] overflow-hidden"
        >
          {/* Internal ambient glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[50%] bg-[#D4AF37]/[0.02] blur-3xl rounded-full pointer-events-none" />

          {/* Marquee / Scroll Container */}
          <div className="flex items-center gap-6 sm:gap-12 overflow-x-auto scrollbar-hide px-6 py-5 sm:px-12 sm:py-6 sm:justify-center">
            {trustItems.map((item, index) => (
              <div
                key={item.text}
                className="group flex items-center gap-3 shrink-0 cursor-default"
              >
                {/* Icon Container with Glow */}
                <div className="relative flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/[0.03] border border-white/10 group-hover:bg-white/[0.08] transition-colors duration-500">
                  <div className={cn("absolute inset-0 rounded-full blur-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-500", item.glow)} />
                  <item.icon className={cn("w-4 h-4 sm:w-5 sm:h-5 relative z-10 transition-transform duration-500 group-hover:scale-110", item.textClass)} />
                </div>
                
                {/* Text */}
                <span className="text-[13px] sm:text-[14px] text-white/70 font-medium whitespace-nowrap group-hover:text-white transition-colors duration-500 tracking-wide">
                  {item.text}
                </span>

                {/* Divider (hide for last item) */}
                {index !== trustItems.length - 1 && (
                  <div className="hidden sm:block w-px h-6 bg-white/10 ml-6 lg:ml-12" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

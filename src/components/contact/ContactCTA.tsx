"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, MessageSquare } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";

export function ContactCTA() {
  return (
    <div className="relative z-10 -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-16 mt-32 h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden rounded-t-[3rem] sm:rounded-t-[4rem]">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2500&auto=format&fit=crop"
          alt="Luxury Gir Safari Resort at Golden Hour"
          fill
          className="object-cover scale-[1.02] transform hover:scale-[1.05] transition-transform duration-[20s]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80" />
        <div className="absolute inset-0 bg-[#050505]/30 backdrop-blur-sm" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
          Ready to Experience Gir <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFD27A] to-[#D4AF37] italic pr-2">Like Never Before?</span>
        </h2>
        
        <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-12 font-light">
          Let our luxury concierge team craft an itinerary that transcends the ordinary. Your VIP journey begins here.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <button className="w-full sm:w-auto px-8 sm:px-12 h-16 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F8E7B5] to-[#D4AF37] text-black font-bold text-base sm:text-lg flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(212,175,55,0.4)] overflow-hidden group">
            <span className="relative z-10 flex items-center gap-2">
              Plan My Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          
          <a 
            href={SOCIAL_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 h-16 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-base flex items-center justify-center gap-3 backdrop-blur-md transition-all hover:scale-105 active:scale-95"
          >
            <MessageSquare className="w-5 h-5 text-[#25D366]" />
            Chat with Concierge
          </a>
        </div>
      </motion.div>
    </div>
  );
}

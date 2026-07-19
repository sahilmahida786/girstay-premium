"use client";

import { motion } from "framer-motion";
import { Star, Clock, CheckCircle2, UtensilsCrossed, Compass, ShieldCheck, Trophy, Tent } from "lucide-react";

export function ActivitiesHeroTrust() {
  return (
    <div className="relative z-20 w-full mt-16 pb-8 flex flex-col items-center">
      
      {/* Floating Experience Card */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
        className="w-full max-w-4xl px-4 mb-12"
      >
        <motion.div 
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
          className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group"
        >
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent opacity-50" />
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-[#FFD27A] fill-[#FFD27A]" />
                <span className="text-[#FFD27A] font-bold text-lg sm:text-xl">4.9</span>
              </div>
              <span className="text-xs sm:text-sm text-white/60 font-medium">Guest Rating</span>
            </div>
            
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-white/90" />
                <span className="text-white/90 font-bold text-lg sm:text-xl">18 Hour</span>
              </div>
              <span className="text-xs sm:text-sm text-white/60 font-medium">Signature Journey</span>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Compass className="w-5 h-5 text-white/90" />
                <span className="text-white/90 font-bold text-lg sm:text-xl">12+</span>
              </div>
              <span className="text-xs sm:text-sm text-white/60 font-medium">Premium Activities</span>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <UtensilsCrossed className="w-4 h-4 text-white/90" />
                <span className="text-white/90 font-semibold text-sm sm:text-base">Luxury Dining</span>
              </div>
              <span className="text-xs sm:text-sm text-white/60 font-medium">Included</span>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-white/90" />
                <span className="text-white/90 font-semibold text-sm sm:text-base">Certified</span>
              </div>
              <span className="text-xs sm:text-sm text-white/60 font-medium">Naturalists</span>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-[#D4AF37] font-semibold text-sm sm:text-base">Limited</span>
              </div>
              <span className="text-xs sm:text-sm text-[#FFD27A]/80 font-medium">Daily Guests</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Trust Bar */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="w-full max-w-6xl mx-auto overflow-hidden"
      >
        <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide items-center justify-start md:justify-center gap-8 px-4 sm:px-6 mask-fade-edges">
          {[
            { icon: ShieldCheck, label: "Verified Luxury Experiences" },
            { icon: Star, label: "24×7 Concierge" },
            { icon: Trophy, label: "Award Winning Hospitality" },
            { icon: Compass, label: "Local Expert Guides" },
            { icon: Tent, label: "Private Safari Planning" },
            { icon: CheckCircle2, label: "Premium Resort Partners" },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 snap-center shrink-0">
              <item.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D4AF37]" />
              <span className="text-xs sm:text-sm font-medium text-white/70 whitespace-nowrap">{item.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

    </div>
  );
}

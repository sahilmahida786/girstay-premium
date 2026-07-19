"use client";

import { motion, AnimatePresence } from "framer-motion";
import { SafeImage as Image } from "@/components/ui/SafeImage";
import { Clock, Users, Baby, MapPin, Sparkles, Navigation } from "lucide-react";
import { dayTimeline } from "@/data/mockActivities";

type TimelinePeriod = "morning" | "afternoon" | "evening" | "night";

interface TimelineContentProps {
  activeTab: TimelinePeriod;
}

const storyDividers: Record<TimelinePeriod, string> = {
  morning: "The forest slowly awakens to the calls of the wild.",
  afternoon: "Golden sunlight fills the landscape, inviting exploration.",
  evening: "The campfire welcomes another unforgettable evening.",
  night: "Stars begin to appear above the vast wilderness of Gir.",
};

export function TimelineContent({ activeTab }: TimelineContentProps) {
  const filteredTimeline = dayTimeline.filter((entry) => entry.period === activeTab);

  return (
    <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6">
      
      {/* Story Divider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`story-${activeTab}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <p className="font-heading text-lg sm:text-2xl text-[#FFD27A] italic font-light tracking-wide">
            &quot;{storyDividers[activeTab]}&quot;
          </p>
        </motion.div>
      </AnimatePresence>

      <div className="relative">
        {/* Desktop Vertical Glowing Line */}
        <div className="hidden md:block absolute left-8 top-8 bottom-8 w-[2px] bg-gradient-to-b from-transparent via-[#D4AF37]/30 to-transparent" />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, staggerChildren: 0.2 }}
            className="space-y-8 sm:space-y-12"
          >
            {filteredTimeline.map((entry, index) => (
              <motion.div
                key={entry.activity.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex flex-col md:flex-row items-stretch md:items-start gap-4 md:gap-8 group"
              >
                
                {/* Desktop Time Node */}
                <div className="hidden md:flex flex-col items-center shrink-0 w-16 relative z-10 pt-4">
                  <div className="w-16 h-16 rounded-full bg-[#050505] border-2 border-[#D4AF37]/50 flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.2)] mb-3 group-hover:scale-110 group-hover:border-[#D4AF37] transition-all duration-500">
                    <span className="text-2xl">{entry.activity.icon}</span>
                  </div>
                  <span className="text-sm font-bold text-[#FFD27A]">{entry.time}</span>
                </div>

                {/* Card */}
                <div className="flex-1 bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:bg-white/[0.04] transition-colors duration-500 shadow-[0_10px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_50px_rgba(212,175,55,0.05)] relative group/card">
                  
                  {/* Subtle warm gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 via-transparent to-[#D4AF37]/[0.02] group-hover/card:to-[#D4AF37]/[0.08] transition-all duration-700 pointer-events-none" />

                  <div className="flex flex-col md:flex-row">
                    
                    {/* Image Section */}
                    <div className="relative w-full md:w-[280px] h-[220px] md:h-full shrink-0 overflow-hidden">
                      <Image
                        src={entry.activity.image}
                        alt={entry.activity.name}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover/card:scale-110"
                        sizes="(max-width: 768px) 100vw, 280px"
                      />
                      {/* Cinematic Vignette */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent md:hidden" />
                      
                      {/* Mobile Time Badge Overlay */}
                      <div className="absolute bottom-4 left-4 md:hidden flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-[#D4AF37]/50 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                        <Clock className="w-3.5 h-3.5 text-[#FFD27A]" />
                        <span className="text-xs font-bold text-[#FFD27A]">{entry.time}</span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-5 md:p-8 flex-1 flex flex-col justify-center">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h3 className="font-heading text-2xl md:text-3xl font-bold text-white leading-tight">
                          {entry.activity.name}
                        </h3>
                        {/* Premium Badge */}
                        <div className="hidden sm:flex shrink-0 items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30">
                          <Sparkles className="w-3 h-3 text-[#FFD27A]" />
                          <span className="text-[10px] uppercase tracking-wider text-[#FFD27A] font-semibold">Premium</span>
                        </div>
                      </div>

                      <p className="text-sm md:text-base text-white/70 leading-relaxed mb-6 font-light line-clamp-3">
                        {entry.activity.description}
                      </p>

                      {/* Micro Details Grid */}
                      <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-4 sm:gap-6 mt-auto text-xs md:text-sm text-white/60">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-[#D4AF37]" />
                          <span>{entry.activity.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Navigation className="w-4 h-4 text-[#D4AF37]" />
                          <span>Guide Included</span>
                        </div>
                        {entry.activity.familyFriendly && (
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-[#D4AF37]" />
                            <span>Family Access</span>
                          </div>
                        )}
                        {entry.activity.kidFriendly && (
                          <div className="flex items-center gap-2">
                            <Baby className="w-4 h-4 text-emerald-400" />
                            <span className="text-emerald-400/90">Kid-Friendly</span>
                          </div>
                        )}
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-[#D4AF37]" />
                          <span>Photo Spot</span>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

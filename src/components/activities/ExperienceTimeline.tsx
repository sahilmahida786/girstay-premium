"use client";

import { useRef, useState } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { SafeImage as Image } from "@/components/ui/SafeImage";
import { Clock, Users, Baby } from "lucide-react";
import { dayTimeline } from "@/data/mockActivities";
import { cn } from "@/lib/utils";
import { luxuryEasing } from "@/lib/motion";

const periodColors = {
  morning: "from-amber-500/20 to-orange-500/20",
  afternoon: "from-sky-500/20 to-blue-500/20",
  evening: "from-purple-500/20 to-pink-500/20",
  night: "from-indigo-500/20 to-violet-500/20",
};

const periodLabels = {
  morning: "☀️ Morning",
  afternoon: "🌤️ Afternoon",
  evening: "🌅 Evening",
  night: "🌙 Night",
};

export function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<"morning" | "afternoon" | "evening" | "night">("morning");
  
  const filteredTimeline = dayTimeline.filter(entry => entry.period === activeTab);


  return (
    <section id="timeline" className="py-20 sm:py-28" ref={containerRef}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-3 block">
            Your Day at GirStay
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            A Complete <span className="gradient-gold-text">Day Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From the first ray of sunrise to a peaceful night under the stars —
            every moment is crafted for you
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
          {(Object.keys(periodLabels) as Array<keyof typeof periodLabels>).map((period) => (
            <button
              key={period}
              onClick={() => setActiveTab(period)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm border",
                activeTab === period
                  ? "bg-primary text-primary-foreground border-primary shadow-luxury scale-105"
                  : "bg-card text-muted-foreground border-border/50 hover:border-primary/50"
              )}
            >
              {periodLabels[period]}
            </button>
          ))}
        </div>

        {/* Timeline Items Grid */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {filteredTimeline.map((entry) => {
                return (
                  <div
                    key={entry.activity.id}
                    className="relative flex items-center gap-4 sm:gap-6 bg-card border border-border/50 p-4 sm:p-6 rounded-2xl hover:shadow-luxury hover:border-primary/20 transition-all duration-300"
                  >
                    {/* Time Node */}
                    <div className="hidden sm:flex flex-col items-center shrink-0 w-16">
                      <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center shadow-gold mb-2">
                        <span className="text-xl">{entry.activity.icon}</span>
                      </div>
                      <span className="text-xs font-bold text-primary text-center">
                        {entry.time}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row gap-4">
                        {/* Image */}
                        <div className="relative w-full sm:w-32 h-40 sm:h-28 rounded-xl overflow-hidden shrink-0">
                            <Image
                              src={entry.activity.image}
                              alt={entry.activity.name}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-110"
                              sizes="(max-width: 640px) 100vw, 112px"
                              loading="lazy"
                            />
                          </div>

                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2 mb-1">
                              <div>
                                <span className="text-xs font-bold text-primary">
                                  {entry.time}
                                </span>
                                <h3 className="font-heading font-semibold text-base mt-0.5 leading-tight">
                                  {entry.activity.name}
                                </h3>
                              </div>
                            </div>

                            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-3">
                              {entry.activity.description}
                            </p>

                            <div className="flex items-center gap-3 text-xs text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {entry.activity.duration}
                              </div>
                              {entry.activity.kidFriendly && (
                                <div className="flex items-center gap-1 text-emerald-gir">
                                  <Baby className="w-3 h-3" />
                                  Kid-friendly
                                </div>
                              )}
                              {entry.activity.familyFriendly && (
                                <div className="flex items-center gap-1">
                                  <Users className="w-3 h-3" />
                                  Family
                                </div>
                              )}
                            </div>

                            {/* Sub-activities */}
                            {entry.activity.subActivities && (
                              <div className="flex flex-wrap gap-1.5 mt-2">
                                {entry.activity.subActivities.map((sub) => (
                                  <span
                                    key={sub}
                                    className="text-xs px-2 py-0.5 rounded-md bg-muted"
                                  >
                                    {sub}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                      </div>
                    </div>
                  </div>
              );
            })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

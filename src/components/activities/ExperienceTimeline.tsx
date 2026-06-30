"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
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
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });



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

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line background */}
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-0.5 bg-border/50 sm:-translate-x-px" />
          {/* Animated vertical progress line */}
          <motion.div 
            className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/80 to-transparent sm:-translate-x-px origin-top"
            style={{ scaleY: scrollYProgress }}
          />

          <div className="space-y-8 sm:space-y-12">
            {dayTimeline.map((entry, index) => {
              const showPeriodHeader = index === 0 || dayTimeline[index - 1].period !== entry.period;
              const isLeft = index % 2 === 0;

              return (
                <div key={entry.activity.id}>
                  {/* Period Header */}
                  {showPeriodHeader && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      className="flex justify-center mb-6 sm:mb-8 relative z-10"
                    >
                      <span
                        className={cn(
                          "px-5 py-2 rounded-full text-sm font-semibold bg-gradient-to-r border border-border/50 shadow-luxury",
                          periodColors[entry.period]
                        )}
                      >
                        {periodLabels[entry.period]}
                      </span>
                    </motion.div>
                  )}

                  {/* Timeline Entry */}
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: luxuryEasing }}
                    className={cn(
                      "relative flex items-start gap-4 sm:gap-0",
                      "pl-16 sm:pl-0"
                    )}
                  >
                    {/* Time Node (mobile: absolute left, desktop: center) */}
                    <div className="absolute left-3 sm:left-1/2 sm:-translate-x-1/2 z-10 flex flex-col items-center">
                      <div className="w-7 h-7 rounded-full gradient-gold flex items-center justify-center shadow-gold">
                        <span className="text-xs">{entry.activity.icon}</span>
                      </div>
                    </div>

                    {/* Card — Desktop alternating */}
                    <div
                      className={cn(
                        "w-full sm:w-[calc(50%-2rem)]",
                        isLeft ? "sm:mr-auto sm:pr-8" : "sm:ml-auto sm:pl-8"
                      )}
                    >
                      <div className="group p-4 sm:p-5 rounded-2xl bg-card border border-border/50 hover:shadow-luxury hover:border-primary/20 transition-all duration-300">
                        <div className="flex flex-col sm:flex-row gap-4">
                          {/* Image */}
                          <div className="relative w-full sm:w-28 h-32 sm:h-24 rounded-xl overflow-hidden shrink-0">
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
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

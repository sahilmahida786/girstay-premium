"use client";

import React from "react";
import { m } from "framer-motion";
import { CheckCircle2, Clock, MapPin, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const TIMELINE_STEPS = [
  {
    id: "confirmed",
    title: "Booking Confirmed",
    description: "Your reservation is secured.",
    icon: <CheckCircle2 className="w-4 h-4" />,
    status: "completed",
    date: "Today"
  },
  {
    id: "reminder",
    title: "Pre-arrival Reminder",
    description: "We'll send your itinerary & weather update.",
    icon: <Clock className="w-4 h-4" />,
    status: "upcoming",
    date: "3 Days Before"
  },
  {
    id: "checkin",
    title: "Check-in",
    description: "Welcome to GirStay Premium. Rooms ready by 2:00 PM.",
    icon: <MapPin className="w-4 h-4" />,
    status: "upcoming",
    date: "Day 1"
  },
  {
    id: "stay",
    title: "The Experience",
    description: "Enjoy your luxury safaris and wilderness dining.",
    icon: <Sparkles className="w-4 h-4" />,
    status: "upcoming",
    date: "During Stay"
  }
];

export function BookingTimeline() {
  return (
    <m.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
      }}
      className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 sm:p-8"
    >
      <h3 className="luxury-heading text-xl mb-8">Your Journey</h3>

      <div className="relative">
        {/* Connecting Line */}
        <div className="absolute top-0 bottom-0 left-[15px] sm:left-[27px] w-[2px] bg-white/10" />
        
        {/* Animated Progress Line (Only covering the first step for now) */}
        <m.div 
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0.3 }} // Just to the second step
          transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
          className="absolute top-0 bottom-0 left-[15px] sm:left-[27px] w-[2px] bg-gradient-to-b from-[#D9A94D] to-transparent origin-top"
        />

        <div className="space-y-8 relative">
          {TIMELINE_STEPS.map((step, index) => {
            const isCompleted = step.status === "completed";
            
            return (
              <m.div 
                key={step.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + (index * 0.15) }}
                className="flex gap-4 sm:gap-6 relative z-10"
              >
                {/* Node */}
                <div className={cn(
                  "w-8 h-8 sm:w-14 sm:h-14 shrink-0 rounded-full flex items-center justify-center border-2 transition-colors duration-500",
                  isCompleted 
                    ? "bg-[#D9A94D]/10 border-[#D9A94D] text-[#D9A94D] shadow-[0_0_15px_rgba(217,169,77,0.2)]" 
                    : "bg-[#111] border-white/10 text-white/30"
                )}>
                  <div className={cn("sm:scale-125 transition-transform", isCompleted && "animate-pulse")}>
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="pt-1 sm:pt-3">
                  <div className="flex items-baseline gap-3 mb-1">
                    <h4 className={cn(
                      "font-medium text-base sm:text-lg",
                      isCompleted ? "text-white" : "text-white/60"
                    )}>
                      {step.title}
                    </h4>
                    <span className="text-xs font-medium text-[#D9A94D]">{step.date}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-white/50">{step.description}</p>
                </div>
              </m.div>
            );
          })}
        </div>
      </div>
    </m.div>
  );
}

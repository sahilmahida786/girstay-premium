"use client";

import { useState } from "react";
import { TimelineBackground } from "./timeline/TimelineBackground";
import { TimelineHeader } from "./timeline/TimelineHeader";
import { TimelineTabs } from "./timeline/TimelineTabs";
import { TimelineContent } from "./timeline/TimelineContent";

type TimelinePeriod = "morning" | "afternoon" | "evening" | "night";

export function ExperienceTimeline() {
  const [activeTab, setActiveTab] = useState<TimelinePeriod>("morning");

  return (
    <section id="timeline" className="relative min-h-screen py-20 sm:py-32 overflow-hidden">
      
      {/* 8-Layer Dynamic Background */}
      <TimelineBackground activeTab={activeTab} />

      <div className="relative z-20 w-full">
        {/* Header Typography & Divider */}
        <TimelineHeader />

        {/* Premium Segmented Controls */}
        <TimelineTabs activeTab={activeTab} onTabChange={setActiveTab} />

        {/* The Journey Cards & Connections */}
        <TimelineContent activeTab={activeTab} />
      </div>

      {/* Seamless Transition to Next Section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent z-30 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-[#D4AF37]/5 via-transparent to-transparent z-20 pointer-events-none mix-blend-screen" />
    </section>
  );
}

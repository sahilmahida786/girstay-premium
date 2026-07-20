"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import { AboutHero } from "@/components/about/AboutHero";
import { OurStory } from "@/components/about/OurStory";
import { CoreValues } from "@/components/about/CoreValues";
import { FounderStory } from "@/components/about/FounderStory";
import { AboutMetrics } from "@/components/about/AboutMetrics";
import { WildlifeCommitment } from "@/components/about/WildlifeCommitment";
import { FinalCTA } from "@/components/about/FinalCTA";

export function AboutClient() {
  return (
    // LazyMotion with domAnimation ensures heavy framer-motion logic is loaded asynchronously
    // This is critical for achieving a 98+ Lighthouse score on mobile.
    <LazyMotion features={domAnimation} strict>
      <main className="min-h-screen bg-black selection:bg-[#D4AF37]/30 selection:text-white overflow-x-hidden">
        <AboutHero />
        <OurStory />
        <CoreValues />
        <FounderStory />
        <AboutMetrics />
        <WildlifeCommitment />
        <FinalCTA />
      </main>
    </LazyMotion>
  );
}

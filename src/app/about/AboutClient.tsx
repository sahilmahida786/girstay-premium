"use client";

import { AboutHero } from "@/components/about/AboutHero";
import { AboutMetrics } from "@/components/about/AboutMetrics";
import { OurStory } from "@/components/about/OurStory";
import { FounderStory } from "@/components/about/FounderStory";
import { WhyTrustUs } from "@/components/about/WhyTrustUs";
import { CoreValues } from "@/components/about/CoreValues";
import { WildlifeCommitment } from "@/components/about/WildlifeCommitment";
import { LuxuryGallery } from "@/components/about/LuxuryGallery";
import { GuestTestimonials } from "@/components/about/GuestTestimonials";
import { BrandPartners } from "@/components/about/BrandPartners";
import { FinalCTA } from "@/components/about/FinalCTA";

export function AboutClient() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] selection:bg-[#D4AF37]/30 selection:text-white">
      <AboutHero />
      <AboutMetrics />
      <OurStory />
      <FounderStory />
      <WhyTrustUs />
      <CoreValues />
      <WildlifeCommitment />
      <LuxuryGallery />
      <GuestTestimonials />
      <BrandPartners />
      <FinalCTA />
    </main>
  );
}

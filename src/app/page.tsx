"use client";

import { HeroSection } from "@/components/home/HeroSection";
import dynamic from "next/dynamic";

const PopularStays = dynamic(() => import("@/components/home/PopularStays").then(m => ({ default: m.PopularStays })));
const Testimonials = dynamic(() => import("@/components/home/Testimonials").then(m => ({ default: m.Testimonials })));
const CTASection = dynamic(() => import("@/components/home/CTASection").then(m => ({ default: m.CTASection })));

export default function HomePage() {
  return (
    <main className="bg-[#0B0B0B] text-white min-h-screen">
      {/* 
        The HeroSection already ends with a heavy black cinematic gradient 
        so it blends perfectly into this dark #060606 background. 
      */}
      <HeroSection />
      
      {/* 
        PopularStays provides the core booking functionality.
        We ensure it has no harsh borders and blends cleanly. 
      */}
      <PopularStays />
      
      {/* 
        Testimonials is a massive cinematic section with dark overlays.
      */}
      <Testimonials />
      
      {/* 
        CTASection provides the final luxury consultation push.
      */}
      <CTASection />
    </main>
  );
}

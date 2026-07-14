"use client";

import { HeroSection } from "@/components/home/HeroSection";
import { TrustBar } from "@/components/home/TrustBar";
import dynamic from "next/dynamic";

const PopularStays = dynamic(() => import("@/components/home/PopularStays").then(m => ({ default: m.PopularStays })));
const Testimonials = dynamic(() => import("@/components/home/Testimonials").then(m => ({ default: m.Testimonials })));
const CTASection = dynamic(() => import("@/components/home/CTASection").then(m => ({ default: m.CTASection })));

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <PopularStays />
      <Testimonials />
      <CTASection />
    </>
  );
}

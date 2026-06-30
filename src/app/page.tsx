import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedProperties } from "@/components/home/FeaturedProperties";
import dynamic from "next/dynamic";

const PopularStays = dynamic(() => import("@/components/home/PopularStays").then(m => ({ default: m.PopularStays })));
const Testimonials = dynamic(() => import("@/components/home/Testimonials").then(m => ({ default: m.Testimonials })));
const WhyChooseUs = dynamic(() => import("@/components/home/WhyChooseUs").then(m => ({ default: m.WhyChooseUs })));
const SafariInfo = dynamic(() => import("@/components/home/SafariInfo").then(m => ({ default: m.SafariInfo })));
const NearbyAttractions = dynamic(() => import("@/components/home/NearbyAttractions").then(m => ({ default: m.NearbyAttractions })));
const CTASection = dynamic(() => import("@/components/home/CTASection").then(m => ({ default: m.CTASection })));

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProperties />
      <PopularStays />
      <WhyChooseUs />
      <Testimonials />
      <SafariInfo />
      <NearbyAttractions />
      <CTASection />
    </>
  );
}

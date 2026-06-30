import type { Metadata } from "next";
import { ActivitiesHero } from "@/components/activities/ActivitiesHero";
import { ExperienceTimeline } from "@/components/activities/ExperienceTimeline";
import { ActivityGrid } from "@/components/activities/ActivityGrid";
import { ExperiencePackages } from "@/components/activities/ExperiencePackages";
import { GallerySection } from "@/components/activities/GallerySection";
import { ActivityBookingCTA } from "@/components/activities/ActivityBookingCTA";

export const metadata: Metadata = {
  title: "Activities & Experiences | GirStay Premium",
  description:
    "Explore 12+ curated activities at Sasan Gir — jungle safari, pool parties, campfire nights, tribal dance shows, Kathiawadi cuisine, and more. Book your complete Gir experience today.",
  keywords: [
    "Gir activities",
    "Sasan Gir experiences",
    "jungle safari Gir",
    "resort activities Gujarat",
    "Gir pool party",
    "campfire Gir",
    "tribal dance Gir",
    "Kathiawadi food",
    "wildlife experience",
  ],
  openGraph: {
    title: "Activities & Experiences | GirStay Premium",
    description:
      "From sunrise tea to starlit dinners — experience the wild heart of Gir with 12+ curated luxury activities.",
    type: "website",
  },
};

export default function ActivitiesPage() {
  return (
    <main>
      <ActivitiesHero />
      <ExperienceTimeline />
      <ActivityGrid />
      <ExperiencePackages />
      <GallerySection />
      <ActivityBookingCTA />
    </main>
  );
}

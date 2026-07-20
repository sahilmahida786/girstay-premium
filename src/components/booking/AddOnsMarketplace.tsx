"use client";

import React from "react";
import { AddOnCard, ExperienceData } from "./AddOnCard";
import { Shield, Sparkles } from "lucide-react";

export const EXPERIENCES_DATA: ExperienceData[] = [
  {
    id: "bundle_adventure",
    name: "Ultimate Gir Adventure Package",
    description: "Combine our best-selling Safari, Campfire Dinner, and a guided Nature Walk for the complete wilderness experience.",
    price: 8000,
    savings: 1500,
    duration: "2 Days",
    imageUrl: "https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=600&auto=format&fit=crop",
    badge: "Bundle",
    isBundle: true,
  },
  {
    id: "safari_jeep",
    name: "Private Jeep Safari",
    description: "Exclusive morning safari with an expert naturalist tracker. Best chance to spot the Asiatic Lion.",
    price: 4500,
    duration: "3 Hours",
    imageUrl: "https://images.unsplash.com/photo-1615460549969-36fa19521a4f?q=80&w=600&auto=format&fit=crop",
    badge: "Most Popular",
  },
  {
    id: "dinner_candle",
    name: "Wilderness Candlelight Dinner",
    description: "A private 5-course dining experience set under the stars in the safe zone of the resort.",
    price: 3500,
    duration: "2 Hours",
    imageUrl: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=600&auto=format&fit=crop",
    badge: "Limited Slots",
  },
  {
    id: "spa_couples",
    name: "Couples Rejuvenation Spa",
    description: "Traditional Ayurvedic massage therapy overlooking the forest canopy.",
    price: 5000,
    duration: "90 Mins",
    imageUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "village_tour",
    name: "Siddi Village Cultural Tour",
    description: "Experience the unique culture and dance of the local Siddi community.",
    price: 1500,
    duration: "2 Hours",
    imageUrl: "https://images.unsplash.com/photo-1523413555809-0fb1d4eefa4f?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "photography_hide",
    name: "Photography Hide Session",
    description: "Exclusive access to our camouflaged waterhole hide. Professional lenses available for rent.",
    price: 2500,
    duration: "4 Hours",
    imageUrl: "https://images.unsplash.com/photo-1550353127-b0ceca6c9b3a?q=80&w=600&auto=format&fit=crop",
    badge: "Sold Out",
  }
];

interface AddOnsMarketplaceProps {
  selectedIds: string[];
  onToggle: (id: string) => void;
}

export function AddOnsMarketplace({ selectedIds, onToggle }: AddOnsMarketplaceProps) {
  const bundles = EXPERIENCES_DATA.filter((e) => e.isBundle);
  const individual = EXPERIENCES_DATA.filter((e) => !e.isBundle);

  return (
    <div className="space-y-8 sm:space-y-10">
      {/* Trust Header */}
      <div className="flex flex-wrap items-center gap-4 text-xs text-white/50">
        <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-[#D9A94D]" /> Instant Confirmation</span>
        <span className="flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5 text-[#D9A94D]" /> Expert Local Guides</span>
      </div>

      {/* Curated Bundles Section */}
      {bundles.length > 0 && (
        <section>
          <h3 className="luxury-heading text-lg sm:text-xl mb-4 text-[#D9A94D]">Curated Packages</h3>
          {/* Desktop Grid / Mobile Horizontal Scroll */}
          <div className="flex sm:grid sm:grid-cols-2 gap-4 overflow-x-auto sm:overflow-visible pb-4 sm:pb-0 -mx-6 sm:mx-0 px-6 sm:px-0 snap-x snap-mandatory hide-scrollbar">
            {bundles.map((bundle) => (
              <div key={bundle.id} className="min-w-[85vw] sm:min-w-0 snap-center shrink-0">
                <AddOnCard
                  experience={bundle}
                  isSelected={selectedIds.includes(bundle.id)}
                  onToggle={onToggle}
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Individual Experiences Section */}
      <section>
        <h3 className="font-heading font-medium text-lg sm:text-xl mb-4 text-white/90">Individual Experiences</h3>
        <div className="flex sm:grid sm:grid-cols-2 gap-4 overflow-x-auto sm:overflow-visible pb-4 sm:pb-0 -mx-6 sm:mx-0 px-6 sm:px-0 snap-x snap-mandatory hide-scrollbar">
          {individual.map((exp) => (
            <div key={exp.id} className="min-w-[85vw] sm:min-w-0 snap-center shrink-0">
              <AddOnCard
                experience={exp}
                isSelected={selectedIds.includes(exp.id)}
                onToggle={onToggle}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

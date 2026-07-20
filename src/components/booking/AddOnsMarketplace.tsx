"use client";

import React from "react";
import { AddOnCard, ExperienceData } from "./AddOnCard";
import { Shield, Sparkles } from "lucide-react";

import { EXPERIENCES_DATA } from "@/data/mockAddOns";

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

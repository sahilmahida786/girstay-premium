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
    <div className="space-y-10 sm:space-y-12">
      {/* Trust Header */}
      <div className="flex flex-wrap items-center gap-5 text-[11px] sm:text-xs text-white/50 uppercase tracking-widest font-medium">
        <span className="flex items-center gap-2"><Shield className="w-3.5 h-3.5 text-[#D4AF37]" /> Instant Confirmation</span>
        <span className="flex items-center gap-2"><Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" /> Expert Local Guides</span>
      </div>

      {/* Curated Bundles Section */}
      {bundles.length > 0 && (
        <section>
          <div className="mb-6">
            <h3 className="font-heading text-2xl sm:text-3xl font-light text-[#D4AF37] tracking-wide">Curated Packages</h3>
            <p className="text-white/40 text-xs sm:text-sm mt-1.5 font-light">Exclusive collections designed for the ultimate Sasan Gir experience</p>
          </div>
          {/* Desktop Grid / Mobile Stack */}
          <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4 sm:gap-6 pb-4 sm:pb-0">
            {bundles.map((bundle) => (
              <div key={bundle.id}>
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
        <div className="mb-6">
          <h3 className="font-heading text-2xl sm:text-3xl font-light text-white/90 tracking-wide">A La Carte Experiences</h3>
          <p className="text-white/40 text-xs sm:text-sm mt-1.5 font-light">Customize your stay with individual luxury offerings</p>
        </div>
        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4 sm:gap-6 pb-4 sm:pb-0">
          {individual.map((exp) => (
            <div key={exp.id}>
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

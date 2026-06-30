"use client";

import { useRecentlyViewed } from "@/hooks/useRecentlyViewed";
import { PropertyCard } from "./PropertyCard";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useAnimationConfig } from "@/hooks/useAnimationConfig";

export function RecentlyViewed() {
  const { properties } = useRecentlyViewed();
  const [mounted, setMounted] = useState(false);
  const animConfig = useAnimationConfig();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted || properties.length === 0) return null;

  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div {...animConfig} className="mb-8">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-2">
            Recently <span className="gradient-gold-text">Viewed</span>
          </h2>
          <p className="text-muted-foreground text-sm">
            Pick up right where you left off
          </p>
        </motion.div>

        {/* Horizontal scroll container for mobile, grid for desktop */}
        <div className="flex overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pb-6 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory scrollbar-hide">
          {properties.map((property, index) => (
            <div
              key={property.id}
              className="w-[85vw] sm:w-auto shrink-0 snap-center sm:snap-align-none"
            >
              <PropertyCard property={property} index={index} variant="compact" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

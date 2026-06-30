"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PropertyCard } from "@/components/properties/PropertyCard";
import { mockProperties } from "@/data/mockProperties";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all", label: "All Stays" },
  { id: "resort", label: "Resorts" },
  { id: "villa", label: "Luxury Villas" },
  { id: "cottage", label: "Cottages" },
  { id: "farmhouse", label: "Farm Houses" },
  { id: "jungle_stay", label: "Jungle Stays" },
];

export function PopularStays() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? mockProperties
      : mockProperties.filter((p) => p.type === activeCategory);

  return (
    <section className="py-20 sm:py-28 bg-muted/30 relative">
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-emerald-gir/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-3 block">
            Explore by category
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Popular <span className="gradient-gold-text">Stays</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            From luxury villas to rustic jungle lodges — find the perfect stay
            for every kind of traveler.
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2 sm:gap-3 mb-12 overflow-x-auto scrollbar-hide -mx-4 px-4 pb-2 sm:mx-0 sm:px-0 sm:pb-0 sm:flex-wrap sm:justify-center"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap shrink-0 active:scale-95",
                activeCategory === cat.id
                  ? "text-black"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
              )}
            >
              {activeCategory === cat.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 gradient-gold rounded-full shadow-gold"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Properties Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {filtered.map((property, index) => (
              <PropertyCard
                key={property.id}
                property={property}
                index={index}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              No properties found in this category. Check back soon!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

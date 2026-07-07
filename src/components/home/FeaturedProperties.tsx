"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { PropertyCard } from "@/components/properties/PropertyCard";
import { featuredProperties } from "@/data/mockProperties";
import { Button } from "@/components/ui/button";

export function FeaturedProperties() {
  return (
    <section className="py-20 sm:py-28 relative gradient-section-warm">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-3 block">
              Handpicked for you
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold">
              Featured{" "}
              <span className="gradient-gold-text">Properties</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg">
              Discover our most loved and highest-rated stays, curated for
              unforgettable experiences in the wild heart of Gir.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link href="/properties">
              <Button
                variant="outline"
                className="gap-2 group hover:border-primary/50"
              >
                View All Properties
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredProperties.map((property, index) => (
            <PropertyCard
              key={property.id}
              property={property}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { mockActivities } from "@/data/mockActivities";
import { formatPrice, cn } from "@/lib/utils";
import Link from "next/link";

export function ActivityBookingCTA() {
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);

  const bookableActivities = mockActivities.filter((a) => a.price !== null || a.category === "safari" || a.category === "pool" || a.category === "campfire" || a.category === "cultural");

  const toggleActivity = (id: string) => {
    setSelectedActivities((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  const totalPrice = selectedActivities.reduce((sum, id) => {
    const activity = mockActivities.find((a) => a.id === id);
    return sum + (activity?.price || 0);
  }, 0);

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-emerald-gir/5 blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 glass-dark rounded-full px-5 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-sm font-medium">Build Your Dream Experience</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Customize Your{" "}
            <span className="gradient-gold-text">Adventure</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-10">
            Select the activities you love and we&apos;ll create a personalized
            itinerary with the best pricing
          </p>
        </motion.div>

        {/* Activity Selector Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {bookableActivities.map((activity) => (
            <button
              key={activity.id}
              onClick={() => toggleActivity(activity.id)}
              className={cn(
                "flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium border transition-all",
                selectedActivities.includes(activity.id)
                  ? "gradient-gold text-black border-transparent shadow-gold"
                  : "bg-card border-border/50 text-foreground hover:border-primary/30"
              )}
            >
              <span>{activity.icon}</span>
              {activity.shortName}
              {selectedActivities.includes(activity.id) && (
                <Check className="w-4 h-4" />
              )}
            </button>
          ))}
        </motion.div>

        {/* Dynamic Price Preview */}
        {selectedActivities.length > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-6 rounded-2xl glass-card shadow-luxury-lg mb-8 max-w-md mx-auto"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium">
                {selectedActivities.length} activities selected
              </span>
              <div className="text-right">
                <span className="price-number text-2xl font-bold gradient-gold-text">
                  {formatPrice(totalPrice)}
                </span>
                <span className="text-xs text-muted-foreground block">
                  per person
                </span>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {selectedActivities.map((id) => {
                const activity = mockActivities.find((a) => a.id === id);
                return (
                  <span
                    key={id}
                    className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary"
                  >
                    {activity?.icon} {activity?.shortName}
                  </span>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <Link href="/properties">
            <Button className="h-14 px-10 text-base font-bold gradient-gold text-black shadow-gold-lg hover:shadow-gold-lg hover:scale-105 transition-all duration-300 gap-2">
              {selectedActivities.length > 0
                ? `Book ${selectedActivities.length} Activities`
                : "Customize & Book"}
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
          <p className="text-xs text-muted-foreground mt-4">
            Free cancellation up to 48 hours • Instant confirmation
          </p>
        </motion.div>
      </div>
    </section>
  );
}

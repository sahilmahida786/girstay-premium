"use client";

import { motion } from "framer-motion";
import { SafeImage as Image } from "@/components/ui/SafeImage";
import Link from "next/link";
import { Clock, Mountain, Baby, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { mockActivities } from "@/data/mockActivities";
import { formatPrice, cn } from "@/lib/utils";

const difficultyConfig = {
  easy: { label: "Easy", color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/30" },
  moderate: { label: "Moderate", color: "bg-amber-500/10 text-amber-500 border-amber-500/30" },
  adventurous: { label: "Adventurous", color: "bg-red-500/10 text-red-500 border-red-500/30" },
};

export function ActivityGrid() {
  return (
    <section id="experiences" className="py-20 sm:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-3 block">
            Curated Experiences
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Activities &{" "}
            <span className="gradient-gold-text">Adventures</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Choose from our handpicked selection of activities designed for every
            kind of traveler
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockActivities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                href={`/activities/${activity.slug}`}
                className="group block"
              >
                <div className="rounded-2xl overflow-hidden bg-card border border-border/50 hover:shadow-luxury-lg hover:border-primary/20 transition-all duration-500">
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={activity.image}
                      alt={activity.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Time badge */}
                    <div className="absolute top-3 left-3">
                      <Badge className="gradient-gold text-black font-bold text-xs gap-1 shadow-gold">
                        <Clock className="w-3 h-3" />
                        {activity.time}
                      </Badge>
                    </div>

                    {/* Price or Included */}
                    <div className="absolute top-3 right-3">
                      {activity.price ? (
                        <Badge className="bg-card/80 backdrop-blur-sm text-foreground font-bold text-xs border-none">
                          <span className="price-number">
                            {formatPrice(activity.price)}
                          </span>
                        </Badge>
                      ) : (
                        <Badge className="bg-emerald-500/80 text-white text-xs border-none">
                          Included
                        </Badge>
                      )}
                    </div>

                    {/* Activity emoji overlay */}
                    <div className="absolute bottom-3 left-3 text-3xl">
                      {activity.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-heading font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                      {activity.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-4">
                      {activity.description}
                    </p>

                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <Badge
                        variant="outline"
                        className={cn(
                          "text-xs",
                          difficultyConfig[activity.difficulty].color
                        )}
                      >
                        <Mountain className="w-3 h-3 mr-1" />
                        {difficultyConfig[activity.difficulty].label}
                      </Badge>
                      <Badge variant="outline" className="text-xs gap-1">
                        <Clock className="w-3 h-3" />
                        {activity.duration}
                      </Badge>
                      {activity.kidFriendly && (
                        <Badge
                          variant="outline"
                          className="text-xs gap-1 text-emerald-gir border-emerald-gir/30"
                        >
                          <Baby className="w-3 h-3" />
                          Kids
                        </Badge>
                      )}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        Best: {activity.bestTime}
                      </div>
                      <Button
                        size="sm"
                        className="gradient-gold text-black font-semibold text-xs gap-1 shadow-gold h-8 px-4"
                      >
                        Book <ArrowRight className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

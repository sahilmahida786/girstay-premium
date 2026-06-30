"use client";

import { motion } from "framer-motion";
import { SafeImage as Image } from "@/components/ui/SafeImage";
import { MapPin, Clock } from "lucide-react";

const attractions = [
  {
    name: "Gir National Park",
    distance: "0 km (You're here!)",
    duration: "Full day",
    image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=600&h=400&fit=crop",
    description: "Home to the majestic Asiatic Lions and 300+ bird species.",
  },
  {
    name: "Somnath Temple",
    distance: "42 km",
    duration: "Half day trip",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600&h=400&fit=crop",
    description: "One of the 12 Jyotirlingas, a sacred pilgrimage site on the Arabian Sea coast.",
  },
  {
    name: "Diu Island",
    distance: "95 km",
    duration: "Full day trip",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop",
    description: "Portuguese heritage, pristine beaches, and charming coastal town.",
  },
  {
    name: "Junagadh Fort",
    distance: "60 km",
    duration: "Half day trip",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&h=400&fit=crop",
    description: "Historic Uparkot Fort with Buddhist caves and stunning panoramic views.",
  },
];

export function NearbyAttractions() {
  return (
    <section className="py-20 sm:py-28 bg-muted/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-3 block">
            Beyond the Safari
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Nearby <span className="gradient-gold-text">Attractions</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Sasan Gir is surrounded by Gujarat&apos;s most iconic destinations.
            Extend your trip and explore more.
          </p>
        </motion.div>

        {/* Attractions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {attractions.map((attraction, index) => (
            <motion.div
              key={attraction.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border/50 hover:border-primary/30 hover:shadow-luxury transition-all duration-500 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 image-placeholder" />
                <Image
                  src={attraction.image}
                  alt={attraction.name}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110 opacity-0"
                  onLoad={(e) => {
                    (e.target as HTMLImageElement).classList.remove("opacity-0");
                  }}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Distance badge */}
                <div className="absolute bottom-3 left-3">
                  <div className="glass-dark rounded-lg px-3 py-1.5 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-gold" />
                    <span className="text-xs text-white font-medium">
                      {attraction.distance}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-heading font-semibold text-base mb-1 group-hover:text-primary transition-colors">
                  {attraction.name}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                  {attraction.description}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="w-3.5 h-3.5 text-primary" />
                  {attraction.duration}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

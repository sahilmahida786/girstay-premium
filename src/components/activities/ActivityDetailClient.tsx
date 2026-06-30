"use client";

import { useState } from "react";
import { SafeImage as Image } from "@/components/ui/SafeImage";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Clock,
  Mountain,
  Baby,
  Users,
  Calendar,
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  X,
  Star,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import type { Activity } from "@/types/activity";
import { mockActivities } from "@/data/mockActivities";
import { formatPrice } from "@/lib/utils";

const difficultyConfig = {
  easy: { label: "Easy", color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/30" },
  moderate: { label: "Moderate", color: "bg-amber-500/10 text-amber-500 border-amber-500/30" },
  adventurous: { label: "Adventurous", color: "bg-red-500/10 text-red-500 border-red-500/30" },
};

interface Props {
  activity: Activity;
}

export function ActivityDetailClient({ activity }: Props) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);

  const relatedActivities = mockActivities.filter(
    (a) => a.id !== activity.id
  ).slice(0, 4);

  const navigateImage = (dir: number) => {
    setSelectedImageIndex(
      (prev) =>
        (prev + dir + activity.images.length) % activity.images.length
    );
  };

  return (
    <div className="min-h-screen pb-24">
      {/* Hero */}
      <section className="relative h-72 sm:h-96 lg:h-[50vh]">
        <Image
          src={activity.images[0]?.url || activity.image}
          alt={activity.name}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/40 to-black/20" />

        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 z-10">
          <div className="max-w-5xl mx-auto">
            <Link
              href="/activities"
              className="flex items-center gap-1 text-white/70 text-sm hover:text-white mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              All Activities
            </Link>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-4xl">{activity.icon}</span>
              <Badge className="gradient-gold text-black font-bold shadow-gold">
                <Clock className="w-3 h-3 mr-1" />
                {activity.time}
              </Badge>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              {activity.name}
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main */}
          <div className="lg:col-span-2 space-y-8">
            {/* Info Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {[
                { icon: Clock, label: "Duration", value: activity.duration },
                {
                  icon: Mountain,
                  label: "Difficulty",
                  value: difficultyConfig[activity.difficulty].label,
                },
                {
                  icon: Baby,
                  label: "Kids",
                  value: activity.kidFriendly ? "Yes ✓" : "Not recommended",
                },
                {
                  icon: Calendar,
                  label: "Best Time",
                  value: activity.bestTime,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-4 rounded-xl bg-card border border-border/50 text-center"
                >
                  <item.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                  <p className="font-semibold text-sm mt-0.5">{item.value}</p>
                </div>
              ))}
            </motion.div>

            <Separator />

            {/* Description */}
            <div>
              <h2 className="font-heading text-xl font-semibold mb-4">
                About This Experience
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {activity.longDescription}
              </p>
            </div>

            {/* Highlights */}
            <div>
              <h2 className="font-heading text-xl font-semibold mb-4">
                Highlights
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activity.highlights.map((h) => (
                  <div
                    key={h}
                    className="flex items-center gap-3 p-3 rounded-xl bg-muted/50"
                  >
                    <Check className="w-4 h-4 text-emerald-gir shrink-0" />
                    <span className="text-sm">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sub-activities */}
            {activity.subActivities && (
              <>
                <Separator />
                <div>
                  <h2 className="font-heading text-xl font-semibold mb-4">
                    Activities Included
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {activity.subActivities.map((sub) => (
                      <Badge
                        key={sub}
                        variant="outline"
                        className="px-4 py-2 text-sm font-normal gap-2"
                      >
                        <Star className="w-3.5 h-3.5 text-gold" />
                        {sub}
                      </Badge>
                    ))}
                  </div>
                </div>
              </>
            )}

            <Separator />

            {/* Image Gallery */}
            <div>
              <h2 className="font-heading text-xl font-semibold mb-4">
                Gallery
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {activity.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setSelectedImageIndex(i);
                      setShowLightbox(true);
                    }}
                    className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer"
                  >
                    <Image
                      src={img.url}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="33vw"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  </button>
                ))}
              </div>
            </div>

            <Separator />

            {/* Related Activities */}
            <div>
              <h2 className="font-heading text-xl font-semibold mb-6">
                More Activities
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {relatedActivities.map((related) => (
                  <Link
                    key={related.id}
                    href={`/activities/${related.slug}`}
                    className="group"
                  >
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-2">
                      <Image
                        src={related.image}
                        alt={related.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="25vw"
                        loading="lazy"
                      />
                    </div>
                    <p className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-1">
                      {related.icon} {related.shortName}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {related.time}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="p-6 rounded-2xl bg-card border border-border/50 shadow-luxury"
              >
                {/* Price */}
                <div className="mb-6">
                  {activity.price ? (
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="price-number text-3xl font-bold gradient-gold-text">
                          {formatPrice(activity.price)}
                        </span>
                        <span className="text-muted-foreground text-sm">
                          / person
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Inclusive of all taxes
                      </p>
                    </div>
                  ) : (
                    <div>
                      <Badge className="gradient-emerald text-white text-sm px-4 py-1.5">
                        ✓ Included with Stay
                      </Badge>
                      <p className="text-xs text-muted-foreground mt-2">
                        This activity is complimentary for all guests
                      </p>
                    </div>
                  )}
                </div>

                {/* Time */}
                <div className="p-3 rounded-xl bg-muted/50 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="font-medium">Daily at {activity.time}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 ml-6">
                    Duration: {activity.duration}
                  </p>
                </div>

                {/* Meta */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4 text-emerald-gir" />
                    {activity.familyFriendly
                      ? "Family friendly"
                      : "Adults recommended"}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Baby className="w-4 h-4 text-emerald-gir" />
                    {activity.kidFriendly
                      ? "Suitable for children"
                      : "Not recommended for children"}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 text-primary" />
                    Best time: {activity.bestTime}
                  </div>
                </div>

                {/* Book Now */}
                <Button className="w-full h-14 text-base font-bold gradient-gold text-black shadow-gold hover:shadow-gold-lg transition-all duration-300 hover:scale-[1.02] gap-2">
                  {activity.price ? "Book This Activity" : "Book Your Stay"}
                  <ArrowRight className="w-5 h-5" />
                </Button>

                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Shield className="w-3.5 h-3.5 text-emerald-gir" />
                    Free cancellation up to 24 hours
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Shield className="w-3.5 h-3.5 text-emerald-gir" />
                    Instant booking confirmation
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {showLightbox && (
        <div className="fixed inset-0 z-50 lightbox-overlay flex items-center justify-center">
          <button
            onClick={() => setShowLightbox(false)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center hover:scale-110 transition-transform z-10"
          >
            <X className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={() => navigateImage(-1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass flex items-center justify-center hover:scale-110 transition-transform"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={() => navigateImage(1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass flex items-center justify-center hover:scale-110 transition-transform"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
          <div className="relative w-full max-w-5xl h-[70vh] mx-4">
            <Image
              src={activity.images[selectedImageIndex]?.url || ""}
              alt={activity.images[selectedImageIndex]?.alt || ""}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {selectedImageIndex + 1} / {activity.images.length}
          </div>
        </div>
      )}

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden glass-strong border-t border-border/50 px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <div>
            {activity.price ? (
              <>
                <span className="price-number text-xl font-bold gradient-gold-text">
                  {formatPrice(activity.price)}
                </span>
                <span className="text-xs text-muted-foreground ml-1">
                  /person
                </span>
              </>
            ) : (
              <Badge className="gradient-emerald text-white text-xs">
                Included
              </Badge>
            )}
          </div>
          <Button className="gradient-gold text-black font-bold px-8 h-12 shadow-gold gap-2">
            Book Now
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

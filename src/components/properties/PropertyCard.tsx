"use client";

import { SafeImage } from "@/components/ui/SafeImage";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, MapPin, Heart, Wifi, Car, Waves, UtensilsCrossed, Snowflake, ShieldCheck } from "lucide-react";
import { cardHover, tapScale, viewportReveal } from "@/lib/motion";
import { Badge } from "@/components/ui/badge";
import { Property } from "@/types/property";
import { formatPrice, cn } from "@/lib/utils";
import { useState, useEffect } from "react";

const amenityIcons: Record<string, React.ReactNode> = {
  wifi: <Wifi className="w-3.5 h-3.5" />,
  parking: <Car className="w-3.5 h-3.5" />,
  pool: <Waves className="w-3.5 h-3.5" />,
  restaurant: <UtensilsCrossed className="w-3.5 h-3.5" />,
  ac: <Snowflake className="w-3.5 h-3.5" />,
};

const typeLabels: Record<string, string> = {
  resort: "Resort",
  villa: "Luxury Villa",
  cottage: "Cottage",
  farmhouse: "Farm House",
  jungle_stay: "Jungle Stay",
};

interface PropertyCardProps {
  property: Property;
  index?: number;
  variant?: "default" | "featured" | "compact";
}

export function PropertyCard({
  property,
  index = 0,
  variant = "default",
}: PropertyCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const primaryImage =
    property.images.find((img) => img.isPrimary) || property.images[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportReveal}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link href={`/properties/${property.slug}`}>
        <motion.article
          whileHover={cardHover}
          whileTap={tapScale}
          className={cn(
            "group relative rounded-2xl overflow-hidden bg-card border border-border/50",
            "hover:border-primary/30 transition-all duration-300",
            "hover:shadow-luxury-lg",
            variant === "featured" && "lg:flex"
          )}
        >
          {/* Image Section */}
          <div
            className={cn(
              "relative overflow-hidden",
              variant === "featured"
                ? "h-64 sm:h-72 lg:h-auto lg:w-2/5"
                : "h-56 sm:h-64"
            )}
          >
            <SafeImage
              src={primaryImage?.url || ""}
              alt={primaryImage?.alt || property.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="lazy"
              showSkeleton={true}
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Wishlist button */}
            <motion.button
              whileTap={{ scale: 0.8 }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsWishlisted(!isWishlisted);
              }}
              className="absolute top-4 right-4 w-10 h-10 sm:w-9 sm:h-9 rounded-full glass flex items-center justify-center hover:scale-110 transition-all z-10"
              aria-label="Save to wishlist"
            >
              <motion.div
                animate={isWishlisted ? { scale: [1, 1.3, 1] } : { scale: 1 }}
                transition={{ duration: 0.4, type: "spring" }}
              >
                <Heart
                  className={cn(
                    "w-4 h-4 transition-colors",
                    isWishlisted
                      ? "fill-red-500 text-red-500"
                      : "text-white"
                  )}
                />
              </motion.div>
            </motion.button>

            {/* Property type badge */}
            <div className="absolute top-4 left-4 z-10">
              <Badge className="glass text-white border-white/20 text-xs font-medium">
                {typeLabels[property.type]}
              </Badge>
            </div>

            {/* Price tag - bottom of image */}
            <div className="absolute bottom-4 left-4 z-10">
              <div className="glass-dark rounded-lg px-3 py-1.5 inline-flex items-end gap-1">
                <span className="text-xs text-white/60 mb-0.5">from</span>
                <span className="price-number text-lg font-bold text-white">
                  {formatPrice(property.basePrice)}
                </span>
                <span className="text-xs text-white/60 mb-0.5">/night</span>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div
            className={cn(
              "p-5",
              variant === "featured" && "lg:flex-1 lg:p-6 lg:flex lg:flex-col lg:justify-between"
            )}
          >
            {/* Title and rating */}
            <div className="mb-3">
              <div className="flex items-start justify-between gap-2 mb-1.5">
                <h3 className="font-heading text-lg font-semibold line-clamp-1 group-hover:text-primary transition-colors">
                  {property.name}
                </h3>
                <div className="flex items-center gap-1 shrink-0">
                  <Star className="w-4 h-4 text-gold fill-gold" />
                  <span className="text-sm font-semibold">{property.rating}</span>
                  <span className="text-xs text-muted-foreground">
                    ({property.reviewCount})
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                <span>
                  {property.city}, {property.state}
                </span>
              </div>
            </div>

            {/* Description — featured only */}
            {variant === "featured" && (
              <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                {property.shortDescription}
              </p>
            )}

            {/* Genuine trust signal */}
            <div className="text-xs text-emerald-500 font-medium mb-3 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              Free cancellation available
            </div>

            {/* Amenities */}
            <div className="flex items-center gap-3 flex-wrap">
              {property.amenities.slice(0, 5).map(
                (amenity) =>
                  amenityIcons[amenity] && (
                    <div
                      key={amenity}
                      className="flex items-center gap-1.5 text-xs text-muted-foreground"
                      title={amenity}
                    >
                      <span className="text-primary">
                        {amenityIcons[amenity]}
                      </span>
                    </div>
                  )
              )}
              {property.amenities.length > 5 && (
                <span className="text-xs text-muted-foreground">
                  +{property.amenities.length - 5} more
                </span>
              )}
            </div>

            {/* Highlights */}
            {variant === "featured" && property.highlights.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-3">
                {property.highlights.slice(0, 3).map((highlight) => (
                  <Badge
                    key={highlight}
                    variant="secondary"
                    className="text-xs font-normal"
                  >
                    {highlight}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </motion.article>
      </Link>
    </motion.div>
  );
}

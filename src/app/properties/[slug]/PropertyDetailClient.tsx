"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { SafeImage as Image } from "@/components/ui/SafeImage";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Star,
  MapPin,
  Heart,
  Share2,
  ChevronLeft,
  ChevronRight,
  X,
  Check,
  Users,
  Bed,
  ArrowRight,
  Shield,
  Calendar,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Property } from "@/types/property";
import { formatPrice, cn } from "@/lib/utils";
import { mockReviews } from "@/data/mockReviews";
import { CONTACT_INFO } from "@/lib/constants";
import { useRecentlyViewed } from "@/hooks/useRecentlyViewed";

interface Props {
  property: Property;
}

export function PropertyDetailClient({ property }: Props) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { addProperty } = useRecentlyViewed();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    addProperty(property);
  }, [property, addProperty]);

  // Embla Carousel setup for mobile
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedImageIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedImageIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const navigateImage = useCallback((dir: number) => {
    setSelectedImageIndex((prev) =>
      (prev + dir + property.images.length) % property.images.length
    );
  }, [property.images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!showLightbox) return;
      if (e.key === "Escape") setShowLightbox(false);
      if (e.key === "ArrowLeft") navigateImage(-1);
      if (e.key === "ArrowRight") navigateImage(1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showLightbox, navigateImage]);

  if (!property) return null;

  return (
    <div className="min-h-screen pb-24">
      {/* ═══ Image Gallery ═══ */}
      <section className="relative">
        {/* Desktop: Grid Gallery */}
        <div className="hidden md:grid grid-cols-4 grid-rows-2 gap-4 max-h-[520px] rounded-3xl overflow-hidden">
          {/* Main large image */}
          <div
            className="col-span-2 row-span-2 relative cursor-pointer group aspect-[4/3] md:aspect-auto"
            onClick={() => {
              setSelectedImageIndex(0);
              setShowLightbox(true);
            }}
          >
            <Image
              src={property.images[0]?.url || ""}
              alt={property.images[0]?.alt || property.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="50vw"
              priority
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
          </div>

          {/* Smaller images */}
          {property.images.slice(1, 5).map((img, i) => (
            <div
              key={img.id}
              className="relative cursor-pointer group aspect-[4/3]"
              onClick={() => {
                setSelectedImageIndex(i + 1);
                setShowLightbox(true);
              }}
            >
              <Image
                src={img.url}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              {i === 3 && property.images.length > 5 && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <span className="text-white font-heading text-xl font-bold">
                    +{property.images.length - 5} more
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile: Swipeable carousel */}
        <div className="md:hidden relative h-72 sm:h-80 bg-black/5" ref={emblaRef}>
          <div className="flex h-full touch-pan-y">
            {property.images.map((img, i) => (
              <div key={img.id} className="relative flex-[0_0_100%] h-full">
                <Image
                  src={img.url}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

          {/* Navigation arrows */}
          <button
            onClick={scrollPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full glass flex items-center justify-center z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-4 h-4 text-white" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full glass flex items-center justify-center z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-4 h-4 text-white" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {property.images.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={cn(
                  "h-1.5 rounded-full transition-all",
                  i === selectedImageIndex
                    ? "w-6 bg-white"
                    : "w-1.5 bg-white/50"
                )}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Lightbox ═══ */}
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
              src={property.images[selectedImageIndex]?.url || ""}
              alt={property.images[selectedImageIndex]?.alt || ""}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {selectedImageIndex + 1} / {property.images.length}
          </div>
        </div>
      )}

      {/* ═══ Content ═══ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-6 sm:mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left: Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <nav className="flex items-center text-xs text-muted-foreground mb-4 gap-2">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <span>/</span>
                    <Link href="/properties" className="hover:text-primary transition-colors">Properties</Link>
                    <span>/</span>
                    <span className="text-foreground">{property.name}</span>
                  </nav>
                  <Badge className="mb-3 gradient-gold text-black">
                    {property.type === "resort"
                      ? "Luxury Resort"
                      : property.type === "villa"
                      ? "Premium Villa"
                      : property.type === "cottage"
                      ? "Cozy Cottage"
                      : property.type === "farmhouse"
                      ? "Heritage Farmhouse"
                      : "Jungle Experience"}
                  </Badge>
                  <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
                    {property.name}
                  </h1>
                  <div className="flex items-center gap-4 flex-wrap text-sm">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">
                        {property.address}, {property.city}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-gold fill-gold" />
                      <span className="font-semibold">{property.rating}</span>
                      <span className="text-muted-foreground">
                        ({property.reviewCount} reviews)
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className="w-10 h-10 rounded-full glass flex items-center justify-center hover:shadow-gold transition-all"
                    aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                  >
                    <Heart
                      className={cn(
                        "w-5 h-5",
                        isWishlisted
                          ? "fill-red-500 text-red-500"
                          : "text-foreground"
                      )}
                    />
                  </button>
                  <button 
                    className="w-10 h-10 rounded-full glass flex items-center justify-center hover:shadow-gold transition-all"
                    aria-label="Share property"
                  >
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>

            <Separator />

            {/* Highlights */}
            <div>
              <h2 className="font-heading text-xl font-semibold mb-4">
                Property Highlights
              </h2>
              <div className="flex flex-wrap gap-2">
                {property.highlights.map((h) => (
                  <Badge
                    key={h}
                    variant="outline"
                    className="px-4 py-2 text-sm font-normal gap-2"
                  >
                    <Check className="w-3.5 h-3.5 text-emerald-gir" />
                    {h}
                  </Badge>
                ))}
              </div>
            </div>

            <Separator />

            {/* Description */}
            <div>
              <h2 className="font-heading text-xl font-semibold mb-4">
                About This Property
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {property.description}
              </p>
            </div>

            <Separator />

            {/* Room Categories */}
            <div>
              <h2 className="font-heading text-xl font-semibold mb-6">
                Room Categories
              </h2>
              <div className="space-y-4">
                {property.rooms.map((room) => (
                  <motion.div
                    key={room.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={cn(
                      "flex flex-col sm:flex-row gap-4 p-4 rounded-2xl border transition-all duration-300 cursor-pointer",
                      selectedRoom === room.id
                        ? "border-primary bg-primary/5 shadow-gold"
                        : "border-border/50 hover:border-primary/30"
                    )}
                    onClick={() => setSelectedRoom(room.id)}
                  >
                    {/* Room Image */}
                    <div className="relative w-full sm:w-48 h-36 sm:h-32 rounded-xl overflow-hidden shrink-0">
                      <Image
                        src={room.images[0]?.url || ""}
                        alt={room.images[0]?.alt || room.name}
                        fill
                        className="object-cover"
                        sizes="200px"
                      />
                    </div>

                    {/* Room Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="font-heading font-semibold text-base">
                            {room.name}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                            {room.description}
                          </p>
                        </div>
                        <div className="text-right shrink-0">
                          <div className="price-number text-lg font-bold text-primary">
                            {formatPrice(room.basePrice)}
                          </div>
                          <span className="text-xs text-muted-foreground">
                            /night
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Users className="w-3.5 h-3.5" />
                          Up to {room.capacity} guests
                        </div>
                        <div className="flex items-center gap-1">
                          <Bed className="w-3.5 h-3.5" />
                          {room.type}
                        </div>
                        <Badge
                          variant={
                            room.availableCount > 2
                              ? "default"
                              : "destructive"
                          }
                          className="text-xs"
                        >
                          {room.availableCount > 0
                            ? `${room.availableCount} left`
                            : "Sold out"}
                        </Badge>
                      </div>

                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {room.amenities.slice(0, 4).map((a) => (
                          <span
                            key={a}
                            className="text-xs bg-muted px-2 py-0.5 rounded-md"
                          >
                            {a}
                          </span>
                        ))}
                        {room.amenities.length > 4 && (
                          <span className="text-xs text-primary">
                            +{room.amenities.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <Separator />

            {/* Amenities */}
            <div>
              <h2 className="font-heading text-xl font-semibold mb-4">
                Amenities & Facilities
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {property.amenities.map((amenity) => (
                  <div
                    key={amenity}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <Check className="w-4 h-4 text-emerald-gir shrink-0" />
                    <span className="capitalize">
                      {amenity.replace(/_/g, " ")}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            {/* Policies */}
            <div>
              <h2 className="font-heading text-xl font-semibold mb-4">
                Property Policies
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="glass-card rounded-xl p-4">
                  <h4 className="font-medium text-sm mb-2">Check-in</h4>
                  <p className="text-sm text-muted-foreground">
                    {property.policies.checkIn}
                  </p>
                </div>
                <div className="glass-card rounded-xl p-4">
                  <h4 className="font-medium text-sm mb-2">Check-out</h4>
                  <p className="text-sm text-muted-foreground">
                    {property.policies.checkOut}
                  </p>
                </div>
                <div className="glass-card rounded-xl p-4 sm:col-span-2">
                  <h4 className="font-medium text-sm mb-2">
                    Cancellation Policy
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {property.policies.cancellation}
                  </p>
                </div>
              </div>
              {property.policies.houseRules.length > 0 && (
                <div className="mt-4">
                  <h4 className="font-medium text-sm mb-2">House Rules</h4>
                  <ul className="space-y-1.5">
                    {property.policies.houseRules.map((rule) => (
                      <li
                        key={rule}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <span className="w-1 h-1 rounded-full bg-primary" />
                        {rule}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <Separator />

            {/* Location Map */}
            <div>
              <h2 className="font-heading text-xl font-semibold mb-4">Location</h2>
              <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden bg-muted group">
                <Image
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&h=600&fit=crop"
                  alt="Map view of property"
                  fill
                  className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center animate-pulse">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg">
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="mt-3 glass-dark px-4 py-2 rounded-full text-sm font-medium shadow-luxury">
                    {property.address}, {property.city}
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Reviews */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-heading text-xl font-semibold">
                  Guest Reviews
                </h2>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 text-gold fill-gold" />
                    <span className="text-lg font-bold">{property.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({property.reviewCount} reviews)
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                {mockReviews.slice(0, 3).map((review) => (
                  <div
                    key={review.id}
                    className="p-5 rounded-2xl bg-muted/50 border border-border/30"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full gradient-gold flex items-center justify-center text-black font-bold text-sm">
                          {review.userName
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div>
                          <p className="font-medium text-sm">
                            {review.userName}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {new Date(review.createdAt).toLocaleDateString(
                              "en-IN",
                              { month: "short", year: "numeric" }
                            )}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-3.5 h-3.5 text-gold fill-gold"
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {review.comment}
                    </p>
                    {review.isVerified && (
                      <Badge
                        variant="outline"
                        className="mt-3 text-xs gap-1"
                      >
                        <Shield className="w-3 h-3 text-emerald-gir" />
                        Verified Guest
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            {property.faq.length > 0 && (
              <>
                <Separator />
                <div>
                  <h2 className="font-heading text-xl font-semibold mb-4">
                    Frequently Asked Questions
                  </h2>
                  <Accordion className="w-full">
                    {property.faq.map((faq, i) => (
                      <AccordionItem key={i} value={`faq-${i}`}>
                        <AccordionTrigger className="text-sm text-left font-medium">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-sm text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </>
            )}
          </div>

          {/* Right: Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Booking Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="p-6 rounded-2xl bg-card border border-border/50 shadow-luxury"
              >
                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="price-number text-3xl font-bold gradient-gold-text">
                      {formatPrice(property.basePrice)}
                    </span>
                    <span className="text-muted-foreground text-sm">
                      / night
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Inclusive of all taxes
                  </p>
                </div>

                {/* Date inputs */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1 block">
                      Check In
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <input
                        type="date"
                        className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl border border-border bg-background"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1 block">
                      Check Out
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <input
                        type="date"
                        className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl border border-border bg-background"
                      />
                    </div>
                  </div>
                </div>

                {/* Guests */}
                <div className="mb-6">
                  <label className="text-xs font-medium text-muted-foreground mb-1 block">
                    Guests
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <select className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl border border-border bg-background appearance-none">
                      {[1, 2, 3, 4, 5, 6].map((n) => (
                        <option key={n} value={n}>
                          {n} {n === 1 ? "Guest" : "Guests"}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Selected room info */}
                {selectedRoom && (
                  <div className="mb-4 p-3 rounded-xl bg-primary/5 border border-primary/20">
                    <p className="text-xs text-primary font-medium">
                      Selected Room
                    </p>
                    <p className="text-sm font-semibold mt-0.5">
                      {property.rooms.find((r) => r.id === selectedRoom)?.name}
                    </p>
                  </div>
                )}

                {/* Genuine Trust Signal */}
                {mounted && (
                  <div className="mb-4 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-medium text-emerald-500 bg-emerald-500/10 px-3 py-2 rounded-lg">
                      <Shield className="w-4 h-4" />
                      Free cancellation & Book without credit card
                    </div>
                  </div>
                )}

                {/* Book Now */}
                <Link href={`/booking/${property.id}`}>
                  <Button className="w-full h-14 text-base font-bold gradient-gold text-black shadow-gold hover:shadow-gold-lg transition-all duration-300 hover:scale-[1.02] gap-2">
                    Book Now
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>

                {/* Payment info */}
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Shield className="w-3.5 h-3.5 text-emerald-gir" />
                    Pay only 50% to confirm • Rest at check-in
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Shield className="w-3.5 h-3.5 text-emerald-gir" />
                    Free cancellation up to 48 hours
                  </div>
                </div>
              </motion.div>

              {/* Contact Card */}
              <div className="p-5 rounded-2xl glass-card">
                <p className="text-sm font-medium mb-3">Need help booking?</p>
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  <Phone className="w-4 h-4" />
                  {CONTACT_INFO.phone}
                </a>
                <p className="text-xs text-muted-foreground mt-2">
                  Available 24/7 for assistance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ Mobile Sticky CTA ═══ */}
      <div className="fixed bottom-[76px] left-0 right-0 z-40 lg:hidden glass-strong border-t border-x border-border/50 rounded-t-2xl px-4 py-3 pb-safe-offset shadow-[0_-8px_30px_-15px_rgba(0,0,0,0.5)]">
        <div className="flex items-center justify-between gap-4">
          <div>
            <span className="price-number text-xl font-bold gradient-gold-text">
              {formatPrice(property.basePrice)}
            </span>
            <span className="text-xs text-muted-foreground ml-1">/night</span>
          </div>
          <Link href={`/booking/${property.id}`}>
            <Button className="gradient-gold text-black font-bold px-8 h-12 shadow-gold gap-2 rounded-xl">
              Book Now
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

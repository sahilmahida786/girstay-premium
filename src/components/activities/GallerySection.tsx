"use client";

import { useState, useMemo } from "react";
import { SafeImage as Image } from "@/components/ui/SafeImage";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize,
  Search,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  galleryImages,
  galleryCategories,
} from "@/data/mockActivities";
import type { GalleryCategory } from "@/types/activity";
import { cn } from "@/lib/utils";

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<
    GalleryCategory | "all"
  >("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = useMemo(() => {
    let images = galleryImages;
    if (activeCategory !== "all") {
      images = images.filter((img) => img.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      images = images.filter(
        (img) =>
          img.alt.toLowerCase().includes(q) ||
          img.category.toLowerCase().includes(q)
      );
    }
    return images;
  }, [activeCategory, searchQuery]);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const navigateLightbox = (dir: number) => {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      (lightboxIndex + dir + filteredImages.length) % filteredImages.length
    );
  };

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: galleryImages.length };
    galleryCategories.forEach((cat) => {
      counts[cat.id] = galleryImages.filter(
        (img) => img.category === cat.id
      ).length;
    });
    return counts;
  }, []);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-3 block">
            Visual Stories
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Resort{" "}
            <span className="gradient-gold-text">Gallery</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A glimpse into the luxury, nature, and experiences that await you
          </p>
        </motion.div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search gallery..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-11 rounded-xl"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="mb-10 overflow-x-auto scrollbar-hide -mx-4 px-4">
          <div className="flex gap-2 min-w-max pb-2" role="tablist" aria-label="Gallery Categories">
            <button
              role="tab"
              aria-selected={activeCategory === "all"}
              onClick={() => setActiveCategory("all")}
              className={cn(
                "flex items-center gap-2 px-4 min-h-[44px] rounded-full text-sm font-medium transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                activeCategory === "all"
                  ? "gradient-gold text-black shadow-gold"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              )}
            >
              🎬 All
              <span className="text-xs opacity-70">
                ({categoryCounts["all"]})
              </span>
            </button>
            {galleryCategories.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={activeCategory === cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "flex items-center gap-2 px-4 min-h-[44px] rounded-full text-sm font-medium transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                  activeCategory === cat.id
                    ? "gradient-gold text-black shadow-gold"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                )}
              >
                {cat.icon} {cat.label}
                <span className="text-xs opacity-70">
                  ({categoryCounts[cat.id] || 0})
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="masonry-grid">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                layoutId={`gallery-item-${image.id}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <button
                  onClick={() => openLightbox(index)}
                  className="relative group w-full rounded-xl overflow-hidden cursor-pointer block"
                  style={{
                    aspectRatio: `${image.width}/${image.height}`,
                  }}
                >
                  <Image
                    src={image.url}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                      <Maximize className="w-6 h-6 text-white mx-auto mb-2" />
                      <p className="text-white text-sm font-medium px-4 line-clamp-2">
                        {image.alt}
                      </p>
                    </div>
                  </div>

                  {/* Video indicator */}
                  {image.isVideo && (
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full gradient-gold flex items-center justify-center shadow-gold">
                      <span className="text-black text-xs">▶</span>
                    </div>
                  )}
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">
              No images found for your search
            </p>
          </div>
        )}
      </div>

      {/* ═══ Lightbox ═══ */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 lightbox-overlay flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center hover:scale-110 transition-transform z-10"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Previous */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox(-1);
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass flex items-center justify-center hover:scale-110 transition-transform"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            {/* Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox(1);
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass flex items-center justify-center hover:scale-110 transition-transform"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Image */}
            <motion.div
              layoutId={`gallery-item-${filteredImages[lightboxIndex].id}`}
              className="relative w-full max-w-5xl h-[75vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filteredImages[lightboxIndex].url}
                alt={filteredImages[lightboxIndex].alt}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </motion.div>

            {/* Caption */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
              <p className="text-white/80 text-sm font-medium mb-1">
                {filteredImages[lightboxIndex].alt}
              </p>
              <p className="text-white/40 text-xs">
                {lightboxIndex + 1} / {filteredImages.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

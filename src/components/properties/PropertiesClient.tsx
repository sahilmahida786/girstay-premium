"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, X, ChevronDown, Map, List } from "lucide-react";
import { PropertyCard } from "@/components/properties/PropertyCard";
import { SafeImage as Image } from "@/components/ui/SafeImage";
import { RecentlyViewed } from "@/components/properties/RecentlyViewed";
import { mockProperties } from "@/data/mockProperties";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const propertyTypes = [
  { value: "all", label: "All Types" },
  { value: "resort", label: "Resorts" },
  { value: "villa", label: "Villas" },
  { value: "cottage", label: "Cottages" },
  { value: "farmhouse", label: "Farm Houses" },
  { value: "jungle_stay", label: "Jungle Stays" },
] as const;

const sortOptions = [
  { value: "popularity", label: "Most Popular" },
  { value: "price_asc", label: "Price: Low to High" },
  { value: "price_desc", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
] as const;

const priceRanges = [
  { value: "all", label: "Any Price" },
  { value: "0-5000", label: "Under ₹5,000" },
  { value: "5000-10000", label: "₹5,000 - ₹10,000" },
  { value: "10000-20000", label: "₹10,000 - ₹20,000" },
  { value: "20000-999999", label: "₹20,000+" },
] as const;

export default function PropertiesClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedSort, setSelectedSort] = useState("popularity");
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [isMapView, setIsMapView] = useState(false);

  const filteredProperties = useMemo(() => {
    let results = [...mockProperties];

    // Filter by search
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      results = results.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.city.toLowerCase().includes(q)
      );
    }

    // Filter by type
    if (selectedType !== "all") {
      results = results.filter((p) => p.type === selectedType);
    }

    // Filter by price
    if (selectedPrice !== "all") {
      const [min, max] = selectedPrice.split("-").map(Number);
      results = results.filter(
        (p) => p.basePrice >= min && p.basePrice <= max
      );
    }

    // Sort
    switch (selectedSort) {
      case "price_asc":
        results.sort((a, b) => a.basePrice - b.basePrice);
        break;
      case "price_desc":
        results.sort((a, b) => b.basePrice - a.basePrice);
        break;
      case "rating":
        results.sort((a, b) => b.rating - a.rating);
        break;
      default:
        results.sort((a, b) => b.reviewCount - a.reviewCount);
    }

    return results;
  }, [searchQuery, selectedType, selectedSort, selectedPrice]);

  const activeFiltersCount = [
    selectedType !== "all",
    selectedPrice !== "all",
    searchQuery.length > 0,
  ].filter(Boolean).length;

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-30" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-3 block">
              Discover Your Perfect Stay
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Premium <span className="gradient-gold-text">Properties</span> in
              Sasan Gir
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8">
              Browse our curated collection of luxury resorts, villas, cottages,
              and jungle lodges in the heart of Gir forest.
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search properties, locations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 h-14 text-base rounded-full bg-card/80 backdrop-blur border-border/50 shadow-luxury"
                aria-label="Search properties"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-muted flex items-center justify-center hover:bg-muted-foreground/20"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recently Viewed Strip */}
      <RecentlyViewed />

      {/* Filters & Results */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
        {/* Filter Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          {/* H1 Fix: horizontal scrolling filter pills with fade mask for visual cue */}
          <div className="relative w-full sm:w-auto">
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide -mx-4 px-4 pb-2 sm:mx-0 sm:px-0 sm:pb-0 sm:flex-wrap">
              {propertyTypes.map((type) => (
                <button
                  key={type.value}
                  onClick={() => setSelectedType(type.value)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap shrink-0 active:scale-95",
                    selectedType === type.value
                      ? "gradient-gold text-black shadow-gold"
                      : "bg-muted text-muted-foreground hover:text-foreground hover:bg-accent"
                  )}
                  aria-label={`Filter by ${type.label}`}
                >
                  {type.label}
                </button>
              ))}
            </div>
            {/* Visual cue for scrollable area on mobile */}
            <div className="absolute right-0 top-0 bottom-2 w-12 bg-gradient-to-l from-background to-transparent pointer-events-none sm:hidden" />
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {/* Sort dropdown */}
            <div className="relative">
              <select
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value)}
                className="appearance-none pl-4 pr-8 py-2 rounded-full text-sm bg-muted border-0 cursor-pointer"
                aria-label="Sort properties"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-muted-foreground" />
            </div>

            {/* More filters toggle */}
            <Button
              variant="outline"
              size="sm"
              className="gap-2 rounded-full"
              onClick={() => setShowFilters(!showFilters)}
              aria-expanded={showFilters}
              aria-label="Toggle filters panel"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              {activeFiltersCount > 0 && (
                <Badge className="gradient-gold text-black text-xs px-1.5 py-0 h-5 min-w-5 justify-center">
                  {activeFiltersCount}
                </Badge>
              )}
            </Button>

            {/* Map / List Toggle */}
            <div className="flex items-center bg-muted rounded-full p-1 ml-2">
              <button
                onClick={() => setIsMapView(false)}
                className={cn(
                  "p-1.5 rounded-full transition-colors flex items-center justify-center",
                  !isMapView ? "bg-background shadow text-foreground" : "text-muted-foreground hover:text-foreground"
                )}
                aria-label="List View"
              >
                <List className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsMapView(true)}
                className={cn(
                  "p-1.5 rounded-full transition-colors flex items-center justify-center",
                  isMapView ? "bg-background shadow text-foreground" : "text-muted-foreground hover:text-foreground"
                )}
                aria-label="Map View"
              >
                <Map className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Expanded Filters */}
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-8 p-6 rounded-2xl bg-card border border-border/50"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Price Range */}
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Price Range
                </label>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range.value}
                      onClick={() => setSelectedPrice(range.value)}
                      className={cn(
                        "w-full text-left px-3 py-2 rounded-lg text-sm transition-colors",
                        selectedPrice === range.value
                          ? "bg-primary/10 text-primary font-medium"
                          : "text-muted-foreground hover:bg-muted"
                      )}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Clear filters */}
            {activeFiltersCount > 0 && (
              <div className="mt-4 pt-4 border-t border-border/50">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setSelectedType("all");
                    setSelectedPrice("all");
                    setSearchQuery("");
                  }}
                  className="text-sm text-muted-foreground"
                >
                  Clear all filters
                </Button>
              </div>
            )}
          </motion.div>
        )}

        {/* Results count */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground">
            Showing{" "}
            <span className="font-semibold text-foreground">
              {filteredProperties.length}
            </span>{" "}
            {filteredProperties.length === 1 ? "property" : "properties"}
            {selectedType !== "all" && (
              <span>
                {" "}
                in{" "}
                <span className="text-primary font-medium">
                  {propertyTypes.find((t) => t.value === selectedType)?.label}
                </span>
              </span>
            )}
          </p>
        </div>

        {/* Properties View */}
        {filteredProperties.length > 0 ? (
          isMapView ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full h-[600px] rounded-3xl overflow-hidden relative glass border border-border/50 group"
            >
              <Image
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1600&h=900&fit=crop"
                alt="Gir Forest Area Map"
                fill
                className="object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-700"
              />
              <div className="absolute inset-0 bg-black/40 pointer-events-none" />
              
              {/* Coming soon overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <div className="glass-card p-6 rounded-2xl text-center max-w-md border border-white/10 shadow-luxury">
                  <Map className="w-10 h-10 text-gold mx-auto mb-4 opacity-80" />
                  <h3 className="font-heading text-2xl font-bold mb-2">Interactive Map</h3>
                  <p className="text-muted-foreground text-sm">
                    Premium map view is currently being integrated with live safari gate proximity data.
                  </p>
                  <Button variant="outline" className="mt-6 border-white/20 hover:bg-white/5 pointer-events-auto" onClick={() => setIsMapView(false)}>
                    Return to List View
                  </Button>
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredProperties.map((property, index) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  index={index}
                />
              ))}
            </div>
          )
        ) : (
          <div className="text-center py-20">
            <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
              <Search className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="font-heading text-xl font-semibold mb-2">
              No properties found
            </h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your filters or search query to find what
              you&apos;re looking for.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSelectedType("all");
                setSelectedPrice("all");
                setSearchQuery("");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </section>
    </div>
  );
}

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Search, CalendarDays, Users, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  checkIn: string;
  setCheckIn: (val: string) => void;
  checkOut: string;
  setCheckOut: (val: string) => void;
  guests: string;
  setGuests: (val: string) => void;
  propertyType: string;
  setPropertyType: (val: string) => void;
  onSearch: () => void;
  dateError: string | null;
}

export function SearchModal({
  isOpen,
  onClose,
  checkIn,
  setCheckIn,
  checkOut,
  setCheckOut,
  guests,
  setGuests,
  propertyType,
  setPropertyType,
  onSearch,
  dateError,
}: SearchModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed inset-0 z-[100] bg-background lg:hidden flex flex-col"
        >
          {/* Header */}
          <div className="px-4 py-4 border-b border-border/50 flex items-center justify-between glass-strong">
            <h2 className="font-heading font-bold text-xl">Search Stays</h2>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 active:scale-95 transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form Content */}
          <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
            <div className="space-y-4">
              {/* Check-in */}
              <div className="glass-card rounded-2xl p-4">
                <label className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground mb-3 font-medium">
                  <CalendarDays className="w-4 h-4 text-gold" />
                  Check In
                </label>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full bg-transparent text-lg outline-none [color-scheme:dark]"
                  placeholder="Select date"
                  min={new Date().toISOString().split("T")[0]}
                />
              </div>

              {/* Check-out */}
              <div className="glass-card rounded-2xl p-4">
                <label className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground mb-3 font-medium">
                  <CalendarDays className="w-4 h-4 text-gold" />
                  Check Out
                </label>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full bg-transparent text-lg outline-none [color-scheme:dark]"
                  placeholder="Select date"
                  min={checkIn || new Date().toISOString().split("T")[0]}
                />
                {dateError && (
                  <p className="text-red-500 text-xs mt-2 font-medium">{dateError}</p>
                )}
              </div>

              {/* Guests */}
              <div className="glass-card rounded-2xl p-4">
                <label className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground mb-3 font-medium">
                  <Users className="w-4 h-4 text-gold" />
                  Guests
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full bg-transparent text-lg outline-none appearance-none"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={n} className="bg-background">
                      {n} {n === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                </select>
              </div>

              {/* Property Type */}
              <div className="glass-card rounded-2xl p-4">
                <label className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground mb-3 font-medium">
                  <Building2 className="w-4 h-4 text-gold" />
                  Type
                </label>
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full bg-transparent text-lg outline-none appearance-none"
                >
                  <option value="all" className="bg-background">All Types</option>
                  <option value="resort" className="bg-background">Resort</option>
                  <option value="villa" className="bg-background">Villa</option>
                  <option value="cottage" className="bg-background">Cottage</option>
                  <option value="farmhouse" className="bg-background">Farm House</option>
                  <option value="jungle_stay" className="bg-background">Jungle Stay</option>
                </select>
              </div>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="p-4 border-t border-border/50 glass-strong pb-safe-offset">
            <Button
              onClick={onSearch}
              className="w-full gradient-gold text-black font-bold h-14 rounded-2xl text-lg shadow-gold"
            >
              <Search className="w-5 h-5 mr-2" />
              Search Properties
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

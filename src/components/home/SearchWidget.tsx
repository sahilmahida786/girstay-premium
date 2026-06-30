"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CalendarDays, Users, Search, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SearchModal } from "./SearchModal";

export function SearchWidget() {
  const router = useRouter();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [propertyType, setPropertyType] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dateError, setDateError] = useState<string | null>(null);

  const handleSearch = () => {
    // Validation
    if (checkIn && checkOut) {
      if (new Date(checkOut) <= new Date(checkIn)) {
        setDateError("Check-out must be after check-in");
        return;
      }
    }
    setDateError(null);
    setIsModalOpen(false);

    const params = new URLSearchParams();
    if (checkIn) params.set("checkIn", checkIn);
    if (checkOut) params.set("checkOut", checkOut);
    if (guests) params.set("guests", guests);
    if (propertyType !== "all") params.set("type", propertyType);
    router.push(`/properties?${params.toString()}`);
  };

  const getTodayStr = () => new Date().toISOString().split("T")[0];

  return (
    <>
      <div className="w-full max-w-4xl mx-auto">
        {/* Mobile View: Single Button */}
        <div className="block sm:hidden px-4">
          <Button
            onClick={() => setIsModalOpen(true)}
            className="w-full gradient-gold text-black font-bold h-14 rounded-full text-base shadow-gold-lg gap-2 active:scale-[0.97] transition-transform"
          >
            <Search className="w-5 h-5" />
            Search Gir Stays
          </Button>
        </div>

        {/* Desktop View: Full Widget */}
        <div className="hidden sm:block glass-strong rounded-full p-2 shadow-luxury-lg">
          <div className="flex items-center">
            {/* Check-in */}
            <div className="flex-1 px-5 py-3 border-r border-white/10 group">
              <label className="block text-[10px] uppercase tracking-wider text-white/50 mb-1 font-medium">
                Check In
              </label>
              <div className="flex items-center gap-2">
                <CalendarDays className="w-4 h-4 text-gold shrink-0" />
                <input
                  type="date"
                  value={checkIn}
                  min={getTodayStr()}
                  onChange={(e) => {
                    setCheckIn(e.target.value);
                    setDateError(null);
                  }}
                  className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/40 [color-scheme:dark] cursor-pointer"
                  placeholder="Select date"
                />
              </div>
            </div>

            {/* Check-out */}
            <div className="flex-1 px-5 py-3 border-r border-white/10 relative">
              <label className="block text-[10px] uppercase tracking-wider text-white/50 mb-1 font-medium">
                Check Out
              </label>
              <div className="flex items-center gap-2">
                <CalendarDays className="w-4 h-4 text-gold shrink-0" />
                <input
                  type="date"
                  value={checkOut}
                  min={checkIn || getTodayStr()}
                  onChange={(e) => {
                    setCheckOut(e.target.value);
                    setDateError(null);
                  }}
                  className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/40 [color-scheme:dark] cursor-pointer"
                  placeholder="Select date"
                />
              </div>
              {dateError && (
                <div className="absolute top-full left-0 mt-2 whitespace-nowrap text-xs text-red-500 bg-black/80 px-2 py-1 rounded">
                  {dateError}
                </div>
              )}
            </div>

            {/* Guests */}
            <div className="flex-1 px-5 py-3 border-r border-white/10">
              <label className="block text-[10px] uppercase tracking-wider text-white/50 mb-1 font-medium">
                Guests
              </label>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-gold shrink-0" />
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full bg-transparent text-sm text-white outline-none appearance-none cursor-pointer"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={n} className="bg-gray-900 text-white">
                      {n} {n === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Property Type */}
            <div className="flex-1 px-5 py-3 border-r border-white/10">
              <label className="block text-[10px] uppercase tracking-wider text-white/50 mb-1 font-medium">
                Type
              </label>
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-gold shrink-0" />
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full bg-transparent text-sm text-white outline-none appearance-none cursor-pointer"
                >
                  <option value="all" className="bg-gray-900">All Types</option>
                  <option value="resort" className="bg-gray-900">Resort</option>
                  <option value="villa" className="bg-gray-900">Villa</option>
                  <option value="cottage" className="bg-gray-900">Cottage</option>
                  <option value="farmhouse" className="bg-gray-900">Farm</option>
                  <option value="jungle_stay" className="bg-gray-900">Jungle Stay</option>
                </select>
              </div>
            </div>

            {/* Search Button */}
            <div className="px-1 py-1 shrink-0">
              <Button
                onClick={handleSearch}
                className="gradient-gold text-black font-bold h-14 px-8 rounded-full text-base shadow-gold hover:shadow-gold-lg transition-all duration-300 hover:scale-105 gap-2"
              >
                <Search className="w-5 h-5" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Modal */}
      <SearchModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        checkIn={checkIn}
        setCheckIn={(v) => { setCheckIn(v); setDateError(null); }}
        checkOut={checkOut}
        setCheckOut={(v) => { setCheckOut(v); setDateError(null); }}
        guests={guests}
        setGuests={setGuests}
        propertyType={propertyType}
        setPropertyType={setPropertyType}
        onSearch={handleSearch}
        dateError={dateError}
      />
    </>
  );
}

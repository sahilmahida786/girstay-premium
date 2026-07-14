"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CalendarDays, Users, Search, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
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
      <div className="w-full">
        {/* Luxury Glass Search Card */}
        <div className="glass-dark border border-yellow-700/30 rounded-[28px] p-5 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative overflow-hidden group">
          {/* Subtle hover gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative z-10 flex items-center gap-2.5 mb-5 text-white">
            <Sparkles className="w-4 h-4 text-yellow-500" />
            <span className="font-semibold text-base tracking-wide">Find your perfect stay</span>
          </div>
          
          <div className="relative z-10 flex flex-col sm:flex-row items-stretch sm:items-center border border-white/10 rounded-[20px] bg-black/20 overflow-visible sm:overflow-hidden">
            <div className="flex flex-1 divide-x divide-white/10 overflow-x-auto scrollbar-hide">
              {/* Check-in */}
              <div className="flex-1 p-3 sm:py-4 sm:px-5 min-w-[100px] cursor-pointer" onClick={() => setIsModalOpen(true)}>
                <div className="flex items-center gap-1.5 text-white/50 text-[10px] sm:text-xs uppercase tracking-wider mb-1">
                  <CalendarDays className="w-3 h-3 text-yellow-500" />
                  <span className="font-medium">Check In</span>
                </div>
                <div className="text-white text-xs sm:text-sm font-medium whitespace-nowrap">
                  {checkIn ? new Date(checkIn).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : "Select date"}
                </div>
              </div>

              {/* Check-out */}
              <div className="flex-1 p-3 sm:py-4 sm:px-5 min-w-[100px] cursor-pointer" onClick={() => setIsModalOpen(true)}>
                <div className="flex items-center gap-1.5 text-white/50 text-[10px] sm:text-xs uppercase tracking-wider mb-1">
                  <CalendarDays className="w-3 h-3 text-yellow-500" />
                  <span className="font-medium">Check Out</span>
                </div>
                <div className="text-white text-xs sm:text-sm font-medium whitespace-nowrap">
                  {checkOut ? new Date(checkOut).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : "Select date"}
                </div>
              </div>

              {/* Guests */}
              <div className="flex-1 p-3 sm:py-4 sm:px-5 pr-14 min-w-[100px] cursor-pointer" onClick={() => setIsModalOpen(true)}>
                <div className="flex items-center gap-1.5 text-white/50 text-[10px] sm:text-xs uppercase tracking-wider mb-1">
                  <Users className="w-3 h-3 text-yellow-500" />
                  <span className="font-medium">Guests</span>
                </div>
                <div className="text-white text-xs sm:text-sm font-medium whitespace-nowrap">
                  {guests} Guests
                </div>
              </div>
            </div>

            {/* Search Button (Floating overlapping button on mobile, embedded on desktop) */}
            <div className="absolute right-2 top-1/2 -translate-y-1/2 sm:static sm:translate-y-0 sm:right-auto sm:p-2 pointer-events-auto">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={handleSearch}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full gradient-gold flex items-center justify-center shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_30px_rgba(234,179,8,0.5)] transition-shadow"
              >
                <Search className="w-5 h-5 sm:w-6 sm:h-6 text-black" strokeWidth={2.5} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Modal (reused to handle the complex inputs elegantly) */}
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

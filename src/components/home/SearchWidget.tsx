"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CalendarDays, Users, Search } from "lucide-react";
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
        <div className="glass-dark border border-white/10 sm:border-yellow-700/30 rounded-[32px] p-4 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group transition-all duration-500">
          {/* Subtle hover gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:bg-black/20 sm:border sm:border-white/10 sm:rounded-[24px] sm:p-2">
            
            {/* Mobile: Grid Layout | Desktop: Flex Row */}
            <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-1 sm:divide-x sm:divide-white/10 sm:gap-0">
              
              {/* Check-in */}
              <div 
                className="col-span-1 bg-white/5 border border-white/5 sm:bg-transparent sm:border-none rounded-2xl sm:rounded-none p-4 sm:py-3 sm:px-6 cursor-pointer active:scale-95 sm:active:scale-100 transition-transform" 
                onClick={() => setIsModalOpen(true)}
              >
                <div className="flex items-center gap-2 text-white/40 text-[11px] sm:text-[10px] uppercase tracking-widest mb-1.5 font-medium">
                  <CalendarDays className="w-3.5 h-3.5 text-yellow-500" />
                  <span>Check In</span>
                </div>
                <div className="text-white text-sm sm:text-base font-semibold whitespace-nowrap">
                  {checkIn ? new Date(checkIn).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : "Select date"}
                </div>
              </div>

              {/* Check-out */}
              <div 
                className="col-span-1 bg-white/5 border border-white/5 sm:bg-transparent sm:border-none rounded-2xl sm:rounded-none p-4 sm:py-3 sm:px-6 cursor-pointer active:scale-95 sm:active:scale-100 transition-transform" 
                onClick={() => setIsModalOpen(true)}
              >
                <div className="flex items-center gap-2 text-white/40 text-[11px] sm:text-[10px] uppercase tracking-widest mb-1.5 font-medium">
                  <CalendarDays className="w-3.5 h-3.5 text-yellow-500" />
                  <span>Check Out</span>
                </div>
                <div className="text-white text-sm sm:text-base font-semibold whitespace-nowrap">
                  {checkOut ? new Date(checkOut).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : "Select date"}
                </div>
              </div>

              {/* Guests */}
              <div 
                className="col-span-2 bg-white/5 border border-white/5 sm:bg-transparent sm:border-none rounded-2xl sm:rounded-none p-4 sm:py-3 sm:px-6 cursor-pointer active:scale-95 sm:active:scale-100 transition-transform" 
                onClick={() => setIsModalOpen(true)}
              >
                <div className="flex items-center gap-2 text-white/40 text-[11px] sm:text-[10px] uppercase tracking-widest mb-1.5 font-medium">
                  <Users className="w-3.5 h-3.5 text-yellow-500" />
                  <span>Guests</span>
                </div>
                <div className="text-white text-sm sm:text-base font-semibold whitespace-nowrap">
                  {guests} {guests === "1" ? "Guest" : "Guests"}
                </div>
              </div>
            </div>

            {/* Search Button (Full width on mobile, circular on desktop) */}
            <div className="mt-2 sm:mt-0 sm:shrink-0 sm:pr-2">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={handleSearch}
                className="w-full sm:w-14 h-14 rounded-2xl sm:rounded-full gradient-gold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(234,179,8,0.2)] hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] transition-all duration-300"
              >
                <Search className="w-5 h-5 text-black" strokeWidth={2.5} />
                <span className="sm:hidden text-black font-bold text-base">Search Stays</span>
              </motion.button>
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

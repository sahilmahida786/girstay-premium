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

  return (
    <>
      {/* ═══════════════════════════════════════════════════════
          FLOATING GLASS SEARCH CARD
          ═══════════════════════════════════════════════════════ */}
      <div className="w-full">
        <div
          className="relative rounded-[28px] p-[1px] overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(212,175,55,0.25) 0%, rgba(255,255,255,0.06) 50%, rgba(212,175,55,0.15) 100%)",
          }}
        >
          {/* Inner card */}
          <div className="rounded-[27px] bg-[#0c0c0c]/90 backdrop-blur-2xl p-4 sm:p-5 relative overflow-hidden">
            {/* Subtle ambient glow inside */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#D4AF37]/[0.04] rounded-full blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="relative z-10 flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-sm font-semibold text-white tracking-wide">
                Find your perfect stay
              </span>
            </div>

            {/* Input Grid */}
            <div className="relative z-10 flex flex-col gap-3 sm:flex-row sm:items-stretch sm:gap-0 sm:bg-white/[0.03] sm:border sm:border-white/[0.06] sm:rounded-2xl sm:divide-x sm:divide-white/[0.06]">
              {/* Mobile: Grid | Desktop: Row */}
              <div className="grid grid-cols-2 gap-2.5 sm:contents">
                {/* Check-in */}
                <div
                  className="bg-white/[0.04] border border-white/[0.06] sm:bg-transparent sm:border-none rounded-xl sm:rounded-none p-3.5 sm:py-3 sm:px-5 sm:flex-1 cursor-pointer active:scale-[0.97] sm:active:scale-100 transition-transform"
                  onClick={() => setIsModalOpen(true)}
                >
                  <div className="flex items-center gap-1.5 text-white/35 text-[10px] uppercase tracking-[0.12em] mb-1 font-medium">
                    <CalendarDays className="w-3 h-3 text-[#D4AF37]/70" />
                    <span>Check In</span>
                  </div>
                  <div className="text-white text-sm font-semibold">
                    {checkIn
                      ? new Date(checkIn).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })
                      : "Add date"}
                  </div>
                </div>

                {/* Check-out */}
                <div
                  className="bg-white/[0.04] border border-white/[0.06] sm:bg-transparent sm:border-none rounded-xl sm:rounded-none p-3.5 sm:py-3 sm:px-5 sm:flex-1 cursor-pointer active:scale-[0.97] sm:active:scale-100 transition-transform"
                  onClick={() => setIsModalOpen(true)}
                >
                  <div className="flex items-center gap-1.5 text-white/35 text-[10px] uppercase tracking-[0.12em] mb-1 font-medium">
                    <CalendarDays className="w-3 h-3 text-[#D4AF37]/70" />
                    <span>Check Out</span>
                  </div>
                  <div className="text-white text-sm font-semibold">
                    {checkOut
                      ? new Date(checkOut).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })
                      : "Add date"}
                  </div>
                </div>

                {/* Guests */}
                <div
                  className="col-span-2 bg-white/[0.04] border border-white/[0.06] sm:bg-transparent sm:border-none rounded-xl sm:rounded-none p-3.5 sm:py-3 sm:px-5 sm:flex-1 cursor-pointer active:scale-[0.97] sm:active:scale-100 transition-transform"
                  onClick={() => setIsModalOpen(true)}
                >
                  <div className="flex items-center gap-1.5 text-white/35 text-[10px] uppercase tracking-[0.12em] mb-1 font-medium">
                    <Users className="w-3 h-3 text-[#D4AF37]/70" />
                    <span>Guests</span>
                  </div>
                  <div className="text-white text-sm font-semibold">
                    {guests} {guests === "1" ? "Guest" : "Guests"}
                  </div>
                </div>
              </div>
            </div>

            {/* Search Button */}
            <div className="relative z-10 mt-4 sm:mt-3">
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={handleSearch}
                className="w-full sm:w-auto sm:px-8 h-[52px] rounded-xl sm:rounded-full flex items-center justify-center gap-2.5 font-bold text-[15px] text-black transition-shadow duration-300 shadow-[0_4px_20px_rgba(212,175,55,0.2)] hover:shadow-[0_4px_30px_rgba(212,175,55,0.35)]"
                style={{
                  background:
                    "linear-gradient(135deg, #D4AF37 0%, #F5E6C5 50%, #D4AF37 100%)",
                }}
              >
                <Search className="w-[18px] h-[18px]" strokeWidth={2.5} />
                <span>Search Stays</span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Search Modal for mobile date/guest picker */}
      <SearchModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        checkIn={checkIn}
        setCheckIn={(v) => {
          setCheckIn(v);
          setDateError(null);
        }}
        checkOut={checkOut}
        setCheckOut={(v) => {
          setCheckOut(v);
          setDateError(null);
        }}
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

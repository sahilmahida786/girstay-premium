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
      <div className="w-full">
        {/* ═══ Gradient Border Wrapper ═══ */}
        <div
          className="relative rounded-[24px] sm:rounded-[28px] p-[1px] overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(212,175,55,0.35) 0%, rgba(255,255,255,0.08) 40%, rgba(212,175,55,0.2) 100%)",
          }}
        >
          {/* ═══ Inner Glass Card ═══ */}
          <div className="rounded-[23px] sm:rounded-[27px] bg-black/70 backdrop-blur-2xl p-4 sm:p-5 relative overflow-hidden">
            {/* Ambient internal glow */}
            <div className="absolute -top-16 -right-16 w-32 h-32 bg-[#D4AF37]/[0.06] rounded-full blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="relative z-10 flex items-center gap-2 mb-3.5">
              <Sparkles className="w-3.5 h-3.5 text-[#FFD27A]" />
              <span className="text-[13px] font-semibold text-white/90 tracking-wide">
                Find your perfect stay
              </span>
            </div>

            {/* ═══ Input Grid ═══ */}
            <div className="relative z-10 grid grid-cols-2 gap-2 sm:flex sm:gap-0 sm:bg-white/[0.03] sm:border sm:border-white/[0.06] sm:rounded-2xl sm:divide-x sm:divide-white/[0.06]">
              {/* Check-in */}
              <div
                className="bg-white/[0.06] border border-white/[0.06] sm:bg-transparent sm:border-none rounded-xl sm:rounded-none p-3 sm:py-3 sm:px-5 sm:flex-1 cursor-pointer active:scale-[0.97] sm:active:scale-100 transition-transform"
                onClick={() => setIsModalOpen(true)}
              >
                <div className="flex items-center gap-1.5 text-white/30 text-[10px] uppercase tracking-[0.12em] mb-1 font-medium">
                  <CalendarDays className="w-3 h-3 text-[#D4AF37]/60" />
                  <span>Check In</span>
                </div>
                <div className="text-white text-[13px] sm:text-sm font-semibold">
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
                className="bg-white/[0.06] border border-white/[0.06] sm:bg-transparent sm:border-none rounded-xl sm:rounded-none p-3 sm:py-3 sm:px-5 sm:flex-1 cursor-pointer active:scale-[0.97] sm:active:scale-100 transition-transform"
                onClick={() => setIsModalOpen(true)}
              >
                <div className="flex items-center gap-1.5 text-white/30 text-[10px] uppercase tracking-[0.12em] mb-1 font-medium">
                  <CalendarDays className="w-3 h-3 text-[#D4AF37]/60" />
                  <span>Check Out</span>
                </div>
                <div className="text-white text-[13px] sm:text-sm font-semibold">
                  {checkOut
                    ? new Date(checkOut).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })
                    : "Add date"}
                </div>
              </div>

              {/* Guests — spans full width on mobile */}
              <div
                className="col-span-2 bg-white/[0.06] border border-white/[0.06] sm:bg-transparent sm:border-none rounded-xl sm:rounded-none p-3 sm:py-3 sm:px-5 sm:flex-1 cursor-pointer active:scale-[0.97] sm:active:scale-100 transition-transform"
                onClick={() => setIsModalOpen(true)}
              >
                <div className="flex items-center gap-1.5 text-white/30 text-[10px] uppercase tracking-[0.12em] mb-1 font-medium">
                  <Users className="w-3 h-3 text-[#D4AF37]/60" />
                  <span>Guests</span>
                </div>
                <div className="text-white text-[13px] sm:text-sm font-semibold">
                  {guests} {guests === "1" ? "Guest" : "Guests"}
                </div>
              </div>
            </div>

            {/* ═══ Search Button ═══ */}
            <div className="relative z-10 mt-3 sm:mt-3">
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={handleSearch}
                className="w-full sm:w-auto sm:px-8 h-[50px] rounded-xl sm:rounded-full flex items-center justify-center gap-2 font-bold text-[14px] text-black transition-shadow duration-300 shadow-[0_4px_24px_rgba(212,175,55,0.25)] hover:shadow-[0_4px_32px_rgba(212,175,55,0.4)]"
                style={{
                  background:
                    "linear-gradient(135deg, #D4AF37 0%, #F8E7B5 45%, #D4AF37 100%)",
                }}
              >
                <Search className="w-[17px] h-[17px]" strokeWidth={2.5} />
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

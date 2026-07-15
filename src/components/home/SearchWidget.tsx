"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CalendarDays, Users, Search, MapPin } from "lucide-react";
import { SearchModal } from "./SearchModal";
import { cn } from "@/lib/utils";

// Reusable Field Component
interface FieldProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  placeholder: string;
  onClick: () => void;
  className?: string;
}

function SearchField({ icon, label, value, placeholder, onClick, className }: FieldProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "group relative flex-1 px-5 py-3 sm:py-4 cursor-pointer transition-all duration-300",
        "hover:bg-white/[0.04] active:bg-white/[0.08]",
        className
      )}
    >
      {/* Animated Focus/Hover Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="relative z-10 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-black/20 border border-white/5 flex items-center justify-center text-[#FFD27A] shadow-inner group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] text-white/40 group-hover:text-[#FFD27A]/80 transition-colors">
            {label}
          </span>
          <span className={cn(
            "text-[13px] sm:text-[14px] font-semibold mt-0.5",
            value ? "text-white" : "text-white/30"
          )}>
            {value || placeholder}
          </span>
        </div>
      </div>
    </div>
  );
}

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
      <div className="w-full will-change-transform">
        {/* ═══ LUXURY FLOATING CARD ═══ */}
        <div className="relative rounded-[28px] sm:rounded-[36px] bg-[#060606]/40 backdrop-blur-2xl border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.4)] overflow-hidden group">
          
          {/* Subtle Ambient Reflections */}
          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent pointer-events-none" />
          <div className="absolute -inset-x-20 top-0 h-[200px] bg-[#D4AF37]/[0.03] rounded-[100%] blur-[50px] pointer-events-none group-hover:bg-[#D4AF37]/[0.05] transition-colors duration-1000" />

          {/* Desktop Flow (Row) / Mobile Flow (Stacked) */}
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center p-2 sm:p-2.5">
            
            {/* Input Fields Wrapper */}
            <div className="flex flex-col sm:flex-row flex-1 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08]">
              
              <SearchField 
                label="Destination"
                placeholder="Sasan Gir, Gujarat"
                value="Sasan Gir"
                icon={<MapPin className="w-3.5 h-3.5" />}
                onClick={() => {}}
                className="rounded-t-[20px] sm:rounded-none sm:rounded-l-[26px]"
              />

              <div className="flex flex-1 divide-x divide-white/[0.08]">
                <SearchField 
                  label="Check In"
                  placeholder="Add Date"
                  value={checkIn ? new Date(checkIn).toLocaleDateString("en-US", { month: "short", day: "numeric" }) : ""}
                  icon={<CalendarDays className="w-3.5 h-3.5" />}
                  onClick={() => setIsModalOpen(true)}
                />
                
                <SearchField 
                  label="Check Out"
                  placeholder="Add Date"
                  value={checkOut ? new Date(checkOut).toLocaleDateString("en-US", { month: "short", day: "numeric" }) : ""}
                  icon={<CalendarDays className="w-3.5 h-3.5" />}
                  onClick={() => setIsModalOpen(true)}
                />
              </div>

              <SearchField 
                label="Guests"
                placeholder="Add Guests"
                value={`${guests} ${guests === "1" ? "Guest" : "Guests"}`}
                icon={<Users className="w-3.5 h-3.5" />}
                onClick={() => setIsModalOpen(true)}
                className="rounded-b-[20px] sm:rounded-none"
              />
            </div>

            {/* ═══ CTA BUTTON ═══ */}
            <div className="mt-2 sm:mt-0 sm:ml-2 w-full sm:w-auto shrink-0">
              <button
                onClick={handleSearch}
                className="relative w-full sm:w-[120px] h-14 sm:h-16 flex items-center justify-center rounded-[20px] sm:rounded-[26px] bg-gradient-to-br from-[#F8E7B5] via-[#D4AF37] to-[#8B6A32] overflow-hidden group/btn active:scale-95 transition-transform duration-300 shadow-[0_8px_25px_rgba(212,175,55,0.3)]"
              >
                {/* Shine animation */}
                <div className="absolute inset-0 translate-x-[-100%] group-hover/btn:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12" />
                
                <div className="relative z-10 flex items-center gap-2 text-black">
                  <Search className="w-5 h-5" strokeWidth={2.5} />
                  <span className="sm:hidden font-bold tracking-wide uppercase">Search</span>
                </div>
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* ═══ MOBILE MODAL ═══ */}
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

"use client";

import React from "react";
import { m } from "framer-motion";
import { Calendar, Users, Moon, MapPin, ReceiptText } from "lucide-react";
import { formatPrice, cn } from "@/lib/utils";

interface BookingSummaryProps {
  bookingId: string;
  resortName: string;
  roomName: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  nights: number;
  amountPaid: number;
  balanceRemaining: number;
}

export function BookingSummaryCard({
  bookingId,
  resortName,
  roomName,
  checkIn,
  checkOut,
  guests,
  nights,
  amountPaid,
  balanceRemaining,
}: BookingSummaryProps) {
  return (
    <m.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
      }}
      className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden shadow-luxury"
    >
      {/* Top Banner */}
      <div className="bg-[#D9A94D]/10 px-6 py-4 border-b border-[#D9A94D]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <p className="text-[#D9A94D] text-xs font-medium uppercase tracking-widest mb-1">Booking ID</p>
          <p className="font-heading font-medium text-lg tracking-wider text-white/90">{bookingId}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-emerald-400 text-sm font-medium">Confirmed</span>
        </div>
      </div>

      {/* Main Details Grid */}
      <div className="p-6 sm:p-8 space-y-8">
        
        {/* Resort & Room */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
            <MapPin className="w-6 h-6 text-[#D9A94D]" />
          </div>
          <div>
            <h3 className="font-heading text-xl text-white/90 mb-1">{resortName}</h3>
            <p className="text-white/60 text-sm">{roomName}</p>
          </div>
        </div>

        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Dates & Guests */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div>
            <p className="text-xs text-white/40 mb-1 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" /> Check-in
            </p>
            <p className="text-sm font-medium text-white/90">{checkIn}</p>
            <p className="text-xs text-white/50 mt-0.5">2:00 PM</p>
          </div>
          <div>
            <p className="text-xs text-white/40 mb-1 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" /> Check-out
            </p>
            <p className="text-sm font-medium text-white/90">{checkOut}</p>
            <p className="text-xs text-white/50 mt-0.5">11:00 AM</p>
          </div>
          <div>
            <p className="text-xs text-white/40 mb-1 flex items-center gap-1.5">
              <Moon className="w-3.5 h-3.5" /> Duration
            </p>
            <p className="text-sm font-medium text-white/90">{nights} Nights</p>
          </div>
          <div>
            <p className="text-xs text-white/40 mb-1 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5" /> Guests
            </p>
            <p className="text-sm font-medium text-white/90">{guests} Adults</p>
          </div>
        </div>

        {/* Payment Summary Box */}
        <div className="bg-black/30 rounded-2xl p-5 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <ReceiptText className="w-5 h-5 text-white/40" />
            <div>
              <p className="text-sm text-white/60 mb-0.5">Amount Paid</p>
              <p className="text-lg font-medium text-white/90 price-number">{formatPrice(amountPaid)}</p>
            </div>
          </div>
          
          <div className="hidden sm:block w-[1px] h-10 bg-white/10" />
          
          <div className="flex items-center gap-3">
            <div className="w-5 h-5" /> {/* Spacer */}
            <div>
              <p className="text-sm text-white/60 mb-0.5">Balance at Check-in</p>
              <p className={cn(
                "text-lg font-medium price-number",
                balanceRemaining > 0 ? "text-[#D9A94D]" : "text-white/90"
              )}>
                {balanceRemaining > 0 ? formatPrice(balanceRemaining) : "₹0 (Fully Paid)"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </m.div>
  );
}

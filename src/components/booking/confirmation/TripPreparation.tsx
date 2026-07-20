"use client";

import React from "react";
import { m } from "framer-motion";
import { CloudSun, Luggage, ShieldAlert, Navigation } from "lucide-react";

const PREP_ITEMS = [
  {
    icon: <CloudSun className="w-5 h-5 text-[#D9A94D]" />,
    title: "Weather & Clothing",
    desc: "Expect warm days (28°C) and cool nights (15°C). We recommend layering and packing earth-toned clothing for safaris."
  },
  {
    icon: <ShieldAlert className="w-5 h-5 text-[#D9A94D]" />,
    title: "Safari Permits",
    desc: "Government safari permits must be booked 45 days in advance. Our concierge will contact you shortly to assist."
  },
  {
    icon: <Navigation className="w-5 h-5 text-[#D9A94D]" />,
    title: "Arrival",
    desc: "We are located 1.5 hrs from Diu Airport. If you haven't booked an airport transfer, you can request one via WhatsApp."
  },
  {
    icon: <Luggage className="w-5 h-5 text-[#D9A94D]" />,
    title: "Check-in Policy",
    desc: "Please carry a valid Government ID for all guests (Aadhar/Passport). Early check-in is subject to availability."
  }
];

export function TripPreparation() {
  return (
    <m.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
      }}
      className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 sm:p-8"
    >
      <h3 className="luxury-heading text-xl mb-6">Trip Preparation</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {PREP_ITEMS.map((item, i) => (
          <div key={i} className="flex gap-4">
            <div className="w-10 h-10 shrink-0 rounded-full bg-[#D9A94D]/10 flex items-center justify-center">
              {item.icon}
            </div>
            <div>
              <h4 className="font-medium text-white/90 mb-1">{item.title}</h4>
              <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </m.div>
  );
}

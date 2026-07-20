"use client";

import React from "react";
import { m } from "framer-motion";
import { Download, CalendarPlus, MessageCircle, Map, Share2, ConciergeBell } from "lucide-react";
import { cn } from "@/lib/utils";

interface ActionItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  primary?: boolean;
}

const ACTIONS: ActionItem[] = [
  { id: "invoice", label: "Download Invoice", icon: <Download className="w-5 h-5" /> },
  { id: "calendar", label: "Add to Calendar", icon: <CalendarPlus className="w-5 h-5" /> },
  { id: "whatsapp", label: "WhatsApp Concierge", icon: <MessageCircle className="w-5 h-5" />, primary: true },
  { id: "directions", label: "Get Directions", icon: <Map className="w-5 h-5" /> },
  { id: "services", label: "Pre-book Spa", icon: <ConciergeBell className="w-5 h-5" /> },
  { id: "share", label: "Share Details", icon: <Share2 className="w-5 h-5" /> },
];

export function QuickActionsGrid() {
  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <m.div
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
      }}
      className="space-y-4"
    >
      <h3 className="text-sm font-medium text-white/50 uppercase tracking-widest pl-1">Quick Actions</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
        {ACTIONS.map((action) => (
          <m.button
            key={action.id}
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
              "flex flex-col items-center justify-center text-center p-4 sm:p-5 rounded-2xl border transition-all duration-300",
              action.primary
                ? "bg-[#D9A94D]/10 border-[#D9A94D]/30 text-[#D9A94D] hover:bg-[#D9A94D]/20 shadow-[0_4px_20px_rgba(217,169,77,0.1)]"
                : "bg-white/5 border-white/10 text-white/80 hover:bg-white/10 hover:border-white/20 hover:text-white"
            )}
          >
            <div className="mb-2.5 shrink-0">{action.icon}</div>
            <span className="text-xs sm:text-sm font-medium leading-tight">{action.label}</span>
          </m.button>
        ))}
      </div>

      {/* Mobile Sticky Actions */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-xl border-t border-white/10 p-4 pb-safe-offset lg:hidden flex gap-3 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
        <button className="flex-1 bg-white/10 hover:bg-white/20 active:bg-white/30 text-white font-medium h-14 rounded-xl flex items-center justify-center gap-2 border border-white/10 transition-colors">
          <Map className="w-4 h-4" /> Directions
        </button>
        <button className="flex-1 gradient-gold text-black font-semibold h-14 rounded-xl flex items-center justify-center gap-2 shadow-gold transition-all active:scale-95">
          <MessageCircle className="w-4 h-4" /> WhatsApp
        </button>
      </div>
    </m.div>
  );
}

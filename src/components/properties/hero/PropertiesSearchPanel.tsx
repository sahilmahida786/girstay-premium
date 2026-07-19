"use client";

import { motion } from "framer-motion";
import { Search, MapPin, Calendar, Users } from "lucide-react";

export function PropertiesSearchPanel({ 
  searchQuery, 
  setSearchQuery 
}: { 
  searchQuery: string; 
  setSearchQuery: (val: string) => void; 
}) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      className="relative z-20 max-w-5xl mx-auto w-full px-4 sm:px-6 mt-8"
    >
      <div className="bg-white/10 backdrop-blur-2xl rounded-3xl sm:rounded-full p-2 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.4)] relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 h-auto sm:h-16">
          
          {/* Destination */}
          <div className="flex-1 flex items-center gap-3 px-6 py-4 sm:py-0 rounded-2xl sm:rounded-full bg-white/5 sm:bg-transparent hover:bg-white/10 transition-colors border sm:border-0 border-white/10 sm:border-r border-white/10 sm:rounded-r-none group-focus-within:bg-white/10">
            <MapPin className="w-5 h-5 text-[#D4AF37]" />
            <div className="flex flex-col w-full">
              <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Destination / Property</span>
              <input 
                type="text"
                placeholder="Where to?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent text-sm font-medium text-white/90 placeholder:text-white/30 focus:outline-none w-full"
              />
            </div>
          </div>

          {/* Dates */}
          <div className="flex-1 flex items-center gap-3 px-6 py-4 sm:py-0 rounded-2xl sm:rounded-none bg-white/5 sm:bg-transparent hover:bg-white/10 transition-colors cursor-pointer border sm:border-0 border-white/10 sm:border-r border-white/10">
            <Calendar className="w-5 h-5 text-[#D4AF37]" />
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Dates</span>
              <span className="text-sm font-medium text-white/90">Add Dates</span>
            </div>
          </div>

          {/* Guests */}
          <div className="flex-1 flex items-center gap-3 px-6 py-4 sm:py-0 rounded-2xl sm:rounded-none bg-white/5 sm:bg-transparent hover:bg-white/10 transition-colors cursor-pointer border sm:border-0 border-white/10 sm:border-r border-white/10">
            <Users className="w-5 h-5 text-[#D4AF37]" />
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Guests</span>
              <span className="text-sm font-medium text-white/90">2 Guests</span>
            </div>
          </div>

          {/* Search Button */}
          <div className="sm:pl-2 shrink-0">
            <button className="relative overflow-hidden w-full sm:w-auto h-14 sm:h-full px-8 rounded-2xl sm:rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F8E7B5] to-[#D4AF37] text-black font-bold flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all shadow-[0_4px_20px_rgba(212,175,55,0.4)] min-w-[120px] group/btn">
              {/* Shimmer Effect every 8s */}
              <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12 animate-shimmer-slow" />
              
              <Search className="w-4 h-4" />
              <span>Search</span>
            </button>
          </div>

        </div>
      </div>
    </motion.div>
  );
}

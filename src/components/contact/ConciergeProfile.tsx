"use client";

import { motion } from "framer-motion";
import { MessageSquare, Phone, CalendarClock, ShieldCheck, Globe, Star } from "lucide-react";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/lib/constants";
import Image from "next/image";

export function ConciergeProfile() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto mb-24"
    >
      <div className="relative p-1 rounded-[2.5rem] bg-gradient-to-b from-white/10 to-transparent">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-[2.5rem] shadow-2xl" />
        
        <div className="relative flex flex-col md:flex-row p-8 sm:p-10 gap-10 items-center md:items-start">
          
          {/* Avatar Profile Section */}
          <div className="flex flex-col items-center shrink-0">
            <div className="relative w-40 h-40 rounded-full border-[3px] border-[#D4AF37]/30 p-1 mb-4">
              <div className="w-full h-full rounded-full overflow-hidden relative">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
                  alt="Luxury Travel Expert"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-black text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full whitespace-nowrap shadow-[0_0_15px_rgba(212,175,55,0.5)]">
                Verified Expert
              </div>
            </div>
            <h3 className="font-heading text-2xl font-bold text-white mb-1 mt-3">Sarah Williams</h3>
            <p className="text-[#FFD27A] text-sm font-medium">Luxury Travel Director</p>
          </div>

          {/* Details Section */}
          <div className="flex-1 w-full">
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold mb-6 text-center md:text-left">Meet Your Concierge</h2>
            
            <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-8">
              <div>
                <p className="text-[10px] text-white/50 uppercase tracking-widest font-bold mb-1">Experience</p>
                <p className="text-white text-sm sm:text-base font-medium">12+ Years</p>
              </div>
              <div>
                <p className="text-[10px] text-white/50 uppercase tracking-widest font-bold mb-1">Languages</p>
                <p className="text-white text-sm sm:text-base font-medium">English, Hindi, Gujarati</p>
              </div>
              <div>
                <p className="text-[10px] text-white/50 uppercase tracking-widest font-bold mb-1">Avg Response</p>
                <p className="text-[#25D366] text-sm sm:text-base font-bold">&lt; 5 Minutes</p>
              </div>
              <div>
                <p className="text-[10px] text-white/50 uppercase tracking-widest font-bold mb-1">Track Record</p>
                <p className="text-white text-sm sm:text-base font-medium">2500+ Safaris Planned</p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold h-14 rounded-xl transition-colors shadow-[0_0_20px_rgba(37,211,102,0.2)]"
              >
                <MessageSquare className="w-5 h-5" />
                Chat on WhatsApp
              </a>
              <a 
                href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                className="flex-1 flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold h-14 rounded-xl transition-colors"
              >
                <Phone className="w-5 h-5 text-[#D4AF37]" />
                Call Concierge
              </a>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
}

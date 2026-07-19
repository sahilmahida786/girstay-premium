"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Navigation, ExternalLink, Share2 } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export function OfficeLocation() {
  return (
    <div className="max-w-7xl mx-auto mb-32 relative z-10 px-4 sm:px-6">
      
      <div className="text-center mb-16">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">Visit Our Office</h2>
        <p className="text-white/60">Our headquarters in the heart of Sasan Gir.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Left: Luxury Map */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 rounded-[2.5rem] overflow-hidden border border-white/10 h-[400px] lg:h-auto relative shadow-2xl group"
        >
          <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10 rounded-[2.5rem] z-10" />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59368.40697379836!2d70.52047!3d21.12427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be2bead8f2e27f7%3A0x7f43b1a7d4e7b89e!2sSasan%20Gir!5e0!3m2!1sen!2sin!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(0.8) contrast(1.2) brightness(0.8)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="GirStay Location Map"
            className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
          />
        </motion.div>

        {/* Right: Location Details Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-[450px] shrink-0 p-8 sm:p-10 rounded-[2.5rem] bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col justify-between"
        >
          <div>
            <h3 className="font-heading text-2xl font-bold mb-6 text-white">GirStay Headquarters</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full bg-white/5 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <div>
                  <p className="text-[10px] text-white/50 uppercase tracking-widest font-bold mb-1">Address</p>
                  <p className="text-white/90 text-sm leading-relaxed">{CONTACT_INFO.address}</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full bg-white/5 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <div>
                  <p className="text-[10px] text-white/50 uppercase tracking-widest font-bold mb-1">Phone</p>
                  <p className="text-white/90 text-sm">{CONTACT_INFO.phone}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full bg-white/5 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <div>
                  <p className="text-[10px] text-white/50 uppercase tracking-widest font-bold mb-1">Email</p>
                  <p className="text-white/90 text-sm">{CONTACT_INFO.email}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full bg-white/5 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <div>
                  <p className="text-[10px] text-white/50 uppercase tracking-widest font-bold mb-1">Working Hours</p>
                  <p className="text-white/90 text-sm">Mon-Sun: 24/7 (Concierge)</p>
                  <p className="text-white/60 text-xs mt-1">Office Visits: 9AM - 6PM</p>
                </div>
              </div>
            </div>

            {/* Micro Details Grid */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10 mb-8">
              <div>
                <p className="text-[10px] text-white/50 uppercase tracking-widest font-bold mb-1">Safari Gate</p>
                <p className="text-white/90 text-sm font-medium">5 mins drive</p>
              </div>
              <div>
                <p className="text-[10px] text-white/50 uppercase tracking-widest font-bold mb-1">Parking</p>
                <p className="text-white/90 text-sm font-medium">Available</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3">
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full h-12 bg-white/10 hover:bg-white/20 text-white text-sm font-bold rounded-xl transition-colors border border-white/10"
            >
              <Navigation className="w-4 h-4" />
              Get Directions
            </a>
            <div className="flex gap-3">
              <button className="flex-1 flex items-center justify-center gap-2 h-12 bg-transparent hover:bg-white/5 text-white/70 hover:text-white text-sm font-bold rounded-xl transition-colors border border-white/5 hover:border-white/10">
                <ExternalLink className="w-4 h-4" />
                Open Map
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 h-12 bg-transparent hover:bg-white/5 text-white/70 hover:text-white text-sm font-bold rounded-xl transition-colors border border-white/5 hover:border-white/10">
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

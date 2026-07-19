"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Upload, ChevronDown, Calendar as CalendarIcon, Users, Building, Wallet } from "lucide-react";

export function AdvancedForm() {
  const [isHovered, setIsHovered] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFileName("");
    }, 2500);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <div className="max-w-5xl mx-auto mb-32 relative z-10 px-4 sm:px-6">
      
      <div className="text-center mb-12">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">Request Luxury Assistance</h2>
        <p className="text-white/60">Provide your preferences and our concierge will craft your perfect itinerary.</p>
      </div>

      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        onSubmit={handleSubmit}
        className="relative p-6 sm:p-12 rounded-[2.5rem] bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl"
      >
        <div className="absolute inset-0 rounded-[2.5rem] ring-1 ring-inset ring-white/5 pointer-events-none" />
        
        <div className="space-y-6">
          {/* Row 1: Personal Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group">
              <label className="block text-[10px] font-bold text-white/50 uppercase tracking-widest mb-2 transition-colors group-focus-within:text-[#D4AF37]">
                Full Name
              </label>
              <input 
                required type="text" placeholder="E.g. James Bond"
                className="w-full h-14 sm:h-16 px-6 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-white/20 focus:outline-none focus:border-[#D4AF37]/50 focus:bg-white/10 transition-all text-sm sm:text-base"
              />
            </div>
            <div className="group">
              <label className="block text-[10px] font-bold text-white/50 uppercase tracking-widest mb-2 transition-colors group-focus-within:text-[#D4AF37]">
                Email Address
              </label>
              <input 
                required type="email" placeholder="For receiving your customized itinerary"
                className="w-full h-14 sm:h-16 px-6 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-white/20 focus:outline-none focus:border-[#D4AF37]/50 focus:bg-white/10 transition-all text-sm sm:text-base"
              />
            </div>
          </div>

          {/* Row 2: Selectors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Travel Date */}
            <div className="group">
              <label className="block text-[10px] font-bold text-white/50 uppercase tracking-widest mb-2 transition-colors group-focus-within:text-[#D4AF37]">
                Travel Date
              </label>
              <div className="relative">
                <input 
                  type="date"
                  className="w-full h-14 px-5 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-[#D4AF37]/50 focus:bg-white/10 transition-all text-sm appearance-none"
                  style={{ colorScheme: "dark" }}
                />
                <CalendarIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
              </div>
            </div>

            {/* Guests */}
            <div className="group">
              <label className="block text-[10px] font-bold text-white/50 uppercase tracking-widest mb-2 transition-colors group-focus-within:text-[#D4AF37]">
                Guests
              </label>
              <div className="relative">
                <select className="w-full h-14 px-5 bg-white/5 border border-white/10 rounded-2xl text-white appearance-none focus:outline-none focus:border-[#D4AF37]/50 focus:bg-white/10 transition-all cursor-pointer text-sm">
                  <option value="" disabled className="bg-[#111] text-white/50">Select...</option>
                  <option className="bg-[#111]">1-2 Guests</option>
                  <option className="bg-[#111]">3-4 Guests</option>
                  <option className="bg-[#111]">5+ Guests</option>
                  <option className="bg-[#111]">Corporate Group</option>
                </select>
                <Users className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
              </div>
            </div>

            {/* Budget */}
            <div className="group">
              <label className="block text-[10px] font-bold text-white/50 uppercase tracking-widest mb-2 transition-colors group-focus-within:text-[#D4AF37]">
                Budget (Per Night)
              </label>
              <div className="relative">
                <select className="w-full h-14 px-5 bg-white/5 border border-white/10 rounded-2xl text-white appearance-none focus:outline-none focus:border-[#D4AF37]/50 focus:bg-white/10 transition-all cursor-pointer text-sm">
                  <option value="" disabled className="bg-[#111] text-white/50">Select...</option>
                  <option className="bg-[#111]">₹10,000 - ₹25,000</option>
                  <option className="bg-[#111]">₹25,000 - ₹50,000</option>
                  <option className="bg-[#111]">₹50,000+</option>
                </select>
                <Wallet className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
              </div>
            </div>

            {/* Resort Type */}
            <div className="group">
              <label className="block text-[10px] font-bold text-white/50 uppercase tracking-widest mb-2 transition-colors group-focus-within:text-[#D4AF37]">
                Resort Type
              </label>
              <div className="relative">
                <select className="w-full h-14 px-5 bg-white/5 border border-white/10 rounded-2xl text-white appearance-none focus:outline-none focus:border-[#D4AF37]/50 focus:bg-white/10 transition-all cursor-pointer text-sm">
                  <option value="" disabled className="bg-[#111] text-white/50">Select...</option>
                  <option className="bg-[#111]">Luxury Safari Lodge</option>
                  <option className="bg-[#111]">Premium Villa with Pool</option>
                  <option className="bg-[#111]">Eco-Luxury Tent</option>
                  <option className="bg-[#111]">Family Resort</option>
                </select>
                <Building className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
              </div>
            </div>

          </div>

          {/* Message */}
          <div className="group">
            <label className="block text-[10px] font-bold text-white/50 uppercase tracking-widest mb-2 transition-colors group-focus-within:text-[#D4AF37]">
              Special Requests & Preferences
            </label>
            <textarea 
              rows={4}
              placeholder="Tell us about your ideal safari experience, dietary requirements, or special occasions..."
              className="w-full p-6 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-white/20 focus:outline-none focus:border-[#D4AF37]/50 focus:bg-white/10 transition-all resize-none text-sm sm:text-base"
            />
          </div>

          {/* Bottom Row: File Upload & Submit */}
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-end">
            
            {/* File Upload */}
            <div className="w-full sm:w-auto shrink-0 group">
              <label className="block text-[10px] font-bold text-white/50 uppercase tracking-widest mb-2 transition-colors group-hover:text-[#D4AF37]">
                Attach Existing Itinerary (Optional)
              </label>
              <div className="relative">
                <input 
                  type="file" 
                  id="file-upload" 
                  className="hidden" 
                  onChange={handleFileChange} 
                />
                <label 
                  htmlFor="file-upload" 
                  className="flex items-center gap-3 h-14 sm:h-16 px-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer text-sm text-white/70"
                >
                  <Upload className="w-4 h-4 text-[#D4AF37]" />
                  <span className="truncate max-w-[200px]">
                    {fileName ? fileName : "Upload Document"}
                  </span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative flex-1 w-full h-14 sm:h-16 rounded-2xl bg-gradient-to-r from-[#D4AF37] via-[#F8E7B5] to-[#D4AF37] text-black font-bold text-base sm:text-lg overflow-hidden transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_0_30px_rgba(212,175,55,0.3)]"
            >
              {/* Shimmer Effect */}
              <div className={`absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 ${isHovered ? 'translate-x-full' : ''}`} />
              
              <span className="relative flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                    Processing...
                  </span>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Submit Request
                  </>
                )}
              </span>
            </button>

          </div>
        </div>
      </motion.form>
    </div>
  );
}

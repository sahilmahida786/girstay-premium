"use client";

import { ContactBackground } from "@/components/contact/ContactBackground";
import { ContactHero } from "@/components/contact/ContactHero";
import { ConciergeProfile } from "@/components/contact/ConciergeProfile";
import { ConciergeServices } from "@/components/contact/ConciergeServices";
import { AdvancedForm } from "@/components/contact/AdvancedForm";
import { OfficeLocation } from "@/components/contact/OfficeLocation";
import { ContactTrust } from "@/components/contact/ContactTrust";
import { ContactTestimonials } from "@/components/contact/ContactTestimonials";
import { ContactFAQ } from "@/components/contact/ContactFAQ";
import { ContactCTA } from "@/components/contact/ContactCTA";

export function ContactClient() {
  return (
    <main className="relative min-h-screen pt-24 sm:pt-32 pb-0 overflow-hidden bg-[#050505]">
      {/* 1. Immersive Cinematic Background */}
      <ContactBackground />

      <div className="relative z-10 w-full">
        {/* 2. Luxury Hero & Badges */}
        <div className="px-4 sm:px-6 md:px-8 lg:px-16">
          <ContactHero />
        </div>

        {/* 3. Meet Your Concierge & Quick Actions */}
        <div className="px-4 sm:px-6 md:px-8 lg:px-16">
          <ConciergeProfile />
        </div>

        {/* 4. Luxury Concierge Services Grid */}
        <div className="px-0 sm:px-6 md:px-8 lg:px-16">
          <ConciergeServices />
        </div>

        {/* 5. Advanced Luxury Form */}
        <div className="px-0 sm:px-6 md:px-8 lg:px-16">
          <AdvancedForm />
        </div>

        {/* 6. Premium Office Location */}
        <div className="px-0 sm:px-6 md:px-8 lg:px-16">
          <OfficeLocation />
        </div>

        {/* 7. Trust Statistics */}
        <div className="px-0 sm:px-6 md:px-8 lg:px-16">
          <ContactTrust />
        </div>

        {/* 8. VIP Testimonials */}
        <div className="px-0 sm:px-6 md:px-8 lg:px-16">
          <ContactTestimonials />
        </div>

        {/* 9. Luxury FAQ Accordion */}
        <div className="px-0 sm:px-6 md:px-8 lg:px-16">
          <ContactFAQ />
        </div>

        {/* 10. Massive Cinematic CTA */}
        <div className="px-4 sm:px-6 md:px-8 lg:px-16">
          <ContactCTA />
        </div>
      </div>
    </main>
  );
}

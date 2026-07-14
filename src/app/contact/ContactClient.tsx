"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/lib/constants";

export function ContactClient() {
  return (
    <div className="min-h-screen py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-3 block">
            Get In Touch
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Concierge <span className="gradient-gold-text">Services</span>
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Our travel directors are at your service. Let us curate your perfect itinerary or assist with your existing reservation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {[
              {
                icon: Phone,
                title: "Phone",
                lines: [CONTACT_INFO.phone],
                href: `tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`,
              },
              {
                icon: Mail,
                title: "Email",
                lines: [CONTACT_INFO.email],
                href: `mailto:${CONTACT_INFO.email}`,
              },
              {
                icon: MapPin,
                title: "Address",
                lines: [CONTACT_INFO.address],
              },
              {
                icon: Clock,
                title: "Working Hours",
                lines: ["Mon-Sun: 24/7", "Safari booking support: 6AM-10PM"],
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 p-5 rounded-2xl bg-card border border-border/50 hover:shadow-luxury transition-all"
              >
                <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-sm mb-1">{item.title}</h3>
                  {item.lines.map((line) =>
                    item.href ? (
                      <a key={line} href={item.href} className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                        {line}
                      </a>
                    ) : (
                      <p key={line} className="text-sm text-muted-foreground">{line}</p>
                    )
                  )}
                </div>
              </div>
            ))}

            {/* WhatsApp CTA */}
            <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer">
              <div className="p-5 rounded-2xl bg-green-500/10 border border-green-500/20 hover:bg-green-500/20 transition-colors flex items-center gap-4 cursor-pointer">
                <MessageSquare className="w-6 h-6 text-green-500" />
                <div>
                  <p className="font-semibold text-sm">Chat on WhatsApp</p>
                  <p className="text-xs text-muted-foreground">Instant replies, quick bookings</p>
                </div>
              </div>
            </a>
          </motion.div>

          {/* Concierge Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="p-8 rounded-2xl bg-card border border-border/50 shadow-luxury h-full">
              <h2 className="font-heading text-xl font-semibold mb-6">Request Assistance</h2>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-medium mb-1.5 block text-muted-foreground uppercase tracking-wider">Full Name</label>
                    <Input placeholder="E.g. Mr. James Bond" className="h-12 rounded-xl bg-muted/50 border-transparent focus:border-primary/50 transition-colors" />
                  </div>
                  <div>
                    <label className="text-xs font-medium mb-1.5 block text-muted-foreground uppercase tracking-wider">Contact Number</label>
                    <Input type="tel" placeholder="+91 (Enter mobile number)" className="h-12 rounded-xl bg-muted/50 border-transparent focus:border-primary/50 transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-medium mb-1.5 block text-muted-foreground uppercase tracking-wider">Email Address</label>
                  <Input type="email" placeholder="For receiving your customized itinerary" className="h-12 rounded-xl bg-muted/50 border-transparent focus:border-primary/50 transition-colors" />
                </div>
                <div>
                  <label className="text-xs font-medium mb-1.5 block text-muted-foreground uppercase tracking-wider">Nature of Inquiry</label>
                  <div className="relative">
                    <select className="w-full h-12 px-4 text-sm rounded-xl border-transparent focus:border-primary/50 bg-muted/50 appearance-none outline-none cursor-pointer">
                      <option>Curate a Luxury Safari Package</option>
                      <option>Modify Existing Reservation</option>
                      <option>Corporate Retreat Inquiry</option>
                      <option>Property Listing Partnership</option>
                      <option>General Support</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-xs font-medium mb-1.5 block text-muted-foreground uppercase tracking-wider">How may we assist you?</label>
                  <textarea
                    rows={4}
                    placeholder="Please share your preferences, travel dates, and any special requirements..."
                    className="w-full px-4 py-3 text-sm rounded-xl border-transparent focus:border-primary/50 bg-muted/50 resize-none outline-none transition-colors"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full h-14 gradient-gold text-black font-bold text-base rounded-xl shadow-gold hover:shadow-gold-lg transition-all gap-2 mt-4"
                >
                  <Send className="w-5 h-5" />
                  Submit Request
                </Button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 max-w-3xl mx-auto"
        >
          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-3">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Quick answers to common safari and booking queries.</p>
          </div>
          <Accordion className="w-full">
            {[
              { q: "How far in advance should I book my Gir Safari?", a: "We highly recommend booking your safari permits 60-90 days in advance, as only a limited number of permits are issued daily by the Forest Department." },
              { q: "Is the Sasan Gir National Park open all year?", a: "No, the main safari park is closed during the monsoon season from mid-June to mid-October. However, Devalia Safari Park remains open year-round." },
              { q: "Can GirStay guarantee a lion sighting?", a: "While Sasan Gir is the only place to see Asiatic Lions in the wild, sightings depend on wildlife movement. However, our expert trackers know the best routes to maximize your chances." },
              { q: "Do the properties offer complimentary pick-up?", a: "Many of our premium and luxury properties offer complimentary pick-up from the nearest railway station or airport. Our concierge team will coordinate this for you." },
            ].map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-border/30">
                <AccordionTrigger className="text-sm sm:text-base font-semibold hover:text-primary transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Map Embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-2xl overflow-hidden border border-border/50 h-80"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59368.40697379836!2d70.52047!3d21.12427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be2bead8f2e27f7%3A0x7f43b1a7d4e7b89e!2sSasan%20Gir!5e0!3m2!1sen!2sin!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="GirStay Location Map"
          />
        </motion.div>
      </div>
    </div>
  );
}

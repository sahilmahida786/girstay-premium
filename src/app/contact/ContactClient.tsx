"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
            Contact <span className="gradient-gold-text">Us</span>
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Have questions about your booking or need help planning your Gir trip?
            We&apos;re here to help 24/7.
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

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="p-8 rounded-2xl bg-card border border-border/50 shadow-luxury">
              <h2 className="font-heading text-xl font-semibold mb-6">Send us a message</h2>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Full Name</label>
                    <Input placeholder="John Doe" className="h-12 rounded-xl" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Phone</label>
                    <Input type="tel" placeholder="+91 98765 43210" className="h-12 rounded-xl" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Email</label>
                  <Input type="email" placeholder="you@example.com" className="h-12 rounded-xl" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Subject</label>
                  <select className="w-full h-12 px-4 text-sm rounded-xl border border-border bg-background appearance-none">
                    <option>General Inquiry</option>
                    <option>Booking Help</option>
                    <option>Safari Information</option>
                    <option>Property Listing</option>
                    <option>Partnership</option>
                    <option>Complaint</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Tell us how we can help..."
                    className="w-full px-4 py-3 text-sm rounded-xl border border-border bg-background resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full h-14 gradient-gold text-black font-bold text-base rounded-xl shadow-gold hover:shadow-gold-lg transition-all gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>
        </div>

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

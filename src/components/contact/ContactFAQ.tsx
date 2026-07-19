"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function ContactFAQ() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="max-w-4xl mx-auto mb-32 relative z-10 px-4 sm:px-6"
    >
      <div className="text-center mb-12">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-white/60">Quick answers to common luxury safari and booking queries.</p>
      </div>
      
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-6 sm:p-10 shadow-2xl relative">
        <div className="absolute inset-0 rounded-[2.5rem] ring-1 ring-inset ring-white/5 pointer-events-none" />
        
        <Accordion className="w-full space-y-4">
          {[
            { q: "How far in advance should I book my Gir Safari?", a: "We highly recommend booking your safari permits 60-90 days in advance, as only a limited number of VIP permits are issued daily by the Forest Department." },
            { q: "Is the Sasan Gir National Park open all year?", a: "No, the main safari park is closed during the monsoon season from mid-June to mid-October. However, Devalia Safari Park remains open year-round for luxury experiences." },
            { q: "Can GirStay guarantee a lion sighting?", a: "While Sasan Gir is the only place to see Asiatic Lions in the wild, sightings depend on wildlife movement. However, our expert trackers know the best routes to maximize your chances." },
            { q: "Do the properties offer complimentary VIP transfers?", a: "Yes, many of our premium and luxury properties offer complimentary private transfers from the nearest railway station or airport. Our concierge team will coordinate this seamlessly." },
          ].map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-b-0">
              <AccordionTrigger className="px-6 py-5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-transparent hover:border-white/10 transition-all text-left text-sm sm:text-base font-semibold text-white/90 data-[state=open]:text-[#D4AF37] data-[state=open]:bg-white/5 data-[state=open]:border-[#D4AF37]/20 [&>svg]:data-[state=open]:text-[#D4AF37]">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="px-6 pt-4 pb-6 text-white/60 leading-relaxed text-sm sm:text-base">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </motion.div>
  );
}

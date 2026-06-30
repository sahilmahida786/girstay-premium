import type { Metadata } from "next";
import { ContactClient } from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us — 24/7 Booking Support",
  description:
    "Get in touch with GirStay Premium for booking help, safari information, or partnership inquiries. Call, email, or WhatsApp us — we're available 24/7.",
  openGraph: {
    title: "Contact GirStay Premium",
    description:
      "24/7 booking support for luxury resorts and safari experiences in Sasan Gir, Gujarat.",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}

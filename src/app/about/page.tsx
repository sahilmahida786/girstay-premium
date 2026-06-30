import type { Metadata } from "next";
import { AboutClient } from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us — Our Story & Mission",
  description:
    "Learn about GirStay Premium — India's #1 luxury resort and safari booking platform for Sasan Gir. Handpicked properties, verified reviews, and 24/7 support.",
  openGraph: {
    title: "About GirStay Premium",
    description:
      "Born from a passion for wildlife and hospitality, GirStay Premium connects travelers with the finest stays in Sasan Gir.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Gir Forest — GirStay Premium",
      },
    ],
  },
};

export default function AboutPage() {
  return <AboutClient />;
}

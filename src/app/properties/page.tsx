import { Metadata } from "next";
import PropertiesClient from "@/components/properties/PropertiesClient";

export const metadata: Metadata = {
  title: "Premium Properties in Sasan Gir — Luxury Resorts, Villas & Cottages",
  description:
    "Browse 50+ handpicked luxury resorts, villas, cottages, farm houses, and jungle stays in Sasan Gir, Gujarat. Best price guarantee. Book your dream stay near Gir National Park.",
  keywords: [
    "Sasan Gir resorts",
    "Gir luxury villas",
    "Gir National Park stay",
    "farmhouse near Gir",
    "jungle lodge Gir",
    "safari resort Gujarat",
  ],
  openGraph: {
    title: "Premium Properties in Sasan Gir — GirStay Premium",
    description:
      "Discover luxury resorts, villas, and jungle stays in the heart of Asiatic Lion country.",
    type: "website",
  },
};

export default function PropertiesPage() {
  return <PropertiesClient />;
}

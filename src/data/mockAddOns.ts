export interface ExperienceData {
  id: string;
  name: string;
  description: string;
  price: number;
  duration?: string;
  imageUrl: string;
  badge?: "Most Popular" | "Limited Slots" | "Sold Out" | "Bundle";
  isBundle?: boolean;
  savings?: number;
}

export const EXPERIENCES_DATA: ExperienceData[] = [
  {
    id: "bundle_adventure",
    name: "Ultimate Gir Adventure Package",
    description: "Combine our best-selling Safari, Campfire Dinner, and a guided Nature Walk for the complete wilderness experience.",
    price: 8000,
    savings: 1500,
    duration: "2 Days",
    imageUrl: "https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=600&auto=format&fit=crop",
    badge: "Bundle",
    isBundle: true,
  },
  {
    id: "safari_jeep",
    name: "Private Jeep Safari",
    description: "Exclusive morning safari with an expert naturalist tracker. Best chance to spot the Asiatic Lion.",
    price: 4500,
    duration: "3 Hours",
    imageUrl: "https://images.unsplash.com/photo-1615460549969-36fa19521a4f?q=80&w=600&auto=format&fit=crop",
    badge: "Most Popular",
  },
  {
    id: "dinner_candle",
    name: "Wilderness Candlelight Dinner",
    description: "A private 5-course dining experience set under the stars in the safe zone of the resort.",
    price: 3500,
    duration: "2 Hours",
    imageUrl: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=600&auto=format&fit=crop",
    badge: "Limited Slots",
  },
  {
    id: "spa_couples",
    name: "Couples Rejuvenation Spa",
    description: "Traditional Ayurvedic massage therapy overlooking the forest canopy.",
    price: 5000,
    duration: "90 Mins",
    imageUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "village_tour",
    name: "Siddi Village Cultural Tour",
    description: "Experience the unique culture and dance of the local Siddi community.",
    price: 1500,
    duration: "2 Hours",
    imageUrl: "https://images.unsplash.com/photo-1523413555809-0fb1d4eefa4f?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "photography_hide",
    name: "Photography Hide Session",
    description: "Exclusive access to our camouflaged waterhole hide. Professional lenses available for rent.",
    price: 2500,
    duration: "4 Hours",
    imageUrl: "https://images.unsplash.com/photo-1550353127-b0ceca6c9b3a?q=80&w=600&auto=format&fit=crop",
    badge: "Sold Out",
  }
];

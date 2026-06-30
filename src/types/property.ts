export type PropertyType =
  | "resort"
  | "villa"
  | "cottage"
  | "farmhouse"
  | "jungle_stay";

export type RoomType =
  | "standard"
  | "deluxe"
  | "suite"
  | "cottage"
  | "tent"
  | "villa";

export interface Property {
  id: string;
  slug: string;
  name: string;
  type: PropertyType;
  description: string;
  shortDescription: string;
  address: string;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
  basePrice: number;
  rating: number;
  reviewCount: number;
  images: PropertyImage[];
  amenities: string[];
  highlights: string[];
  policies: PropertyPolicies;
  rooms: Room[];
  reviews: Review[];
  faq: FAQ[];
  isActive: boolean;
  isFeatured: boolean;
  createdAt: string;
}

export interface PropertyImage {
  id: string;
  url: string;
  alt: string;
  sortOrder: number;
  isPrimary: boolean;
}

export interface Room {
  id: string;
  propertyId: string;
  name: string;
  type: RoomType;
  description: string;
  capacity: number;
  totalCount: number;
  availableCount: number;
  basePrice: number;
  images: { url: string; alt: string }[];
  amenities: string[];
  isActive: boolean;
}

export interface PropertyPolicies {
  checkIn: string;
  checkOut: string;
  cancellation: string;
  houseRules: string[];
  petPolicy: string;
  childPolicy: string;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  rating: number;
  comment: string;
  isVerified: boolean;
  createdAt: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface SeasonalPricing {
  id: string;
  roomId: string;
  seasonName: string;
  startDate: string;
  endDate: string;
  priceMultiplier: number;
  fixedPrice?: number;
}

export interface PropertyFilters {
  type?: PropertyType;
  minPrice?: number;
  maxPrice?: number;
  rating?: number;
  amenities?: string[];
  checkIn?: string;
  checkOut?: string;
  guests?: number;
  sort?: "price_asc" | "price_desc" | "rating" | "popularity";
  search?: string;
}

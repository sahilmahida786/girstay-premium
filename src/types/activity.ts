export type ActivityCategory =
  | "morning"
  | "breakfast"
  | "safari"
  | "lunch"
  | "pool"
  | "indoor_games"
  | "outdoor_games"
  | "high_tea"
  | "cultural"
  | "campfire"
  | "dinner"
  | "night_stay";

export type Difficulty = "easy" | "moderate" | "adventurous";

export interface Activity {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  time: string;
  duration: string;
  description: string;
  longDescription: string;
  category: ActivityCategory;
  difficulty: Difficulty;
  kidFriendly: boolean;
  familyFriendly: boolean;
  bestTime: string;
  price: number | null; // null = included
  icon: string; // emoji
  image: string;
  images: { url: string; alt: string }[];
  highlights: string[];
  subActivities?: string[];
}

export interface TimelineEntry {
  time: string;
  period: "morning" | "afternoon" | "evening" | "night";
  activity: Activity;
}

export interface ExperiencePackage {
  id: string;
  name: string;
  tagline: string;
  description: string;
  includes: string[];
  price: number;
  originalPrice: number;
  badge?: string;
  image: string;
  color: "gold" | "emerald" | "purple";
}

export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  category: GalleryCategory;
  isFeatured: boolean;
  isVideo: boolean;
  videoUrl?: string;
  width: number;
  height: number;
}

export type GalleryCategory =
  | "resort_exterior"
  | "luxury_rooms"
  | "swimming_pool"
  | "safari"
  | "wildlife"
  | "food"
  | "indoor_games"
  | "outdoor_games"
  | "tribal_dance"
  | "campfire"
  | "guest_experiences"
  | "events";

export interface GalleryCategoryInfo {
  id: GalleryCategory;
  label: string;
  icon: string;
}

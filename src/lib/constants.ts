export const SITE_NAME = "GirStay Premium";
export const SITE_DESCRIPTION =
  "Discover luxury resorts, farm stays, villas, and jungle lodges in Sasan Gir, Gujarat. Book your premium wildlife getaway today.";
export const SITE_URL = "https://girstay-premium.vercel.app";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Properties", href: "/properties" },
  { label: "Activities", href: "/activities" },
  { label: "Safari", href: "/activities/safari" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const PROPERTY_TYPES = [
  { value: "resort", label: "Resort", icon: "🏨" },
  { value: "villa", label: "Luxury Villa", icon: "🏡" },
  { value: "cottage", label: "Cottage", icon: "🏠" },
  { value: "farmhouse", label: "Farm House", icon: "🌿" },
  { value: "jungle_stay", label: "Jungle Stay", icon: "🌴" },
] as const;

export const AMENITY_CATEGORIES = {
  essentials: [
    { id: "wifi", label: "Free Wi-Fi", icon: "Wifi" },
    { id: "ac", label: "Air Conditioning", icon: "Snowflake" },
    { id: "parking", label: "Free Parking", icon: "Car" },
    { id: "power_backup", label: "Power Backup", icon: "Zap" },
  ],
  leisure: [
    { id: "pool", label: "Swimming Pool", icon: "Waves" },
    { id: "spa", label: "Spa & Wellness", icon: "Sparkles" },
    { id: "gym", label: "Fitness Center", icon: "Dumbbell" },
    { id: "games", label: "Indoor Games", icon: "Gamepad2" },
  ],
  dining: [
    { id: "restaurant", label: "Restaurant", icon: "UtensilsCrossed" },
    { id: "room_service", label: "Room Service", icon: "ConciergeBell" },
    { id: "bar", label: "Bar & Lounge", icon: "Wine" },
    { id: "bonfire", label: "Bonfire Dinner", icon: "Flame" },
  ],
  nature: [
    { id: "safari", label: "Safari Assist", icon: "Binoculars" },
    { id: "garden", label: "Garden", icon: "TreePine" },
    { id: "bird_watching", label: "Bird Watching", icon: "Bird" },
    { id: "nature_walk", label: "Nature Walk", icon: "Footprints" },
  ],
} as const;

export const FOOTER_LINKS = {
  explore: [
    { label: "All Properties", href: "/properties" },
    { label: "Activities & Experiences", href: "/activities" },
    { label: "Gir Jungle Safari", href: "/activities/safari" },
    { label: "Farm Stays", href: "/properties?type=farmhouse" },
    { label: "Jungle Lodges", href: "/properties?type=jungle_stay" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ],
  support: [
    { label: "Cancellation Policy", href: "/contact" },
    { label: "Terms of Service", href: "/contact" },
    { label: "Privacy Policy", href: "/contact" },
  ],
} as const;

export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/girstay",
  facebook: "https://facebook.com/girstay",
  twitter: "https://twitter.com/girstay",
  youtube: "https://youtube.com/@girstay",
  whatsapp: "https://wa.me/919876543210",
} as const;

export const CONTACT_INFO = {
  phone: "+91 98765 43210",
  email: "booking@girstay.com",
  address: "Sasan Gir, Junagadh District, Gujarat 362135, India",
} as const;

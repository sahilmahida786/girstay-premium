import type {
  Activity,
  TimelineEntry,
  ExperiencePackage,
  GalleryImage,
  GalleryCategoryInfo,
  GalleryCategory,
} from "@/types/activity";

// ═══════════════════════════════════════════
// Activities
// ═══════════════════════════════════════════

export const mockActivities: Activity[] = [
  {
    id: "act-morning-tea",
    slug: "morning-tea",
    name: "Morning Tea & Sunrise",
    shortName: "Sunrise Tea",
    time: "06:30 AM",
    duration: "45 min",
    description: "Enjoy tea while watching the sunrise over Gir's natural landscape.",
    longDescription: "Begin your day with a serene sunrise experience at our elevated viewing deck. Sip on freshly brewed Assam chai or artisanal herbal infusions as the first golden rays illuminate the Gir forest canopy. The panoramic views of the rolling hills and distant wildlife corridors make this a photographer's paradise. Our naturalists often join guests to share stories of the forest awakening — from the calls of Indian Peafowl to the distant roar of the Asiatic Lion.",
    category: "morning",
    difficulty: "easy",
    kidFriendly: true,
    familyFriendly: true,
    bestTime: "Year-round",
    price: null,
    icon: "☕",
    image: "https://images.unsplash.com/photo-1504630083234-14187a9df0f5?w=800&h=600&fit=crop",
    images: [
      { url: "https://images.unsplash.com/photo-1504630083234-14187a9df0f5?w=800&h=600&fit=crop", alt: "Sunrise tea with mountain view" },
      { url: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&h=600&fit=crop", alt: "Traditional Indian chai" },
      { url: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=800&h=600&fit=crop", alt: "Golden sunrise over forest" },
    ],
    highlights: ["Panoramic forest views", "Freshly brewed artisanal tea", "Naturalist-guided sunrise spotting", "Photography opportunity"],
  },
  {
    id: "act-breakfast",
    slug: "kathiawadi-food",
    name: "Traditional Kathiawadi Breakfast",
    shortName: "Kathiawadi Breakfast",
    time: "08:00 AM",
    duration: "1 hour",
    description: "Authentic local breakfast prepared fresh every morning.",
    longDescription: "Immerse yourself in the rich culinary heritage of Gujarat's Kathiawad region. Our chefs prepare an elaborate spread of traditional dishes including Thepla, Dhokla, Fafda-Jalebi, Poha, and freshly churned white butter with millet rotla. Each dish is crafted from locally sourced ingredients and time-honored recipes passed down through generations. For international guests, we also offer continental options alongside the authentic Kathiawadi spread.",
    category: "breakfast",
    difficulty: "easy",
    kidFriendly: true,
    familyFriendly: true,
    bestTime: "Year-round",
    price: null,
    icon: "🍳",
    image: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=800&h=600&fit=crop",
    images: [
      { url: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=800&h=600&fit=crop", alt: "Traditional Indian breakfast spread" },
      { url: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?w=800&h=600&fit=crop", alt: "Authentic Gujarati thali" },
      { url: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop", alt: "Fresh breakfast preparation" },
    ],
    highlights: ["Authentic Kathiawadi recipes", "Locally sourced ingredients", "Live cooking stations", "Continental options available"],
  },
  {
    id: "act-safari",
    slug: "safari",
    name: "Gir Jungle Safari",
    shortName: "Jungle Safari",
    time: "09:00 AM",
    duration: "3–4 hours",
    description: "Guided lion safari with expert naturalists.",
    longDescription: "Embark on the ultimate wildlife adventure into the Gir National Park — the last sanctuary of the Asiatic Lion. Board our premium open-roof safari jeeps with expert naturalists who possess decades of forest knowledge. Track lions, leopards, spotted deer, sambar, crocodiles, and over 300 bird species through diverse ecosystems of dry deciduous forest, scrubland, and riverine habitat. Our guides know the best routes, watering holes, and territories for maximizing sightings.",
    category: "safari",
    difficulty: "moderate",
    kidFriendly: true,
    familyFriendly: true,
    bestTime: "Oct – Jun",
    price: 3500,
    icon: "🦁",
    image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&h=600&fit=crop",
    images: [
      { url: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&h=600&fit=crop", alt: "Safari jeep in Gir forest" },
      { url: "https://images.unsplash.com/photo-1614531341773-3bff8b7cb3fc?w=800&h=600&fit=crop", alt: "Asiatic lion in natural habitat" },
      { url: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?w=800&h=600&fit=crop", alt: "Wildlife deer spotted on safari" },
      { url: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&h=600&fit=crop", alt: "Leopard in Gir" },
    ],
    highlights: ["Expert naturalist guide", "Premium open-roof jeep", "Asiatic Lion territory", "300+ bird species", "Photography guidance"],
  },
  {
    id: "act-lunch",
    slug: "premium-lunch",
    name: "Premium Lunch Experience",
    shortName: "Premium Lunch",
    time: "01:00 PM",
    duration: "1.5 hours",
    description: "Multi-cuisine and traditional Kathiawadi lunch.",
    longDescription: "Return from your safari adventure to a lavish lunch spread that celebrates the best of Indian and international cuisine. Our head chef curates a rotating menu featuring Kathiawadi specialties like Undhiyu, Sev Tameta, and Rotlo alongside pan-Indian dishes and continental offerings. Dine in our open-air restaurant overlooking the resort gardens, or opt for a private in-room experience. Vegetarian, vegan, and Jain dietary options are expertly crafted.",
    category: "lunch",
    difficulty: "easy",
    kidFriendly: true,
    familyFriendly: true,
    bestTime: "Year-round",
    price: null,
    icon: "🍽️",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
    images: [
      { url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop", alt: "Premium dining experience" },
      { url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop", alt: "Restaurant ambiance" },
      { url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop", alt: "Gourmet food presentation" },
    ],
    highlights: ["Multi-cuisine buffet", "Kathiawadi specialties", "Open-air dining", "Dietary accommodations"],
  },
  {
    id: "act-pool",
    slug: "pool-party",
    name: "Swimming Pool & Pool Party",
    shortName: "Pool Party",
    time: "03:00 PM",
    duration: "2 hours",
    description: "Music, refreshments, family fun.",
    longDescription: "Cool off in our temperature-controlled infinity pool that seems to merge with the Gir forest horizon. The afternoon pool experience features curated playlists, chilled beverages from our poolside bar, and a dedicated kids' splash zone with water play features. On weekends and holidays, we host themed pool parties with a DJ, mocktail stations, and poolside barbecue. Sun loungers, cabanas, and complimentary towels ensure a resort-grade experience.",
    category: "pool",
    difficulty: "easy",
    kidFriendly: true,
    familyFriendly: true,
    bestTime: "Oct – Apr",
    price: null,
    icon: "🏊",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&h=600&fit=crop",
    images: [
      { url: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&h=600&fit=crop", alt: "Luxury resort pool" },
      { url: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&h=600&fit=crop", alt: "Pool party atmosphere" },
      { url: "https://images.unsplash.com/photo-1519449556851-5720b33024e7?w=800&h=600&fit=crop", alt: "Poolside relaxation" },
    ],
    highlights: ["Infinity pool", "Kids splash zone", "Poolside bar & snacks", "Weekend DJ parties", "Cabana service"],
  },
  {
    id: "act-indoor",
    slug: "indoor-games",
    name: "Indoor Games Zone",
    shortName: "Indoor Games",
    time: "04:30 PM",
    duration: "1.5 hours",
    description: "Chess, Carrom, Table Tennis, and Board Games.",
    longDescription: "Step into our air-conditioned recreation center designed for all ages. Challenge your family to a tournament of Table Tennis, test your strategy with Chess, perfect your Carrom shots, or bond over classic Board Games. Our games zone features professional-grade equipment and a cozy lounge atmosphere with bean bags, ambient lighting, and a refreshment corner. Staff are available to organize mini-tournaments and teach classic Indian board games to international guests.",
    category: "indoor_games",
    difficulty: "easy",
    kidFriendly: true,
    familyFriendly: true,
    bestTime: "Year-round",
    price: null,
    icon: "🎯",
    image: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=800&h=600&fit=crop",
    images: [
      { url: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=800&h=600&fit=crop", alt: "Table tennis game" },
      { url: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=800&h=600&fit=crop", alt: "Chess board game" },
      { url: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=800&h=600&fit=crop", alt: "Board games collection" },
    ],
    highlights: ["Professional equipment", "Air-conditioned venue", "Mini-tournament hosting", "All ages welcome"],
    subActivities: ["Chess", "Carrom", "Table Tennis", "Board Games"],
  },
  {
    id: "act-outdoor",
    slug: "outdoor-games",
    name: "Outdoor Activities",
    shortName: "Outdoor Sports",
    time: "05:30 PM",
    duration: "1.5 hours",
    description: "Cricket, Football, Badminton, Volleyball, and Nature Walks.",
    longDescription: "As the afternoon heat mellows, our sprawling outdoor recreation grounds come alive. Lace up for a friendly match of Cricket on our manicured pitch, kick a Football, rally in Badminton, or spike in Volleyball. For those seeking serenity, join our guided Nature Walk through the resort's private trail that winds through native flora, bird habitats, and a butterfly garden. Our grounds staff provide all equipment and can organize team games for groups.",
    category: "outdoor_games",
    difficulty: "moderate",
    kidFriendly: true,
    familyFriendly: true,
    bestTime: "Oct – Mar",
    price: null,
    icon: "⚽",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop",
    images: [
      { url: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop", alt: "Outdoor sports ground" },
      { url: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&h=600&fit=crop", alt: "Badminton game" },
      { url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop", alt: "Nature walk trail" },
    ],
    highlights: ["Manicured sports grounds", "All equipment provided", "Guided nature walks", "Butterfly garden trail"],
    subActivities: ["Cricket", "Football", "Badminton", "Volleyball", "Nature Walks"],
  },
  {
    id: "act-hightea",
    slug: "high-tea",
    name: "High Tea & Snacks",
    shortName: "High Tea",
    time: "07:00 PM",
    duration: "45 min",
    description: "Evening snacks and beverages.",
    longDescription: "As golden hour paints the sky, retreat to our garden pavilion for an elegant High Tea service. Savour a curated selection of finger sandwiches, traditional Indian snacks like Samosa, Kachori, and Bhajiya, alongside European pastries and freshly baked cookies. Pair your bites with Darjeeling tea, filter coffee, fresh juices, or signature mocktails. This is the perfect time to share stories of the day's adventures with fellow travelers.",
    category: "high_tea",
    difficulty: "easy",
    kidFriendly: true,
    familyFriendly: true,
    bestTime: "Year-round",
    price: null,
    icon: "🫖",
    image: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?w=800&h=600&fit=crop",
    images: [
      { url: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?w=800&h=600&fit=crop", alt: "Elegant high tea spread" },
      { url: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?w=800&h=600&fit=crop", alt: "Evening snacks" },
    ],
    highlights: ["Garden pavilion setting", "Traditional & continental snacks", "Premium beverages", "Golden hour views"],
  },
  {
    id: "act-tribal-dance",
    slug: "tribal-dance",
    name: "Traditional Tribal Dance Show",
    shortName: "Tribal Dance",
    time: "08:00 PM",
    duration: "1 hour",
    description: "Authentic Adivasi cultural performance.",
    longDescription: "Witness an electrifying performance by local Adivasi (tribal) artists who bring centuries-old traditions to life through rhythm, movement, and storytelling. The show features Siddi Dhamal, Hudo dance, and other indigenous art forms accompanied by traditional instruments like the Dhol, Nagara, and Shehnai. These artists are custodians of oral traditions and their performances narrate tales of the forest, wildlife, and their symbiotic relationship with nature. Guest participation is encouraged during the finale.",
    category: "cultural",
    difficulty: "easy",
    kidFriendly: true,
    familyFriendly: true,
    bestTime: "Year-round",
    price: null,
    icon: "💃",
    image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=800&h=600&fit=crop",
    images: [
      { url: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=800&h=600&fit=crop", alt: "Traditional tribal dance performance" },
      { url: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=600&fit=crop", alt: "Cultural folk performance" },
      { url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop", alt: "Traditional musicians performing" },
    ],
    highlights: ["Authentic Adivasi performers", "Traditional instruments", "Guest participation", "Cultural storytelling"],
  },
  {
    id: "act-campfire",
    slug: "campfire",
    name: "Campfire Experience",
    shortName: "Campfire",
    time: "09:00 PM",
    duration: "1.5 hours",
    description: "Bonfire with music and storytelling.",
    longDescription: "Gather around a crackling bonfire under a canopy of stars for an unforgettable evening. Our campfire experience combines the warmth of the fire with acoustic music, safari storytelling by our naturalists, and toasted marshmallows. The Gir forest comes alive at night with sounds of the wild, adding an atmospheric backdrop that no indoor venue can match. Special requests for guitar sessions, poetry readings, or birthday celebrations are welcome.",
    category: "campfire",
    difficulty: "easy",
    kidFriendly: true,
    familyFriendly: true,
    bestTime: "Oct – Mar",
    price: null,
    icon: "🔥",
    image: "https://images.unsplash.com/photo-1614531341773-3bff8b7cb3fc?w=800&h=600&fit=crop",
    images: [
      { url: "https://images.unsplash.com/photo-1614531341773-3bff8b7cb3fc?w=800&h=600&fit=crop", alt: "Campfire under starry sky" },
      { url: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?w=800&h=600&fit=crop", alt: "Bonfire gathering" },
      { url: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&h=600&fit=crop", alt: "Starry night sky" },
    ],
    highlights: ["Under-the-stars ambiance", "Live acoustic music", "Safari storytelling", "Marshmallow roasting"],
  },
  {
    id: "act-dinner",
    slug: "premium-dinner",
    name: "Premium Dinner",
    shortName: "Starlit Dinner",
    time: "09:30 PM",
    duration: "1.5 hours",
    description: "Luxury dining under the stars.",
    longDescription: "Culminate your day with an extraordinary dining experience under the open sky. Our chefs prepare a multi-course dinner featuring the finest Kathiawadi cuisine alongside North Indian, South Indian, and continental offerings. The open-air dining area is adorned with lanterns, candles, and soft instrumental music. For special occasions, we arrange private candlelit dinners in our garden gazebo with a dedicated server and a customized menu.",
    category: "dinner",
    difficulty: "easy",
    kidFriendly: true,
    familyFriendly: true,
    bestTime: "Year-round",
    price: null,
    icon: "🌟",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
    images: [
      { url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop", alt: "Fine dining experience" },
      { url: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=600&fit=crop", alt: "Gourmet dinner plating" },
    ],
    highlights: ["Open-air dining", "Multi-course menu", "Private dining available", "Live instrumental music"],
  },
  {
    id: "act-night-stay",
    slug: "night-stay",
    name: "Night Stay Experience",
    shortName: "Luxury Stay",
    time: "11:00 PM",
    duration: "All night",
    description: "Luxury accommodation in the heart of Gir.",
    longDescription: "Retire to your luxuriously appointed room or villa nestled within the forest. Our accommodations blend modern comfort with rustic charm — premium mattresses, Egyptian cotton linens, rain showers, and private balconies overlooking the wilderness. Fall asleep to the sounds of nature and wake up to birdsong. From Forest View Deluxe Rooms to private Pool Villas, every option promises a sanctuary of comfort in the heart of Gir.",
    category: "night_stay",
    difficulty: "easy",
    kidFriendly: true,
    familyFriendly: true,
    bestTime: "Year-round",
    price: null,
    icon: "🌙",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop",
    images: [
      { url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop", alt: "Luxury resort room" },
      { url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop", alt: "Premium hotel suite" },
    ],
    highlights: ["Forest view rooms", "Premium amenities", "Private balcony", "Nature soundscape"],
  },
];

// ═══════════════════════════════════════════
// Day Experience Timeline
// ═══════════════════════════════════════════

export const dayTimeline: TimelineEntry[] = mockActivities.map((activity) => ({
  time: activity.time,
  period:
    activity.category === "morning" || activity.category === "breakfast"
      ? "morning"
      : activity.category === "safari" || activity.category === "lunch" || activity.category === "pool"
        ? "afternoon"
        : activity.category === "campfire" || activity.category === "dinner" || activity.category === "night_stay"
          ? "night"
          : "evening",
  activity,
}));

// ═══════════════════════════════════════════
// Experience Packages
// ═══════════════════════════════════════════

export const experiencePackages: ExperiencePackage[] = [
  {
    id: "pkg-family",
    name: "Family Package",
    tagline: "Perfect for Families",
    description: "Everything your family needs for a memorable Gir vacation — from cozy rooms to fun-filled activities for all ages.",
    includes: [
      "Luxury Accommodation (2 nights)",
      "Breakfast, Lunch & Dinner",
      "Swimming Pool Access",
      "Indoor Games Zone",
      "Outdoor Sports Activities",
      "High Tea & Snacks",
      "Kids Activity Program",
    ],
    price: 24999,
    originalPrice: 32000,
    badge: "Family Favorite",
    image: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=800&h=400&fit=crop",
    color: "emerald",
  },
  {
    id: "pkg-adventure",
    name: "Adventure Package",
    tagline: "For the Wild at Heart",
    description: "An adrenaline-packed experience combining jungle safari, nature exploration, and wildlife photography with expert guides.",
    includes: [
      "Gir Jungle Safari (2 trips)",
      "Guided Nature Walk",
      "Wildlife Photography Session",
      "Campfire Evening",
      "Breakfast & Lunch",
      "Expert Naturalist Guide",
    ],
    price: 18999,
    originalPrice: 25000,
    image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&h=400&fit=crop",
    color: "gold",
  },
  {
    id: "pkg-luxury",
    name: "Luxury Package",
    tagline: "The Ultimate Gir Experience",
    description: "The most exclusive resort experience — premium suite, VIP safari, private dining, spa treatments, and personalized concierge service.",
    includes: [
      "Premium Suite (2 nights)",
      "VIP Safari with Private Jeep",
      "Pool Party & Cabana Service",
      "Campfire Dinner Experience",
      "Tribal Dance Private Show",
      "Spa & Wellness Session",
      "24/7 Concierge Service",
      "Airport Transfer",
    ],
    price: 49999,
    originalPrice: 65000,
    badge: "Most Popular",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=400&fit=crop",
    color: "purple",
  },
];

// ═══════════════════════════════════════════
// Gallery
// ═══════════════════════════════════════════

export const galleryCategories: GalleryCategoryInfo[] = [
  { id: "resort_exterior", label: "Resort Exterior", icon: "🏨" },
  { id: "luxury_rooms", label: "Luxury Rooms", icon: "🛏️" },
  { id: "swimming_pool", label: "Swimming Pool", icon: "🏊" },
  { id: "safari", label: "Safari Experience", icon: "🦁" },
  { id: "wildlife", label: "Wildlife Photography", icon: "📸" },
  { id: "food", label: "Kathiawadi Food", icon: "🍛" },
  { id: "indoor_games", label: "Indoor Games", icon: "🎯" },
  { id: "outdoor_games", label: "Outdoor Games", icon: "⚽" },
  { id: "tribal_dance", label: "Tribal Dance Show", icon: "💃" },
  { id: "campfire", label: "Campfire Nights", icon: "🔥" },
  { id: "guest_experiences", label: "Guest Experiences", icon: "😊" },
  { id: "events", label: "Events & Celebrations", icon: "🎉" },
];

export const galleryImages: GalleryImage[] = [
  // Resort Exterior
  { id: "g01", url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop", alt: "Luxury resort entrance", category: "resort_exterior", isFeatured: true, isVideo: false, width: 800, height: 600 },
  { id: "g02", url: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=1000&fit=crop", alt: "Resort garden pathway", category: "resort_exterior", isFeatured: false, isVideo: false, width: 800, height: 1000 },
  { id: "g03", url: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop", alt: "Resort aerial view", category: "resort_exterior", isFeatured: false, isVideo: false, width: 800, height: 600 },
  { id: "g04", url: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=500&fit=crop", alt: "Resort night illumination", category: "resort_exterior", isFeatured: false, isVideo: false, width: 800, height: 500 },
  { id: "g05", url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop", alt: "Resort pool area exterior", category: "resort_exterior", isFeatured: false, isVideo: false, width: 800, height: 600 },

  // Luxury Rooms
  { id: "g06", url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop", alt: "Premium suite with forest view", category: "luxury_rooms", isFeatured: true, isVideo: false, width: 800, height: 600 },
  { id: "g07", url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=1000&fit=crop", alt: "Deluxe room interior", category: "luxury_rooms", isFeatured: false, isVideo: false, width: 800, height: 1000 },
  { id: "g08", url: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&h=600&fit=crop", alt: "Luxury bathroom", category: "luxury_rooms", isFeatured: false, isVideo: false, width: 800, height: 600 },
  { id: "g09", url: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=500&fit=crop", alt: "Room with private balcony", category: "luxury_rooms", isFeatured: false, isVideo: false, width: 800, height: 500 },
  { id: "g10", url: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop", alt: "Villa bedroom", category: "luxury_rooms", isFeatured: false, isVideo: false, width: 800, height: 600 },

  // Swimming Pool
  { id: "g11", url: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&h=600&fit=crop", alt: "Infinity pool at sunset", category: "swimming_pool", isFeatured: true, isVideo: false, width: 800, height: 600 },
  { id: "g12", url: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&h=1000&fit=crop", alt: "Pool party atmosphere", category: "swimming_pool", isFeatured: false, isVideo: false, width: 800, height: 1000 },
  { id: "g13", url: "https://images.unsplash.com/photo-1519449556851-5720b33024e7?w=800&h=600&fit=crop", alt: "Poolside cabanas", category: "swimming_pool", isFeatured: false, isVideo: false, width: 800, height: 600 },
  { id: "g14", url: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&h=500&fit=crop", alt: "Kids pool area", category: "swimming_pool", isFeatured: false, isVideo: false, width: 800, height: 500 },

  // Safari
  { id: "g15", url: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&h=600&fit=crop", alt: "Safari jeep in Gir forest", category: "safari", isFeatured: true, isVideo: false, width: 800, height: 600 },
  { id: "g16", url: "https://images.unsplash.com/photo-1614531341773-3bff8b7cb3fc?w=800&h=1000&fit=crop", alt: "Lion sighting on safari", category: "safari", isFeatured: false, isVideo: false, width: 800, height: 1000 },
  { id: "g17", url: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?w=800&h=600&fit=crop", alt: "Deer in forest", category: "safari", isFeatured: false, isVideo: false, width: 800, height: 600 },
  { id: "g18", url: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&h=600&fit=crop", alt: "Leopard sighting", category: "safari", isFeatured: false, isVideo: false, width: 800, height: 600 },
  { id: "g19", url: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=500&fit=crop", alt: "Forest trail on safari", category: "safari", isFeatured: false, isVideo: false, width: 800, height: 500 },

  // Wildlife Photography
  { id: "g20", url: "https://images.unsplash.com/photo-1614531341773-3bff8b7cb3fc?w=800&h=600&fit=crop", alt: "Peacock in wild", category: "wildlife", isFeatured: true, isVideo: false, width: 800, height: 600 },
  { id: "g21", url: "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&h=1000&fit=crop", alt: "Bird in flight", category: "wildlife", isFeatured: false, isVideo: false, width: 800, height: 1000 },
  { id: "g22", url: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?w=800&h=600&fit=crop", alt: "Wildlife crocodile", category: "wildlife", isFeatured: false, isVideo: false, width: 800, height: 600 },
  { id: "g23", url: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=800&h=600&fit=crop", alt: "Monkey in trees", category: "wildlife", isFeatured: false, isVideo: false, width: 800, height: 600 },

  // Kathiawadi Food
  { id: "g24", url: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=800&h=600&fit=crop", alt: "Traditional Gujarati thali", category: "food", isFeatured: true, isVideo: false, width: 800, height: 600 },
  { id: "g25", url: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?w=800&h=1000&fit=crop", alt: "Indian breakfast spread", category: "food", isFeatured: false, isVideo: false, width: 800, height: 1000 },
  { id: "g26", url: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop", alt: "Fresh food preparation", category: "food", isFeatured: false, isVideo: false, width: 800, height: 600 },
  { id: "g27", url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=500&fit=crop", alt: "Gourmet dinner plating", category: "food", isFeatured: false, isVideo: false, width: 800, height: 500 },
  { id: "g28", url: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=600&fit=crop", alt: "BBQ and grilled items", category: "food", isFeatured: false, isVideo: false, width: 800, height: 600 },

  // Indoor Games
  { id: "g29", url: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=800&h=600&fit=crop", alt: "Table tennis", category: "indoor_games", isFeatured: true, isVideo: false, width: 800, height: 600 },
  { id: "g30", url: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=800&h=1000&fit=crop", alt: "Chess game in progress", category: "indoor_games", isFeatured: false, isVideo: false, width: 800, height: 1000 },
  { id: "g31", url: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=800&h=600&fit=crop", alt: "Board games collection", category: "indoor_games", isFeatured: false, isVideo: false, width: 800, height: 600 },

  // Outdoor Games
  { id: "g32", url: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop", alt: "Cricket on resort grounds", category: "outdoor_games", isFeatured: true, isVideo: false, width: 800, height: 600 },
  { id: "g33", url: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&h=1000&fit=crop", alt: "Badminton game", category: "outdoor_games", isFeatured: false, isVideo: false, width: 800, height: 1000 },
  { id: "g34", url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop", alt: "Nature walk path", category: "outdoor_games", isFeatured: false, isVideo: false, width: 800, height: 600 },

  // Tribal Dance
  { id: "g35", url: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=800&h=600&fit=crop", alt: "Tribal dance performance", category: "tribal_dance", isFeatured: true, isVideo: false, width: 800, height: 600 },
  { id: "g36", url: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=1000&fit=crop", alt: "Folk dancers in costume", category: "tribal_dance", isFeatured: false, isVideo: false, width: 800, height: 1000 },
  { id: "g37", url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop", alt: "Traditional musicians", category: "tribal_dance", isFeatured: false, isVideo: false, width: 800, height: 600 },

  // Campfire
  { id: "g38", url: "https://images.unsplash.com/photo-1614531341773-3bff8b7cb3fc?w=800&h=600&fit=crop", alt: "Campfire under stars", category: "campfire", isFeatured: true, isVideo: false, width: 800, height: 600 },
  { id: "g39", url: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?w=800&h=1000&fit=crop", alt: "Bonfire gathering", category: "campfire", isFeatured: false, isVideo: false, width: 800, height: 1000 },
  { id: "g40", url: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&h=600&fit=crop", alt: "Milky way night sky", category: "campfire", isFeatured: false, isVideo: false, width: 800, height: 600 },

  // Guest Experiences
  { id: "g41", url: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=800&h=600&fit=crop", alt: "Family enjoying resort", category: "guest_experiences", isFeatured: true, isVideo: false, width: 800, height: 600 },
  { id: "g42", url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=1000&fit=crop", alt: "Friends group photo", category: "guest_experiences", isFeatured: false, isVideo: false, width: 800, height: 1000 },
  { id: "g43", url: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?w=800&h=600&fit=crop", alt: "Couple on vacation", category: "guest_experiences", isFeatured: false, isVideo: false, width: 800, height: 600 },
  { id: "g44", url: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&h=600&fit=crop", alt: "Guest enjoying nature", category: "guest_experiences", isFeatured: false, isVideo: false, width: 800, height: 600 },

  // Events
  { id: "g45", url: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&h=600&fit=crop", alt: "Wedding celebration at resort", category: "events", isFeatured: true, isVideo: false, width: 800, height: 600 },
  { id: "g46", url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=1000&fit=crop", alt: "Corporate event setup", category: "events", isFeatured: false, isVideo: false, width: 800, height: 1000 },
  { id: "g47", url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop", alt: "Birthday celebration", category: "events", isFeatured: false, isVideo: false, width: 800, height: 600 },
  { id: "g48", url: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&h=500&fit=crop", alt: "New year party", category: "events", isFeatured: false, isVideo: false, width: 800, height: 500 },
];

// ═══════════════════════════════════════════
// Helpers
// ═══════════════════════════════════════════

/** Get gallery images by category */
export function getGalleryByCategory(category: GalleryCategory): GalleryImage[] {
  return galleryImages.filter((img) => img.category === category);
}

/** Get activity by slug */
export function getActivityBySlug(slug: string): Activity | undefined {
  return mockActivities.find((a) => a.slug === slug);
}

/** Activities that have dedicated SEO pages */
export const seoActivitySlugs = [
  "safari",
  "pool-party",
  "campfire",
  "tribal-dance",
  "kathiawadi-food",
  "indoor-games",
  "outdoor-games",
] as const;

import { Review } from "@/types/property";

export const mockReviews: Review[] = [
  {
    id: "rev-1",
    userId: "u1",
    userName: "Priya Sharma",
    userAvatar: "",
    rating: 5,
    comment:
      "Absolutely magical experience! The forest view from our room was breathtaking. The staff arranged a private safari where we spotted 3 lions. The bonfire dinner was the highlight of our trip. Will definitely come back!",
    isVerified: true,
    createdAt: "2025-03-15T10:00:00Z",
  },
  {
    id: "rev-2",
    userId: "u2",
    userName: "Rajesh Patel",
    userAvatar: "",
    rating: 5,
    comment:
      "We celebrated our anniversary here and it was perfect. The villa with private pool was a dream. Butler service was impeccable. The organic Kathiyawadi thali was the best we've ever had. 10/10 luxury experience.",
    isVerified: true,
    createdAt: "2025-02-28T10:00:00Z",
  },
  {
    id: "rev-3",
    userId: "u3",
    userName: "Michael Thompson",
    userAvatar: "",
    rating: 4,
    comment:
      "Amazing wildlife resort! As an international visitor, I was impressed by the hospitality and the quality of the safari experience. The naturalist guide was incredibly knowledgeable. Only minor issue was patchy WiFi in the rooms.",
    isVerified: true,
    createdAt: "2025-02-10T10:00:00Z",
  },
  {
    id: "rev-4",
    userId: "u4",
    userName: "Anita Desai",
    userAvatar: "",
    rating: 5,
    comment:
      "Took my parents here for their 60th birthday celebration. The farmhouse retreat was exactly what we needed — peaceful, beautiful, and the food was straight from the farm. The kids loved the mango picking activity!",
    isVerified: true,
    createdAt: "2025-01-20T10:00:00Z",
  },
  {
    id: "rev-5",
    userId: "u5",
    userName: "Vikram Singh",
    userAvatar: "",
    rating: 5,
    comment:
      "The jungle lodge treehouse was a once-in-a-lifetime experience. Sleeping among the treetops, waking up to bird calls, and the guided night safari were extraordinary. This is how you experience the real Gir!",
    isVerified: true,
    createdAt: "2025-01-05T10:00:00Z",
  },
  {
    id: "rev-6",
    userId: "u6",
    userName: "Sneha Joshi",
    userAvatar: "",
    rating: 4,
    comment:
      "Lovely property with excellent amenities. The yoga sessions at sunrise were soul-cleansing. The Ayurvedic spa treatments were top-notch. Perfect for anyone seeking a wellness retreat in nature.",
    isVerified: true,
    createdAt: "2024-12-18T10:00:00Z",
  },
];

export const testimonials = [
  {
    id: "t-1",
    name: "Priya Sharma",
    location: "Mumbai, Maharashtra",
    rating: 5,
    comment:
      "The most stunning resort experience I've ever had in India. GirStay made booking seamless and the property exceeded all expectations. We saw 3 Asiatic lions on our safari!",
    propertyName: "The Fern Gir Forest Resort",
    stayDate: "March 2025",
  },
  {
    id: "t-2",
    name: "Rajesh & Meera Patel",
    location: "Ahmedabad, Gujarat",
    rating: 5,
    comment:
      "Our anniversary trip was made perfect by GirStay. The private villa with plunge pool was an absolute dream. Butler service, gourmet dining, and the tranquility of nature — pure bliss.",
    propertyName: "Gir Pride Luxury Villa",
    stayDate: "February 2025",
  },
  {
    id: "t-3",
    name: "Michael Thompson",
    location: "London, UK",
    rating: 5,
    comment:
      "As a wildlife photographer, Gir has always been on my bucket list. GirStay connected me with the perfect jungle lodge. The treehouse suite and expert naturalist guide made this trip unforgettable.",
    propertyName: "Wild Trail Jungle Lodge",
    stayDate: "January 2025",
  },
  {
    id: "t-4",
    name: "Anita Desai",
    location: "Delhi, India",
    rating: 5,
    comment:
      "Took the entire family for a weekend and everyone had a blast. Kids loved the farm activities, elders enjoyed the peaceful surroundings, and we all bonded over authentic Kathiyawadi meals.",
    propertyName: "Saavaj Farmhouse Retreat",
    stayDate: "December 2024",
  },
];

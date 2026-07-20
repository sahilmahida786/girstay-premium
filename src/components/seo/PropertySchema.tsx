import { Property } from "@/types/property";

interface PropertySchemaProps {
  property: Property;
}

export function PropertySchema({ property }: PropertySchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: property.name,
    description: property.description,
    image: property.images[0]?.url || "https://girstay-premium.vercel.app/og-image.jpg",
    "@id": `https://girstay-premium.vercel.app/properties/${property.id}`,
    url: `https://girstay-premium.vercel.app/properties/${property.id}`,
    telephone: "+91-98765-43210",
    address: {
      "@type": "PostalAddress",
      streetAddress: property.location.address,
      addressLocality: "Sasan Gir",
      addressRegion: "Gujarat",
      postalCode: "362135",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: property.location.coordinates.lat,
      longitude: property.location.coordinates.lng,
    },
    priceRange: "₹₹₹",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: property.rating.toString(),
      reviewCount: property.reviewCount.toString(),
    },
    amenityFeature: property.amenities.map(amenity => ({
      "@type": "LocationFeatureSpecification",
      name: amenity,
      value: true,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

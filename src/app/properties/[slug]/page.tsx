import { notFound } from "next/navigation";
import { mockProperties } from "@/data/mockProperties";
import { PropertyDetailClient } from "./PropertyDetailClient";
import type { Metadata } from "next";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return mockProperties.map((property) => ({
    slug: property.slug,
  }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const property = mockProperties.find((p) => p.slug === slug);
  if (!property) return { title: "Property Not Found" };

  return {
    title: `${property.name} — Luxury ${property.type === "resort" ? "Resort" : "Stay"} in Sasan Gir`,
    description: property.shortDescription,
    openGraph: {
      title: property.name,
      description: property.shortDescription,
      images: property.images[0]?.url ? [{ url: property.images[0].url }] : [],
    },
  };
}

export default async function PropertyDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const property = mockProperties.find((p) => p.slug === slug);

  if (!property) {
    notFound();
  }

  return <PropertyDetailClient property={property} />;
}

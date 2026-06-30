import type { MetadataRoute } from "next";
import { mockProperties } from "@/data/mockProperties";
import { mockActivities } from "@/data/mockActivities";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://girstay.com";

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "daily", priority: 1 },
    { url: `${baseUrl}/properties`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/activities`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
  ];

  const propertyPages: MetadataRoute.Sitemap = mockProperties.map((property) => ({
    url: `${baseUrl}/properties/${property.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const activityPages: MetadataRoute.Sitemap = mockActivities.map((activity) => ({
    url: `${baseUrl}/activities/${activity.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...propertyPages, ...activityPages];
}

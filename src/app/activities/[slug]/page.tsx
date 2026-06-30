import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getActivityBySlug, seoActivitySlugs, mockActivities } from "@/data/mockActivities";
import { ActivityDetailClient } from "@/components/activities/ActivityDetailClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  // Generate pages for SEO slugs + all activity slugs
  const allSlugs = new Set([
    ...seoActivitySlugs,
    ...mockActivities.map((a) => a.slug),
  ]);

  return Array.from(allSlugs).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const activity = getActivityBySlug(slug);

  if (!activity) {
    return { title: "Activity Not Found | GirStay Premium" };
  }

  return {
    title: `${activity.name} | Activities | GirStay Premium`,
    description: activity.longDescription.slice(0, 160),
    keywords: [
      activity.name,
      "Sasan Gir",
      "Gir activities",
      activity.category,
      "resort experience",
    ],
    openGraph: {
      title: `${activity.name} — GirStay Premium`,
      description: activity.description,
      images: [{ url: activity.image, width: 800, height: 600, alt: activity.name }],
      type: "website",
    },
  };
}

export default async function ActivityDetailPage({ params }: Props) {
  const { slug } = await params;
  const activity = getActivityBySlug(slug);

  if (!activity) {
    notFound();
  }

  return <ActivityDetailClient activity={activity} />;
}

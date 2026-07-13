import type { MetadataRoute } from "next";
import { analyses } from "@/data/analyses";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://jaime-value-architecture.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/platform",
    "/methodology",
    "/domains",
    "/analysis",
    "/finance-module",
    "/disclosures",
    "/donations",
    "/contact",
    "/privacy",
    "/terms",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
    })),

    ...analyses.map((analysis) => ({
      url: `${baseUrl}/analysis/${analysis.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}

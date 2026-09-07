import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.maximumpixel.online";

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-09-07T00:00:00.000Z"),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date("2026-09-07T00:00:00.000Z"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/our-work`,
      lastModified: new Date("2026-09-07T00:00:00.000Z"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date("2026-09-07T00:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date("2026-08-31T00:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date("2026-09-07T00:00:00.000Z"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date("2026-09-07T00:00:00.000Z"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}

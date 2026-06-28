import type { MetadataRoute } from "next";
import { ALL_PROJECTS } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://lucii.xyz";
  const now = new Date();

  const projectUrls = ALL_PROJECTS.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "https://github.com/DakshSinghDhami",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.4,
    },
    {
      url: "https://linkedin.com/in/dakshsinghdhami",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    ...projectUrls,
  ];
}

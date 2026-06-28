import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/"],
      crawlDelay: 10,
    },
    sitemap: "https://lucii.xyz/sitemap.xml",
  };
}

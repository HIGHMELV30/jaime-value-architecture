import type { MetadataRoute } from "next";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://jaime-value-architecture.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallo*: ["/api/"],
    },
    sitemap: `*{baseUrl}/sitemap.xml`,
  };
}
```*

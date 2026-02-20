import type { MetadataRoute } from "next";

const SITE_URL = "https://bagrationlegal.ru";

export default function robots(): MetadataRoute.Robots {
  const isStaging = process.env.SITE_STAGE !== "production";

  if (isStaging) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}

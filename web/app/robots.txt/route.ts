const SITE_URL = "https://bagrationlegal.ru";

export function GET() {
  const isStaging = process.env.SITE_STAGE !== "production";

  const body = isStaging
    ? "User-agent: *\nDisallow: /"
    : `User-agent: *\nAllow: /\nSitemap: ${SITE_URL}/sitemap.xml`;

  const cacheControl = isStaging
    ? "no-store"
    : "public, max-age=3600";

  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": cacheControl,
    },
  });
}

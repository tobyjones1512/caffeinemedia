import type { MetadataRoute } from "next";

const base = "https://caffeinemedia.com";

// Emitted as a static sitemap.xml at build time (required by `output: export`).
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // Trailing slashes to match the exported URLs (see `trailingSlash` in next.config).
  const routes = ["/", "/about/", "/studios/", "/post/", "/films/", "/contact/"];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "/" ? 1 : 0.8,
  }));
}

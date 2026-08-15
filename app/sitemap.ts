import type { MetadataRoute } from "next";

const base = "https://caffeinemedia.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/studios", "/post", "/films", "/contact"];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}

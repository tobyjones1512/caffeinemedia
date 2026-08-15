import type { MetadataRoute } from "next";

import { company } from "@/lib/content";

// Emitted as a static robots.txt at build time (required by `output: export`).
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${company.url}/sitemap.xml`,
  };
}

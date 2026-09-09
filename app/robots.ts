import type { MetadataRoute } from "next"

import { siteUrl } from "@/config/site"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Los formularios de pacientes y sus páginas de gracia no aportan a
      // búsqueda y no deben indexarse.
      disallow: ["/research", "/experience", "/api/"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}

import type { MetadataRoute } from "next"

import { blogPosts } from "@/lib/blog-posts"
import { siteUrl } from "@/config/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const articulos = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.dateISO),
    changeFrequency: "yearly" as const,
    priority: post.esPilar ? 0.8 : 0.6,
  }))

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...articulos,
    {
      url: `${siteUrl}/privacy`,
      changeFrequency: "yearly",
      priority: 0.1,
    },
  ]
}

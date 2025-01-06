import { allPosts } from "contentlayer/generated"
import { MetadataRoute } from "next"
import type { BlogPost } from "@/types/post"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://personaljournal.nl" // Replace with your domain

  // Get all blog posts
  const blogPosts = (allPosts as BlogPost[]).map((post) => ({
    url: `${baseUrl}${post.url}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  // Add static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
  ]

  return [...staticPages, ...blogPosts]
} 
import type { BlogPost } from "@/types/post"

export function generateWebsiteStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Personal Journal",
    description: "Your daily companion for personal reflection and growth",
    url: "https://personaljournal.nl",
  }
}

export function generateBlogPostStructuredData(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: post.image,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
  }
} 
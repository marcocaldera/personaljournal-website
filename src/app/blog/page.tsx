import { allPosts } from "contentlayer/generated"
import { compareDesc } from "date-fns"
import type { BlogPost } from "@/types/post"
import { Metadata } from "next"
import { defaultMetadata } from "../metadata"
import { PostList } from "@/components/blog/post-list"

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights, tips, and stories about journaling and personal growth",
  openGraph: {
    ...defaultMetadata.openGraph,
    title: "Blog | Journal App",
    description: "Insights, tips, and stories about journaling and personal growth",
  },
}

export default function BlogPage() {
  const posts = (allPosts as BlogPost[]).sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  )

  return <PostList posts={posts} />
} 
import { allPosts } from "contentlayer/generated"
import { notFound } from "next/navigation"
import { PostContent } from "@/components/blog/post-content"
import type { BlogPost } from "@/types/post"
import { Metadata } from "next"
import { defaultMetadata } from "../../metadata"
import { generateBlogPostStructuredData } from "../../structured-data"
import { LinkAnalytics } from "@/components/analytics/link-analytics"
import { BlogPostAnalytics } from "@/components/blog/blog-post-analytics";

interface PostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const post = (allPosts as BlogPost[]).find(
    (post) => post._raw.flattenedPath.replace(/^posts\//, '') === params.slug
  )

  if (!post) {
    return defaultMetadata
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      ...defaultMetadata.openGraph,
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  }
}

export async function generateStaticParams() {
  return (allPosts as BlogPost[]).map((post) => ({
    slug: post._raw.flattenedPath.replace(/^posts\//, ''),
  }))
}

export default function PostPage({ params }: PostPageProps) {
  const post = (allPosts as BlogPost[]).find(
    (post) => post._raw.flattenedPath.replace(/^posts\//, '') === params.slug
  )

  if (!post) {
    notFound()
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBlogPostStructuredData(post)),
        }}
      />
      <BlogPostAnalytics post={post} />
      <LinkAnalytics />
      <article className="py-24 bg-light dark:bg-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <PostContent post={post} />
        </div>
      </article>
    </>
  )
} 
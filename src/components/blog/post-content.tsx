"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { format, parseISO } from "date-fns"
import { MDXContent } from "@/components/mdx-content"
import type { BlogPost } from "@/types/post"

export function PostContent({ post }: { post: BlogPost }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      <header className="text-center mb-12">
        <time
          dateTime={post.date}
          className="text-surface/60 dark:text-light/60"
        >
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
        <h1 className="mt-4 text-4xl font-bold text-surface dark:text-light sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-4 text-lg text-surface/80 dark:text-light/80">
          {post.description}
        </p>
        <p className="mt-6 text-surface/60 dark:text-light/60">
          By {post.author}
        </p>
      </header>

      <div className="prose prose-lg dark:prose-invert mx-auto">
        <MDXContent code={post.body.code} />
      </div>
    </motion.div>
  )
} 
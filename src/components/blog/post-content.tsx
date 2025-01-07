"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { format, parseISO } from "date-fns"
import { MDXContent } from "@/components/mdx-content"
import { AppStoreButton } from "@/components/store/app-store-button"
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

      {/* App Store CTA Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-16 pt-8 border-t border-primary/10 text-center"
      >
        <h2 className="text-2xl font-bold text-surface dark:text-light mb-4">
          Start Your Journey Today
        </h2>
        <p className="text-surface/80 dark:text-light/80 mb-6">
          Download Personal Journal and begin capturing your thoughts and memories.
        </p>
        <div className="flex justify-center">
          <AppStoreButton />
        </div>
      </motion.div>
    </motion.div>
  )
} 
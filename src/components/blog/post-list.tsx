"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import type { BlogPost } from "@/types/post"

export function PostList({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="py-24 bg-light dark:bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-surface dark:text-light sm:text-5xl">
            Our Blog
          </h1>
          <p className="mt-4 text-lg text-surface/80 dark:text-light/80 max-w-2xl mx-auto">
            Insights, tips, and stories about journaling and personal growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-surface rounded-lg overflow-hidden shadow-lg"
            >
              <Link href={post.url}>
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <time
                    dateTime={post.date}
                    className="text-sm text-surface/60 dark:text-light/60"
                  >
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <h2 className="mt-2 text-xl font-semibold text-surface dark:text-light">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-surface/80 dark:text-light/80 line-clamp-3">
                    {post.description}
                  </p>
                  <div className="mt-4 flex items-center">
                    <span className="text-sm text-surface/60 dark:text-light/60">
                      By {post.author}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  )
} 
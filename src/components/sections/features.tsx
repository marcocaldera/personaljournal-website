"use client"

import { motion } from "framer-motion"
import {
  PencilSquareIcon,
  ChartBarIcon,
  TagIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline"

const features = [
  {
    name: "Easy Journaling",
    description: "Write your thoughts effortlessly with our intuitive interface and rich text editor.",
    icon: PencilSquareIcon,
  },
  {
    name: "Mood Tracking",
    description: "Track your emotional journey with visual insights and patterns over time.",
    icon: ChartBarIcon,
  },
  {
    name: "Smart Tags",
    description: "Organize your entries with intelligent tagging and easy search functionality.",
    icon: TagIcon,
  },
  {
    name: "Cloud Sync",
    description: "Your journals are safely backed up and accessible across all your devices.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Private & Secure",
    description: "End-to-end encryption ensures your thoughts remain completely private.",
    icon: LockClosedIcon,
  },
  {
    name: "AI Insights",
    description: "Gain meaningful insights about your well-being through AI-powered analysis.",
    icon: SparklesIcon,
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 bg-light dark:bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-surface dark:text-light sm:text-4xl">
              Everything you need for your{" "}
              <span className="text-primary">daily reflections</span>
            </h2>
            <p className="mt-4 text-lg text-surface/80 dark:text-light/80 max-w-2xl mx-auto">
              Our app provides all the tools you need to maintain a meaningful
              journaling practice and track your personal growth.
            </p>
          </motion.div>

          <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="absolute left-1/2 -translate-x-1/2 -top-10">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20">
                    <feature.icon
                      className="h-8 w-8 text-primary"
                      aria-hidden="true"
                    />
                  </div>
                </div>
                <div className="pt-8 text-center">
                  <h3 className="text-lg font-semibold text-surface dark:text-light">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-surface/80 dark:text-light/80">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 
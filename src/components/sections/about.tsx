"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-24 bg-light dark:bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-[400px] lg:h-[600px]"
          >
            <Image
              src="/about-image.svg"
              alt="About our journey"
              fill
              className="object-contain"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-surface dark:text-light sm:text-4xl mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-surface/80 dark:text-light/80">
              <p>
                We started this journey with a simple mission: to help people
                capture their thoughts and feelings in a meaningful way.
              </p>
              <p>
                Our team of mindfulness experts and developers worked together to
                create an app that makes journaling both easy and insightful.
              </p>
              <p>
                Today, we&apos;re proud to help thousands of people around the world
                maintain their daily journaling practice and discover insights
                about themselves.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 
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
                At the heart of our philosophy lies a simple yet powerful belief: everyone deserves a safe space to explore their thoughts and nurture their mental wellbeing.
              </p>
              <p>
                We recognise that mental health is paramount in today&apos;s world. That&apos;s why we&apos;ve created this thoughtfully designed space where you can freely express yourself through journaling.
              </p>
              <p>
                Our commitment goes beyond just providing a digital journal—we&apos;re dedicated to supporting your journey towards better mental health and self-discovery, one entry at a time.
              </p>
              <p>
                We believe that financial circumstances should never be a barrier to mental wellbeing. If you&apos;re facing hardship and need access to our premium features, please reach out—we&apos;ll ensure you get the support you need, free of charge.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 
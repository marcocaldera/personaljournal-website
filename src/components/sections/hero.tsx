"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"
export function Hero() {
    const { theme } = useTheme()

    
  return (
    <section className="min-h-screen flex items-center justify-center bg-light dark:bg-dark pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-surface dark:text-light mb-6">
              Your Personal Journey,{" "}
              <span className="text-primary">Digitally Captured</span>
            </h1>
            <p className="text-lg text-surface/80 dark:text-light/80 mb-8">
              Transform your daily reflections into meaningful insights. Download
              our app and start your journaling journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="https://apps.apple.com/nl/app/personal-journal-secure-diary/id1553430631"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-90 transition-opacity"
            >
              <Image
                src={theme === 'dark' ? "/app_store_white.svg" : "/app_store_black.svg"}
                alt="Download on the App Store"
                width={120}
                height={40}
                priority
              />
            </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[600px]"
          >
            <Image
              src="/mockup.svg"
              alt="App mockup"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
} 
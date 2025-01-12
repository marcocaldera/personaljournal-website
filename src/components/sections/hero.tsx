"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useTheme } from "next-themes"
import { AppStoreButton } from "../store/app-store-button"
// import { GooglePlayButton } from "../store/google-play-button"

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
            className="lg:self-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-surface dark:text-light mb-6">
              Your Personal Journey,{" "}
              <span className="text-primary">Digitally Captured</span>
            </h1>
            <p className="text-lg text-surface/80 dark:text-light/80 mb-8">
              Transform your daily reflections into meaningful insights. Download
              our app and start journaling today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <AppStoreButton />
              {/* <GooglePlayButton /> */}
            </div>
          </motion.div>
          
          {/* Screenshots Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[600px] lg:h-[700px] flex items-center justify-center"
          >
            <div className="relative w-[600px] h-full flex items-center justify-center">
              {/* Primary Screenshot */}
              <motion.div
                initial={{ y: 0, rotate: -2 }}
                animate={{ 
                  y: [-3, 3, -3],
                  rotate: [-2, -1.5, -2],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut",
                }}
                className="absolute left-[5%] w-[280px] z-20 hover:z-30"
              >
                <motion.div 
                  className="relative"
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Image
                    src="/screenshot1.png"
                    alt="Journal writing interface"
                    width={280}
                    height={560}
                    className="rounded-[2.5rem]"
                    priority
                  />
                </motion.div>
              </motion.div>

              {/* Secondary Screenshot */}
              <motion.div
                initial={{ y: 0, rotate: 2 }}
                animate={{ 
                  y: [3, -3, 3],
                  rotate: [2, 1.5, 2],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut",
                  delay: 0.3
                }}
                className="absolute right-[5%] w-[280px] z-10 hover:z-30"
              >
                <motion.div 
                  className="relative"
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Image
                    src="/screenshot2.png"
                    alt="Reflection interface"
                    width={280}
                    height={560}
                    className="rounded-[2.5rem]"
                    priority
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 
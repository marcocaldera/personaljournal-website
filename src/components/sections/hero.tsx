"use client"

import { type FC, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { useTheme } from "next-themes"
import { AppStoreButton } from "../store/app-store-button"
import { useAnimationVariants } from "@/hooks/use-animation-variants"
import { ErrorBoundary } from "../error-boundary"
import { Metadata } from "../meta/metadata"
import { Loading } from "../ui/loading"
import { Suspense } from "react"
import { useAnalytics } from "@/hooks/use-analytics"

export const Hero: FC = () => {
  const { theme } = useTheme()
  const variants = useAnimationVariants()
  const analytics = useAnalytics()
  const heroRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(heroRef, { once: true })

  const handleAppStoreClick = () => {
    analytics.trackAppDownload("ios")
  }

  const handleScreenshotHover = (screenshot: string) => {
    analytics.trackInteraction(`screenshot_${screenshot}`, "hover")
  }

  const LoadingFallback = () => (
    <div className="flex items-center justify-center min-h-[600px]">
      <Loading size="lg" />
    </div>
  )

  const HeroContent = () => (
    <motion.div 
      ref={heroRef}
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      variants={variants.container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.div
        variants={variants.item}
        className="lg:self-center"
      >
        <motion.h1 
          className="text-5xl md:text-6xl font-bold text-surface dark:text-light mb-6"
          variants={variants.slideIn}
          initial="initial"
          animate="animate"
        >
          Your Personal Journey,{" "}
          <span className="text-primary">
            Digitally Captured
          </span>
        </motion.h1>
        <motion.p 
          className="text-lg text-surface/80 dark:text-light/80 mb-8"
          variants={variants.fadeIn}
          initial="initial"
          animate="animate"
        >
          Transform your daily reflections into meaningful insights. Download
          our app and start journaling today.
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row gap-4"
          variants={variants.scale}
          initial="initial"
          animate="animate"
        >
          <div onClick={handleAppStoreClick}>
            <AppStoreButton />
          </div>
        </motion.div>
      </motion.div>
      
      <motion.div
        variants={variants.item}
        className="relative h-[600px] lg:h-[700px] flex items-center justify-center"
      >
        <div className="relative w-[600px] h-full flex items-center justify-center">
          <motion.div
            {...variants.float}
            style={{ rotate: -2 }}
            className="absolute left-[5%] w-[280px] z-20 hover:z-30"
            onHoverStart={() => handleScreenshotHover("1")}
          >
            <motion.div 
              className="relative"
              variants={variants.hover}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/screenshot1.png"
                alt="Journal writing interface showing the app's main writing screen"
                width={280}
                height={560}
                className="rounded-[2.5rem] shadow-xl"
                priority
                quality={90}
                loading="eager"
              />
            </motion.div>
          </motion.div>

          <motion.div
            {...variants.float}
            style={{ rotate: 2 }}
            transition={{ delay: 0.3 }}
            className="absolute right-[5%] w-[280px] z-10 hover:z-30"
            onHoverStart={() => handleScreenshotHover("2")}
          >
            <motion.div 
              className="relative"
              variants={variants.hover}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/screenshot2.png"
                alt="Reflection interface displaying the journaling prompts and reflection tools"
                width={280}
                height={560}
                className="rounded-[2.5rem] shadow-xl"
                priority
                quality={90}
                loading="eager"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )

  return (
    <>
      <Metadata 
        title="Personal Journal - Your Digital Journaling Companion"
        description="Transform your daily reflections into meaningful insights with Personal Journal. A beautiful and intuitive journaling app for capturing your thoughts and memories."
        ogImage="/hero-og.png"
      />
      <section 
        className="min-h-screen flex items-center justify-center bg-light dark:bg-dark pt-16"
        aria-label="Hero section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ErrorBoundary>
            <Suspense fallback={<LoadingFallback />}>
              <HeroContent />
            </Suspense>
          </ErrorBoundary>
        </div>
      </section>
    </>
  )
} 
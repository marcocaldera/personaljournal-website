"use client"

import Image from "next/image"
import { useMemo } from "react"
import { useThemeDetection } from "@/hooks/use-theme-detection"

interface GooglePlayButtonProps {
  className?: string
}

const GOOGLE_PLAY_URL = "#" // Placeholder URL since it's not available yet
const IMAGE_DIMENSIONS = {
  width: 135, // Slightly wider than App Store button for Google Play typical dimensions
  height: 40,
} as const

export function GooglePlayButton({ className = "" }: GooglePlayButtonProps) {
  const { isDarkTheme, mounted } = useThemeDetection()

  const imageSrc = useMemo(() => {
    return isDarkTheme ? "/google_play_white.png" : "/google_play_black.png"
  }, [isDarkTheme])

  return (
    <div 
      className="group relative"
    >
      <div 
        className={`opacity-50 cursor-not-allowed transition-opacity ${className}`}
      >
        {mounted ? (
          <Image
            src={imageSrc}
            alt="Google Play"
            width={IMAGE_DIMENSIONS.width}
            height={IMAGE_DIMENSIONS.height}
            priority
          />
        ) : (
          <div className="h-5 w-5" />
        )}
      </div>
      {/* Tooltip */}
      <div 
        className="absolute -top-12 left-1/2 -translate-x-1/2 px-4 py-2 
          bg-gray-800/95 dark:bg-gray-100/95 backdrop-blur-sm
          text-white dark:text-gray-800 text-sm font-medium
          rounded-lg opacity-0 scale-95
          group-hover:opacity-100 group-hover:scale-100
          transition-all duration-200 delay-150
          pointer-events-none whitespace-nowrap z-50
          shadow-[0_2px_8px_-1px_rgba(0,0,0,0.15)]
          dark:shadow-[0_2px_8px_-1px_rgba(0,0,0,0.05)]"
      >
        Coming soon
        {/* Arrow */}
        <div 
          className="absolute -bottom-[5px] left-1/2 -translate-x-1/2 
            w-2.5 h-2.5 bg-gray-800/95 dark:bg-gray-100/95 
            rotate-45 backdrop-blur-sm
            shadow-[2px_2px_2px_-1px_rgba(0,0,0,0.15)]
            dark:shadow-[2px_2px_2px_-1px_rgba(0,0,0,0.05)]"
        ></div>
      </div>
    </div>
  )
} 
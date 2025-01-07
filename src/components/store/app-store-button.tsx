"use client"

import Image from "next/image"
import Link from "next/link"
import { useMemo } from "react"
import { useThemeDetection } from "@/hooks/use-theme-detection"

interface AppStoreButtonProps {
  className?: string
}

const APP_STORE_URL = "https://apps.apple.com/nl/app/personal-journal-secure-diary/id1553430631"
const IMAGE_DIMENSIONS = {
  width: 120,
  height: 40,
} as const

export function AppStoreButton({ className = "" }: AppStoreButtonProps) {
  const { isDarkTheme, mounted } = useThemeDetection()

  const imageSrc = useMemo(() => {
    return isDarkTheme ? "/app_store_white.svg" : "/app_store_black.svg"
  }, [isDarkTheme])

  return (
    <Link
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`hover:opacity-90 transition-opacity ${className}`}
    >
      {mounted ? (
        <Image
          src={imageSrc}
          alt="Download on the App Store"
          width={IMAGE_DIMENSIONS.width}
          height={IMAGE_DIMENSIONS.height}
          priority
        />
      ) : (
        <div className="h-5 w-5" />
      )}
    </Link>
  )
} 
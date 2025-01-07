"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

interface UseThemeDetectionReturn {
  isDarkTheme: boolean
  mounted: boolean
  setTheme: (theme: string) => void
}

export function useThemeDetection(): UseThemeDetectionReturn {
  const [mounted, setMounted] = useState(false)
  const { theme, systemTheme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDarkTheme = theme === "system" ? systemTheme === "dark" : theme === "dark"

  return {
    isDarkTheme,
    mounted,
    setTheme,
  }
} 
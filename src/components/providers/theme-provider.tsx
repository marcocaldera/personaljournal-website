"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import { useEffect } from "react"
import { useAnalytics } from "@/components/providers/analytics-provider";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const { trackEvent } = useAnalytics();

  useEffect(() => {
    // Track initial theme
    const initialTheme = localStorage.getItem('theme') || 'system'
    trackEvent({
      type: 'theme_change',
      theme: initialTheme as 'light' | 'dark' | 'system',
    })

    // Listen for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'class' &&
          mutation.target instanceof HTMLElement
        ) {
          const theme = localStorage.getItem('theme') || 'system'
          trackEvent({
            type: 'theme_change',
            theme: theme as 'light' | 'dark' | 'system',
          })
        }
      })
    })

    // Start observing the document root for class changes
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })

    return () => observer.disconnect()
  }, [trackEvent])

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
} 
'use client';

import { createContext, useContext, useEffect } from "react"
import { analyticsService } from "@/lib/analytics/analytics-service"
import type { AnalyticsEvent } from "@/lib/analytics/types"

interface AnalyticsContextType {
  trackEvent: <T extends AnalyticsEvent["type"]>(
    event: Extract<AnalyticsEvent, { type: T }>
  ) => void
}

const AnalyticsContext = createContext<AnalyticsContextType>({
  trackEvent: () => {},
})

export const useAnalytics = () => useContext(AnalyticsContext)

/**
 * Analytics Provider Component
 * 
 * Provides analytics tracking capabilities to the React component tree.
 * Uses the analytics service to handle actual tracking logic.
 * 
 * The provider:
 * 1. Initializes analytics on mount
 * 2. Provides a trackEvent method via context
 * 3. Handles proper typing for analytics events
 */
export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize analytics on mount
    // The service will handle cookie consent checks internally
    analyticsService.initialize()
  }, [])

  const trackEvent = <T extends AnalyticsEvent["type"]>(
    event: Extract<AnalyticsEvent, { type: T }>
  ) => {
    analyticsService.trackEvent(event)
  }

  return (
    <AnalyticsContext.Provider value={{ trackEvent }}>
      {children}
    </AnalyticsContext.Provider>
  )
} 
import { useEffect } from "react"
import { getAnalytics, logEvent, type Analytics } from "firebase/analytics"
import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
}

let analytics: Analytics | undefined

// Initialize Firebase only on client side
if (typeof window !== "undefined") {
  const app = initializeApp(firebaseConfig)
  analytics = getAnalytics(app)
}

interface AnalyticsEvent {
  name: string
  params?: Record<string, any>
}

export const useAnalytics = () => {
  const trackEvent = (event: AnalyticsEvent) => {
    if (analytics) {
      logEvent(analytics, event.name, event.params)
    }
  }

  const trackPageView = (page: string) => {
    trackEvent({
      name: "page_view",
      params: {
        page_path: page,
        page_title: document.title,
      },
    })
  }

  const trackButtonClick = (buttonName: string, additionalParams?: Record<string, any>) => {
    trackEvent({
      name: "button_click",
      params: {
        button_name: buttonName,
        ...additionalParams,
      },
    })
  }

  const trackAppDownload = (platform: "ios" | "android") => {
    trackEvent({
      name: "app_download_click",
      params: {
        platform,
        source: "hero_section",
      },
    })
  }

  const trackInteraction = (elementId: string, interactionType: string) => {
    trackEvent({
      name: "user_interaction",
      params: {
        element_id: elementId,
        interaction_type: interactionType,
      },
    })
  }

  // Track initial page view
  useEffect(() => {
    trackPageView(window.location.pathname)
  }, [])

  return {
    trackEvent,
    trackPageView,
    trackButtonClick,
    trackAppDownload,
    trackInteraction,
  }
} 
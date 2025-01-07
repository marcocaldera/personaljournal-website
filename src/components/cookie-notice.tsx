/**
 * CookieNotice Component
 * 
 * Displays a cookie consent banner that allows users to accept or reject cookies.
 * The component persists user's choice in localStorage and uses animations for a better UX.
 */

"use client"

import { useState, useEffect, createContext, useContext } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useAnalytics } from "@/components/providers/analytics-provider"
import type { CookieConsentEvent } from "@/lib/analytics/types"

// Constants
const COOKIE_CONSENT_KEY = "cookie-consent" as const
type ConsentStatus = CookieConsentEvent["status"] | undefined

// Create a context to manage cookie consent state
interface CookieConsentContextType {
  cookiesAccepted: boolean
  cookiesRejected: boolean
  status: ConsentStatus
}

const CookieConsentContext = createContext<CookieConsentContextType>({
  cookiesAccepted: false,
  cookiesRejected: false,
  status: undefined,
})

export const useCookieConsent = () => useContext(CookieConsentContext)

// Custom hook to handle cookie consent logic
function useCookieConsentState() {
  const [showNotice, setShowNotice] = useState(false)
  const [status, setStatus] = useState<ConsentStatus>(undefined)
  const { trackEvent } = useAnalytics()

  useEffect(() => {
    const savedConsent = localStorage.getItem(COOKIE_CONSENT_KEY) as ConsentStatus
    if (savedConsent) {
      setStatus(savedConsent)
    } else {
      setShowNotice(true)
    }
  }, [])

  const handleConsent = (newStatus: CookieConsentEvent["status"]) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, newStatus)
    setShowNotice(false)
    setStatus(newStatus)

    // Only track the event if cookies were accepted
    // This ensures we respect the user's privacy choice
    if (newStatus === "accepted") {
      trackEvent({
        type: "cookie_consent",
        status: newStatus,
      })
    }
  }

  return {
    showNotice,
    handleConsent,
    status,
    cookiesAccepted: status === "accepted",
    cookiesRejected: status === "rejected",
  }
}

export function CookieConsentProvider({ children }: { children: React.ReactNode }) {
  const consentState = useCookieConsentState()

  return (
    <CookieConsentContext.Provider 
      value={{
        cookiesAccepted: consentState.cookiesAccepted,
        cookiesRejected: consentState.cookiesRejected,
        status: consentState.status,
      }}
    >
      {children}
      <CookieNotice 
        showNotice={consentState.showNotice} 
        onConsent={consentState.handleConsent} 
      />
    </CookieConsentContext.Provider>
  )
}

interface CookieNoticeProps {
  showNotice: boolean
  onConsent: (status: CookieConsentEvent["status"]) => void
}

function CookieNotice({ showNotice, onConsent }: CookieNoticeProps) {
  return (
    <AnimatePresence>
      {showNotice && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-0 left-0 right-0 bg-surface dark:bg-dark p-4 shadow-lg z-50"
          role="alertdialog"
          aria-labelledby="cookie-notice-title"
          aria-describedby="cookie-notice-description"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-2">
              <h2 id="cookie-notice-title" className="sr-only">Cookie Consent Notice</h2>
              <p id="cookie-notice-description" className="text-light text-sm">
                We use cookies to enhance your browsing experience. Essential cookies are necessary for the website to function properly.{" "}
                <a 
                  href="/privacy" 
                  className="text-primary hover:underline"
                  aria-label="Learn more about our cookie policy"
                >
                  Learn more
                </a>
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => onConsent("rejected")}
                className="text-light px-4 py-2 rounded-lg text-sm whitespace-nowrap hover:underline"
                aria-label="Reject non-essential cookies"
              >
                Reject
              </button>
              <button
                onClick={() => onConsent("accepted")}
                className="bg-primary text-light px-4 py-2 rounded-lg text-sm whitespace-nowrap hover:bg-primary/90"
                aria-label="Accept all cookies"
              >
                Accept All
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 
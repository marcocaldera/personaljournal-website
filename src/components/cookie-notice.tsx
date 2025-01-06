"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function CookieNotice() {
  const [showNotice, setShowNotice] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowNotice(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowNotice(false)
  }

  return (
    <AnimatePresence>
      {showNotice && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-0 left-0 right-0 bg-surface dark:bg-dark p-4 shadow-lg z-50"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-light text-sm">
              We use essential cookies to ensure the basic functionalities of this website.{" "}
              <a href="/privacy" className="text-primary hover:underline">
                Learn more
              </a>
            </p>
            <button
              onClick={acceptCookies}
              className="bg-primary text-light px-4 py-2 rounded-lg text-sm whitespace-nowrap hover:bg-primary/90"
            >
              Accept
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 
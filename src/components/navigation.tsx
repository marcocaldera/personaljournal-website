"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { useThemeDetection } from "@/hooks/use-theme-detection"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { isDarkTheme, mounted, setTheme } = useThemeDetection()

  const renderThemeIcon = () => {
    if (!mounted) {
      return <div className="h-5 w-5" />
    }
    
    if (isDarkTheme) {
      return <SunIcon className="h-5 w-5" />
    }
    
    return <MoonIcon className="h-5 w-5" />
  }

  const navItems = [
    { name: "Features", href: "/#features" },
    { name: "About", href: "/#about" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/#faq" },
  ]

  return (
    <nav className="fixed w-full bg-light/80 dark:bg-dark/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-primary">
            Personal Journal
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-surface dark:text-light hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={() => setTheme(isDarkTheme ? "light" : "dark")}
              className="p-2 rounded-lg bg-light dark:bg-surface"
              aria-label="Toggle theme"
            >
              {renderThemeIcon()}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-surface dark:text-light"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-light dark:bg-dark">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-surface dark:text-light hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  )
} 
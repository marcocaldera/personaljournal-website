"use client"

import Link from "next/link"
import { motion } from "framer-motion"

const footerLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "About", href: "#about" },
    { name: "FAQ", href: "#faq" },
    { name: "Blog", href: "/blog" },
  ],
  download: [
    { name: "iOS App", href: "https://apps.apple.com/nl/app/personal-journal-secure-diary/id1553430631", external: true },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy", external: false },
    { name: "Terms of Service", href: "/terms", external: false },
  ],
  social: [
    // { name: "Twitter", href: "https://twitter.com" }
    { name: "Instagram", href: "https://instagram.com" },
    // { name: "LinkedIn", href: "https://linkedin.com" },
  ],
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-light dark:bg-dark border-t border-primary/10">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Product Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-sm font-semibold text-surface dark:text-light uppercase tracking-wider">
              Product
            </h3>
            <ul className="mt-4 space-y-4">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-base text-surface/80 dark:text-light/80 hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Download Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-sm font-semibold text-surface dark:text-light uppercase tracking-wider">
              Download
            </h3>
            <ul className="mt-4 space-y-4">
              {footerLinks.download.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-base text-surface/80 dark:text-light/80 hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-sm font-semibold text-surface dark:text-light uppercase tracking-wider">
              Legal
            </h3>
            <ul className="mt-4 space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-base text-surface/80 dark:text-light/80 hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-sm font-semibold text-surface dark:text-light uppercase tracking-wider">
              Social
            </h3>
            <ul className="mt-4 space-y-4">
              {footerLinks.social.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-surface/80 dark:text-light/80 hover:text-primary"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-primary/10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <Link href="/" className="text-2xl font-bold text-primary">
              Journal
            </Link>
            <p className="mt-4 text-sm text-surface/60 dark:text-light/60">
              &copy; {currentYear} Journal App. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
} 
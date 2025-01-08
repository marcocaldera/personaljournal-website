"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDownIcon } from "@heroicons/react/24/outline"

const faqs = [
  {
    question: "Is my journal data private and secure?",
    answer: "Yes, absolutely! Your journal is encrypted and strict security protocols are applied to ensure that only you can access your entries. Your privacy is our utmost priority.",
  },
  {
    question: "Do you use journal entries for research or analysis?",
    answer: "No, we absolutely do not use your journal entries for any research, analysis, or studies. Your personal writings remain completely private and are never accessed or analysed for any purpose. We believe your thoughts should remain yours alone.",
  },
  {
    question: "Can I access my journal on multiple devices?",
    answer: "Yes, your journal is automatically synchronised across all your devices when you're connected to the internet. You can write on your mobile and read on your tablet!",
  },
  {
    question: "What happens if I lose my device?",
    answer: "Don't worry! Your data is securely backed up in the cloud. Simply log in to your account on a new device to access all your journal entries.",
  },
  {
    question: "Is there a limit to how much I can write?",
    answer: "No, there are no limits on entry length or the number of entries you can create. Write as much as you'd like!",
  },
  {
    question: "Can I export my journal entries?",
    answer: "Yes, you can export your entries in various formats including PDF and plain text, making it straightforward to keep a backup or print your journals.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 bg-light dark:bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-surface dark:text-light sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-surface/80 dark:text-light/80">
            Everything you need to know about the app and your journal
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-4 rounded-lg bg-white dark:bg-surface flex justify-between items-center"
              >
                <span className="font-medium text-surface dark:text-light">
                  {faq.question}
                </span>
                <ChevronDownIcon
                  className={`h-5 w-5 text-primary transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="p-4 text-surface/80 dark:text-light/80">
                  {faq.answer}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 
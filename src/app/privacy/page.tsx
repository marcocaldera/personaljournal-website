import { Metadata } from "next"
import { defaultMetadata } from "../metadata"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy and data protection information for Personal Journal",
  openGraph: {
    ...defaultMetadata.openGraph,
    title: "Privacy Policy | Personal Journal",
    description: "Privacy policy and data protection information for Personal Journal",
  },
}

export default function PrivacyPage() {
  return (
    <div className="py-24 bg-light dark:bg-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-surface dark:text-light mb-8">
          Privacy Policy
        </h1>
        <div className="prose prose-lg dark:prose-invert">
          <p>Last updated: {new Date().toLocaleDateString()}</p>

          <h2>1. Data Collection</h2>
          <p>
            We collect only the minimum data necessary to provide you with our
            journaling service:
          </p>
          <ul>
            <li>Account information (email, encrypted password)</li>
            <li>Journal entries (encrypted at rest)</li>
            <li>Usage analytics (anonymized)</li>
          </ul>

          <h2>2. Data Usage</h2>
          <p>
            Your data is used exclusively to:
          </p>
          <ul>
            <li>Provide and improve our journaling service</li>
            <li>Sync your entries across devices</li>
            <li>Send important service updates</li>
          </ul>

          <h2>3. Data Protection</h2>
          <p>
            We implement strong security measures to protect your data:
          </p>
          <ul>
            <li>End-to-end encryption for journal entries</li>
            <li>Secure data storage and transmission</li>
            <li>Regular security audits</li>
          </ul>

          <h2>4. Your Rights</h2>
          <p>
            Under GDPR and other privacy laws, you have the right to:
          </p>
          <ul>
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request data deletion</li>
            <li>Export your data</li>
          </ul>

          <h2>5. Data Retention</h2>
          <p>
            We retain your data only as long as necessary to provide our services
            or as required by law.
          </p>

          <h2>6. Third-Party Services</h2>
          <p>
            We use limited third-party services for:
          </p>
          <ul>
            <li>Secure hosting (AWS)</li>
            <li>Analytics (anonymized)</li>
            <li>Email communications</li>
          </ul>

          <h2>7. Contact Us</h2>
          <p>
            For privacy concerns, contact our Data Protection Officer at{" "}
            <a href="mailto:privacy@personaljournal.nl">
              privacy@personaljournal.nl
            </a>
          </p>
        </div>
      </div>
    </div>
  )
} 
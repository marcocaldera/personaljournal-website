import { Metadata } from "next"
import { defaultMetadata } from "../metadata"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for using Personal Journal",
  openGraph: {
    ...defaultMetadata.openGraph,
    title: "Terms of Service | Personal Journal",
    description: "Terms and conditions for using Personal Journal",
  },
}

export default function TermsPage() {
  return (
    <div className="py-24 bg-light dark:bg-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-surface dark:text-light mb-8">
          Terms of Service
        </h1>
        <div className="prose prose-lg dark:prose-invert">
          <p>Last updated: {new Date().toLocaleDateString()}</p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using Personal Journal, you agree to be bound by these
            Terms of Service and all applicable laws and regulations.
          </p>

          <h2>2. Use License</h2>
          <p>
            We grant you a personal, non-transferable license to use Personal
            Journal for personal journaling purposes.
          </p>

          <h2>3. User Data</h2>
          <p>
            You retain all rights to your journal entries. We do not claim
            ownership of your content but require certain rights to provide our
            services.
          </p>

          <h2>4. Privacy</h2>
          <p>
            Your privacy is important to us. Please review our Privacy Policy to
            understand how we collect and use your information.
          </p>

          <h2>5. Service Modifications</h2>
          <p>
            We reserve the right to modify or discontinue Personal Journal at any
            time, with or without notice.
          </p>

          <h2>6. Account Security</h2>
          <p>
            You are responsible for maintaining the security of your account and
            password. Contact us immediately if you suspect unauthorized access.
          </p>

          <h2>7. Termination</h2>
          <p>
            We may terminate or suspend your account at any time for violations of
            these terms.
          </p>

          <h2>8. Contact</h2>
          <p>
            For questions about these Terms, please contact us at{" "}
            <a href="mailto:support@personaljournal.nl">support@personaljournal.nl</a>
          </p>
        </div>
      </div>
    </div>
  )
} 
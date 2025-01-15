import { type FC } from "react"
import Head from "next/head"

interface MetadataProps {
  title?: string
  description?: string
  ogImage?: string
  noIndex?: boolean
}

export const Metadata: FC<MetadataProps> = ({
  title = "Personal Journal - Your Digital Journaling Companion",
  description = "Transform your daily reflections into meaningful insights with Personal Journal. A beautiful and intuitive journaling app for capturing your thoughts and memories.",
  ogImage = "/og-image.png",
  noIndex = false,
}) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://personaljournal.app"

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${baseUrl}${ogImage}`} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${baseUrl}${ogImage}`} />
      
      {/* Other Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      
      {/* No Index if specified */}
      {noIndex && <meta name="robots" content="noindex" />}
      
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Personal Journal",
            description,
            applicationCategory: "LifestyleApplication",
            operatingSystem: "iOS",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            screenshot: {
              "@type": "ImageObject",
              url: `${baseUrl}${ogImage}`,
            },
          }),
        }}
      />
    </Head>
  )
} 
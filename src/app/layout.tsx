import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CookieNotice } from "@/components/cookie-notice"
import "./globals.css"
import { generateWebsiteStructuredData } from "./structured-data"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Personal Journal App",
  description: "Your daily companion for personal reflection and growth",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateWebsiteStructuredData()),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <CookieNotice />
        </ThemeProvider>
      </body>
    </html>
  )
} 
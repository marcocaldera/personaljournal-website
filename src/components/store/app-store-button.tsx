import { useTheme } from "next-themes"
import Image from "next/image"
import Link from "next/link"

interface AppStoreButtonProps {
  className?: string
}

export function AppStoreButton({ className = "" }: AppStoreButtonProps) {
  const { theme } = useTheme()

  return (
    <Link
      href={"https://apps.apple.com/nl/app/personal-journal-secure-diary/id1553430631"}
      target="_blank"
      rel="noopener noreferrer"
      className={`hover:opacity-90 transition-opacity ${className}`}
    >
      <Image
        src={theme === "dark" ? "/app_store_white.svg" : "/app_store_black.svg"}
        alt="Download on the App Store"
        width={120}
        height={40}
        priority
      />
    </Link>
  )
} 
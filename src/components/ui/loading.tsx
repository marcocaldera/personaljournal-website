import { type FC } from "react"
import { motion } from "framer-motion"

interface LoadingProps {
  size?: "sm" | "md" | "lg"
  className?: string
}

export const Loading: FC<LoadingProps> = ({ 
  size = "md",
  className = "",
}) => {
  const sizes = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  }

  const circleVariants = {
    initial: { scale: 0.8, opacity: 0.5 },
    animate: {
      scale: [0.8, 1, 0.8],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  }

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <motion.div
        className={`${sizes[size]} rounded-full bg-primary`}
        variants={circleVariants}
        initial="initial"
        animate="animate"
      />
    </div>
  )
} 
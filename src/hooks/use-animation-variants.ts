import { type Variants } from "framer-motion"

interface AnimationVariants {
  container: Variants
  item: Variants
  hover: Variants
  float: Variants
  fadeIn: Variants
  slideIn: Variants
  scale: Variants
}

export const useAnimationVariants = (): AnimationVariants => {
  return {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2,
          duration: 0.5,
          ease: "easeOut",
        },
      },
    },
    item: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          ease: "easeOut",
        },
      },
    },
    hover: {
      hover: {
        scale: 1.05,
        transition: {
          duration: 0.3,
          ease: "easeInOut",
        },
      },
    },
    float: {
      initial: { y: 0 },
      animate: {
        y: [-3, 3, -3],
        transition: {
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut",
        },
      },
    },
    fadeIn: {
      initial: { opacity: 0 },
      animate: {
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: "easeOut",
        },
      },
    },
    slideIn: {
      initial: { x: -20, opacity: 0 },
      animate: {
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: "easeOut",
        },
      },
    },
    scale: {
      initial: { scale: 0.95, opacity: 0 },
      animate: {
        scale: 1,
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: "easeOut",
        },
      },
    },
  }
} 
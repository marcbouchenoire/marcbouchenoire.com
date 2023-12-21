"use client"

import { clsx } from "clsx"
import type { Transition, Variants } from "framer-motion"
import { motion } from "framer-motion"
import type { ComponentProps } from "react"
import { useSystemTheme } from "src/hooks/use-system-theme"

const TRANSITION_DURATION = 0.6

const transition: Transition = {
  default: {
    type: "spring",
    duration: TRANSITION_DURATION,
    bounce: 0.6
  },
  opacity: {
    type: "spring",
    bounce: 0,
    duration: TRANSITION_DURATION / 2
  }
}

const variants: Variants = {
  hidden: {
    scale: 0.8,
    opacity: 0
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      ...transition,
      delay: TRANSITION_DURATION / 2
    }
  }
}

/**
 * A button to toggle the theme.
 *
 * @param props - A set of `button` props.
 * @param [props.className] - A list of one or more classes.
 */
export function ThemeToggle({ className, ...props }: ComponentProps<"button">) {
  const [theme, toggleTheme] = useSystemTheme()

  return (
    <button
      aria-label="Toggle Theme"
      className={clsx(
        className,
        "focusable rounded-md bg-transparent p-1.5 transition hover:bg-zinc-500/10 dark:hover:bg-zinc-400/20"
      )}
      onClick={toggleTheme}
      {...props}
    >
      <svg
        className="flex-none transition-colors"
        height="24"
        role="presentation"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.g
          animate={theme === "light" ? "visible" : "hidden"}
          fill="currentColor"
          initial="hidden"
          transition={transition}
          variants={variants}
        >
          <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
          <path
            clipRule="evenodd"
            d="M12 2a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1ZM19.071 4.929a1 1 0 0 1 0 1.414l-1.414 1.414a1 1 0 1 1-1.415-1.414l1.415-1.414a1 1 0 0 1 1.414 0ZM16.243 16.243a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 1 1-1.414 1.414l-1.414-1.414a1 1 0 0 1 0-1.414ZM7.757 16.243a1 1 0 0 1 0 1.414L6.343 19.07a1 1 0 1 1-1.414-1.414l1.414-1.414a1 1 0 0 1 1.414 0ZM4.929 4.929a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 1 1-1.414 1.414L4.93 6.343a1 1 0 0 1 0-1.414ZM12 18a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1ZM18 12a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1ZM2 12a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1Z"
            fillRule="evenodd"
          />
        </motion.g>
        <motion.path
          animate={theme === "dark" ? "visible" : "hidden"}
          clipRule="evenodd"
          d="M18.846 13.396c.473-.212 1.053.141.92.642a8.018 8.018 0 0 1-13.418 3.614A8.017 8.017 0 0 1 9.962 4.234c.5-.133.854.447.642.92a6.236 6.236 0 0 0 8.242 8.242Z"
          fill="currentColor"
          fillRule="evenodd"
          initial="hidden"
          transition={transition}
          variants={variants}
        />
      </svg>
    </button>
  )
}

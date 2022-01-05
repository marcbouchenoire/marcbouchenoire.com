import clsx from "clsx"
import { AnimatePresence, Transition, Variants, motion } from "framer-motion"
import { ComponentProps } from "react"
import { useInternetTime } from "../../hooks/use-internet-time"
import { useSystemTheme } from "../../hooks/use-system-theme"
import { springiest } from "../../transitions"

const themeTransition: Transition = {
  default: springiest,
  opacity: {
    type: "spring",
    duration: springiest.duration - springiest.duration / 2,
    bounce: 0
  }
}

const timeVariants: Variants = {
  hidden: {
    scale: 0.8,
    opacity: 0
  },
  visible: {
    scale: 1,
    opacity: 1
  }
}

const themeVariants: Variants = {
  hidden: {
    scale: 0.8,
    opacity: 0
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      ...themeTransition,
      delay: springiest.duration / 2
    }
  }
}

/**
 * A header section.
 *
 * @param props - A set of `header` props.
 * @param [props.className] - A list of one or more classes.
 */
export function Header({ className, ...props }: ComponentProps<"header">) {
  const [theme, toggleTheme] = useSystemTheme()
  const time = useInternetTime()

  return (
    <header className={clsx(className, "pt-6 lg:pt-8")} {...props}>
      <div className="flex items-center text-zinc-700 dark:text-zinc-100">
        <p>
          <AnimatePresence>
            {time && (
              <motion.a
                animate="visible"
                className="group inline-block text-sm font-semibold rounded-sm focus:ring-zinc-500/40 dark:focus:ring-zinc-400/40 transition duration-100 focusable"
                exit="hidden"
                href="https://en.wikipedia.org/wiki/Swatch_Internet_Time"
                initial="hidden"
                rel="noreferrer"
                target="_blank"
                transition={springiest}
                variants={timeVariants}
              >
                <span className="font-normal text-zinc-400">@</span>
                <span className="underline decoration-transparent group-hover:decoration-zinc-500/30 group-focus:!decoration-transparent dark:group-hover:decoration-zinc-400/30 decoration-2 underline-offset-2">
                  {time}
                </span>
              </motion.a>
            )}
          </AnimatePresence>
        </p>
        <div className="ml-auto">
          <button
            aria-label="Toggle Theme"
            className="p-1.5 bg-transparent hover:bg-zinc-500/10 dark:hover:bg-zinc-400/20 rounded-md transition focusable"
            onClick={toggleTheme}
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
                transition={themeTransition}
                variants={themeVariants}
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
                transition={themeTransition}
                variants={themeVariants}
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

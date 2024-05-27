import { clsx } from "clsx"
import type { ComponentProps } from "react"
import { InternetTime } from "../miscellaneous/InternetTime"
import { ThemeToggle } from "../miscellaneous/ThemeToggle"

/**
 * A header section.
 *
 * @param props - A set of `header` props.
 * @param [props.className] - A list of one or more classes.
 */
export function Header({ className, ...props }: ComponentProps<"header">) {
  return (
    <header className={clsx(className, "pt-6 lg:pt-8")} {...props}>
      <div className="flex items-center justify-between text-gray-700 dark:text-gray-100">
        <InternetTime />
        <ThemeToggle />
      </div>
    </header>
  )
}

import { clsx } from "clsx"
import type { ComponentProps } from "react"
import { RelativeDate } from "src/components/RelativeDate"

interface ProjectCardDateProps extends ComponentProps<"span"> {
  /**
   * The project's creation date.
   */
  date: Date | string | number
}

/**
 * Display a personal project.
 *
 * @param props - A set of `div` props.
 * @param [props.children] - The card's content.
 * @param [props.className] - A list of one or more classes.
 */
export function ProjectCard({
  className,
  children,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={clsx(
        className,
        "relative flex flex-col rounded-lg border border-gray-150 p-6 sm:p-8 dark:border-gray-800"
      )}
      {...props}
    >
      {children}
    </div>
  )
}

/**
 * Display a project's creation date.
 *
 * @param props - A set of `span` props.
 * @param props.date - The project's creation date.
 */
export function ProjectCardDate({ date, ...props }: ProjectCardDateProps) {
  return (
    <span {...props}>
      <RelativeDate date={date} />
    </span>
  )
}

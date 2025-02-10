import { clsx } from "clsx"
import type { ComponentProps } from "react"

/**
 * A loading placeholder.
 *
 * @param props - A set of `span` props.
 * @param [props.className] - A list of one or more classes.
 */
export function Skeleton({ className, ...props }: ComponentProps<"span">) {
  return (
    <span
      className={clsx(
        className,
        "skeleton inline-block h-[1em] w-20 rounded-[0.2em] bg-gray-150 align-middle dark:bg-gray-700"
      )}
      {...props}
    />
  )
}

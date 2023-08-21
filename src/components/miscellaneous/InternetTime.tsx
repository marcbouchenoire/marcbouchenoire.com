"use client"

import { clsx } from "clsx"
import type { ComponentProps } from "react"
import { Counter } from "../utils/Counter"
import { useInternetTime } from "src/hooks/use-internet-time"

/**
 * An animated label of the current internet time.
 *
 * @param props - A set of `a` props.
 * @param [props.className] - A list of one or more classes.
 */
export function InternetTime({ className, ...props }: ComponentProps<"a">) {
  const time = useInternetTime()

  return (
    <a
      className={clsx(
        className,
        "focusable inline-flex cursor-help items-center rounded-sm font-semibold transition hover:opacity-60"
      )}
      href="https://en.wikipedia.org/wiki/Swatch_Internet_Time"
      rel="noreferrer"
      target="_blank"
      {...props}
    >
      <span className="font-normal text-zinc-400">@</span>
      <Counter value={time} />
    </a>
  )
}

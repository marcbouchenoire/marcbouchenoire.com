"use client"

import { formatDistanceToNowStrict } from "date-fns"
import type { ComponentProps } from "react"
import { useMemo } from "react"
import { capitalize } from "src/utils/capitalize"

interface RelativeDateProps extends ComponentProps<"time"> {
  /**
   * The date to display.
   */
  date: Date | number | string
}

/**
 * Display a relative date.
 *
 * @param props - A set of `time` props.
 * @param props.date - The date to display.
 */
export function RelativeDate({ date, ...props }: RelativeDateProps) {
  const parsedDate = useMemo(() => new Date(date), [date])
  const normalizedDate = useMemo(() => parsedDate.toISOString(), [parsedDate])
  const formattedDate = useMemo(() => {
    return capitalize(
      formatDistanceToNowStrict(parsedDate, { addSuffix: true })
    )
  }, [parsedDate])

  return (
    <time {...props} dateTime={normalizedDate}>
      {formattedDate}
    </time>
  )
}

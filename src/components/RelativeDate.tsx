"use client"

import { format } from "date-fns"
import type { ComponentProps } from "react"
import { useMemo } from "react"
import type { FormatRelativeDateOptions } from "src/utils/format-relative-date"
import { formatRelativeDate } from "src/utils/format-relative-date"
import { useHydrated } from "src/utils/use-hydrated"

interface RelativeDateProps
  extends ComponentProps<"time">,
    FormatRelativeDateOptions {
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
 * @param [props.simplifyToday] - Whether to simplify a date from today as "Today".
 * @param [props.simplifyTomorrow] - Whether to simplify a date from tomorrow as "Tomorrow".
 * @param [props.simplifyYesterday] - Whether to simplify a date from yesterday as "Yesterday".
 */
export function RelativeDate({
  date,
  simplifyToday,
  simplifyTomorrow,
  simplifyYesterday,
  ...props
}: RelativeDateProps) {
  const isHydrated = useHydrated()
  const parsedDate = useMemo(() => new Date(date), [date])
  const normalizedDate = useMemo(() => parsedDate.toISOString(), [parsedDate])
  const formattedDate = useMemo(() => {
    return isHydrated
      ? formatRelativeDate(parsedDate, {
          simplifyToday,
          simplifyTomorrow,
          simplifyYesterday
        })
      : format(parsedDate, "PPP")
  }, [
    isHydrated,
    parsedDate,
    simplifyToday,
    simplifyTomorrow,
    simplifyYesterday
  ])

  return (
    <time {...props} dateTime={normalizedDate}>
      {formattedDate}
    </time>
  )
}

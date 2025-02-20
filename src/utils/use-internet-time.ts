import { useEffect, useState } from "react"
import { wrap } from "src/utils/wrap"

const SECONDS_PER_DAY = 86400
const BEATS_PER_DAY = 1000
const MILLISECONDS_PER_BEAT = SECONDS_PER_DAY / 100
export const DEFAULT_TIME = "000.00"

/**
 * Convert a date into an internet time string.
 *
 * @param [date] - The date to get an internet time string from.
 */
export function getInternetTime(date = new Date()) {
  const seconds =
    date.getUTCMilliseconds() / 1000 +
    date.getUTCSeconds() +
    date.getUTCMinutes() * 60 +
    (date.getUTCHours() + 1) * 3600
  const beats = wrap(
    (seconds / SECONDS_PER_DAY) * BEATS_PER_DAY,
    0,
    BEATS_PER_DAY
  )

  return beats.toFixed(2).padStart(6, "0").slice(-6)
}

/**
 * Get an automatically updating internet time string.
 */
export function useInternetTime() {
  const [time, setTime] = useState<string>(DEFAULT_TIME)

  useEffect(() => {
    setTime(getInternetTime())

    const interval = window.setInterval(() => {
      setTime(getInternetTime())
    }, MILLISECONDS_PER_BEAT / 2)

    return () => {
      window.clearInterval(interval)
    }
  }, [])

  return time
}

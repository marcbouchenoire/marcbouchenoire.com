import { useCallback, useEffect, useRef } from "react"
import { useInitial } from "./use-initial"

interface DebounceOptions {
  /**
   * Whether to invoke the callback immediately.
   */
  leading: boolean

  /**
   * Whether to invoke the callback after the delay.
   */
  trailing: boolean

  /**
   * Whether to count mounting as an initial invocation.
   */
  initial: boolean
}

const defaultOptions: DebounceOptions = {
  leading: false,
  trailing: true,
  initial: false
}

/**
 * Debounce a callback.
 *
 * @param callback - The callback to debounce.
 * @param [delay] - The delay in milliseconds.
 * @param [options] - A set of options.
 * @param [options.leading] - Whether to invoke the callback immediately.
 * @param [options.trailing] - Whether to invoke the callback after the delay.
 */
export function useDebounce<T extends (...args: unknown[]) => void>(
  callback: T,
  delay = 1000,
  options?: Partial<DebounceOptions>
) {
  const leading = options?.leading ?? defaultOptions.leading
  const trailing = options?.trailing ?? defaultOptions.trailing
  const initial = options?.initial ?? defaultOptions.initial
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const callbackRef = useRef(callback)
  const isLeadingPendingRef = useRef(false)
  const initialTimestamp = useInitial(() => performance.now())

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  const debounce = useCallback(
    (...args: Parameters<T>) => {
      if (
        leading &&
        !isLeadingPendingRef.current &&
        (initial ? performance.now() - initialTimestamp >= delay : true)
      ) {
        callbackRef.current(...args)

        isLeadingPendingRef.current = true
      }

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }

      timeoutRef.current = setTimeout(() => {
        isLeadingPendingRef.current = false

        if (trailing) {
          callbackRef.current(...args)
        }
      }, delay)
    },
    [delay, leading, trailing, initial]
  )

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return debounce
}

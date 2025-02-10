import { useCallback, useEffect, useRef } from "react"

interface DebounceOptions {
  /**
   * Whether to invoke the callback immediately.
   */
  leading: boolean

  /**
   * Whether to invoke the callback after the delay.
   */
  trailing: boolean
}

const defaultOptions: DebounceOptions = {
  leading: false,
  trailing: true
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
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const callbackRef = useRef(callback)
  const wasInvokedRef = useRef(false)

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  const debounce = useCallback(
    (...args: Parameters<T>) => {
      if (leading && !wasInvokedRef.current) {
        callbackRef.current(...args)

        wasInvokedRef.current = true
      }

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }

      timeoutRef.current = setTimeout(() => {
        wasInvokedRef.current = false

        if (trailing) {
          callbackRef.current(...args)
        }
      }, delay)
    },
    [delay, leading, trailing]
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

import { useState } from "react"

/**
 * Keep a stable (lazy) value.
 *
 * @param value - The value to keep.
 */
export function useInitial<T>(value: T | (() => T)): T {
  const [initialValue] = useState(value)

  return initialValue
}

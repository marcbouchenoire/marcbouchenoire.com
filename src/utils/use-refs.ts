import type { Ref, RefCallback, RefObject } from "react"
import { useCallback } from "react"

function applyRef<T>(ref: Ref<T>, value: T) {
  if (value) {
    if (typeof ref === "function") {
      ref(value)
    } else if (ref && "current" in ref) {
      ;(ref as RefObject<T>).current = value
    }
  }
}

function mergeRefs<T>(value: T, ...refs: Ref<T>[]) {
  for (const ref of refs) {
    applyRef(ref, value)
  }
}

/**
 * Merge multiple refs into a single callback ref.
 *
 * @param refs - A list of possible refs.
 */
export function useRefs<T>(...refs: (Ref<T> | undefined)[]): RefCallback<T> {
  return useCallback(
    (value: T) => mergeRefs(value, ...(refs.filter(Boolean) as Ref<T>[])),
    [refs]
  )
}

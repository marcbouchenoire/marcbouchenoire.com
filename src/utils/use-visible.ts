import { type RefObject, useEffect, useRef, useState } from "react"

type IntersectionObserverSingleCallback = (
  entry: IntersectionObserverEntry
) => void

let intersectionObserver: IntersectionObserver | undefined
const intersectionCallbacks = new WeakMap<
  Element,
  IntersectionObserverSingleCallback
>()

function observe(
  element: Element,
  callback: IntersectionObserverSingleCallback
) {
  if (!intersectionObserver) {
    intersectionObserver = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        const callback = intersectionCallbacks.get(entry.target)

        callback?.(entry)
      }
    })
  }

  intersectionCallbacks.set(element, callback)
  intersectionObserver.observe(element)
}

function unobserve(element: Element) {
  intersectionCallbacks.delete(element)
  intersectionObserver?.unobserve(element)
}

/**
 * Observe when an element becomes visible or hidden.
 *
 * @param ref - A ref of the element to observe.
 * @param onVisible - The function invoked when the element becomes visible.
 * @param [onHidden] - The function invoked when the element becomes hidden.
 */
export function useVisibleCallback<T extends HTMLElement>(
  ref: RefObject<T>,
  onVisible: (element: T) => void,
  onHidden?: (element: T) => void
) {
  const isFocusedRef = useRef(false)
  const isIntersectingRef = useRef(false)
  const onVisibleRef = useRef(onVisible)
  const onHiddenRef = useRef(onHidden)

  useEffect(() => {
    onVisibleRef.current = onVisible
  }, [onVisible])

  useEffect(() => {
    onHiddenRef.current = onHidden
  }, [onHidden])

  useEffect(() => {
    const element = ref.current

    if (!element) {
      return
    }

    observe(element, (entry) => {
      if (isFocusedRef.current) {
        if (entry.isIntersecting) {
          onVisibleRef.current(element)
        } else if (isIntersectingRef.current) {
          onHiddenRef.current?.(element)
        }
      }

      isIntersectingRef.current = entry.isIntersecting
    })

    const handleFocus = () => {
      isFocusedRef.current = true

      if (isIntersectingRef.current) {
        onVisibleRef.current(element)
      }
    }

    const handleBlur = () => {
      isFocusedRef.current = false

      if (isIntersectingRef.current) {
        onHiddenRef.current?.(element)
      }
    }

    window.addEventListener("focus", handleFocus)
    window.addEventListener("blur", handleBlur)

    isFocusedRef.current = document.hasFocus()

    return () => {
      unobserve(element)

      window.removeEventListener("focus", handleFocus)
      window.removeEventListener("blur", handleBlur)
    }
  }, [ref])
}

/**
 * Observe whether an element is currently visible or not.
 *
 * @param ref - A ref of the element to observe.
 */
export function useVisible<T extends HTMLElement>(ref: RefObject<T>) {
  const [isVisible, setVisible] = useState(false)

  useVisibleCallback(
    ref,
    () => setVisible(true),
    () => setVisible(false)
  )

  return isVisible
}

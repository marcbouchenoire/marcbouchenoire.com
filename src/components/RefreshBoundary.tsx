"use client"

import { useRouter } from "next/navigation"
import type { ComponentProps } from "react"
import { useCallback, useRef } from "react"
import { useDebounce } from "src/utils/use-debounce"
import { useVisibleCallback } from "src/utils/use-visible"

const REFRESH_MINIMUM_INTERVAL = 10000

/**
 * Refresh the current route whenever this component becomes visible.
 *
 * @param props - A set of `div` props.
 * @param [props.children] - The component's content.
 */
export function RefreshBoundary({ children, ...props }: ComponentProps<"div">) {
  const router = useRouter()
  const ref = useRef<HTMLDivElement>(null!)

  const refresh = useCallback(() => {
    router.refresh()
  }, [router])
  const debouncedRefresh = useDebounce(refresh, REFRESH_MINIMUM_INTERVAL, {
    leading: true,
    trailing: false,

    // The inital page load can be counted as a first refresh
    initial: true
  })

  useVisibleCallback(ref, debouncedRefresh)

  return (
    <div ref={ref} {...props}>
      {children}
    </div>
  )
}

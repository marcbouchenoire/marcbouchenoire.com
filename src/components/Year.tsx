import type { ComponentProps } from "react"

/**
 * Display the current year.
 *
 * @param props - A set of `time` props.
 */
export async function Year(props: ComponentProps<"time">) {
  const year = String(new Date().getFullYear())

  return (
    <time dateTime={year} {...props}>
      {year}
    </time>
  )
}

export const dynamic = "force-dynamic"

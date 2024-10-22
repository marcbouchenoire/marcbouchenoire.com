"use client"

import { clsx } from "clsx"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useSelectedLayoutSegment } from "next/navigation"
import { type ComponentProps, useMemo } from "react"
import portrait from "public/portrait.jpg"
import { InternetTime } from "src/app/components/InternetTime"
import { ThemeToggle } from "src/app/components/ThemeToggle"
import { capitalize } from "src/utils/capitalize"

function Todo() {
  const segment = useSelectedLayoutSegment()
  const formattedSegment = useMemo(() => {
    return segment && !segment.startsWith("/") ? capitalize(segment) : null
  }, [segment])

  return (
    <span className="flex items-center whitespace-pre leading-none">
      <Link
        aria-label="Return to home page"
        className="focusable portrait mr-0.5 h-5 w-5 transition hover:opacity-60"
        href="/"
      >
        <Image
          alt="Marc Bouchenoire"
          height="20"
          priority
          src={portrait}
          width="20"
        />
      </Link>{" "}
      {formattedSegment && (
        <>
          <svg
            className="mx-1.5"
            height="20"
            role="presentation"
            width="10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M7.275 2.038a1 1 0 0 1 .687 1.237l-4 14a1 1 0 1 1-1.924-.55l4-14a1 1 0 0 1 1.237-.687Z"
              fill="currentColor"
              fillOpacity={0.3}
              fillRule="evenodd"
            />
          </svg>
          <span className="font-medium text-gray-700 dark:text-gray-100">
            {formattedSegment}
          </span>
        </>
      )}
    </span>
  )
}
/**
 * A header section.
 *
 * @param props - A set of `header` props.
 * @param [props.className] - A list of one or more classes.
 */
export function Header({ className, ...props }: ComponentProps<"header">) {
  const pathname = usePathname()

  return (
    <header className={clsx(className, "pt-6 lg:pt-8")} {...props}>
      <div className="flex items-center justify-between text-gray-700 dark:text-gray-100">
        {pathname === "/" ? <InternetTime /> : <Todo />}
        <ThemeToggle />
      </div>
    </header>
  )
}

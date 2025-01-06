"use client"

import { clsx } from "clsx"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useSelectedLayoutSegment } from "next/navigation"
import { type ComponentProps, useMemo } from "react"
import styles from "./Header.module.css"
import portrait from "public/portrait.jpg"
import { InternetTime } from "src/app/components/InternetTime"
import { ThemeToggle } from "src/app/components/ThemeToggle"
import { capitalize } from "src/utils/capitalize"

function Breadcrumbs() {
  const segment = useSelectedLayoutSegment()
  const formattedSegment = useMemo(() => {
    return segment && !segment.startsWith("/") ? capitalize(segment) : null
  }, [segment])

  return (
    <span className="flex items-center whitespace-pre leading-none text-gray-700 dark:text-gray-100">
      <Link
        aria-label="Return to home page"
        className="link -ml-1 -mr-0.5 inline-flex items-center gap-2.5 py-1 pl-1 pr-0.5"
        href="/"
      >
        <Image
          alt="Marc Bouchenoire"
          className={clsx(
            styles.portraitShadow,
            "highlight relative inline-block h-4 w-4 flex-none select-none overflow-hidden rounded-full bg-white ring-offset-2"
          )}
          height="20"
          priority
          src={portrait}
          width="20"
        />
        <span>Marc Bouchenoire</span>
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
          <span className="font-medium">{formattedSegment}</span>
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
        {pathname === "/" ? <InternetTime /> : <Breadcrumbs />}
        <ThemeToggle />
      </div>
    </header>
  )
}

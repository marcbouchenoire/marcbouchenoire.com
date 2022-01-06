import clsx from "clsx"
import { ComponentProps } from "react"
import { useData } from "../../hooks/use-data"

/**
 * A footer section with credits.
 *
 * @param props - A set of `footer` props.
 * @param [props.className] - A list of one or more classes.
 */
export function Footer({ className, ...props }: ComponentProps<"footer">) {
  const { date } = useData()

  return (
    <footer
      className={clsx(
        "flex flex-col font-medium text-zinc-700 dark:text-zinc-100",
        className
      )}
      {...props}
    >
      <hr className="w-full border-t dark:border-zinc-800 border-zinc-150" />
      <div className="flex items-center py-6 lg:py-8">
        <span className="whitespace-pre">
          <span className="dark:text-zinc-450 text-zinc-350">©</span>{" "}
          <span>{date}</span>
        </span>
        <div className="ml-auto">
          <a
            className="link"
            href="https://github.com/marcbouchenoire/marcbouchenoire.com"
            rel="noreferrer"
            target="_blank"
          >
            marcbouchenoire.com
          </a>
        </div>
      </div>
    </footer>
  )
}

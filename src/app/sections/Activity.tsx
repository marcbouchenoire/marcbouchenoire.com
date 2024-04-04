import type { ComponentProps } from "react"
import { LatestFilms } from "src/components/miscellaneous/LatestFilms"
import { LatestSongs } from "src/components/miscellaneous/LatestSongs"

const NUMBER_OF_ACTIVITIES = 3

/**
 * A section displaying my latest listens and watches.
 *
 * @param props - A set of `section` props.
 */
export function Activity(props: ComponentProps<"section">) {
  return (
    <section {...props}>
      <h2 className="mb-2 text-xl font-bold text-gray-800 dark:text-white">
        Activity
      </h2>
      <p className="max-w-[46ch] leading-relaxed text-gray-500 dark:text-gray-350">
        I <del>occasionally</del>{" "}
        <a
          className="link text-gray-800 dark:text-white"
          href="https://www.last.fm/user/marcbouchenoire"
          rel="noreferrer"
          target="_blank"
        >
          listen to
        </a>{" "}
        and{" "}
        <a
          className="link text-gray-800 dark:text-white"
          href="https://letterboxd.com/marcbouchenoire/"
          rel="noreferrer"
          target="_blank"
        >
          watch
        </a>{" "}
        things.
      </p>
      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
        <LatestSongs
          className="min-w-0 max-w-full"
          limit={NUMBER_OF_ACTIVITIES}
        />
        <LatestFilms
          className="min-w-0 max-w-full"
          limit={NUMBER_OF_ACTIVITIES}
        />
      </div>
    </section>
  )
}

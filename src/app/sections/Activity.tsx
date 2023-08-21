import type { ComponentProps } from "react"
import { LatestFilm } from "src/components/miscellaneous/LatestFilm"
import { LatestSong } from "src/components/miscellaneous/LatestSong"

/**
 * A section displaying my latest listens and watches.
 *
 * @param props - A set of `section` props.
 */
export function Activity(props: ComponentProps<"section">) {
  return (
    <section {...props}>
      <h2 className="mb-2 text-xl font-bold text-zinc-800 dark:text-white">
        Activity
      </h2>
      <p className="max-w-[46ch] leading-relaxed text-zinc-500 dark:text-zinc-350">
        I <del>occasionally</del>{" "}
        <a
          className="link text-zinc-800 dark:text-white"
          href="https://www.last.fm/user/marcbouchenoire"
          rel="noreferrer"
          target="_blank"
        >
          listen to things
        </a>{" "}
        and{" "}
        <a
          className="link text-zinc-800 dark:text-white"
          href="https://letterboxd.com/marcbouchenoire/"
          rel="noreferrer"
          target="_blank"
        >
          watch films
        </a>
        .
      </p>
      <div className="mt-8 flex flex-col gap-8">
        <LatestSong className="min-w-0 max-w-full" />
        <LatestFilm className="min-w-0 max-w-full" />
      </div>
    </section>
  )
}

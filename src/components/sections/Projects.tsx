import clsx from "clsx"
import formatDistanceStrict from "date-fns/formatDistanceStrict"
import { ComponentProps, useMemo } from "react"
import { useRepository } from "../../hooks/use-repository"
import { capitalize } from "../../utils/capitalize"

interface ProjectProps extends ComponentProps<"div"> {
  /**
   * The project's repository.
   */
  repository: string
}

/**
 * Display a personal project with data from GitHub.
 *
 * @param props - A set of `div` props.
 * @param [props.children] - The project's content.
 * @param [props.repository] - The project's repository.
 * @param [props.className] - A list of one or more classes.
 */
function Project({ children, repository, className, ...props }: ProjectProps) {
  const { created, stars } = useRepository(repository)
  const date = useMemo(() => {
    if (!created) return

    return new Date(created)
  }, [created])
  const relativeDate = useMemo(() => {
    if (!date) return

    return `${capitalize(formatDistanceStrict(date, Date.now()))} ago`
  }, [date])

  return (
    <div
      className={clsx(
        className,
        "flex relative flex-col p-6 rounded-lg border dark:border-zinc-800 sm:p-8 border-zinc-150"
      )}
      {...props}
    >
      <div className="flex items-center mb-8 text-zinc-400">
        <small className="flex gap-4 items-center font-semibold tracking-widest leading-tight uppercase text-2xs">
          <span className="flex items-center">
            <svg
              className="flex-none mr-1 -ml-px"
              height="20"
              role="presentation"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M10 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
                fill="currentColor"
                fillRule="evenodd"
              />
              <path
                clipRule="evenodd"
                d="M10 6a1 1 0 0 1 1 1v2.382l1.447.724a1 1 0 1 1-.894 1.788l-2-1A1 1 0 0 1 9 10V7a1 1 0 0 1 1-1Z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
            {date ? (
              <time className="truncate" dateTime={date.toISOString()}>
                {relativeDate}
              </time>
            ) : (
              <span className="truncate">…</span>
            )}
          </span>
          <span className="flex items-center">
            <svg
              className="flex-none mr-1 -ml-px"
              height="20"
              role="presentation"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M10 3a1 1 0 0 1 .905.575l1.628 3.467 3.619.556a1 1 0 0 1 .563 1.687l-2.647 2.712.627 3.842a1 1 0 0 1-1.47 1.036L10 15.092l-3.224 1.783a1 1 0 0 1-1.47-1.036l.626-3.842-2.647-2.712a1 1 0 0 1 .563-1.687l3.62-.556 1.627-3.467A1 1 0 0 1 10 3Zm0 3.353-.949 2.021a1 1 0 0 1-.753.564l-2.224.342 1.642 1.68a1 1 0 0 1 .271.86l-.376 2.308 1.905-1.054a1 1 0 0 1 .968 0l1.905 1.054-.376-2.308a1 1 0 0 1 .271-.86l1.642-1.68-2.224-.342a1 1 0 0 1-.753-.564L10 6.354Z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
            <span>{stars ?? "…"}</span>
          </span>
        </small>
        <a
          aria-label="View on GitHub"
          className="flex-none ml-auto hover:text-zinc-600 dark:hover:text-zinc-100 rounded-full transition focusable"
          href={`https://github.com/${repository}`}
          rel="noreferrer"
          target="_blank"
        >
          <svg
            height="24"
            role="presentation"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M12 2C6.475 2 2 6.47 2 11.988c0 4.42 2.862 8.153 6.838 9.476.5.087.687-.212.687-.474 0-.238-.013-1.024-.013-1.86C7 19.59 6.35 18.517 6.15 17.955c-.113-.287-.6-1.174-1.025-1.411-.35-.187-.85-.65-.013-.662.788-.012 1.35.724 1.538 1.024.9 1.51 2.338 1.086 2.912.824.088-.65.35-1.086.638-1.336-2.225-.25-4.55-1.111-4.55-4.931 0-1.087.387-1.986 1.025-2.685-.1-.25-.45-1.273.1-2.646 0 0 .837-.263 2.75 1.023a9.29 9.29 0 0 1 2.5-.337c.85 0 1.7.113 2.5.337 1.912-1.298 2.75-1.023 2.75-1.023.55 1.373.2 2.397.1 2.646.637.7 1.025 1.586 1.025 2.685 0 3.832-2.337 4.681-4.562 4.931.362.312.675.912.675 1.848 0 1.336-.013 2.41-.013 2.747 0 .262.188.574.688.474C19.137 20.141 22 16.395 22 11.988 22 6.47 17.525 2 12 2Z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
        </a>
      </div>
      <div className="mt-auto">{children}</div>
    </div>
  )
}

/**
 * A section displaying personal projects.
 *
 * @param props - A set of `section` props.
 */
export function Projects(props: ComponentProps<"section">) {
  return (
    <section {...props}>
      <div className="content">
        <h2 className="mb-2 text-xl font-bold text-zinc-800 dark:text-white">
          Projects
        </h2>
        <p className="max-w-[46ch] leading-relaxed text-zinc-500 dark:text-zinc-350">
          A selection of personal—and{" "}
          <a
            className="text-zinc-800 dark:text-white link"
            href="https://github.com/marcbouchenoire"
            rel="noreferrer"
            target="_blank"
          >
            open source
          </a>
          —projects.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-5 mt-8 sm:grid-cols-2 sm:gap-8 content lg:max-w-screen-md-8">
        <Project repository="marcbouchenoire/dimmmensions">
          <h3 className="mb-2 font-semibold text-dimmmensions-500 dark:text-dimmmensions-400">
            Dimmmmensions
          </h3>
          <p className="leading-relaxed text-zinc-500 dark:text-zinc-350">
            A collection of dimensions from iOS and iPadOS&nbsp;devices.
          </p>
          <a
            className="flex justify-center items-center py-2 px-2.5 mt-4 font-medium text-white dark:text-zinc-900 selection:bg-white/30 dark:selection:bg-zinc-900/30 rounded-md shadow-lg transition cursor-pointer dark:hover:bg-dimmmensions-400/80 hover:bg-dimmmensions-500/80 hover:shadow-dimmmensions-500/5 dark:hover:shadow-dimmmensions-400/5 bg-dimmmensions-500 dark:bg-dimmmensions-400 shadow-dimmmensions-500/10 dark:shadow-dimmmensions-400/10 focus:ring-dimmmensions-500/40 dark:focus:ring-dimmmensions-400/40 focusable"
            href="https://dimmmensions.marcbouchenoire.com"
            rel="noreferrer"
            target="_blank"
          >
            Learn more
          </a>
        </Project>
        <Project repository="marcbouchenoire/symbolist">
          <h3 className="mb-2 font-semibold text-symbolist-500 dark:text-symbolist-400">
            Symbolist
          </h3>
          <p className="leading-relaxed text-zinc-500 dark:text-zinc-350">
            A collection of every symbol from SF&nbsp;Symbols.
          </p>
          <a
            className="flex justify-center items-center py-2 px-2.5 mt-4 font-medium text-white dark:text-zinc-900 selection:bg-white/30 dark:selection:bg-zinc-900/30 rounded-md shadow-lg transition cursor-pointer dark:hover:bg-symbolist-400/80 hover:bg-symbolist-500/80 hover:shadow-symbolist-500/5 dark:hover:shadow-symbolist-400/5 bg-symbolist-500 dark:bg-symbolist-400 shadow-symbolist-500/10 dark:shadow-symbolist-400/10 focus:ring-symbolist-500/40 dark:focus:ring-symbolist-400/40 focusable"
            href="https://symbolist.marcbouchenoire.com"
            rel="noreferrer"
            target="_blank"
          >
            Learn more
          </a>
        </Project>
        <Project repository="marcbouchenoire/typometer">
          <h3 className="mb-2 font-semibold text-typometer-500 dark:text-typometer-400">
            Typometer
          </h3>
          <p className="leading-relaxed text-zinc-500 dark:text-zinc-350">
            Measure text asynchronously.
          </p>
          <a
            className="flex justify-center items-center py-2 px-2.5 mt-4 font-medium text-white dark:text-zinc-900 selection:bg-white/30 dark:selection:bg-zinc-900/30 rounded-md shadow-lg transition cursor-pointer dark:hover:bg-typometer-400/80 hover:bg-typometer-500/80 hover:shadow-typometer-500/5 dark:hover:shadow-typometer-400/5 bg-typometer-500 dark:bg-typometer-400 shadow-typometer-500/10 dark:shadow-typometer-400/10 focus:ring-typometer-500/40 dark:focus:ring-typometer-400/40 focusable"
            href="https://typometer.marcbouchenoire.com"
            rel="noreferrer"
            target="_blank"
          >
            Learn more
          </a>
        </Project>
        <Project repository="marcbouchenoire/tsatsiki">
          <h3 className="mb-2 font-semibold text-lime-500 dark:text-lime-400">
            Tsatsiki
          </h3>
          <p className="leading-relaxed text-zinc-500 dark:text-zinc-350">
            Run <code>tsc</code> with both a configuration and
            specific&nbsp;files.
          </p>
        </Project>
        <Project repository="marcbouchenoire/sketch-constraints">
          <h3 className="mb-2 font-semibold text-amber-500 dark:text-amber-400">
            Sketch Constraints
          </h3>
          <p className="leading-relaxed text-zinc-500 dark:text-zinc-350">
            A plugin that integrates constraints in Sketch to lay
            out&nbsp;layers.
          </p>
        </Project>
        <Project repository="awkward/alembic">
          <h3 className="mb-2 font-semibold text-teal-500 dark:text-teal-400">
            Alembic
          </h3>
          <p className="leading-relaxed text-zinc-500 dark:text-zinc-350">
            Extract a color palette from Sketch&nbsp;images.
          </p>
        </Project>
      </div>
    </section>
  )
}

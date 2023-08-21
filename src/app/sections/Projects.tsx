import type { ComponentProps } from "react"
import { ProjectCard } from "../../components/miscellaneous/ProjectCard"

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
            className="link text-zinc-800 dark:text-white"
            href="https://github.com/marcbouchenoire"
            rel="noreferrer"
            target="_blank"
          >
            open source
          </a>
          —projects.
        </p>
      </div>
      <div className="content mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-8 lg:max-w-screen-md-8">
        <ProjectCard repository="marcbouchenoire/dimmmensions">
          <h3 className="mb-2 font-semibold text-dimmmensions-500 dark:text-dimmmensions-400">
            <svg
              aria-label="Dimmmensions"
              className="inline-block h-[1em] -translate-y-1"
              viewBox="0 0 652 80"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M55 76c0 2 1 3 2 3h12c1 0 3-1 3-3l9-48c1-1 0-3-2-3H68c-2 0-3 1-3 3L55 76ZM72 17l4 1c2 0 5-1 7-3a9 9 0 0 0 4-6 7 7 0 0 0-2-7l-7-2-7 2a9 9 0 0 0-4 6 7 7 0 0 0 2 7l3 2Z"
                fill="currentColor"
              />
              <path
                clipRule="evenodd"
                d="M31 76c0 2 1 3 2 3h12c1 0 3-1 3-3L62 4l-2-2H49l-4 2-5 30-5-7-9-3c-4 0-8 1-12 4-3 2-6 5-8 9L2 49l-1 7v12c1 3 2 6 5 9 3 2 6 3 10 3a19 19 0 0 0 16-8l-1 4Zm-6-37h3a8 8 0 0 1 9 6v4l-1 6-4 7a9 9 0 0 1-7 4 6 6 0 0 1-6-4c-2-2-2-5-1-7l1-5c0-3 1-6 3-8l3-3Z"
                fill="currentColor"
                fillRule="evenodd"
              />
              <path
                d="M463 79c-1 0-2-1-2-3l9-48c1-2 2-3 4-3h11l2 3-9 48c-1 2-2 3-4 3h-11ZM481 18a10 10 0 0 1-7-3 7 7 0 0 1-1-7 9 9 0 0 1 3-6l8-2 6 2a7 7 0 0 1 2 7 9 9 0 0 1-4 6c-2 2-4 3-7 3ZM93 79c1 0 3-1 3-3l5-26 2-6 4-4 5-1c2 0 3 0 4 2v7l-5 28c0 2 1 3 2 3h11c2 0 3-1 3-3l6-26 2-7 4-3 4-1c3 0 4 0 5 2v7l-5 28c-1 2 0 3 2 3h11c2 0 3-1 3-3l5-26v-1l3-6 4-3 4-1 4 2 1 8-6 27c0 2 1 3 2 3h12l3-3 5-27 2-6 4-3 5-1 4 2v8l-5 27c0 2 1 3 2 3h11c2 0 3-1 3-3l6-27 2-6 4-3 4-1 5 2v8l-6 27c0 2 1 3 3 3h11c1 0 3-1 3-3l5-27 3-6 3-3 5-1 4 2 1 8-6 27c0 2 1 3 2 3h12l3-3 6-32V34l-5-7c-2-2-5-3-9-3l-9 2c-4 2-7 4-9 7-1-2-2-4-5-6-2-2-5-3-8-3l-10 2-9 7-4-6-9-3-10 2-8 7-5-6c-2-2-5-3-8-3l-10 2c-4 2-7 4-9 7l-4-6-9-3-10 2-9 7a13 13 0 0 0-13-9 18 18 0 0 0-16 10l1-6-2-3H92c-2 0-3 1-3 3L79 76c0 2 1 3 2 3h12Z"
                fill="currentColor"
              />
              <path
                clipRule="evenodd"
                d="M341 63c2 0 3 1 2 2-2 5-5 9-9 11-4 3-10 4-15 4-4 0-9-1-13-3l-8-8c-2-4-2-9-1-14l1-7c2-8 5-13 10-18 5-4 11-6 18-6 5 0 10 1 13 4 4 2 6 5 8 9v13l-1 7h-33v3l2 5 6 1 4-1 2-1 3-1h11Zm-26-16h17l-1-7-6-2a8 8 0 0 0-6 2l-4 7Z"
                fill="currentColor"
                fillRule="evenodd"
              />
              <path
                d="M363 79c2 0 3-1 4-3l5-25 2-7 4-4 5-1c2 0 4 0 5 2v7l-5 28c0 2 1 3 2 3h11c2 0 3-1 3-3l7-32-1-10c0-3-2-5-4-7l-9-3a20 20 0 0 0-17 10l1-6-2-3h-11c-2 0-3 1-4 3l-9 48c0 2 1 3 2 3h11ZM560 76c0 2-2 3-3 3h-12c-1 0-2-1-2-3l10-48c0-2 1-3 3-3h11l2 3-1 6c2-3 5-6 8-7l9-3c3 0 7 1 9 3l5 7v10l-6 32c-1 2-2 3-4 3h-11c-1 0-2-1-2-3l5-28v-7c-1-2-2-2-5-2a10 10 0 0 0-9 5l-2 7-5 25ZM433 38l4-1 4 1 2 2 2 2h12l2-2c0-5-2-8-5-11-4-3-9-5-16-5l-11 2-8 5c-3 3-4 6-5 10s0 7 2 10 6 5 11 7l8 1 4 2a3 3 0 0 1 0 2 4 4 0 0 1-2 4l-5 1-6-2a5 5 0 0 1-1-2l-3-2h-11l-2 2c0 5 2 9 5 12 4 3 10 4 17 4l12-2 9-5c2-3 4-6 4-9 1-5 0-8-2-11s-6-5-12-6l-7-2-4-1a3 3 0 0 1 0-3 4 4 0 0 1 2-3ZM630 37l-4 1a4 4 0 0 0-2 3 3 3 0 0 0 1 3l3 1 7 2c6 1 10 3 12 6s3 6 2 11c0 3-2 6-4 9l-9 5-11 2c-8 0-13-1-18-4-3-3-5-7-5-12l2-2h11c2 0 2 1 3 2v1l2 1 5 2 6-1a4 4 0 0 0 2-4 3 3 0 0 0-1-2l-4-2-8-1-11-7c-2-3-2-6-2-10 1-4 2-7 5-10l8-5 11-2c7 0 12 2 16 5 3 3 5 6 5 11l-2 2h-12l-2-2-1-2-5-1Z"
                fill="currentColor"
              />
              <path
                clipRule="evenodd"
                d="M498 77a31 31 0 0 0 26 1l10-8 5-11 2-9c1-4 0-9-1-13-2-4-5-7-9-9-4-3-8-4-13-4l-12 3a25 25 0 0 0-15 19l-2 7c-1 6-1 10 1 14 1 4 4 7 8 10Zm12-36c2-2 5-2 7-2a7 7 0 0 1 6 2c1 2 2 4 1 7l-1 7-3 8c-2 2-4 3-8 3l-6-3-1-8 2-8 3-6Z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
          </h3>
          <p className="leading-relaxed text-zinc-500 dark:text-zinc-350">
            A collection of dimensions from iOS and iPadOS&nbsp;devices.
          </p>
          <a
            className="focusable mt-4 flex cursor-pointer items-center justify-center rounded-md bg-dimmmensions-500 py-2 px-2.5 font-medium text-white shadow-lg shadow-dimmmensions-500/10 transition selection:bg-white/30 hover:bg-dimmmensions-500/80 hover:shadow-dimmmensions-500/5 focus:ring-dimmmensions-500/40 dark:bg-dimmmensions-400 dark:text-zinc-900 dark:shadow-dimmmensions-400/10 dark:selection:bg-zinc-900/30 dark:hover:bg-dimmmensions-400/80 dark:hover:shadow-dimmmensions-400/5 dark:focus:ring-dimmmensions-400/40"
            href="https://dimmmensions.marcbouchenoire.com"
            rel="noreferrer"
            target="_blank"
          >
            Learn more
          </a>
        </ProjectCard>
        <ProjectCard repository="marcbouchenoire/symbolist">
          <h3 className="mb-2 font-semibold text-symbolist-500 dark:text-symbolist-400">
            <svg
              aria-label="Symbolist"
              className="inline-block h-[1em]"
              viewBox="0 0 609 80"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m438 0 6 1 1 7v48l-1 6-6 1h-4l-6-1-1-6V8l1-7 6-1h4ZM66 51c0 3-1 6-3 8-3 2-6 4-11 4a113 113 0 0 1-31 1L9 62a177 177 0 0 1-6-1l-1-2v-4l2-4 1-1h5a218 218 0 0 0 38 2l1-1a1 1 0 0 0-1-2 7 7 0 0 0-2 0l-4-1-21-1c-5 0-9 0-13-2-2-1-5-2-6-5l-2-7c0-4 1-7 4-9 2-2 6-3 11-4a123 123 0 0 1 35 0l8 1 3 1 2 2-1 3v1l-1 4-2 1h-4a132 132 0 0 0-27-2 149 149 0 0 0-10 1 1 1 0 0 0-1 0 1 1 0 0 0 1 1l1 1h3l22 1 12 2 8 5 2 9ZM470 2l-5-1h-5l-5 1h-1l-1 6 1 5a4 4 0 0 0 1 1l5 1h5l5-1 1-1 1-5-1-6h-1ZM454 62l7 1h3l7-1 1-6V28l-1-7-7-1h-3l-7 1-1 7v28l1 6ZM544 51c0 3-1 6-3 8-3 2-6 4-11 4a113 113 0 0 1-31 1 148 148 0 0 1-18-3l-1-2v-4l2-4a4 4 0 0 1 1-1h5a210 210 0 0 0 38 2l1-1a1 1 0 0 0-1-2h-2l-4-1-22-1c-4 0-8 0-12-2-2-1-5-2-6-5l-2-7c0-4 1-7 4-9 2-2 6-3 11-4a123 123 0 0 1 38 0 372 372 0 0 1 8 2l2 2-1 3v1l-1 4a4 4 0 0 1-2 1h-4l-2-1h-1a146 146 0 0 0-31-1 13 13 0 0 0-3 0 1 1 0 0 0-1 1 1 1 0 0 0 1 1l1 1a134 134 0 0 0 3 0l22 1 12 2 8 5 2 9ZM71 21l7-1h3l7 1 1 7v7l1 4c1 2 2 3 4 3l9 1a132 132 0 0 0 20-2V28l1-7 7-1h3l7 1 1 7v25c0 7-1 12-4 16s-6 7-12 8c-5 2-12 3-20 3a133 133 0 0 1-25-2c-4-1-5-1-6-3v-6l2-6h1l6 1h2a132 132 0 0 0 21 2l11-1 5-4c1-2 2-5 1-7a168 168 0 0 1-13 3 79 79 0 0 1-29-1c-4-2-7-4-9-7s-3-7-3-11V28l1-7ZM157 20l-6 1-1 7v28l1 6 6 1h4l6-1 1-6V37l8-2 9-1 6 1 4 3 1 4v14c0 3 0 5 2 6l6 1h3l7-1 1-6V37l7-2 10-1 6 1 4 3 1 4v14l1 6 6 1h4l6-1 1-6V39l-2-12c-2-3-5-5-8-6-4-2-9-2-13-2l-12 1a80 80 0 0 0-15 5l-7-4c-4-2-8-2-13-2l-11 1a76 76 0 0 0-13 4l-1-2a4 4 0 0 0-3-2h-6Z"
                fill="currentColor"
              />
              <path
                clipRule="evenodd"
                d="m269 1 7-1h3l7 1 1 7v15a101 101 0 0 1 26-4c8 0 15 2 19 5 5 4 7 10 7 17 0 5-1 10-3 13s-6 6-9 7c-5 2-10 2-15 2h-36l-7-1-1-6V8l1-7Zm30 34-12 3v10h29c2-1 3-1 3-3l2-4-3-6-7-1-12 1Z"
                fill="currentColor"
                fillRule="evenodd"
              />
              <path
                d="M573 35h26l6-1 1-7-1-6-6-1h-26v-4l-1-6-6-1h-7l-2 5-2 6h-2l-6 1-1 6 1 7 6 1h2v8c0 6 1 10 3 13s6 5 10 6l15 3a94 94 0 0 0 20-2c3-1 5-1 6-3l-1-6v-1l-2-5h-7a353 353 0 0 1-14 1l-7-1a6 6 0 0 1-4-2l-1-5v-6Z"
                fill="currentColor"
              />
              <path
                clipRule="evenodd"
                d="M353 24c-6 4-9 10-9 18 0 7 3 13 9 17 7 4 16 5 29 5s23-1 29-5 10-10 10-17c-1-8-4-14-10-18-6-3-16-5-29-5s-22 1-29 5Zm15 22a5 5 0 1 1-7-7 5 5 0 0 1 7 7Zm36 0a5 5 0 1 1-7-7 5 5 0 0 1 7 7Zm-25-2a2 2 0 0 0-4 1l1 3c1 2 3 4 6 4 4 0 6-2 7-4a7 7 0 0 0 1-3 2 2 0 0 0-1-1 2 2 0 0 0-3 1 3 3 0 0 1-1 1c0 1-1 2-3 2l-2-2-1-1v-1Z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
          </h3>
          <p className="leading-relaxed text-zinc-500 dark:text-zinc-350">
            A collection of every symbol from SF&nbsp;Symbols.
          </p>
          <a
            className="focusable mt-4 flex cursor-pointer items-center justify-center rounded-md bg-symbolist-500 py-2 px-2.5 font-medium text-white shadow-lg shadow-symbolist-500/10 transition selection:bg-white/30 hover:bg-symbolist-500/80 hover:shadow-symbolist-500/5 focus:ring-symbolist-500/40 dark:bg-symbolist-400 dark:text-zinc-900 dark:shadow-symbolist-400/10 dark:selection:bg-zinc-900/30 dark:hover:bg-symbolist-400/80 dark:hover:shadow-symbolist-400/5 dark:focus:ring-symbolist-400/40"
            href="https://symbolist.marcbouchenoire.com"
            rel="noreferrer"
            target="_blank"
          >
            Learn more
          </a>
        </ProjectCard>
        <ProjectCard repository="marcbouchenoire/typometer">
          <h3 className="mb-2 font-semibold text-typometer-500 dark:text-typometer-400">
            <svg
              aria-label="Typometer"
              className="inline-block h-[1em]"
              viewBox="0 0 415 80"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m3 11-1 1-2 11 1 1h4L2 42a94 94 0 0 0-1 7c0 4 1 7 3 9s6 3 10 3a31 31 0 0 0 9-1l1-1 1-1 2-11-1-1h-2l-4-1a3 3 0 0 1-1-3v-2l3-16h9l1-1 2-11-1-1h-8l2-10-1-1H11l-1 1-2 10H3Z"
                fill="currentColor"
              />
              <path
                clipRule="evenodd"
                d="M157 60c-6 0-11-1-14-5-4-3-5-8-5-14a34 34 0 0 1 7-21c2-3 5-5 9-7 3-2 7-3 11-3 6 0 10 2 14 5 3 4 5 9 5 15l-2 11-5 10-9 7-11 2Zm1-9 6-2 4-5c2-2 3-4 3-7l1-7c0-4 0-6-2-8a8 8 0 0 0-6-2c-2 0-5 0-6 2l-5 4-3 7-1 8 2 7c2 2 4 3 7 3Z"
                fill="currentColor"
                fillRule="evenodd"
              />
              <path
                d="M36 80a19 19 0 0 1-7-1v-1l2-10 1-1h5l3-1 2-3 3-4 1-3-8-44 1-1h14l1 1 4 28 14-28 1-1h14v2L58 63l-5 8-5 6-6 2-6 1Z"
                fill="currentColor"
              />
              <path
                clipRule="evenodd"
                d="m79 77 1 2h12l1-1 4-23a15 15 0 0 0 1 1c2 3 6 4 10 4s7 0 11-2l8-7 5-11 2-12-2-9a15 15 0 0 0-14-9c-3 0-6 0-9 2l-4 3v-3l-1-1H93l-1 1-13 65Zm29-54c1-2 3-2 5-2a6 6 0 0 1 5 2l2 6a29 29 0 0 1-4 14l-4 5a8 8 0 0 1-8 1l-2-2-2-6a29 29 0 0 1 4-13l4-5Z"
                fill="currentColor"
                fillRule="evenodd"
              />
              <path
                d="m194 12 1-1h8l1 1-1 4 5-4 9-2 7 1a11 11 0 0 1 5 7l7-6 9-2c4 0 7 1 10 4 2 2 3 5 3 10a20 20 0 0 1 0 5l-6 29-1 1h-8l-1-1 6-29a23 23 0 0 0 0-4c1-2 0-4-1-5a6 6 0 0 0-5-2l-5 1a16 16 0 0 0-7 7l-1 3-6 29-1 1h-7l-1-1 5-29a37 37 0 0 0 1-4l-2-5a6 6 0 0 0-5-2l-5 1-3 3-3 4-2 4-5 28-1 1h-8l-1-1 9-46Z"
                fill="currentColor"
              />
              <path
                clipRule="evenodd"
                d="M271 36h36v-2a70 70 0 0 0 0-6c0-5-1-10-4-13s-8-5-14-5l-11 2-8 7c-3 3-4 7-6 10l-1 12c0 6 1 11 5 14 3 3 7 5 13 5 3 0 7 0 10-2l8-5c3-2 4-5 6-8l-1-2h-6l-1 1c-1 3-3 5-6 7l-9 2c-4 0-7-1-8-3-2-2-3-5-3-10v-4Zm28-6v-1l-2-9c-2-2-5-3-8-3s-6 0-8 2l-5 5-4 6h27Z"
                fill="currentColor"
                fillRule="evenodd"
              />
              <path
                d="m314 12 1-1h6l2-10 1-1h4l1 1-2 10h10l1 1-1 3-1 1h-10l-6 30a87 87 0 0 0 0 3 5 5 0 0 0 2 5l5 1h1l1 1-1 3-1 1a26 26 0 0 1-3 0l-8-2-2-7v-4l1-1 5-30h-6l-1-1 1-3Z"
                fill="currentColor"
              />
              <path
                clipRule="evenodd"
                d="M341 36h36l1-1v-1a34 34 0 0 0 1-6c0-6-1-10-4-13s-7-5-13-5c-4 0-7 1-11 3l-8 7-5 10-2 12c0 6 2 10 5 13s7 5 12 5l10-2 8-5 5-8v-2h-3l-1 1c-2 4-4 7-7 9s-7 3-11 3-8-1-10-4c-2-2-3-6-3-11v-5Zm33-4a41 41 0 0 0 0-4c0-4-1-8-3-10-2-3-5-4-9-4l-9 2c-3 2-5 4-6 7a31 31 0 0 0-5 9h32Z"
                fill="currentColor"
                fillRule="evenodd"
              />
              <path
                d="m392 12 1-1h1l1 1-2 9a35 35 0 0 1 1-2l8-6c2-2 5-3 9-3l4 1v2l-2 1h-1a18 18 0 0 0-9 1l-5 4a23 23 0 0 0-6 11l-6 28-1 1h-1l-1-1 9-46Z"
                fill="currentColor"
              />
            </svg>
          </h3>
          <p className="leading-relaxed text-zinc-500 dark:text-zinc-350">
            Measure text asynchronously.
          </p>
          <a
            className="focusable mt-4 flex cursor-pointer items-center justify-center rounded-md bg-typometer-500 py-2 px-2.5 font-medium text-white shadow-lg shadow-typometer-500/10 transition selection:bg-white/30 hover:bg-typometer-500/80 hover:shadow-typometer-500/5 focus:ring-typometer-500/40 dark:bg-typometer-400 dark:text-zinc-900 dark:shadow-typometer-400/10 dark:selection:bg-zinc-900/30 dark:hover:bg-typometer-400/80 dark:hover:shadow-typometer-400/5 dark:focus:ring-typometer-400/40"
            href="https://typometer.marcbouchenoire.com"
            rel="noreferrer"
            target="_blank"
          >
            Learn more
          </a>
        </ProjectCard>
        <ProjectCard repository="marcbouchenoire/tsatsiki">
          <h3 className="mb-2 font-semibold text-lime-500 dark:text-lime-400">
            Tsatsiki
          </h3>
          <p className="leading-relaxed text-zinc-500 dark:text-zinc-350">
            Run <code>tsc</code> with both a configuration and
            specific&nbsp;files.
          </p>
        </ProjectCard>
        <ProjectCard repository="marcbouchenoire/sketch-constraints">
          <h3 className="mb-2 font-semibold text-amber-500 dark:text-amber-400">
            Sketch Constraints
          </h3>
          <p className="leading-relaxed text-zinc-500 dark:text-zinc-350">
            A plugin that integrates constraints in Sketch to lay
            out&nbsp;layers.
          </p>
        </ProjectCard>
        <ProjectCard repository="awkward/alembic">
          <h3 className="mb-2 font-semibold text-teal-500 dark:text-teal-400">
            Alembic
          </h3>
          <p className="leading-relaxed text-zinc-500 dark:text-zinc-350">
            Extract a color palette from Sketch&nbsp;images.
          </p>
        </ProjectCard>
      </div>
    </section>
  )
}

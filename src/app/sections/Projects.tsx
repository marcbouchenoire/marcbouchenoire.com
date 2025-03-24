import { clsx } from "clsx"
import { format } from "date-fns"
import Image from "next/image"
import alembic from "public/projects/alembic.png"
import dimmmensionsDark from "public/projects/dimmmensions-dark.png"
import dimmmensionsLight from "public/projects/dimmmensions-light.png"
import frimousseDark from "public/projects/frimousse-dark.png"
import frimousseLight from "public/projects/frimousse-light.png"
import sketchConstraints from "public/projects/sketch-constraints.png"
import sketchMaps from "public/projects/sketch-maps.png"
import splatoonIcon from "public/projects/splatoon-icon.png"
import splatoon from "public/projects/splatoon.png"
import symbolistDark from "public/projects/symbolist-dark.png"
import symbolistLight from "public/projects/symbolist-light.png"
import typometerDark from "public/projects/typometer-dark.png"
import typometerLight from "public/projects/typometer-light.png"
import { type ComponentProps, Suspense } from "react"
import { Skeleton } from "src/components/Skeleton"
import { GitHubStars } from "../components/GitHubStars"

interface ProjectDetailsProps extends ComponentProps<"small"> {
  date: string
  repository?: string
}

function ProjectDetails({
  date,
  repository,
  className,
  ...props
}: ProjectDetailsProps) {
  const parsedDate = new Date(date)
  const formattedDate = format(parsedDate, "MMMM yyyy")

  return (
    <small
      className={clsx(
        className,
        "flex items-center gap-4 font-semibold text-2xs text-gray-400 uppercase leading-tight tracking-widest"
      )}
      {...props}
    >
      <span className="flex items-center">
        <svg
          className="-ml-px mr-1 flex-none"
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
        <time dateTime={parsedDate.toISOString()}>{formattedDate}</time>
      </span>
      {repository ? (
        <span className="flex items-center">
          <svg
            className="-ml-px mr-1 flex-none"
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
          <Suspense fallback={<Skeleton className="h-[1.2em] w-10" />}>
            <GitHubStars repository={repository} />
          </Suspense>
        </span>
      ) : null}
    </small>
  )
}

/**
 * A section displaying open source projects.
 *
 * @param props - A set of `section` props.
 */
export function Projects(props: ComponentProps<"section">) {
  return (
    <section {...props}>
      <div className="content">
        <h2 className="mb-2 font-bold text-gray-800 text-xl dark:text-white">
          Projects
        </h2>
        <p className="max-w-[46ch] text-gray-500 leading-relaxed dark:text-gray-350">
          A selection of{" "}
          <a
            className="link text-gray-800 dark:text-white"
            href="https://github.com/marcbouchenoire"
            rel="noreferrer"
            target="_blank"
          >
            open source
          </a>{" "}
          projects.
        </p>
      </div>
      <div className="content mt-8 flex flex-col gap-7">
        <a
          className="focusable -mb-0.5 -mt-1 -mx-1.5 flex gap-4 rounded-sm px-1.5 pt-1 pb-0.5 ring-offset-4 transition hover:opacity-60 focus-visible:ring-frimousse/40 dark:ring-offset-gray-900 dark:focus-visible:ring-frimousse-dark/40"
          href="https://frimousse.liveblocks.io/"
          rel="noreferrer"
          target="_blank"
        >
          <div className="flex flex-1 flex-col gap-2.5">
            <h3 className="inline-flex items-center gap-2 font-semibold text-frimousse dark:text-frimousse-dark">
              <svg
                aria-label="Frimousse"
                className="inline-block size-4.5"
                role="img"
                viewBox="0 0 18 18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 0h14v2H2V0Zm0 16H0V2h2v14Zm14 0v2H2v-2h14Zm0 0h2V2h-2v14ZM7 5H5v2h2V5Zm4 0h2v2h-2V5Zm-5 6V9H4v2h2Zm6 0v2H6v-2h6Zm0 0h2V9h-2v2Z"
                  fill="currentColor"
                />
              </svg>
              <span>Frimousse</span>
            </h3>
            <p className="-mt-0.5 text-pretty text-gray-500 leading-relaxed dark:text-gray-350">
              A lightweight, unstyled, and composable emoji picker for React.
            </p>
            <ProjectDetails
              date="2025-03-20"
              repository="liveblocks/frimousse"
            />
          </div>
          <div className="highlight dark:highlight-invert relative aspect-16/10 h-18 xs:h-21 flex-none self-start overflow-hidden rounded-md">
            <Image
              alt="Frimousse"
              className="absolute inset-0 size-full object-cover dark:hidden"
              height={84}
              src={frimousseLight}
            />
            <Image
              alt="Frimousse"
              aria-hidden
              className="absolute inset-0 hidden size-full object-cover dark:block"
              height={84}
              src={frimousseDark}
            />
          </div>
        </a>
        <a
          className="focusable -mb-0.5 -mt-1 -mx-1.5 flex gap-4 rounded-sm px-1.5 pt-1 pb-0.5 ring-offset-4 transition hover:opacity-60 focus-visible:ring-splatoon/40 dark:ring-offset-gray-900 dark:focus-visible:ring-splatoon-dark/40"
          href="https://www.raycast.com/marcbouchenoire/splatoon"
          rel="noreferrer"
          target="_blank"
        >
          <div className="flex flex-1 flex-col gap-2.5">
            <h3 className="inline-flex items-center gap-2 font-semibold text-splatoon dark:text-splatoon-dark">
              <Image
                alt="Splatoon"
                className="size-5"
                src={splatoonIcon}
                width="40"
              />
              <span>Splatoon</span>
            </h3>
            <p className="-mt-0.5 text-pretty text-gray-500 leading-relaxed dark:text-gray-350">
              A Raycast extension to view Splatoon’s current schedules.
            </p>
            <ProjectDetails date="2024-01-22" />
          </div>
          <div className="highlight dark:highlight-invert relative aspect-16/10 h-18 xs:h-21 flex-none self-start overflow-hidden rounded-md">
            <Image
              alt="Splatoon"
              className="absolute inset-0 size-full object-cover"
              height={84}
              src={splatoon}
            />
          </div>
        </a>
        <a
          className="focusable -mb-0.5 -mt-1 -mx-1.5 flex gap-4 rounded-sm px-1.5 pt-1 pb-0.5 ring-offset-4 transition hover:opacity-60 focus-visible:ring-typometer/40 dark:ring-offset-gray-900 dark:focus-visible:ring-typometer-dark/40"
          href="https://typometer.marcbouchenoire.com/"
          rel="noreferrer"
          target="_blank"
        >
          <div className="flex flex-1 flex-col gap-2.5">
            <h3 className="inline-flex items-center gap-2 font-semibold text-typometer dark:text-typometer-dark">
              <svg
                aria-label="Typometer"
                className="inline-block h-[1em] translate-y-0.5"
                role="img"
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
            <p className="text-pretty text-gray-500 leading-relaxed dark:text-gray-350">
              Measure text asynchronously.
            </p>
            <ProjectDetails
              date="2021-04-30"
              repository="marcbouchenoire/typometer"
            />
          </div>
          <div className="highlight dark:highlight-invert relative aspect-16/10 h-18 xs:h-21 flex-none self-start overflow-hidden rounded-md">
            <Image
              alt="Typometer"
              className="absolute inset-0 size-full object-cover dark:hidden"
              height={84}
              src={typometerLight}
            />
            <Image
              alt="Typometer"
              aria-hidden
              className="absolute inset-0 hidden size-full object-cover dark:block"
              height={84}
              src={typometerDark}
            />
          </div>
        </a>
        <a
          className="focusable -mb-0.5 -mt-1 -mx-1.5 flex gap-4 rounded-sm px-1.5 pt-1 pb-0.5 ring-offset-4 transition hover:opacity-60 focus-visible:ring-symbolist/40 dark:ring-offset-gray-900 dark:focus-visible:ring-symbolist-dark/40"
          href="https://symbolist.marcbouchenoire.com/"
          rel="noreferrer"
          target="_blank"
        >
          <div className="flex flex-1 flex-col gap-2.5">
            <h3 className="inline-flex items-center gap-2 font-semibold text-symbolist dark:text-symbolist-dark">
              <svg
                aria-label="Symbolist"
                className="inline-block h-[1em] translate-y-px"
                role="img"
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
            <p className="text-pretty text-gray-500 leading-relaxed dark:text-gray-350">
              A collection of every symbol from SF Symbols.
            </p>
            <ProjectDetails
              date="2021-07-11"
              repository="marcbouchenoire/symbolist"
            />
          </div>
          <div className="highlight dark:highlight-invert relative aspect-16/10 h-18 xs:h-21 flex-none self-start overflow-hidden rounded-md">
            <Image
              alt="Symbolist"
              className="absolute inset-0 size-full object-cover dark:hidden"
              height={84}
              src={symbolistLight}
            />
            <Image
              alt="Symbolist"
              aria-hidden
              className="absolute inset-0 hidden size-full object-cover dark:block"
              height={84}
              src={symbolistDark}
            />
          </div>
        </a>
        <a
          className="focusable -mb-0.5 -mt-1 -mx-1.5 flex gap-4 rounded-sm px-1.5 pt-1 pb-0.5 ring-offset-4 transition hover:opacity-60 focus-visible:ring-dimmmensions/40 dark:ring-offset-gray-900 dark:focus-visible:ring-dimmmensions-dark/40"
          href="https://dimmmensions.marcbouchenoire.com/"
          rel="noreferrer"
          target="_blank"
        >
          <div className="flex flex-1 flex-col gap-2.5">
            <h3 className="inline-flex items-center gap-2 font-semibold text-dimmmensions dark:text-dimmmensions-dark">
              <svg
                aria-label="Dimmmensions"
                className="-translate-y-px inline-block h-[1em]"
                role="img"
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
              <span className="inline-block flex-none translate-y-px rounded-sm bg-gray-100 p-1 font-medium text-gray-500 text-xs leading-none dark:bg-gray-800 dark:text-gray-400">
                Archived
              </span>
            </h3>
            <p className="text-pretty text-gray-500 leading-relaxed dark:text-gray-350">
              A collection of dimensions from iOS and iPadOS devices.
            </p>
            <ProjectDetails
              date="2021-04-15"
              repository="marcbouchenoire/dimmmensions"
            />
          </div>
          <div className="highlight dark:highlight-invert relative aspect-16/10 h-18 xs:h-21 flex-none self-start overflow-hidden rounded-md">
            <Image
              alt="Dimmmensions"
              className="absolute inset-0 size-full object-cover dark:hidden"
              height={84}
              src={dimmmensionsLight}
            />
            <Image
              alt="Dimmmensions"
              aria-hidden
              className="absolute inset-0 hidden size-full object-cover dark:block"
              height={84}
              src={dimmmensionsDark}
            />
          </div>
        </a>
        <a
          className="focusable -mb-0.5 -mt-1 -mx-1.5 flex gap-4 rounded-sm px-1.5 pt-1 pb-0.5 ring-offset-4 transition hover:opacity-60 focus-visible:ring-teal-500/40 dark:ring-offset-gray-900 dark:focus-visible:ring-teal-400/40"
          href="https://github.com/awkward/alembic"
          rel="noreferrer"
          target="_blank"
        >
          <div className="flex flex-1 flex-col gap-2.5">
            <h3 className="inline-flex items-center gap-2 font-semibold text-teal-500 dark:text-teal-400">
              <span>Alembic</span>
              <span className="inline-block flex-none translate-y-px rounded-sm bg-gray-100 p-1 font-medium text-gray-500 text-xs leading-none dark:bg-gray-800 dark:text-gray-400">
                Archived
              </span>
            </h3>
            <p className="text-pretty text-gray-500 leading-relaxed dark:text-gray-350">
              A Sketch plugin to extract a color palette from images.
            </p>
            <ProjectDetails date="2017-08-25" repository="awkward/alembic" />
          </div>
          <div className="highlight dark:highlight-invert relative aspect-16/10 h-18 xs:h-21 flex-none self-start overflow-hidden rounded-md">
            <Image
              alt="Alembic"
              className="absolute inset-0 size-full object-cover"
              height={84}
              src={alembic}
            />
          </div>
        </a>
        <a
          className="focusable -mb-0.5 -mt-1 -mx-1.5 flex gap-4 rounded-sm px-1.5 pt-1 pb-0.5 ring-offset-4 transition hover:opacity-60 focus-visible:ring-sky-500/40 dark:ring-offset-gray-900 dark:focus-visible:ring-sky-400/40"
          href="https://github.com/marcbouchenoire/sketch-maps"
          rel="noreferrer"
          target="_blank"
        >
          <div className="flex flex-1 flex-col gap-2.5">
            <h3 className="inline-flex items-center gap-2 font-semibold text-sky-500 dark:text-sky-400">
              <span>Sketch Maps</span>
              <span className="inline-block flex-none translate-y-px rounded-sm bg-gray-100 p-1 font-medium text-gray-500 text-xs leading-none dark:bg-gray-800 dark:text-gray-400">
                Archived
              </span>
            </h3>
            <p className="text-pretty text-gray-500 leading-relaxed dark:text-gray-350">
              A Sketch plugin to fill layers with maps.
            </p>
            <ProjectDetails
              date="2017-03-07"
              repository="marcbouchenoire/sketch-maps"
            />
          </div>
          <div className="highlight dark:highlight-invert relative aspect-16/10 h-18 xs:h-21 flex-none self-start overflow-hidden rounded-md">
            <Image
              alt="Sketch Maps"
              className="absolute inset-0 size-full object-cover"
              height={84}
              src={sketchMaps}
            />
          </div>
        </a>
        <a
          className="focusable -mb-0.5 -mt-1 -mx-1.5 flex gap-4 rounded-sm px-1.5 pt-1 pb-0.5 ring-offset-4 transition hover:opacity-60 focus-visible:ring-blue-500/40 dark:ring-offset-gray-900 dark:focus-visible:ring-blue-400/40"
          href="https://github.com/marcbouchenoire/sketch-constraints"
          rel="noreferrer"
          target="_blank"
        >
          <div className="flex flex-1 flex-col gap-2.5">
            <h3 className="inline-flex items-center gap-2 font-semibold text-blue-500 dark:text-blue-400">
              <span>Sketch Constraints</span>
              <span className="inline-block flex-none translate-y-px rounded-sm bg-gray-100 p-1 font-medium text-gray-500 text-xs leading-none dark:bg-gray-800 dark:text-gray-400">
                Archived
              </span>
            </h3>
            <p className="text-pretty text-gray-500 leading-relaxed dark:text-gray-350">
              A Sketch plugin that integrates constraints to lay out layers.
            </p>
            <ProjectDetails
              date="2015-09-18"
              repository="marcbouchenoire/sketch-constraints"
            />
          </div>
          <div className="highlight dark:highlight-invert relative aspect-16/10 h-18 xs:h-21 flex-none self-start overflow-hidden rounded-md">
            <Image
              alt="Sketch Constraints"
              className="absolute inset-0 size-full object-cover"
              height={84}
              src={sketchConstraints}
            />
          </div>
        </a>
      </div>
    </section>
  )
}

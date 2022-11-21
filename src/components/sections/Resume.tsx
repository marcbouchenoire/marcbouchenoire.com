import { ComponentProps } from "react"

/**
 * A section listing roles and degrees.
 *
 * @param props - A set of `section` props.
 */
export function Resume(props: ComponentProps<"section">) {
  return (
    <section {...props}>
      <h2 className="mb-2 text-xl font-bold text-zinc-800 dark:text-white">
        Résumé
      </h2>
      <p className="max-w-[46ch] leading-relaxed text-zinc-500 dark:text-zinc-350">
        A history of places I’ve worked and studied at.
      </p>
      <ul className="mt-8">
        <li className="my-5 flex items-center gap-4 text-zinc-500 dark:text-zinc-350">
          <a
            className="focusable aspect-square w-12 cursor-pointer rounded-md bg-orange-500/10 text-orange-500 transition hover:bg-orange-500/20 focus:ring-orange-500/40 dark:bg-orange-400/20 dark:text-orange-400 dark:hover:bg-orange-400/30 dark:focus:ring-orange-400/40"
            href="https://liveblocks.io/"
            rel="noreferrer"
            target="_blank"
          >
            <svg
              className="h-full w-full"
              viewBox="0 0 56 56"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M34.464 18H12l6.465 7v9.667l16-16.667ZM21.535 38H44l-6.464-7v-9.667L21.535 38Z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
          </a>
          <div className="flex min-w-0 flex-col justify-center">
            <p className="mb-1 flex items-center">
              <span className="truncate font-semibold text-zinc-700 dark:text-zinc-100">
                Liveblocks
              </span>
              <span className="ml-1.5 inline-block flex-none translate-y-px rounded bg-zinc-100 p-1 text-xs font-medium leading-none text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                2022
                <span className="mx-0.5 text-zinc-350 dark:text-zinc-550">
                  —
                </span>
                Current
              </span>
            </p>
            <p className="flex items-center truncate">
              <span className="flex-1 truncate text-zinc-500 dark:text-zinc-400">
                Design Engineer
              </span>
            </p>
          </div>
        </li>
        <li className="my-5 flex items-center gap-4 text-zinc-500 dark:text-zinc-350">
          <a
            className="focusable aspect-square w-12 cursor-pointer rounded-md bg-sky-500/10 text-sky-500 transition hover:bg-sky-500/20 focus:ring-sky-500/40 dark:bg-sky-400/20 dark:text-sky-400 dark:hover:bg-sky-400/30 dark:focus:ring-sky-400/40"
            href="https://www.framer.com/"
            rel="noreferrer"
            target="_blank"
          >
            <svg
              className="h-full w-full"
              viewBox="0 0 56 56"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M18 14h20v10H28L18 14Zm0 10h10l10 10H28v10L18 34V24Z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
          </a>
          <div className="flex min-w-0 flex-col justify-center">
            <p className="mb-1 flex items-center">
              <span className="truncate font-semibold text-zinc-700 dark:text-zinc-100">
                Framer
              </span>
              <span className="ml-1.5 inline-block flex-none translate-y-px rounded bg-zinc-100 p-1 text-xs font-medium leading-none text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                2021
                <span className="mx-0.5 text-zinc-350 dark:text-zinc-550">
                  —
                </span>
                22
              </span>
            </p>
            <p className="flex items-center truncate">
              <span className="flex-1 truncate text-zinc-500 dark:text-zinc-400">
                Design Engineer
              </span>
            </p>
          </div>
        </li>
        <li className="my-5 flex items-center gap-4 text-zinc-500 dark:text-zinc-350">
          <div className="aspect-square w-12" />
          <div className="flex min-w-0 flex-col justify-center">
            <p className="mb-1 flex items-center">
              <span className="truncate font-semibold text-zinc-700 dark:text-zinc-100">
                Framer
              </span>
              <span className="ml-1.5 inline-block flex-none translate-y-px rounded bg-zinc-100 p-1 text-xs font-medium leading-none text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                2019
                <span className="mx-0.5 text-zinc-350 dark:text-zinc-550">
                  —
                </span>
                21
              </span>
            </p>
            <p className="flex items-center truncate">
              <span className="flex-1 truncate text-zinc-500 dark:text-zinc-400">
                Product Designer
              </span>
            </p>
          </div>
        </li>
        <li className="my-5 flex items-center gap-4 text-zinc-500 dark:text-zinc-350">
          <div className="aspect-square w-12" />
          <div className="flex min-w-0 flex-col justify-center">
            <p className="mb-1 flex items-center">
              <span className="truncate font-semibold text-zinc-700 dark:text-zinc-100">
                Framer
              </span>
              <span className="ml-1.5 inline-block flex-none translate-y-px rounded bg-zinc-100 p-1 text-xs font-medium leading-none text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                2019
              </span>
            </p>
            <p className="flex items-center truncate">
              <span className="flex-1 truncate text-zinc-500 dark:text-zinc-400">
                Product Design Intern
              </span>
            </p>
          </div>
        </li>
        <li className="my-5 flex items-center gap-4 text-zinc-500 dark:text-zinc-350">
          <a
            className="focusable aspect-square w-12 cursor-pointer rounded-md bg-violet-500/10 text-violet-500 transition hover:bg-violet-500/20 focus:ring-violet-500/40 dark:bg-violet-400/20 dark:text-violet-400 dark:hover:bg-violet-400/30 dark:focus:ring-violet-400/40"
            href="https://www.awkward.co/"
            rel="noreferrer"
            target="_blank"
          >
            <svg
              className="h-full w-full"
              viewBox="0 0 56 56"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="m15.232 36.917-2.23-17.74a.34.34 0 0 1 .028-.183.356.356 0 0 1 .12-.144.375.375 0 0 1 .368-.036l10.065 4.484a.377.377 0 0 0 .306 0l16.595-7.267a.379.379 0 0 1 .348.025.343.343 0 0 1 .168.295v23.305a.357.357 0 0 1-.163.285.374.374 0 0 1-.336.035l-17.028-6.563a.377.377 0 0 0-.306 0l-7.413 3.773a.378.378 0 0 1-.46-.116.346.346 0 0 1-.062-.153Z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
          </a>
          <div className="flex min-w-0 flex-col justify-center">
            <p className="mb-1 flex items-center">
              <span className="truncate font-semibold text-zinc-700 dark:text-zinc-100">
                Awkward
              </span>
              <span className="ml-1.5 inline-block flex-none translate-y-px rounded bg-zinc-100 p-1 text-xs font-medium leading-none text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                2018
              </span>
            </p>
            <p className="flex items-center truncate">
              <span className="flex-1 truncate text-zinc-500 dark:text-zinc-400">
                Product Design Intern
              </span>
            </p>
          </div>
        </li>
        <li className="my-5 flex items-center gap-4 text-zinc-500 dark:text-zinc-350">
          <a
            className="focusable aspect-square w-12 cursor-pointer rounded-md bg-rose-500/10 text-rose-500 transition hover:bg-rose-500/20 focus:ring-rose-500/40 dark:bg-rose-400/20 dark:text-rose-400 dark:hover:bg-rose-400/30 dark:focus:ring-rose-400/40"
            href="https://en.lecolededesign.com/"
            rel="noreferrer"
            target="_blank"
          >
            <svg
              className="h-full w-full"
              viewBox="0 0 56 56"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M14 43V28.09L33 13v7.148L42 13v14.727L23 43v-7.234L14 43Z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
          </a>
          <div className="flex min-w-0 flex-col justify-center">
            <p className="mb-1 flex items-center">
              <span className="truncate font-semibold text-zinc-700 dark:text-zinc-100">
                L’École de Design
              </span>
              <span className="ml-1.5 inline-block flex-none translate-y-px rounded bg-zinc-100 p-1 text-xs font-medium leading-none text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                2017
                <span className="mx-0.5 text-zinc-350 dark:text-zinc-550">
                  —
                </span>
                19
              </span>
            </p>
            <p className="flex items-center truncate">
              <span className="flex-1 truncate text-zinc-500 dark:text-zinc-400">
                Master’s degree in Immersive Design
              </span>
            </p>
          </div>
        </li>
        <li className="my-5 flex items-center gap-4 text-zinc-500 dark:text-zinc-350">
          <div className="aspect-square w-12" />
          <div className="flex min-w-0 flex-col justify-center">
            <p className="mb-1 flex items-center">
              <span className="truncate font-semibold text-zinc-700 dark:text-zinc-100">
                L’École de Design
              </span>
              <span className="ml-1.5 inline-block flex-none translate-y-px rounded bg-zinc-100 p-1 text-xs font-medium leading-none text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                2014
                <span className="mx-0.5 text-zinc-350 dark:text-zinc-550">
                  —
                </span>
                17
              </span>
            </p>
            <p className="flex items-center truncate">
              <span className="flex-1 truncate text-zinc-500 dark:text-zinc-400">
                Bachelor’s degree in Interaction Design
              </span>
            </p>
          </div>
        </li>
      </ul>
    </section>
  )
}

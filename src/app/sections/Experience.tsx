import { clsx } from "clsx"
import type { ComponentProps } from "react"

/**
 * A section listing roles and degrees.
 *
 * @param props - A set of `section` props.
 * @param [props.className] - A list of one or more classes.
 */
export function Experience({ className, ...props }: ComponentProps<"section">) {
  return (
    <section className={clsx(className, "content")} {...props}>
      <h2 className="mb-2 font-bold text-gray-800 text-xl dark:text-white">
        Experience
      </h2>
      <p className="max-w-[46ch] text-gray-500 leading-relaxed dark:text-gray-350">
        The places I’ve worked and studied at.
      </p>
      <ul className="mt-8">
        <li className="my-5 flex items-center gap-4 text-gray-500 dark:text-gray-350">
          <a
            className="focusable aspect-square w-13 flex-none cursor-pointer rounded-md bg-liveblocks/10 text-liveblocks transition hover:bg-liveblocks/20 focus-visible:ring-liveblocks/40 dark:bg-liveblocks-dark/20 dark:text-liveblocks-dark dark:focus-visible:ring-liveblocks-dark/40 dark:hover:bg-liveblocks-dark/30"
            href="https://liveblocks.io/"
            rel="noreferrer"
            target="_blank"
          >
            <svg
              aria-label="Liveblocks"
              className="h-full w-full"
              role="img"
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
              <span className="truncate font-semibold text-gray-700 dark:text-gray-100">
                Liveblocks
              </span>
              <span className="ml-1.5 inline-block flex-none translate-y-px rounded-sm bg-gray-100 p-1 font-medium text-gray-500 text-xs leading-none dark:bg-gray-800 dark:text-gray-400">
                2023
                <span className="mx-0.5 text-gray-350 dark:text-gray-550">
                  –
                </span>
                Present
              </span>
            </p>
            <p className="flex items-center truncate">
              <span className="flex-1 truncate text-gray-500 dark:text-gray-400">
                Staff Design Engineer
              </span>
            </p>
          </div>
        </li>
        <li className="my-5 flex items-center gap-4 text-gray-500 dark:text-gray-350">
          <div className="aspect-square w-13 flex-none" />
          <div className="flex min-w-0 flex-col justify-center">
            <p className="mb-1 flex items-center">
              <span className="truncate font-semibold text-gray-700 dark:text-gray-100">
                Liveblocks
              </span>
              <span className="ml-1.5 inline-block flex-none translate-y-px rounded-sm bg-gray-100 p-1 font-medium text-gray-500 text-xs leading-none dark:bg-gray-800 dark:text-gray-400">
                2022
                <span className="mx-0.5 text-gray-350 dark:text-gray-550">
                  –
                </span>
                23
              </span>
            </p>
            <p className="flex items-center truncate">
              <span className="flex-1 truncate text-gray-500 dark:text-gray-400">
                Senior Design Engineer
              </span>
            </p>
          </div>
        </li>
        <li className="my-5 flex items-center gap-4 text-gray-500 dark:text-gray-350">
          <a
            className="focusable aspect-square w-13 flex-none cursor-pointer rounded-md bg-framer/10 text-framer transition hover:bg-framer/20 focus-visible:ring-framer/40 dark:bg-framer-dark/20 dark:text-framer-dark dark:focus-visible:ring-framer-dark/40 dark:hover:bg-framer-dark/30"
            href="https://www.framer.com/"
            rel="noreferrer"
            target="_blank"
          >
            <svg
              aria-label="Framer"
              className="h-full w-full"
              role="img"
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
              <span className="truncate font-semibold text-gray-700 dark:text-gray-100">
                Framer
              </span>
              <span className="ml-1.5 inline-block flex-none translate-y-px rounded-sm bg-gray-100 p-1 font-medium text-gray-500 text-xs leading-none dark:bg-gray-800 dark:text-gray-400">
                2021
                <span className="mx-0.5 text-gray-350 dark:text-gray-550">
                  –
                </span>
                22
              </span>
            </p>
            <p className="flex items-center truncate">
              <span className="flex-1 truncate text-gray-500 dark:text-gray-400">
                Design Engineer
              </span>
            </p>
          </div>
        </li>
        <li className="my-5 flex items-center gap-4 text-gray-500 dark:text-gray-350">
          <div className="aspect-square w-13 flex-none" />
          <div className="flex min-w-0 flex-col justify-center">
            <p className="mb-1 flex items-center">
              <span className="truncate font-semibold text-gray-700 dark:text-gray-100">
                Framer
              </span>
              <span className="ml-1.5 inline-block flex-none translate-y-px rounded-sm bg-gray-100 p-1 font-medium text-gray-500 text-xs leading-none dark:bg-gray-800 dark:text-gray-400">
                2019
                <span className="mx-0.5 text-gray-350 dark:text-gray-550">
                  –
                </span>
                21
              </span>
            </p>
            <p className="flex items-center truncate">
              <span className="flex-1 truncate text-gray-500 dark:text-gray-400">
                Product Designer
              </span>
            </p>
          </div>
        </li>
        <li className="my-5 flex items-center gap-4 text-gray-500 dark:text-gray-350">
          <div className="aspect-square w-13 flex-none" />
          <div className="flex min-w-0 flex-col justify-center">
            <p className="mb-1 flex items-center">
              <span className="truncate font-semibold text-gray-700 dark:text-gray-100">
                Framer
              </span>
              <span className="ml-1.5 inline-block flex-none translate-y-px rounded-sm bg-gray-100 p-1 font-medium text-gray-500 text-xs leading-none dark:bg-gray-800 dark:text-gray-400">
                2019
              </span>
            </p>
            <p className="flex items-center truncate">
              <span className="flex-1 truncate text-gray-500 dark:text-gray-400">
                Product Design Intern
              </span>
            </p>
          </div>
        </li>
        <li className="my-5 flex items-center gap-4 text-gray-500 dark:text-gray-350">
          <a
            className="focusable aspect-square w-13 flex-none cursor-pointer rounded-md bg-awkward/10 text-awkward transition hover:bg-awkward/20 focus-visible:ring-awkward/40 dark:bg-awkward-dark/20 dark:text-awkward-dark dark:focus-visible:ring-awkward-dark/40 dark:hover:bg-awkward-dark/30"
            href="https://www.awkward.co/"
            rel="noreferrer"
            target="_blank"
          >
            <svg
              aria-label="Awkward"
              className="h-full w-full"
              role="img"
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
              <span className="truncate font-semibold text-gray-700 dark:text-gray-100">
                Awkward
              </span>
              <span className="ml-1.5 inline-block flex-none translate-y-px rounded-sm bg-gray-100 p-1 font-medium text-gray-500 text-xs leading-none dark:bg-gray-800 dark:text-gray-400">
                2018
              </span>
            </p>
            <p className="flex items-center truncate">
              <span className="flex-1 truncate text-gray-500 dark:text-gray-400">
                Product Design Intern
              </span>
            </p>
          </div>
        </li>
        <li className="my-5 flex items-center gap-4 text-gray-500 dark:text-gray-350">
          <a
            className="focusable aspect-square w-13 flex-none cursor-pointer rounded-md bg-lecolededesign/10 text-lecolededesign transition hover:bg-lecolededesign/20 focus-visible:ring-lecolededesign/40 dark:bg-lecolededesign-dark/20 dark:text-lecolededesign-dark dark:focus-visible:ring-lecolededesign-dark/40 dark:hover:bg-lecolededesign-dark/30"
            href="https://en.lecolededesign.com/"
            rel="noreferrer"
            target="_blank"
          >
            <svg
              aria-label="L’École de Design"
              className="h-full w-full"
              role="img"
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
              <span className="truncate font-semibold text-gray-700 dark:text-gray-100">
                L’École de Design
              </span>
              <span className="ml-1.5 inline-block flex-none translate-y-px rounded-sm bg-gray-100 p-1 font-medium text-gray-500 text-xs leading-none dark:bg-gray-800 dark:text-gray-400">
                2017
                <span className="mx-0.5 text-gray-350 dark:text-gray-550">
                  –
                </span>
                19
              </span>
            </p>
            <p className="flex items-center truncate">
              <span className="flex-1 truncate text-gray-500 dark:text-gray-400">
                Master’s degree in Immersive Design
              </span>
            </p>
          </div>
        </li>
        <li className="my-5 flex items-center gap-4 text-gray-500 dark:text-gray-350">
          <div className="aspect-square w-13 flex-none" />
          <div className="flex min-w-0 flex-col justify-center">
            <p className="mb-1 flex items-center">
              <span className="truncate font-semibold text-gray-700 dark:text-gray-100">
                L’École de Design
              </span>
              <span className="ml-1.5 inline-block flex-none translate-y-px rounded-sm bg-gray-100 p-1 font-medium text-gray-500 text-xs leading-none dark:bg-gray-800 dark:text-gray-400">
                2014
                <span className="mx-0.5 text-gray-350 dark:text-gray-550">
                  –
                </span>
                17
              </span>
            </p>
            <p className="flex items-center truncate">
              <span className="flex-1 truncate text-gray-500 dark:text-gray-400">
                Bachelor’s degree in Interaction Design
              </span>
            </p>
          </div>
        </li>
      </ul>
    </section>
  )
}

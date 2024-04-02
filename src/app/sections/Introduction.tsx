import Image from "next/image"
import type { ComponentProps } from "react"
import portrait from "public/portrait.jpg"
import tofu from "public/tofu.jpg"
import { Characters } from "src/components/utils/Characters"

/**
 * An introduction section with a short bio.
 *
 * @param props - A set of `section` props.
 */
export function Introduction(props: ComponentProps<"section">) {
  return (
    <section {...props}>
      <div>
        <div className="relative size-[80px]">
          <div className="portrait absolute h-full w-full bg-gray-800/10 dark:bg-gray-100/10">
            <Image
              alt="Myself"
              className="absolute inset-0 h-full w-full"
              height="80"
              priority
              src={portrait}
              title="Myself"
              width="80"
            />
          </div>
          <div className="absolute bottom-0 right-0 size-[26px] overflow-hidden rounded-full bg-gray-800/10 dark:bg-gray-100/10">
            <Image
              alt="Tofu, my cat"
              className="absolute inset-0 h-full w-full"
              height="64"
              priority
              src={tofu}
              title="Tofu, my cat"
              width="64"
            />
          </div>
        </div>
        <h1 className="mb-1 mt-5 text-2xl font-semibold text-gray-800 dark:text-white">
          Marc Bouchenoire
        </h1>
        <p className="text-lg text-gray-400 dark:text-gray-450">
          Detail-obsessed Design Engineer
        </p>
      </div>
      <div className="my-10 max-w-[56ch] text-gray-500 dark:text-gray-350">
        <p className="my-4 leading-loose">
          Designing and building{" "}
          <em className="delightful">
            <Characters>delightful</Characters>
          </em>{" "}
          products, interfaces, and&nbsp;interactions.
        </p>
        <p className="my-4 leading-loose">
          I’m currently living in Amsterdam and working on collaborative
          components—amongst other things—at&nbsp;
          <a
            className="text-liveblocks-deep dark:text-liveblocks-deep-dark group relative whitespace-nowrap pl-[0.25em] pr-[0.2em] font-medium focus:outline-none"
            href="https://liveblocks.io/"
            rel="noreferrer"
            target="_blank"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute left-0 top-[-0.075lh] h-[0.75lh] w-full select-none before:absolute before:inset-0 before:z-negative before:rounded-r-sm before:bg-liveblocks before:opacity-10 before:transition after:absolute after:-left-px after:top-[-25%] after:h-[125%] after:w-[2px] after:rounded-full after:bg-liveblocks group-hover:before:opacity-20 group-focus:before:opacity-20 dark:before:bg-liveblocks-dark dark:before:opacity-20 after:dark:bg-liveblocks-dark group-hover:dark:before:opacity-30 group-focus:dark:before:opacity-30"
            >
              <span className="absolute -left-px top-[-25%] h-[125%] w-[2px] rounded-full bg-liveblocks dark:bg-liveblocks-dark" />
              <span className="absolute -left-px top-0 origin-top-left -translate-y-full whitespace-nowrap rounded-[0.35em] rounded-bl-none bg-liveblocks px-[0.3rem] py-[0.25rem] text-2xs font-medium leading-none  text-white dark:bg-liveblocks-dark">
                Marc
              </span>
            </span>
            Liveblocks
          </a>
          .
        </p>
      </div>
      <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3">
        <a
          aria-label="Twitter · 𝕏"
          className="focusable -ml-2.5 flex h-10 w-10 flex-none cursor-pointer items-center justify-center gap-2 rounded-full font-medium text-twitter transition hover:text-twitter/50 hover:shadow-twitter/5 focus:ring-twitter/40 dark:text-twitter-dark dark:hover:text-twitter-dark/50 dark:focus:ring-twitter-dark/40"
          href="https://twitter.com/marcbouchenoire"
          rel="me noreferrer"
          target="_blank"
          title="Twitter · 𝕏"
        >
          <svg
            className="[transform:scaleY(-1)]"
            height="24"
            role="presentation"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M21.5 5.894a7.571 7.571 0 0 1-2.239.636 4.024 4.024 0 0 0 1.714-2.235 7.646 7.646 0 0 1-2.475.98A3.83 3.83 0 0 0 15.654 4c-2.516 0-4.366 2.433-3.797 4.959-3.239-.168-6.111-1.776-8.034-4.22-1.021 1.816-.53 4.19 1.206 5.393a3.78 3.78 0 0 1-1.765-.505c-.043 1.87 1.252 3.622 3.126 4.011-.548.155-1.15.19-1.76.07.495 1.604 1.934 2.771 3.641 2.804A7.642 7.642 0 0 1 2.5 18.185 10.757 10.757 0 0 0 8.476 20c7.237 0 11.326-6.334 11.079-12.015a8.101 8.101 0 0 0 1.945-2.09Z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
        </a>
        <a
          aria-label="Mastodon"
          className="focusable -ml-2.5 flex h-10 w-10 flex-none cursor-pointer items-center justify-center gap-2 rounded-full font-medium text-mastodon transition hover:text-mastodon/50 hover:shadow-mastodon/5 focus:ring-mastodon/40 dark:text-mastodon-dark dark:hover:text-mastodon-dark/50 dark:focus:ring-mastodon-dark/40"
          href="https://mastodon.social/@marcbouchenoire"
          rel="me noreferrer"
          target="_blank"
          title="Mastodon"
        >
          <svg
            height="24"
            role="presentation"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M15.83 17.482c2.417-.285 4.522-1.751 4.787-3.092.417-2.111.382-5.152.382-5.152 0-4.122-2.742-5.33-2.742-5.33-1.383-.625-3.758-.888-6.225-.908h-.06c-2.468.02-4.84.283-6.224.908 0 0-2.742 1.208-2.742 5.33l-.003.786c-.004.76-.008 1.603.014 2.483.1 4.03.75 8.003 4.536 8.99 1.745.455 3.244.55 4.45.485 2.189-.12 3.417-.77 3.417-.77l-.072-1.563s-1.564.486-3.32.427c-1.74-.06-3.577-.185-3.859-2.289a4.245 4.245 0 0 1-.039-.59s1.708.412 3.873.51c1.324.059 2.565-.077 3.826-.225Zm1.934-2.934v-4.99c0-1.02-.264-1.83-.794-2.43-.546-.6-1.262-.907-2.15-.907-1.028 0-1.806.388-2.32 1.166l-.5.826-.5-.826c-.515-.778-1.293-1.166-2.321-1.166-.888 0-1.604.307-2.15.907-.53.6-.794 1.41-.794 2.43v4.99h2.008V9.704c0-1.02.437-1.539 1.31-1.539.965 0 1.448.615 1.448 1.83v2.652h1.997V9.996c0-1.216.483-1.83 1.448-1.83.873 0 1.31.517 1.31 1.538v4.844h2.008Z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
        </a>
        <a
          aria-label="GitHub"
          className="focusable -ml-2.5 flex h-10 w-10 flex-none cursor-pointer items-center justify-center gap-2 rounded-full font-medium text-github transition hover:text-github/50 hover:shadow-github/5 focus:ring-github/40 dark:text-github-dark dark:hover:text-github-dark/50 dark:focus:ring-github-dark/40"
          href="https://github.com/marcbouchenoire"
          rel="me noreferrer"
          target="_blank"
          title="GitHub"
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
        <a
          aria-label="Dribbble"
          className="focusable -ml-2.5 flex h-10 w-10 flex-none cursor-pointer items-center justify-center gap-2 rounded-full font-medium text-dribbble transition hover:text-dribbble/50 hover:shadow-dribbble/5 focus:ring-dribbble/40 dark:text-dribbble-dark dark:hover:text-dribbble-dark/50 dark:focus:ring-dribbble-dark/40"
          href="https://dribbble.com/marcbouchenoire"
          rel="me noreferrer"
          target="_blank"
          title="Dribbble"
        >
          <svg
            height="24"
            role="presentation"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M20.13 11.42a8.12 8.12 0 0 0-1.83-4.6 11.91 11.91 0 0 1-4.49 3.3c.2.41.39.83.57 1.24a17.9 17.9 0 0 1 5.75.06Zm-7.2-3.01a38.67 38.67 0 0 0-2.79-4.35 8.12 8.12 0 0 1 6.75 1.42 10.02 10.02 0 0 1-3.96 2.93Zm-1.86.65a37.07 37.07 0 0 0-2.83-4.3 8.17 8.17 0 0 0-4.13 5.18c2.68-.02 5-.32 6.96-.88ZM3.84 12c0 1.86.64 3.67 1.8 5.11a12.95 12.95 0 0 1 6.82-5.3 35.5 35.5 0 0 0-.47-1c-2.29.7-5 1.06-8.14 1.08l-.01.11Zm3.22 6.49a8.09 8.09 0 0 0 7.8 1.15 32.25 32.25 0 0 0-1.66-6.03c-2.5.77-4.53 2.4-6.14 4.88Zm9.6.2a8.17 8.17 0 0 0 3.38-5.33 16.6 16.6 0 0 0-4.92-.16 34.34 34.34 0 0 1 1.54 5.5ZM2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
        </a>
        <a
          className="focusable -ml-2.5 flex h-10 w-10 flex-none cursor-pointer items-center justify-center gap-2 rounded-full font-medium text-orange-500 transition hover:text-orange-500/50 hover:shadow-orange-500/5 focus:ring-orange-500/40 dark:text-orange-400 dark:hover:text-orange-400/50 dark:focus:ring-orange-400/40"
          href="mailto:mail@marcbouchenoire.com"
          title="Email"
        >
          <svg
            aria-label="Email"
            height="24"
            role="presentation"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M7.727 2.959A10 10 0 0 1 22 11.999v.9a3.7 3.7 0 0 1-6.642 2.244 4.6 4.6 0 1 1-.741-6.928A1 1 0 0 1 16.6 8.4v4.5a1.7 1.7 0 1 0 3.4 0V12a8 8 0 1 0-3.136 6.353 1 1 0 1 1 1.216 1.587A10 10 0 1 1 7.727 2.96Zm6.873 9.04a2.6 2.6 0 1 0-5.2 0 2.6 2.6 0 0 0 5.2 0Z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </section>
  )
}

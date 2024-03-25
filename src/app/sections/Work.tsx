import { clsx } from "clsx"
import Image from "next/image"
import type { ComponentProps, ReactNode } from "react"
import elementsFoodVisual from "../../../public/visuals/elements-food.png"
import elementsMusicVisual from "../../../public/visuals/elements-music.png"
import motionVisual from "../../../public/visuals/framer-motion-archive.png"

interface BrowserProps extends ComponentProps<"div"> {
  /**
   * The browser's current URL.
   */
  url?: ReactNode
}

/**
 * A Safari-like browser window.
 *
 * @param props - A set of `div` props.
 * @param [props.url] - The browser's current URL.
 * @param [props.children] - The browser's content.
 * @param [props.className] - A list of one or more classes.
 */
function Browser({ url, children, className, ...props }: BrowserProps) {
  return (
    <div
      className={clsx(
        className,
        "dark:highlight-invert overflow-hidden rounded-lg bg-white shadow-floaty backdrop-blur-lg backdrop-saturate-200 supports-backdrop:bg-white/80 dark:bg-zinc-800 dark:supports-backdrop:bg-zinc-800/80"
      )}
      {...props}
    >
      <div className="relative grid h-8 flex-none grid-cols-[1fr_minmax(0,2fr)_minmax(0,1fr)] items-center gap-2 px-3">
        <div className="flex gap-1.5">
          <div className="aspect-square w-2.5 rounded-full bg-black/10 dark:bg-white/20" />
          <div className="aspect-square w-2.5 rounded-full bg-black/10 dark:bg-white/20" />
          <div className="aspect-square w-2.5 rounded-full bg-black/10 dark:bg-white/20" />
        </div>
        {url && (
          <div className="flex h-5 select-none items-center justify-center rounded bg-black/5 px-3 text-3xs text-black/40 dark:bg-white/10 dark:text-white/40">
            <span className="max-w-full truncate text-center leading-none">
              {url}
            </span>
          </div>
        )}
      </div>
      <div className="flex-1">{children}</div>
    </div>
  )
}

/**
 * An iPhone-like device.
 *
 * @param props - A set of `div` props.
 * @param [props.children] - The browser's content.
 * @param [props.className] - A list of one or more classes.
 */
function Phone({ children, className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={clsx(
        className,
        "dark:highlight-invert relative aspect-[425/862] rounded-[15.294%/7.541%] bg-white shadow-floaty backdrop-blur-lg backdrop-saturate-200 before:absolute before:inset-0 before:rounded-[inherit] before:shadow-phone supports-backdrop:bg-white/80 dark:bg-zinc-800 dark:before:shadow-phone-invert dark:supports-backdrop:bg-zinc-800/80"
      )}
      {...props}
    >
      <div className="absolute bottom-[3.1%] left-[5.4%] right-[6.35%] top-[2.7%] drop-shadow-phone">
        <svg className="absolute" height="0" role="presentation" width="0">
          <clipPath clipPathUnits="objectBoundingBox" id="phone">
            <path d="M0.779,0.011 V0.011 c0,0.011,-0.019,0.026,-0.062,0.026 h-0.432 C0.241,0.037,0.222,0.022,0.222,0.011 v0 c0,-0.005,0,-0.011,-0.02,-0.011 H0.116 C0.043,0,0,0.02,0,0.053 v0.893 C0,0.98,0.043,1,0.116,1 h0.769 C0.957,1,1,0.98,1,0.947 V0.053 C1,0.02,0.957,0,0.884,0 h-0.085 C0.779,0,0.779,0.005,0.779,0.011" />
          </clipPath>
        </svg>
        <div className="absolute inset-0 [clip-path:url(#phone)]">
          {children}
        </div>
      </div>
    </div>
  )
}

/**
 * A section displaying a selection of projects.
 *
 * @param props - A set of `section` props.
 */
export function Work(props: ComponentProps<"section">) {
  return (
    <section {...props}>
      <div className="content mb-8">
        <h2 className="mb-2 text-xl font-bold text-zinc-800 dark:text-white">
          Work
        </h2>
        <p className="max-w-[46ch] leading-relaxed text-zinc-500 dark:text-zinc-350">
          A selection of projects I worked on in the past few years.
        </p>
      </div>
      <div className="content lg:max-w-screen-md-12">
        <div className="relative mb-5 flex flex-col rounded-lg bg-blue-500 shadow-xl shadow-blue-500/10 before:absolute before:inset-0 before:z-0 before:rounded-[inherit] before:bg-gradient-to-tl before:from-cyan-400/60 before:to-cyan-400/0 dark:bg-blue-400 dark:shadow-blue-400/10 dark:before:from-cyan-300/60 dark:before:to-cyan-300/0 sm:mb-8 sm:flex-row lg:mb-10">
          <div className="z-10 flex-1 p-8 selection:bg-white/30 dark:selection:bg-blue-900/30 sm:basis-1/2 sm:p-12 sm:pr-10">
            <h3 className="mb-3 text-lg font-semibold leading-none text-white dark:text-blue-900">
              Liveblocks
              <span className="ml-1.5 inline-block flex-none -translate-y-px rounded bg-blue-100/20 p-1 text-xs font-medium leading-none text-blue-100 dark:bg-blue-800/20 dark:text-blue-900/80">
                2023
                <span className="mx-0.5 text-blue-100/60 dark:text-blue-900/40">
                  —
                </span>
                Present
              </span>
            </h3>
            <p className="leading-relaxed text-blue-100 dark:text-blue-900/80">
              I slowly moved towards product engineering while at{" "}
              <a
                className="focusable rounded-sm font-medium underline decoration-blue-100/30 decoration-2 underline-offset-2 transition duration-100 hover:decoration-blue-100/50 focus:ring-blue-100/30 dark:decoration-blue-900/20 dark:hover:decoration-blue-900/40 dark:focus:ring-blue-900/20"
                href="https://liveblocks.io/"
                rel="noreferrer"
                target="_blank"
              >
                Liveblocks
              </a>
              , starting with{" "}
              <a
                className="focusable rounded-sm font-medium underline decoration-blue-100/30 decoration-2 underline-offset-2 transition duration-100 hover:decoration-blue-100/50 focus:ring-blue-100/30 dark:decoration-blue-900/20 dark:hover:decoration-blue-900/40 dark:focus:ring-blue-900/20"
                href="https://liveblocks.io/devtools"
                rel="noreferrer"
                target="_blank"
              >
                a DevTools extension
              </a>{" "}
              and then getting more and more involved in{" "}
              <a
                className="focusable rounded-sm font-medium underline decoration-blue-100/30 decoration-2 underline-offset-2 transition duration-100 hover:decoration-blue-100/50 focus:ring-blue-100/30 dark:decoration-blue-900/20 dark:hover:decoration-blue-900/40 dark:focus:ring-blue-900/20"
                href="https://liveblocks.io/docs"
                rel="noreferrer"
                target="_blank"
              >
                the Liveblocks packages
              </a>
              , focusing on{" "}
              <a
                className="focusable rounded-sm font-medium underline decoration-blue-100/30 decoration-2 underline-offset-2 transition duration-100 hover:decoration-blue-100/50 focus:ring-blue-100/30 dark:decoration-blue-900/20 dark:hover:decoration-blue-900/40 dark:focus:ring-blue-900/20"
                href="https://react.dev/"
                rel="noreferrer"
                target="_blank"
              >
                React
              </a>
              . From the components’ default styles to their APIs, from the
              hooks to systems like batching and caching, and&nbsp;more.
            </p>
          </div>
          <div className="relative flex flex-1 items-center justify-center p-12 pb-16 pt-0 sm:-mr-12 sm:basis-1/3 sm:p-0 lg:-mr-12 lg:basis-1/2" />
        </div>
        <div className="relative my-5 flex flex-col rounded-lg bg-violet-500 shadow-xl shadow-violet-500/10 before:absolute before:inset-0 before:z-0 before:rounded-[inherit] before:bg-gradient-to-tl before:from-fuchsia-400/60 before:to-fuchsia-400/0 dark:bg-violet-400 dark:shadow-violet-400/10 dark:before:from-fuchsia-300/60 dark:before:to-fuchsia-300/0 sm:my-8 sm:flex-row-reverse lg:my-10">
          <div className="z-10 flex-1 p-8 selection:bg-white/30 dark:selection:bg-violet-900/30 sm:basis-1/2 sm:p-12">
            <h3 className="mb-3 text-lg font-semibold leading-none text-white dark:text-violet-900">
              Liveblocks.io
              <span className="ml-1.5 inline-block flex-none -translate-y-px rounded bg-violet-100/20 p-1 text-xs font-medium leading-none text-violet-100 dark:bg-violet-800/20 dark:text-violet-900/80">
                2022
                <span className="mx-0.5 text-violet-100/60 dark:text-violet-900/40">
                  —
                </span>
                Present
              </span>
            </h3>
            <p className="leading-relaxed text-violet-100 dark:text-violet-900/80">
              Before working on{" "}
              <a
                className="focusable rounded-sm font-medium underline decoration-violet-100/30 decoration-2 underline-offset-2 transition duration-100 hover:decoration-violet-100/50 focus:ring-violet-100/30 dark:decoration-violet-900/20 dark:hover:decoration-violet-900/40 dark:focus:ring-violet-900/20"
                href="https://liveblocks.io/docs"
                rel="noreferrer"
                target="_blank"
              >
                the Liveblocks packages
              </a>
              , I was involved in many areas of{" "}
              <a
                className="focusable rounded-sm font-medium underline decoration-violet-100/30 decoration-2 underline-offset-2 transition duration-100 hover:decoration-violet-100/50 focus:ring-violet-100/30 dark:decoration-violet-900/20 dark:hover:decoration-violet-900/40 dark:focus:ring-violet-900/20"
                href="https://liveblocks.io/"
                rel="noreferrer"
                target="_blank"
              >
                liveblocks.io
              </a>
              . From refactoring{" "}
              <a
                className="focusable rounded-sm font-medium underline decoration-violet-100/30 decoration-2 underline-offset-2 transition duration-100 hover:decoration-violet-100/50 focus:ring-violet-100/30 dark:decoration-violet-900/20 dark:hover:decoration-violet-900/40 dark:focus:ring-violet-900/20"
                href="https://liveblocks.io/docs"
                rel="noreferrer"
                target="_blank"
              >
                the docs
              </a>{" "}
              and{" "}
              <a
                className="focusable rounded-sm font-medium underline decoration-violet-100/30 decoration-2 underline-offset-2 transition duration-100 hover:decoration-violet-100/50 focus:ring-violet-100/30 dark:decoration-violet-900/20 dark:hover:decoration-violet-900/40 dark:focus:ring-violet-900/20"
                href="https://liveblocks.io/examples"
                rel="noreferrer"
                target="_blank"
              >
                examples gallery
              </a>{" "}
              to be fetched from{" "}
              <a
                className="focusable rounded-sm font-medium underline decoration-violet-100/30 decoration-2 underline-offset-2 transition duration-100 hover:decoration-violet-100/50 focus:ring-violet-100/30 dark:decoration-violet-900/20 dark:hover:decoration-violet-900/40 dark:focus:ring-violet-900/20"
                href="https://github.com/liveblocks/liveblocks"
                rel="noreferrer"
                target="_blank"
              >
                the public repo
              </a>
              , to building multiplayer landing pages,{" "}
              <a
                className="focusable rounded-sm font-medium underline decoration-violet-100/30 decoration-2 underline-offset-2 transition duration-100 hover:decoration-violet-100/50 focus:ring-violet-100/30 dark:decoration-violet-900/20 dark:hover:decoration-violet-900/40 dark:focus:ring-violet-900/20"
                href="https://liveblocks.io/blog/how-to-build-undo-redo-in-a-multiplayer-environment"
                rel="noreferrer"
                target="_blank"
              >
                interactive blog posts
              </a>
              ,{" "}
              <a
                className="focusable rounded-sm font-medium underline decoration-violet-100/30 decoration-2 underline-offset-2 transition duration-100 hover:decoration-violet-100/50 focus:ring-violet-100/30 dark:decoration-violet-900/20 dark:hover:decoration-violet-900/40 dark:focus:ring-violet-900/20"
                href="https://liveblocks.io/examples/collaborative-spreadsheet-advanced"
                rel="noreferrer"
                target="_blank"
              >
                advanced examples
              </a>
              , custom language parsers, and&nbsp;more.
            </p>
          </div>
          <div className="relative flex flex-1 items-center justify-center p-12 pt-0 sm:-ml-12 sm:aspect-auto sm:basis-1/3 sm:p-0 lg:basis-1/2">
            <div className="relative z-20 aspect-[4/3] w-full max-w-sm sm:absolute sm:max-w-none lg:aspect-[9/7]" />
          </div>
        </div>
        <div className="relative mb-5 flex flex-col rounded-lg bg-sky-500 shadow-xl shadow-sky-500/10 before:absolute before:inset-0 before:z-0 before:rounded-[inherit] before:bg-gradient-to-tl before:from-cyan-400/80 before:to-cyan-400/0 dark:bg-sky-400 dark:shadow-sky-400/10 dark:before:from-cyan-300/80 dark:before:to-cyan-300/0 sm:mb-8 sm:flex-row lg:mb-10">
          <div className="z-10 flex-1 p-8 selection:bg-white/30 dark:selection:bg-sky-900/30 sm:basis-1/2 sm:p-12 sm:pr-10">
            <h3 className="mb-3 text-lg font-semibold leading-none text-white dark:text-sky-900">
              Framer.com
              <span className="ml-1.5 inline-block flex-none -translate-y-px rounded bg-sky-100/20 p-1 text-xs font-medium leading-none text-sky-100 dark:bg-sky-800/20 dark:text-sky-900/80">
                2019
                <span className="mx-0.5 text-sky-100/60 dark:text-sky-900/40">
                  —
                </span>
                22
              </span>
            </h3>
            <p className="leading-relaxed text-sky-100 dark:text-sky-900/80">
              As part of the site team, I worked on various aspects of{" "}
              <a
                className="focusable rounded-sm font-medium underline decoration-sky-100/30 decoration-2 underline-offset-2 transition duration-100 hover:decoration-sky-100/50 focus:ring-sky-100/30 dark:decoration-sky-900/20 dark:hover:decoration-sky-900/40 dark:focus:ring-sky-900/20"
                href="https://www.framer.com/"
                rel="noreferrer"
                target="_blank"
              >
                framer.com
              </a>
              . From rewriting it from the ground up using{" "}
              <a
                className="focusable rounded-sm font-medium underline decoration-sky-100/30 decoration-2 underline-offset-2 transition duration-100 hover:decoration-sky-100/50 focus:ring-sky-100/30 dark:decoration-sky-900/20 dark:hover:decoration-sky-900/40 dark:focus:ring-sky-900/20"
                href="https://nextjs.org/"
                rel="noreferrer"
                target="_blank"
              >
                Next.js
              </a>
              ,{" "}
              <a
                className="focusable rounded-sm font-medium underline decoration-sky-100/30 decoration-2 underline-offset-2 transition duration-100 hover:decoration-sky-100/50 focus:ring-sky-100/30 dark:decoration-sky-900/20 dark:hover:decoration-sky-900/40 dark:focus:ring-sky-900/20"
                href="https://www.sanity.io/"
                rel="noreferrer"
                target="_blank"
              >
                Sanity
              </a>{" "}
              and SCSS modules, to building interactive landing pages, search
              systems, custom hooks to orchestrate scroll animations,
              and&nbsp;more.
            </p>
          </div>
          <div className="relative flex flex-1 items-center justify-center p-12 pb-16 pt-0 sm:-mr-12 sm:basis-1/3 sm:p-0 lg:-mr-12 lg:basis-1/2">
            <div className="perspective z-20 flex w-full max-w-sm items-center sm:absolute sm:inset-0 sm:max-w-none lg:-bottom-20">
              <Browser className="transform-framer w-full" url="framer.com">
                <div className="relative aspect-[920/560] bg-black">
                  <video
                    autoPlay
                    className="absolute h-full w-full object-cover"
                    loop
                    muted
                    playsInline
                    poster="/visuals/framer.jpg"
                    preload="metadata"
                    src="/visuals/framer.mp4"
                  />
                </div>
              </Browser>
            </div>
          </div>
        </div>
        <div className="relative my-5 flex flex-col rounded-lg bg-fuchsia-500 shadow-xl shadow-fuchsia-500/10 before:absolute before:inset-0 before:z-0 before:rounded-[inherit] before:bg-gradient-to-tl before:from-rose-400/60 before:to-rose-400/0 dark:bg-fuchsia-400 dark:shadow-fuchsia-400/10 dark:before:from-rose-300/60 dark:before:to-rose-300/0 sm:my-8 sm:flex-row-reverse lg:my-10">
          <div className="z-10 flex-1 p-8 selection:bg-white/30 dark:selection:bg-fuchsia-900/30 sm:basis-1/2 sm:p-12">
            <h3 className="mb-3 text-lg font-semibold leading-none text-white dark:text-fuchsia-900">
              Framer Motion
              <span className="ml-1.5 inline-block flex-none -translate-y-px rounded bg-fuchsia-100/20 p-1 text-xs font-medium leading-none text-fuchsia-100 dark:bg-fuchsia-800/20 dark:text-fuchsia-900/80">
                2019
              </span>
            </h3>
            <p className="leading-relaxed text-fuchsia-100 dark:text-fuchsia-900/80">
              I worked on{" "}
              <a
                className="focusable rounded-sm font-medium underline decoration-fuchsia-100/30 decoration-2 underline-offset-2 transition duration-100 hover:decoration-fuchsia-100/50 focus:ring-fuchsia-100/30 dark:decoration-fuchsia-900/20 dark:hover:decoration-fuchsia-900/40 dark:focus:ring-fuchsia-900/20"
                href="https://www.framer.com/motion"
                rel="noreferrer"
                target="_blank"
              >
                Framer Motion
              </a>
              ’s initial public release and its subsequent redesign. From
              drafting its branding to designing and building its landing page,
              using interactive examples to teach concepts like declarative
              animations and&nbsp;gestures.
            </p>
          </div>
          <div className="relative flex flex-1 items-center justify-center p-12 pt-0 sm:-ml-12 sm:aspect-auto sm:basis-1/3 sm:p-0 lg:basis-1/2">
            <div className="relative z-20 aspect-[4/3] w-full max-w-sm sm:absolute sm:max-w-none lg:aspect-[9/7]">
              <div className="perspective pointer-events-none absolute inset-0">
                <Browser
                  className="transform-motion-secondary pointer-events-auto absolute left-0 top-0 w-[60%] lg:-top-10 lg:w-[80%]"
                  url={
                    <>
                      framer.com
                      <span className="text-black/20 dark:text-white/20">
                        /motion
                      </span>
                    </>
                  }
                >
                  <div className="relative aspect-[920/560] bg-black">
                    <Image
                      alt="The Framer Motion website"
                      className="absolute h-full w-full object-cover"
                      height="460"
                      priority
                      src={motionVisual}
                      width="280"
                    />
                  </div>
                </Browser>
              </div>
              <div className="perspective pointer-events-none absolute inset-0">
                <Browser
                  className="transform-motion-primary pointer-events-auto absolute bottom-0 right-0 w-[80%] lg:-bottom-2"
                  url={
                    <>
                      framer.com
                      <span className="text-black/20 dark:text-white/20">
                        /motion
                      </span>
                    </>
                  }
                >
                  <div className="relative aspect-[920/560] bg-black">
                    <video
                      autoPlay
                      className="absolute h-full w-full object-cover"
                      loop
                      muted
                      playsInline
                      poster="/visuals/framer-motion.jpg"
                      preload="metadata"
                      src="/visuals/framer-motion.mp4"
                    />
                  </div>
                </Browser>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mt-5 flex flex-col rounded-lg bg-orange-500 shadow-xl shadow-orange-500/10 before:absolute before:inset-0 before:z-0 before:rounded-[inherit] before:bg-gradient-to-tl before:from-yellow-400/60 before:to-yellow-400/0 dark:bg-orange-300 dark:shadow-orange-400/10 dark:before:from-yellow-300/60 dark:before:to-yellow-300/0 sm:mt-8 sm:flex-row lg:mt-10">
          <div className="z-10 flex-1 p-8 selection:bg-white/30 dark:selection:bg-orange-900/30 sm:basis-1/2 sm:p-12 sm:pr-10">
            <h3 className="mb-3 text-lg font-semibold leading-none text-white dark:text-orange-900">
              Sketch Elements
              <span className="ml-1.5 inline-block flex-none -translate-y-px rounded bg-orange-100/20 p-1 text-xs font-medium leading-none text-orange-100 dark:bg-orange-800/20 dark:text-orange-900/80">
                2017
              </span>
            </h3>
            <p className="leading-relaxed text-orange-100 dark:text-orange-900/80">
              I designed Sketch Elements, a UI kit built with and distributed by{" "}
              <a
                className="focusable rounded-sm font-medium underline decoration-orange-100/30 decoration-2 underline-offset-2 transition duration-100 hover:decoration-orange-100/50 focus:ring-orange-100/30 dark:decoration-orange-900/20 dark:hover:decoration-orange-900/40 dark:focus:ring-orange-900/20"
                href="https://www.sketch.com/"
                rel="noreferrer"
                target="_blank"
              >
                Sketch
              </a>{" "}
              as a Library. It started out as a simple template to get started
              on a new iOS project but ended up heavily focusing on
              customization, showcasing advanced Symbols use&nbsp;cases.
            </p>
          </div>
          <div className="perspective relative z-20 flex flex-1 items-center justify-center sm:-mr-12 sm:basis-1/3">
            <div className="transform-elements mx-12 mb-24 mt-0 grid aspect-square w-full max-w-sm grid-cols-2 gap-8 sm:absolute sm:m-0 sm:max-w-[22rem] md:-top-16 lg:top-[-5.5rem] lg:grid-cols-[1fr_1.2fr]">
              <Phone className="-mb-8 self-end md:-mb-16">
                <Image
                  alt="A food app interface"
                  className="elements absolute h-full w-full object-cover"
                  height="346"
                  src={elementsFoodVisual}
                  width="160"
                />
              </Phone>
              <Phone>
                <Image
                  alt="A music app interface"
                  className="elements elements-offset absolute h-full w-full object-cover"
                  height="346"
                  src={elementsMusicVisual}
                  width="160"
                />
              </Phone>
            </div>
          </div>
        </div>
        <div className="relative my-5 flex flex-col rounded-lg bg-rose-500 shadow-xl shadow-rose-500/10 before:absolute before:inset-0 before:z-0 before:rounded-[inherit] before:bg-gradient-to-tl before:from-orange-400/60 before:to-orange-400/0 dark:bg-rose-400 dark:shadow-rose-400/10 dark:before:from-orange-300/60 dark:before:to-orange-300/0 sm:my-8 sm:flex-row-reverse lg:my-10">
          <div className="z-10 flex-1 p-8 selection:bg-white/30 dark:selection:bg-rose-900/30 sm:basis-1/2 sm:p-12">
            <h3 className="mb-3 text-lg font-semibold leading-none text-white dark:text-rose-900">
              Master’s degree
              <span className="ml-1.5 inline-block flex-none -translate-y-px rounded bg-rose-100/20 p-1 text-xs font-medium leading-none text-rose-100 dark:bg-rose-800/20 dark:text-rose-900/80">
                2017
                <span className="mx-0.5 text-rose-100/60 dark:text-rose-900/40">
                  —
                </span>
                19
              </span>
            </h3>
            <p className="leading-relaxed text-rose-100 dark:text-rose-900/80">
              During my master’s in interaction design, I&nbsp;researched
              language learning through the lens of immersive interfaces. My
              thesis focused on language immersion and some of its ideas
              resulted in a series of prototypes, exploring gestural
              interactions and other aspects of spatial&nbsp;computing.
            </p>
          </div>
          <div className="relative flex flex-1 items-center justify-center p-12 pt-0 sm:-ml-12 sm:aspect-auto sm:basis-1/3 sm:p-0 lg:basis-1/2">
            <div className="relative z-20 aspect-[4/3] w-full max-w-sm sm:absolute sm:max-w-none lg:aspect-[9/7]" />
          </div>
        </div>
      </div>
    </section>
  )
}

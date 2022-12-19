import clsx from "clsx"
import Image from "next/image"
import { ComponentProps, ReactNode } from "react"
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
        "dark:highlight-invert w-full overflow-hidden rounded-lg bg-white shadow-floaty backdrop-blur-lg backdrop-saturate-200 supports-backdrop:bg-white/80 dark:bg-zinc-800 dark:supports-backdrop:bg-zinc-800/80"
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
      <div className="absolute top-[2.7%] right-[6.35%] bottom-[3.1%] left-[5.4%] drop-shadow-phone">
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
        <div className="relative mb-5 flex flex-col rounded-lg bg-sky-500 shadow-xl shadow-sky-500/10 before:absolute before:inset-0 before:z-0 before:rounded-[inherit] before:bg-gradient-to-tl before:from-cyan-400/60 before:to-cyan-400/0 dark:bg-sky-400 dark:shadow-sky-400/10 dark:before:from-cyan-300/60 dark:before:to-cyan-300/0 sm:mb-8 sm:flex-row lg:mb-10">
          <div className="z-10 flex-1 p-8 selection:bg-white/30 dark:selection:bg-sky-900/30 sm:basis-1/2 sm:p-12 sm:pr-10">
            <h3 className="mb-3 text-lg font-semibold leading-none text-white dark:text-sky-900">
              Framer.com
            </h3>
            <p className="leading-relaxed text-sky-100 dark:text-sky-900/80">
              As part of the site team, I worked on many aspects of framer.com.
              From rewriting it from the ground up using Next.js and SCSS
              modules, to building things like unified search and custom hooks
              to orchestrate scroll animations and&nbsp;effects.
            </p>
          </div>
          <div className="relative flex flex-1 items-center justify-center p-12 pt-0 pb-16 sm:-mr-12 sm:basis-1/3 sm:p-0 lg:-mr-12 lg:basis-1/2">
            <div className="perspective z-20 flex w-full max-w-sm items-center sm:absolute sm:inset-0 sm:max-w-none lg:-bottom-20">
              <Browser className="transform-framer" url="framer.com">
                <div className="relative aspect-[920/560] bg-black">
                  <video
                    autoPlay
                    className="absolute inset-0 h-full object-cover"
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
        <div className="relative my-5 flex flex-col rounded-lg bg-purple-500 shadow-xl shadow-purple-500/10 before:absolute before:inset-0 before:z-0 before:rounded-[inherit] before:bg-gradient-to-tl before:from-pink-400/60 before:to-pink-400/0 dark:bg-purple-400 dark:shadow-purple-400/10 dark:before:from-pink-300/60 dark:before:to-pink-300/0 sm:my-8 sm:flex-row-reverse lg:my-10">
          <div className="z-10 flex-1 p-8 selection:bg-white/30 dark:selection:bg-purple-900/30 sm:basis-1/2 sm:p-12">
            <h3 className="mb-3 text-lg font-semibold leading-none text-white dark:text-purple-900">
              Framer Motion
            </h3>
            <p className="leading-relaxed text-purple-100 dark:text-purple-900/80">
              I worked on Framer Motion’s initial public release and its
              subsequent redesign. From drafting its branding to designing and
              building its landing page—teaching concepts like declarative
              animations and gestures using interactive&nbsp;examples.
            </p>
          </div>
          <div className="relative flex flex-1 items-center justify-center p-12 pt-0 sm:-ml-12 sm:aspect-auto sm:basis-1/3 sm:p-0 lg:basis-1/2">
            <div className="relative z-20 aspect-[4/3] w-full max-w-sm sm:absolute sm:max-w-none lg:aspect-[9/7]">
              <div className="perspective pointer-events-none absolute inset-0">
                <Browser
                  className="transform-motion-secondary pointer-events-auto absolute top-0 left-0 w-[60%] lg:-top-10 lg:w-[80%]"
                  url={
                    <>
                      framer.com
                      <span className="text-black/20 dark:text-white/20">
                        /motion
                      </span>
                    </>
                  }
                >
                  <div className="image relative aspect-[920/560] bg-black">
                    <Image
                      alt="The Framer Motion website"
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
                  className="transform-motion-primary pointer-events-auto absolute right-0 bottom-0 w-[80%] lg:-bottom-2"
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
                      className="absolute inset-0 h-full object-cover"
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
        <div className="relative mt-5 flex flex-col rounded-lg bg-orange-500 shadow-xl shadow-orange-500/10 before:absolute before:inset-0 before:z-0 before:rounded-[inherit] before:bg-gradient-to-tl before:from-amber-400/60 before:to-amber-400/0 dark:bg-orange-300 dark:shadow-orange-400/10 dark:before:from-amber-300/60 dark:before:to-amber-300/0 sm:mt-8 sm:flex-row lg:mt-10">
          <div className="z-10 flex-1 p-8 selection:bg-white/30 dark:selection:bg-orange-900/30 sm:basis-1/2 sm:p-12 sm:pr-10">
            <h3 className="mb-3 text-lg font-semibold leading-none text-white dark:text-orange-900">
              Sketch Elements
            </h3>
            <p className="leading-relaxed text-orange-100 dark:text-orange-900/80">
              Sketch Elements was a UI kit built and distributed by Sketch as a
              Library. It started out as a simple template to get started on a
              new iOS project but ended up heavily focusing on
              customization—showcasing advanced Symbols use&nbsp;cases.
            </p>
          </div>
          <div className="perspective relative z-20 flex flex-1 items-center justify-center sm:-mr-12 sm:basis-1/3">
            <div className="transform-elements mx-12 mt-0 mb-24 grid aspect-square w-full max-w-sm grid-cols-[1.2fr_1fr] gap-8 sm:absolute sm:m-0 sm:max-w-none lg:-top-20 lg:grid-cols-[1fr_1.2fr]">
              <Phone className="-mb-12 self-end">
                <div className="elements image absolute inset-0">
                  <Image
                    alt="A food app interface"
                    height="346"
                    src={elementsFoodVisual}
                    width="160"
                  />
                </div>
              </Phone>
              <Phone>
                <div className="elements elements-offset image absolute inset-0">
                  <Image
                    alt="A music app interface"
                    height="346"
                    src={elementsMusicVisual}
                    width="160"
                  />
                </div>
              </Phone>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

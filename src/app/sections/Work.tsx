import { clsx } from "clsx"
import Image from "next/image"
import elementsFood from "public/visuals/elements/food.png"
import elementsMusic from "public/visuals/elements/music.png"
import framerMotion from "public/visuals/framer-motion/static.png"
import liveblocksEmojiPicker from "public/visuals/liveblocks/emoji-picker.png"
import liveblocksInbox from "public/visuals/liveblocks/inbox.png"
import liveblocksMentionSuggestions from "public/visuals/liveblocks/mention-suggestions.png"
import liveblocksThread from "public/visuals/liveblocks/thread.png"
import masterThesis from "public/visuals/master/thesis.png"
import masterVive from "public/visuals/master/vive.png"
import { type ComponentProps, type ReactNode, Suspense } from "react"
import { withExternalCdn } from "src/utils/with-external-cdn"
import {
  CodeHighlight,
  type CodeHighlightProps
} from "../components/CodeHighlight"
import styles from "./Work.module.css"

interface BrowserProps extends Omit<ComponentProps<"div">, "title"> {
  /**
   * The window's current URL or title.
   */
  title?: ReactNode

  /**
   * Whether the window is a popup.
   */
  popup?: boolean
}

interface CodeProps
  extends Omit<ComponentProps<"div">, "title">,
    Pick<CodeHighlightProps, "code" | "lang"> {
  /**
   * The window's current title.
   */
  title?: ReactNode
}

interface PhoneProps extends ComponentProps<"div"> {
  /**
   * The phone's direction.
   */
  direction: "left" | "right"
}

/**
 * A Safari-like browser window.
 *
 * @param props - A set of `div` props.
 * @param [props.popup] - Whether the window is a popup.
 * @param [props.title] - The window's current URL or title.
 * @param [props.children] - The window's content.
 * @param [props.className] - A list of one or more classes.
 */
function Browser({
  title,
  popup,
  children,
  className,
  ...props
}: BrowserProps) {
  return (
    <div
      className={clsx(
        className,
        "dark:highlight-invert overflow-hidden rounded-lg bg-gray-50/80 shadow-floaty backdrop-blur-lg backdrop-saturate-200 dark:bg-gray-800/80"
      )}
      {...props}
    >
      <div
        className={clsx(
          "relative grid flex-none grid-cols-[1fr_minmax(0,2fr)_minmax(0,1fr)] items-center gap-2",
          popup ? "h-5 px-1.5" : "h-8 px-3"
        )}
      >
        <div className={clsx("flex", popup ? "gap-1" : "gap-1.5")}>
          <div
            className={clsx(
              "aspect-square rounded-full bg-black/10 dark:bg-white/20",
              popup ? "w-2" : "w-2.5"
            )}
          />
          <div
            className={clsx(
              "aspect-square rounded-full bg-black/10 dark:bg-white/20",
              popup ? "w-2" : "w-2.5"
            )}
          />
          <div
            className={clsx(
              "aspect-square rounded-full bg-black/10 dark:bg-white/20",
              popup ? "w-2" : "w-2.5"
            )}
          />
        </div>
        {title &&
          (popup ? (
            <div className="text-center text-3xs text-black/40 dark:text-white/40">
              {title}
            </div>
          ) : (
            <div className="flex h-5 select-none items-center justify-center rounded-sm bg-black/5 px-3 text-3xs text-black/40 dark:bg-white/10 dark:text-white/40">
              <span className="max-w-full truncate text-center leading-none">
                {title}
              </span>
            </div>
          ))}
      </div>
      <div className="flex-1">{children}</div>
    </div>
  )
}

/**
 * A code editor.
 *
 * @param props - A set of `div` props.
 * @param [props.title] - The window's current title.
 * @param [props.code] - The editor's content.
 * @param [props.lang] - The editor's language.
 * @param [props.className] - A list of one or more classes.
 */
function Code({ title, code, lang, className, ...props }: CodeProps) {
  return (
    <div
      className={clsx(
        className,
        "highlight-invert overflow-hidden rounded-lg bg-gray-800/80 shadow-floaty backdrop-blur-lg backdrop-saturate-200"
      )}
      {...props}
    >
      <div className="relative grid h-5 flex-none grid-cols-[1fr_minmax(0,2fr)_minmax(0,1fr)] items-center gap-2 px-1.5">
        <div className="flex gap-1">
          <div className="aspect-square w-2 rounded-full bg-white/20" />
          <div className="aspect-square w-2 rounded-full bg-white/20" />
          <div className="aspect-square w-2 rounded-full bg-white/20" />
        </div>
        {title && (
          <div className="text-center text-3xs text-white/40">{title}</div>
        )}
      </div>
      <div className="flex-1">
        <Suspense>
          <CodeHighlight
            className={styles.codeHighlight}
            code={code}
            lang={lang}
            themes="poimandres"
          />
        </Suspense>
      </div>
    </div>
  )
}

/**
 * An iPhone-like device.
 *
 * @param props - A set of `div` props.
 * @param props.direction - The phone's direction.
 * @param [props.children] - The phone's content.
 * @param [props.className] - A list of one or more classes.
 */
function Phone({ direction, children, className, ...props }: PhoneProps) {
  return (
    <div
      className={clsx(
        className,
        styles.phoneShadow,
        "dark:highlight-invert group aspect-425/862 rounded-[15.294%/7.541%] bg-white/80 shadow-floaty backdrop-blur-lg backdrop-saturate-200 dark:bg-gray-800/80"
      )}
      data-direction={direction}
      {...props}
    >
      <div className="absolute top-[2.7%] bottom-[3.1%] drop-shadow-phone group-data-[direction=left]:right-[5.4%] group-data-[direction=right]:right-[6.35%] group-data-[direction=left]:left-[6.35%] group-data-[direction=right]:left-[5.4%]">
        <svg className="absolute" height={0} role="presentation" width={0}>
          <clipPath clipPathUnits="objectBoundingBox" id="phone-mask">
            <path d="M0.779,0.011 V0.011 c0,0.011,-0.019,0.026,-0.062,0.026 h-0.432 C0.241,0.037,0.222,0.022,0.222,0.011 v0 c0,-0.005,0,-0.011,-0.02,-0.011 H0.116 C0.043,0,0,0.02,0,0.053 v0.893 C0,0.98,0.043,1,0.116,1 h0.769 C0.957,1,1,0.98,1,0.947 V0.053 C1,0.02,0.957,0,0.884,0 h-0.085 C0.779,0,0.779,0.005,0.779,0.011" />
          </clipPath>
        </svg>
        <div className="absolute inset-0 [clip-path:url(#phone-mask)]">
          {children}
        </div>
      </div>
    </div>
  )
}

/**
 * An Apple Vision Pro-like device.
 *
 * @param props - A set of `div` props.
 * @param [props.children] - The headset's content.
 * @param [props.className] - A list of one or more classes.
 */
function Headset({ children, className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={clsx(className, "aspect-960/540 will-change-transform")}
      {...props}
    >
      <div className="absolute inset-0 [clip-path:url(#headset-mask)]">
        <svg height={0} role="presentation" width={0}>
          <defs>
            <clipPath clipPathUnits="objectBoundingBox" id="headset-mask">
              <path d="M0.299217 0.016482C0.198539 0.033167 0.089533 0.07584 0.035864 0.243777C-0.023752 0.428302 -0.006564 0.706696 0.06955 0.866579C0.145208 1.02629 0.270395 1.03794 0.365784 0.92305C0.401042 0.873963 0.448941 0.789116 0.5 0.789116C0.551067 0.789116 0.598965 0.874015 0.634216 0.92305C0.725134 1.03794 0.850321 1.02629 0.925979 0.866579C1.00035 0.706699 1.01941 0.428299 0.964219 0.243777C0.912177 0.075841 0.800367 0.033168 0.70014 0.016482C0.567707 -0.005477 0.431516 -0.005477 0.299217 0.016482Z" />
            </clipPath>
          </defs>
        </svg>
        <img
          aria-hidden
          className="pointer-events-none absolute z-1 h-full w-full mix-blend-overlay"
          height="960"
          src="/various/headset-reflections.png"
          width="540"
        />
        <img
          aria-hidden
          className="pointer-events-none absolute z-1 h-full w-full opacity-50"
          height="960"
          src="/various/headset-reflections.png"
          width="540"
        />
        {children}
      </div>
    </div>
  )
}

/**
 * A book.
 *
 * @param props - A set of `div` props.
 * @param [props.children] - The book's cover.
 * @param [props.className] - A list of one or more classes.
 */
function Book({ children, className, ...props }: ComponentProps<"div">) {
  return (
    <div className={clsx(className, "aspect-1214/1702")} {...props}>
      <div
        className={clsx(
          styles.bookBackCoverGradient,
          styles.bookBackCoverSecondaryGradient,
          "absolute inset-x-0 top-[5%] bottom-[-5%] rounded-[4.615%/3.297%] bg-current shadow-floaty"
        )}
      />
      <div
        className={clsx(
          styles.bookPagesGradient,
          "absolute inset-[3%] right-0 bottom-[-3%] z-2 rounded-[4.615%/3.297%] rounded-bl-[3.077%_2.198%] bg-white"
        )}
      />
      <div
        className={clsx(
          styles.bookCoverGradient,
          "absolute inset-0 z-2 overflow-hidden rounded-[4.615%/3.297%] bg-current"
        )}
      >
        {children}
      </div>
    </div>
  )
}

const liveblocksPrimitivesCode = `
import {
  Composer,
  Comment,
} from "@liveblocks/react-comments/primitives"

function CustomComposer(props) {
  return (
    <Composer.Form {...props}>
      <Composer.Editor
        components={{
          Mention,
          MentionSuggestions,
          Link,
        }}
      />
      <Composer.Submit>Create thread</Composer.Submit>
    </Composer.Form>
  );
}`.trim()

/**
 * A section displaying a selection of projects.
 *
 * @param props - A set of `section` props.
 */
export function Work(props: ComponentProps<"section">) {
  return (
    <section {...props}>
      <div className="content content-lg">
        <div className="relative z-1 mb-5 flex flex-col rounded-lg bg-blue-500 shadow-blue-500/10 shadow-xl before:absolute before:inset-0 before:z-0 before:rounded-[inherit] before:bg-linear-to-tl before:from-cyan-400/60 before:to-cyan-400/0 sm:mb-8 sm:flex-row lg:mb-10 dark:bg-blue-400 dark:shadow-blue-400/10 dark:before:from-cyan-300/60 dark:before:to-cyan-300/0">
          <div className="z-1 flex-1 p-8 selection:bg-white/30 sm:basis-1/2 sm:p-12 sm:pr-10 dark:selection:bg-blue-900/30">
            <h3 className="mb-3 font-semibold text-lg text-white leading-none dark:text-blue-900">
              Liveblocks
            </h3>
            <p className="text-blue-100 leading-relaxed dark:text-blue-900/80">
              I started getting involved on the product engineering side with{" "}
              <a
                className="focusable rounded-xs font-medium underline decoration-2 decoration-blue-100/30 underline-offset-2 transition duration-100 hover:decoration-blue-100/50 focus-visible:ring-blue-100/30 dark:decoration-blue-900/20 dark:focus-visible:ring-blue-900/20 dark:hover:decoration-blue-900/40"
                href="https://liveblocks.io/devtools"
                rel="noreferrer"
                target="_blank"
              >
                our DevTools extension
              </a>
              , and it then became my primary side with{" "}
              <a
                className="focusable rounded-xs font-medium underline decoration-2 decoration-blue-100/30 underline-offset-2 transition duration-100 hover:decoration-blue-100/50 focus-visible:ring-blue-100/30 dark:decoration-blue-900/20 dark:focus-visible:ring-blue-900/20 dark:hover:decoration-blue-900/40"
                href="https://liveblocks.io/comments"
                rel="noreferrer"
                target="_blank"
              >
                Comments
              </a>
              . I’m now focusing on the React layer of our opinionated products,
              from{" "}
              <a
                className="focusable rounded-xs font-medium underline decoration-2 decoration-blue-100/30 underline-offset-2 transition duration-100 hover:decoration-blue-100/50 focus-visible:ring-blue-100/30 dark:decoration-blue-900/20 dark:focus-visible:ring-blue-900/20 dark:hover:decoration-blue-900/40"
                href="https://liveblocks.io/docs/products/comments/default-components"
                rel="noreferrer"
                target="_blank"
              >
                component APIs
              </a>{" "}
              to{" "}
              <a
                className="focusable rounded-xs font-medium underline decoration-2 decoration-blue-100/30 underline-offset-2 transition duration-100 hover:decoration-blue-100/50 focus-visible:ring-blue-100/30 dark:decoration-blue-900/20 dark:focus-visible:ring-blue-900/20 dark:hover:decoration-blue-900/40"
                href="https://liveblocks.io/docs/products/comments/styling-and-customization"
                rel="noreferrer"
                target="_blank"
              >
                default styles
              </a>
              , from{" "}
              <a
                className="focusable rounded-xs font-medium underline decoration-2 decoration-blue-100/30 underline-offset-2 transition duration-100 hover:decoration-blue-100/50 focus-visible:ring-blue-100/30 dark:decoration-blue-900/20 dark:focus-visible:ring-blue-900/20 dark:hover:decoration-blue-900/40"
                href="https://liveblocks.io/docs/products/comments/hooks"
                rel="noreferrer"
                target="_blank"
              >
                hooks
              </a>{" "}
              to{" "}
              <a
                className="focusable rounded-xs font-medium underline decoration-2 decoration-blue-100/30 underline-offset-2 transition duration-100 hover:decoration-blue-100/50 focus-visible:ring-blue-100/30 dark:decoration-blue-900/20 dark:focus-visible:ring-blue-900/20 dark:hover:decoration-blue-900/40"
                href="https://liveblocks.io/docs/products/comments/primitives"
                rel="noreferrer"
                target="_blank"
              >
                unstyled primitives
              </a>
              ,{" "}
              <a
                className="focusable rounded-xs font-medium underline decoration-2 decoration-blue-100/30 underline-offset-2 transition duration-100 hover:decoration-blue-100/50 focus-visible:ring-blue-100/30 dark:decoration-blue-900/20 dark:focus-visible:ring-blue-900/20 dark:hover:decoration-blue-900/40"
                href="https://liveblocks.io/docs/api-reference/liveblocks-react-ui#Composer"
                rel="noreferrer"
                target="_blank"
              >
                rich text editors
              </a>
              ,{" "}
              <a
                className="focusable rounded-xs font-medium underline decoration-2 decoration-blue-100/30 underline-offset-2 transition duration-100 hover:decoration-blue-100/50 focus-visible:ring-blue-100/30 dark:decoration-blue-900/20 dark:focus-visible:ring-blue-900/20 dark:hover:decoration-blue-900/40"
                href="https://liveblocks.io/docs/api-reference/liveblocks-react-ui#Overrides"
                rel="noreferrer"
                target="_blank"
              >
                internationalization
              </a>
              ,{" "}
              <a
                className="focusable rounded-xs font-medium underline decoration-2 decoration-blue-100/30 underline-offset-2 transition duration-100 hover:decoration-blue-100/50 focus-visible:ring-blue-100/30 dark:decoration-blue-900/20 dark:focus-visible:ring-blue-900/20 dark:hover:decoration-blue-900/40"
                href="https://github.com/liveblocks/liveblocks/tree/main/packages/liveblocks-codemod"
                rel="noreferrer"
                target="_blank"
              >
                codemods
              </a>
              , and&nbsp;more.
            </p>
          </div>
          <div className="sm:-mr-12 relative flex flex-1 items-center justify-center p-12 pt-8 pb-20 sm:aspect-auto sm:basis-1/3 sm:p-0 lg:basis-1/2">
            <div className="relative z-2 aspect-4/3 w-full max-w-sm sm:absolute sm:max-w-none lg:aspect-9/7">
              <div className="perspective-far pointer-events-none absolute inset-0">
                <div className="-rotate-z-4 pointer-events-auto absolute top-[-10%] right-[36%] aspect-460/520 w-[30%] translate-x-[-2%] rotate-x-14 rotate-y-6 overflow-hidden rounded-[2.6087%/2.3077%] shadow-floaty lg:top-[-12%] lg:right-[8%] lg:w-[40%]">
                  <div
                    className={clsx(
                      styles.scrollGradient,
                      styles.scrollGradientDelayed,
                      "absolute inset-0"
                    )}
                  >
                    <Image
                      alt="A notifications inbox"
                      className="absolute h-full w-full object-cover"
                      priority
                      src={liveblocksInbox}
                      width="190"
                    />
                  </div>
                </div>
                <Code
                  className="-rotate-z-6 pointer-events-auto absolute top-[20%] left-[6%] h-[60%] w-[52%] translate-x-[2%] rotate-x-16 rotate-y-18 text-[0.26rem] lg:top-[10%] lg:w-[52%] lg:text-[0.36rem]"
                  code={liveblocksPrimitivesCode}
                  lang="tsx"
                  title="Primitives.tsx"
                />
                <Browser
                  className="-rotate-y-20 pointer-events-auto absolute right-[4%] bottom-[-10%] w-[50%] translate-x-[-2%] rotate-x-16 rotate-z-8 lg:right-0 lg:bottom-[-20%] lg:w-[56%]"
                  popup
                  title="DevTools"
                >
                  <div className="relative aspect-574/760 bg-black">
                    <video
                      autoPlay
                      className="absolute h-full w-full object-cover"
                      loop
                      muted
                      playsInline
                      poster="/visuals/liveblocks/devtools.jpg"
                      preload="metadata"
                      src={withExternalCdn("/visuals/liveblocks/devtools.mp4")}
                      tabIndex={-1}
                    />
                  </div>
                </Browser>
                <div className="-rotate-z-10 pointer-events-auto absolute bottom-[4%] left-0 aspect-648/463 w-[54%] translate-x-2 rotate-x-26 rotate-y-14 lg:bottom-[12%]">
                  <div className="absolute top-[10.799%] right-[-17.9012%] z-1 aspect-292/332 w-[45.0617%] overflow-hidden rounded-[4.1096%/3.6145%] shadow-floaty">
                    <Image
                      alt="An emoji picker"
                      className="absolute h-full w-full object-cover"
                      priority
                      src={liveblocksEmojiPicker}
                      width="120"
                    />
                  </div>
                  <div className="absolute bottom-[15.982%] left-[32.4074%] z-1 aspect-135/253 w-[20.833%] overflow-hidden rounded-[6.6667%/3.5573%] shadow-floaty">
                    <Image
                      alt="A list of mention suggestions"
                      className="absolute h-full w-full object-cover"
                      priority
                      src={liveblocksMentionSuggestions}
                      width="60"
                    />
                  </div>
                  <div className="absolute h-full w-full overflow-hidden rounded-[1.8518%/2.5918%] shadow-floaty">
                    <div
                      className={clsx(
                        styles.scrollGradient,
                        "absolute inset-0"
                      )}
                    >
                      <Image
                        alt="A thread with 2 comments and a composer"
                        className="absolute h-full w-full object-cover"
                        priority
                        src={liveblocksThread}
                        width="260"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative my-5 flex flex-col rounded-lg bg-violet-500 shadow-violet-500/10 shadow-xl before:absolute before:inset-0 before:z-0 before:rounded-[inherit] before:bg-linear-to-tl before:from-fuchsia-400/60 before:to-fuchsia-400/0 sm:my-8 sm:flex-row-reverse lg:my-10 dark:bg-violet-400 dark:shadow-violet-400/10 dark:before:from-fuchsia-300/60 dark:before:to-fuchsia-300/0">
          <div className="z-1 flex-1 p-8 selection:bg-white/30 sm:basis-1/2 sm:p-12 dark:selection:bg-violet-900/30">
            <h3 className="mb-3 font-semibold text-lg text-white leading-none dark:text-violet-900">
              Liveblocks.io
            </h3>
            <p className="text-violet-100 leading-relaxed dark:text-violet-900/80">
              Before focusing on the product engineering side of{" "}
              <a
                className="focusable rounded-xs font-medium underline decoration-2 decoration-violet-100/30 underline-offset-2 transition duration-100 hover:decoration-violet-100/50 focus-visible:ring-violet-100/30 dark:decoration-violet-900/20 dark:focus-visible:ring-violet-900/20 dark:hover:decoration-violet-900/40"
                href="https://liveblocks.io"
                rel="noreferrer"
                target="_blank"
              >
                Liveblocks
              </a>
              , I was involved in many areas of{" "}
              <a
                className="focusable rounded-xs font-medium underline decoration-2 decoration-violet-100/30 underline-offset-2 transition duration-100 hover:decoration-violet-100/50 focus-visible:ring-violet-100/30 dark:decoration-violet-900/20 dark:focus-visible:ring-violet-900/20 dark:hover:decoration-violet-900/40"
                href="https://liveblocks.io/"
                rel="noreferrer"
                target="_blank"
              >
                liveblocks.io
              </a>
              . From refactoring{" "}
              <a
                className="focusable rounded-xs font-medium underline decoration-2 decoration-violet-100/30 underline-offset-2 transition duration-100 hover:decoration-violet-100/50 focus-visible:ring-violet-100/30 dark:decoration-violet-900/20 dark:focus-visible:ring-violet-900/20 dark:hover:decoration-violet-900/40"
                href="https://liveblocks.io/docs"
                rel="noreferrer"
                target="_blank"
              >
                the docs
              </a>{" "}
              and{" "}
              <a
                className="focusable rounded-xs font-medium underline decoration-2 decoration-violet-100/30 underline-offset-2 transition duration-100 hover:decoration-violet-100/50 focus-visible:ring-violet-100/30 dark:decoration-violet-900/20 dark:focus-visible:ring-violet-900/20 dark:hover:decoration-violet-900/40"
                href="https://liveblocks.io/examples"
                rel="noreferrer"
                target="_blank"
              >
                examples gallery
              </a>{" "}
              to live in{" "}
              <a
                className="focusable rounded-xs font-medium underline decoration-2 decoration-violet-100/30 underline-offset-2 transition duration-100 hover:decoration-violet-100/50 focus-visible:ring-violet-100/30 dark:decoration-violet-900/20 dark:focus-visible:ring-violet-900/20 dark:hover:decoration-violet-900/40"
                href="https://github.com/liveblocks/liveblocks"
                rel="noreferrer"
                target="_blank"
              >
                the public repo
              </a>
              , to building multiplayer landing pages,{" "}
              <a
                className="focusable rounded-xs font-medium underline decoration-2 decoration-violet-100/30 underline-offset-2 transition duration-100 hover:decoration-violet-100/50 focus-visible:ring-violet-100/30 dark:decoration-violet-900/20 dark:focus-visible:ring-violet-900/20 dark:hover:decoration-violet-900/40"
                href="https://liveblocks.io/blog/how-to-build-undo-redo-in-a-multiplayer-environment"
                rel="noreferrer"
                target="_blank"
              >
                interactive blog posts
              </a>
              ,{" "}
              <a
                className="focusable rounded-xs font-medium underline decoration-2 decoration-violet-100/30 underline-offset-2 transition duration-100 hover:decoration-violet-100/50 focus-visible:ring-violet-100/30 dark:decoration-violet-900/20 dark:focus-visible:ring-violet-900/20 dark:hover:decoration-violet-900/40"
                href="https://liveblocks.io/examples/collaborative-spreadsheet-advanced"
                rel="noreferrer"
                target="_blank"
              >
                advanced examples
              </a>
              , and&nbsp;more.
            </p>
          </div>
          <div className="sm:-ml-12 relative flex flex-1 items-center justify-center p-12 pt-0 sm:aspect-auto sm:basis-1/3 sm:p-0 lg:basis-1/2">
            <div className="relative z-2 aspect-4/3 w-full max-w-sm sm:absolute sm:max-w-none lg:aspect-9/7">
              <div className="perspective-far pointer-events-none absolute inset-0">
                <Browser
                  className="lg:-bottom-8 -rotate-z-12 pointer-events-auto absolute bottom-0 left-0 w-[65%] translate-x-[2%] rotate-x-26 rotate-y-22 lg:w-[75%]"
                  title="liveblocks.io"
                >
                  <div className="relative aspect-920/560 bg-black">
                    <video
                      autoPlay
                      className="absolute h-full w-full object-cover"
                      loop
                      muted
                      playsInline
                      poster="/visuals/liveblocks.io/product.jpg"
                      preload="metadata"
                      src={withExternalCdn(
                        "/visuals/liveblocks.io/product.mp4"
                      )}
                      tabIndex={-1}
                    />
                  </div>
                </Browser>
              </div>
              <div className="perspective-far pointer-events-none absolute inset-0">
                <Browser
                  className="lg:-top-3 -rotate-y-16 pointer-events-auto absolute top-0 right-0 w-[65%] translate-x-[-2%] rotate-x-18 rotate-z-8 lg:w-[75%]"
                  title="liveblocks.io"
                >
                  <div className="relative aspect-920/560 bg-black">
                    <video
                      autoPlay
                      className="absolute h-full w-full object-cover"
                      loop
                      muted
                      playsInline
                      poster="/visuals/liveblocks.io/marketing.jpg"
                      preload="metadata"
                      src={withExternalCdn(
                        "/visuals/liveblocks.io/marketing.mp4"
                      )}
                      tabIndex={-1}
                    />
                  </div>
                </Browser>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mb-5 flex flex-col rounded-lg bg-sky-500 shadow-sky-500/10 shadow-xl before:absolute before:inset-0 before:z-0 before:rounded-[inherit] before:bg-linear-to-tl before:from-cyan-400/80 before:to-cyan-400/0 sm:mb-8 sm:flex-row lg:mb-10 dark:bg-sky-400 dark:shadow-sky-400/10 dark:before:from-cyan-300/80 dark:before:to-cyan-300/0">
          <div className="z-1 flex-1 p-8 selection:bg-white/30 sm:basis-1/2 sm:p-12 sm:pr-10 dark:selection:bg-sky-900/30">
            <h3 className="mb-3 font-semibold text-lg text-white leading-none dark:text-sky-900">
              Framer.com
            </h3>
            <p className="text-sky-100 leading-relaxed dark:text-sky-900/80">
              As part of the site team, I worked on various aspects of{" "}
              <a
                className="focusable rounded-xs font-medium underline decoration-2 decoration-sky-100/30 underline-offset-2 transition duration-100 hover:decoration-sky-100/50 focus-visible:ring-sky-100/30 dark:decoration-sky-900/20 dark:focus-visible:ring-sky-900/20 dark:hover:decoration-sky-900/40"
                href="https://www.framer.com/"
                rel="noreferrer"
                target="_blank"
              >
                framer.com
              </a>
              . From rewriting it from the ground up using{" "}
              <a
                className="focusable rounded-xs font-medium underline decoration-2 decoration-sky-100/30 underline-offset-2 transition duration-100 hover:decoration-sky-100/50 focus-visible:ring-sky-100/30 dark:decoration-sky-900/20 dark:focus-visible:ring-sky-900/20 dark:hover:decoration-sky-900/40"
                href="https://nextjs.org/"
                rel="noreferrer"
                target="_blank"
              >
                Next.js
              </a>
              ,{" "}
              <a
                className="focusable rounded-xs font-medium underline decoration-2 decoration-sky-100/30 underline-offset-2 transition duration-100 hover:decoration-sky-100/50 focus-visible:ring-sky-100/30 dark:decoration-sky-900/20 dark:focus-visible:ring-sky-900/20 dark:hover:decoration-sky-900/40"
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
          <div className="sm:-mr-12 lg:-mr-12 relative flex flex-1 items-center justify-center p-12 pt-0 pb-16 sm:basis-1/3 sm:p-0 lg:basis-1/2">
            <div className="perspective-far lg:-bottom-20 z-2 flex w-full max-w-sm items-center sm:absolute sm:inset-0 sm:max-w-none">
              <Browser
                className="-rotate-y-20 w-full translate-x-[-2%] rotate-x-16 rotate-z-8"
                title="framer.com"
              >
                <div className="relative aspect-920/560 bg-black">
                  <video
                    autoPlay
                    className="absolute h-full w-full object-cover"
                    loop
                    muted
                    playsInline
                    poster="/visuals/framer.com/video.jpg"
                    preload="metadata"
                    src={withExternalCdn("/visuals/framer.com/video.mp4")}
                    tabIndex={-1}
                  />
                </div>
              </Browser>
            </div>
          </div>
        </div>
        <div className="relative my-5 flex flex-col rounded-lg bg-fuchsia-500 shadow-fuchsia-500/10 shadow-xl before:absolute before:inset-0 before:z-0 before:rounded-[inherit] before:bg-linear-to-tl before:from-rose-400/60 before:to-rose-400/0 sm:my-8 sm:flex-row-reverse lg:my-10 dark:bg-fuchsia-400 dark:shadow-fuchsia-400/10 dark:before:from-rose-300/60 dark:before:to-rose-300/0">
          <div className="z-1 flex-1 p-8 selection:bg-white/30 sm:basis-1/2 sm:p-12 dark:selection:bg-fuchsia-900/30">
            <h3 className="mb-3 font-semibold text-lg text-white leading-none dark:text-fuchsia-900">
              Framer Motion
            </h3>
            <p className="text-fuchsia-100 leading-relaxed dark:text-fuchsia-900/80">
              I worked on{" "}
              <a
                className="focusable rounded-xs font-medium underline decoration-2 decoration-fuchsia-100/30 underline-offset-2 transition duration-100 hover:decoration-fuchsia-100/50 focus-visible:ring-fuchsia-100/30 dark:decoration-fuchsia-900/20 dark:focus-visible:ring-fuchsia-900/20 dark:hover:decoration-fuchsia-900/40"
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
          <div className="sm:-ml-12 relative flex flex-1 items-center justify-center p-12 pt-0 sm:aspect-auto sm:basis-1/3 sm:p-0 lg:basis-1/2">
            <div className="relative z-2 aspect-4/3 w-full max-w-sm sm:absolute sm:max-w-none lg:aspect-9/7">
              <div className="perspective-far pointer-events-none absolute inset-0">
                <Browser
                  className="lg:-top-10 -rotate-z-4 pointer-events-auto absolute top-0 left-0 w-[60%] translate-x-[2%] rotate-x-12 rotate-y-16 lg:w-[80%]"
                  title={
                    <>
                      framer.com
                      <span className="text-black/20 dark:text-white/20">
                        /motion
                      </span>
                    </>
                  }
                >
                  <div className="relative aspect-920/560 bg-black">
                    <Image
                      alt="The Framer Motion website"
                      className="absolute h-full w-full object-cover"
                      src={framerMotion}
                      width="280"
                    />
                  </div>
                </Browser>
              </div>
              <div className="perspective-far pointer-events-none absolute inset-0">
                <Browser
                  className="lg:-bottom-2 -rotate-y-20 pointer-events-auto absolute right-0 bottom-0 w-[80%] translate-x-[-2%] rotate-x-18 rotate-z-8"
                  title={
                    <>
                      framer.com
                      <span className="text-black/20 dark:text-white/20">
                        /motion
                      </span>
                    </>
                  }
                >
                  <div className="relative aspect-920/560 bg-black">
                    <video
                      autoPlay
                      className="absolute h-full w-full object-cover"
                      loop
                      muted
                      playsInline
                      poster="/visuals/framer-motion/video.jpg"
                      preload="metadata"
                      src={withExternalCdn("/visuals/framer-motion/video.mp4")}
                      tabIndex={-1}
                    />
                  </div>
                </Browser>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mt-5 flex flex-col rounded-lg bg-orange-500 shadow-orange-500/10 shadow-xl before:absolute before:inset-0 before:z-0 before:rounded-[inherit] before:bg-linear-to-tl before:from-yellow-400/60 before:to-yellow-400/0 sm:mt-8 sm:flex-row lg:mt-10 dark:bg-orange-300 dark:shadow-orange-400/10 dark:before:from-yellow-300/60 dark:before:to-yellow-300/0">
          <div className="z-1 flex-1 p-8 selection:bg-white/30 sm:basis-1/2 sm:p-12 sm:pr-10 dark:selection:bg-orange-900/30">
            <h3 className="mb-3 font-semibold text-lg text-white leading-none dark:text-orange-900">
              Sketch Elements
            </h3>
            <p className="text-orange-100 leading-relaxed dark:text-orange-900/80">
              I designed Sketch Elements, a UI kit built with and distributed by{" "}
              <a
                className="focusable rounded-xs font-medium underline decoration-2 decoration-orange-100/30 underline-offset-2 transition duration-100 hover:decoration-orange-100/50 focus-visible:ring-orange-100/30 dark:decoration-orange-900/20 dark:focus-visible:ring-orange-900/20 dark:hover:decoration-orange-900/40"
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
          <div className="perspective-far max-sm:-mb-6 sm:-mr-12 relative z-2 flex flex-1 items-center justify-center sm:basis-1/3">
            <div className="md:-top-16 -rotate-y-12 mx-12 mt-0 mb-24 grid aspect-square w-full max-w-sm translate-x-[-2%] rotate-x-6 rotate-z-4 grid-cols-2 gap-8 sm:absolute sm:m-0 sm:max-w-[22rem] lg:top-[-5.5rem] lg:grid-cols-[1fr_1.2fr]">
              <Phone
                className="-mb-8 md:-mb-16 relative self-end"
                direction="right"
              >
                <div
                  className={clsx(
                    styles.scrollGradient,
                    "absolute inset-0 overflow-hidden"
                  )}
                >
                  <Image
                    alt="A food app interface"
                    className="absolute h-full w-full object-cover"
                    src={elementsFood}
                    width="180"
                  />
                </div>
              </Phone>
              <Phone className="relative" direction="right">
                <div
                  className={clsx(
                    styles.scrollGradient,
                    styles.scrollGradientDelayed,
                    "absolute inset-0 overflow-hidden"
                  )}
                >
                  <Image
                    alt="A music app interface"
                    className="absolute h-full w-full object-cover"
                    src={elementsMusic}
                    width="180"
                  />
                </div>
              </Phone>
            </div>
          </div>
        </div>
        <div className="relative my-5 flex flex-col rounded-lg bg-rose-500 shadow-rose-500/10 shadow-xl before:absolute before:inset-0 before:z-0 before:rounded-[inherit] before:bg-linear-to-tl before:from-orange-400/60 before:to-orange-400/0 sm:my-8 sm:flex-row-reverse lg:my-10 dark:bg-rose-400 dark:shadow-rose-400/10 dark:before:from-orange-300/60 dark:before:to-orange-300/0">
          <div className="z-1 flex-1 p-8 selection:bg-white/30 sm:basis-1/2 sm:p-12 dark:selection:bg-rose-900/30">
            <h3 className="mb-3 font-semibold text-lg text-white leading-none dark:text-rose-900">
              Master’s degree
            </h3>
            <p className="text-rose-100 leading-relaxed dark:text-rose-900/80">
              During my master’s in interaction design, I&nbsp;worked on
              language learning through the lens of immersive interfaces. My
              thesis focused on language immersion and some of its ideas
              resulted in a series of prototypes, exploring gestural
              interactions and other aspects of spatial&nbsp;computing.
            </p>
          </div>
          <div className="sm:-ml-12 relative flex flex-1 items-center justify-center p-12 pt-0 sm:aspect-auto sm:basis-1/3 sm:p-0 lg:basis-1/2">
            <div className="perspective-far pointer-events-none relative z-2 aspect-4/3 w-full max-w-sm bg-green-600/0 drop-shadow-floaty sm:absolute sm:max-w-none lg:aspect-9/7">
              <Headset className="-rotate-z-6 pointer-events-auto absolute top-[16%] w-[90%]">
                <video
                  autoPlay
                  className="absolute h-full w-full object-cover"
                  loop
                  muted
                  playsInline
                  poster="/visuals/master/headset.jpg"
                  preload="metadata"
                  src={withExternalCdn("/visuals/master/headset.mp4")}
                  tabIndex={-1}
                />
              </Headset>
              <div className="pointer-events-auto absolute top-[49%] right-[10%] aspect-768/593 w-[36%]">
                <Image
                  alt="An HTC Vive VR headset"
                  className="absolute h-full w-full object-cover"
                  src={masterVive}
                  width="160"
                />
              </div>
              <Phone
                className="-rotate-z-8 pointer-events-auto absolute top-[56%] right-[19%] w-[12%]"
                direction="left"
              >
                <video
                  autoPlay
                  className="absolute h-full w-full object-cover"
                  loop
                  muted
                  playsInline
                  poster="/visuals/master/phone.jpg"
                  preload="metadata"
                  src={withExternalCdn("/visuals/master/phone.mp4")}
                  tabIndex={-1}
                />
              </Phone>
              <Book className="pointer-events-auto absolute top-[40%] right-0 w-[24%] rotate-z-6 text-[#f17a54]">
                <Image
                  alt="The cover of my master’s thesis"
                  className="absolute h-full w-full"
                  src={masterThesis}
                  width="130"
                />
              </Book>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

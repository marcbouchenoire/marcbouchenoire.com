import { clsx } from "clsx"
import { formatDistanceToNow, isToday, isYesterday } from "date-fns"
import type { Transition, Variants } from "framer-motion"
import { AnimatePresence, m as motion } from "framer-motion"
import type { ComponentProps } from "react"
import { useMemo } from "react"
import { useLatestFilm } from "../../hooks/use-latest-film"
import { useLatestSong } from "../../hooks/use-latest-song"
import { capitalize } from "../../utils/capitalize"
import { Skeleton } from "../miscellaneous/Skeleton"

const variants: Variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
}

const fade: Transition = {
  ease: "easeInOut",
  duration: 0.6
}

/**
 * Display the latest film I watched from Letterboxd.
 *
 * @param props - A set of `a` props.
 * @param [props.className] - A list of one or more classes.
 */
export function Film({ className, ...props }: ComponentProps<"a">) {
  const { date, poster, rating, title, year, url } = useLatestFilm()
  const absoluteDate = useMemo(() => {
    if (!date) return

    return new Date(date)
  }, [date])
  const relativeDate = useMemo(() => {
    if (!absoluteDate) return

    if (isToday(absoluteDate)) {
      return "Today"
    } else if (isYesterday(absoluteDate)) {
      return "Yesterday"
    } else {
      return capitalize(formatDistanceToNow(absoluteDate, { addSuffix: true }))
    }
  }, [absoluteDate])

  return (
    <a
      className={clsx(
        className,
        "focusable flex w-fit gap-4 rounded pr-2 ring-offset-4 transition hover:opacity-60 focus:ring-lime-500/40 dark:ring-offset-zinc-900 dark:focus:ring-lime-400/40"
      )}
      href={url}
      rel="noreferrer"
      target="_blank"
      {...props}
    >
      <div className="highlight dark:highlight-invert relative aspect-[2/3] h-20 flex-none overflow-hidden rounded bg-zinc-100 dark:bg-zinc-800">
        <svg
          className="absolute h-full w-full text-zinc-300 dark:text-zinc-600"
          role="presentation"
          viewBox="0 0 52 78"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            d="M11 30.3c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311c.642-.327 1.482-.327 3.162-.327h20.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C41 27.78 41 28.62 41 30.3v17.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311c-.642.327-1.482.327-3.162.327H15.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C11 50.22 11 49.38 11 47.7V30.3Zm2-1.3c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54c.184-.077.417-.077.883-.077h1c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883s0 .699-.076.883a1 1 0 0 1-.541.54c-.184.077-.417.077-.883.077h-1c-.466 0-.699 0-.883-.076a1 1 0 0 1-.54-.541C13 29.699 13 29.466 13 29Zm22.076-.883C35 28.301 35 28.534 35 29s0 .699.076.883a1 1 0 0 0 .541.54c.184.077.417.077.883.077h1c.466 0 .699 0 .883-.076a1 1 0 0 0 .54-.541C39 29.699 39 29.466 39 29s0-.699-.076-.883a1 1 0 0 0-.541-.54c-.184-.077-.417-.077-.883-.077h-1c-.466 0-.699 0-.883.076a1 1 0 0 0-.54.541ZM13 34c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54c.184-.077.417-.077.883-.077h1c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883s0 .699-.076.883a1 1 0 0 1-.541.54c-.184.077-.417.077-.883.077h-1c-.466 0-.699 0-.883-.076a1 1 0 0 1-.54-.541C13 34.699 13 34.466 13 34Zm22.076-.883C35 33.301 35 33.534 35 34s0 .699.076.883a1 1 0 0 0 .541.54c.184.077.417.077.883.077h1c.466 0 .699 0 .883-.076a1 1 0 0 0 .54-.541C39 34.699 39 34.466 39 34s0-.699-.076-.883a1 1 0 0 0-.541-.54c-.184-.077-.417-.077-.883-.077h-1c-.466 0-.699 0-.883.076a1 1 0 0 0-.54.541ZM13 39c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54c.184-.077.417-.077.883-.077h1c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883s0 .699-.076.883a1 1 0 0 1-.541.54c-.184.077-.417.077-.883.077h-1c-.466 0-.699 0-.883-.076a1 1 0 0 1-.54-.541C13 39.699 13 39.466 13 39Zm22.076-.883C35 38.301 35 38.534 35 39s0 .699.076.883a1 1 0 0 0 .541.54c.184.077.417.077.883.077h1c.466 0 .699 0 .883-.076a1 1 0 0 0 .54-.541C39 39.699 39 39.466 39 39s0-.699-.076-.883a1 1 0 0 0-.541-.54c-.184-.077-.417-.077-.883-.077h-1c-.466 0-.699 0-.883.076a1 1 0 0 0-.54.541ZM13 44c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54c.184-.077.417-.077.883-.077h1c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883s0 .699-.076.883a1 1 0 0 1-.541.54c-.184.077-.417.077-.883.077h-1c-.466 0-.699 0-.883-.076a1 1 0 0 1-.54-.541C13 44.699 13 44.466 13 44Zm22.076-.883C35 43.301 35 43.534 35 44s0 .699.076.883a1 1 0 0 0 .541.54c.184.077.417.077.883.077h1c.466 0 .699 0 .883-.076a1 1 0 0 0 .54-.541C39 44.699 39 44.466 39 44s0-.699-.076-.883a1 1 0 0 0-.541-.54c-.184-.077-.417-.077-.883-.077h-1c-.466 0-.699 0-.883.076a1 1 0 0 0-.54.541ZM13 49c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54c.184-.077.417-.077.883-.077h1c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883s0 .699-.076.883a1 1 0 0 1-.541.54c-.184.077-.417.077-.883.077h-1c-.466 0-.699 0-.883-.076a1 1 0 0 1-.54-.541C13 49.699 13 49.466 13 49Zm22.076-.883C35 48.301 35 48.534 35 49s0 .699.076.883a1 1 0 0 0 .541.54c.184.077.417.077.883.077h1c.466 0 .699 0 .883-.076a1 1 0 0 0 .54-.541C39 49.699 39 49.466 39 49s0-.699-.076-.883a1 1 0 0 0-.541-.54c-.184-.077-.417-.077-.883-.077h-1c-.466 0-.699 0-.883.076a1 1 0 0 0-.54.541ZM19 29.1c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437c.214-.109.494-.109 1.054-.109h10.8c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437C33 28.26 33 28.54 33 29.1v7.3c0 .56 0 .84-.109 1.054a1 1 0 0 1-.437.437C32.24 38 31.96 38 31.4 38H20.6c-.56 0-.84 0-1.054-.109a1 1 0 0 1-.437-.437C19 37.24 19 36.96 19 36.4v-7.3Zm.109 11.446C19 40.76 19 41.04 19 41.6v7.3c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437c.214.109.494.109 1.054.109h10.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C33 49.74 33 49.46 33 48.9v-7.3c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C32.24 40 31.96 40 31.4 40H20.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437Z"
            fill="currentColor"
            fillRule="evenodd"
          />
        </svg>
        <AnimatePresence>
          {poster && (
            <motion.img
              alt={title}
              animate="visible"
              className="absolute h-full w-full object-cover"
              exit="hidden"
              initial="hidden"
              key={title}
              loading="lazy"
              src={poster}
              transition={fade}
              variants={variants}
            />
          )}
        </AnimatePresence>
      </div>
      <div className="flex min-w-0 flex-col justify-center">
        <small className="flex items-center text-2xs font-semibold uppercase leading-tight tracking-widest text-lime-500 dark:text-lime-400">
          <svg
            className="mr-1 -ml-px flex-none"
            height="20"
            role="presentation"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M2.559 9.104a1.566 1.566 0 0 0 0 1.792C3.63 12.454 6.21 15.5 9.999 15.5c3.79 0 6.37-3.046 7.442-4.604a1.567 1.567 0 0 0 0-1.792C16.369 7.546 13.789 4.5 10 4.5c-3.789 0-6.369 3.046-7.441 4.604Zm9.94.896a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
          {absoluteDate ? (
            <time className="truncate" dateTime={absoluteDate.toISOString()}>
              {relativeDate}
            </time>
          ) : (
            <span className="truncate">Nothing watched</span>
          )}
        </small>
        <p className="mt-1 mb-1.5 flex items-center">
          <span
            className="truncate font-semibold text-zinc-700 dark:text-zinc-100"
            title={title}
          >
            {title ?? <Skeleton className="w-32" />}
          </span>{" "}
          {year && (
            <time
              className="ml-1.5 inline-block flex-none translate-y-px rounded bg-zinc-100 p-1 text-xs font-medium leading-none text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"
              dateTime={String(year)}
            >
              {year}
            </time>
          )}
        </p>
        <div
          aria-label={`${rating ?? 0} out of 5`}
          className="relative -ml-px h-[20px] w-[96px]"
          role="img"
        >
          <svg
            className="absolute text-zinc-200 dark:text-zinc-700"
            height="20"
            role="presentation"
            width="96"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.105 2.802a1 1 0 0 1 1.79 0l1.886 3.793 4.204.61a1 1 0 0 1 .551 1.709L14.5 11.85l.718 4.156a1 1 0 0 1-1.448 1.057L10 15.095l-3.77 1.969a1 1 0 0 1-1.448-1.057l.718-4.156-3.036-2.937a1 1 0 0 1 .551-1.709l4.204-.61 1.886-3.793ZM28.105 2.802a1 1 0 0 1 1.79 0l1.886 3.793 4.204.61a1 1 0 0 1 .551 1.709L33.5 11.85l.718 4.156a1 1 0 0 1-1.449 1.057L29 15.095l-3.77 1.969a1 1 0 0 1-1.448-1.057l.718-4.156-3.036-2.937a1 1 0 0 1 .551-1.709l4.204-.61 1.886-3.793ZM47.105 2.802a1 1 0 0 1 1.79 0l1.886 3.793 4.204.61a1 1 0 0 1 .551 1.709L52.5 11.85l.718 4.156a1 1 0 0 1-1.449 1.057L48 15.095l-3.77 1.969a1 1 0 0 1-1.448-1.057l.718-4.156-3.036-2.937a1 1 0 0 1 .551-1.709l4.204-.61 1.886-3.793ZM66.105 2.802a1 1 0 0 1 1.79 0l1.886 3.793 4.204.61a1 1 0 0 1 .551 1.709L71.5 11.85l.718 4.156a1 1 0 0 1-1.449 1.057L67 15.095l-3.77 1.969a1 1 0 0 1-1.448-1.057l.718-4.156-3.036-2.937a1 1 0 0 1 .551-1.709l4.204-.61 1.886-3.793ZM85.105 2.802a1 1 0 0 1 1.79 0l1.886 3.793 4.204.61a1 1 0 0 1 .551 1.709L90.5 11.85l.718 4.156a1 1 0 0 1-1.449 1.057L86 15.095l-3.77 1.969a1 1 0 0 1-1.448-1.057l.718-4.156-3.036-2.937a1 1 0 0 1 .551-1.709l4.204-.61 1.886-3.793Z"
              fill="currentColor"
            />
          </svg>
          <svg
            className="absolute text-zinc-600 dark:text-zinc-300"
            height="20"
            role="presentation"
            style={{
              clipPath: `inset(0 ${100 - (rating ?? 0) * (100 / 5)}% 0 0)`
            }}
            width="96"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.105 2.802a1 1 0 0 1 1.79 0l1.886 3.793 4.204.61a1 1 0 0 1 .551 1.709L14.5 11.85l.718 4.156a1 1 0 0 1-1.448 1.057L10 15.095l-3.77 1.969a1 1 0 0 1-1.448-1.057l.718-4.156-3.036-2.937a1 1 0 0 1 .551-1.709l4.204-.61 1.886-3.793ZM28.105 2.802a1 1 0 0 1 1.79 0l1.886 3.793 4.204.61a1 1 0 0 1 .551 1.709L33.5 11.85l.718 4.156a1 1 0 0 1-1.449 1.057L29 15.095l-3.77 1.969a1 1 0 0 1-1.448-1.057l.718-4.156-3.036-2.937a1 1 0 0 1 .551-1.709l4.204-.61 1.886-3.793ZM47.105 2.802a1 1 0 0 1 1.79 0l1.886 3.793 4.204.61a1 1 0 0 1 .551 1.709L52.5 11.85l.718 4.156a1 1 0 0 1-1.449 1.057L48 15.095l-3.77 1.969a1 1 0 0 1-1.448-1.057l.718-4.156-3.036-2.937a1 1 0 0 1 .551-1.709l4.204-.61 1.886-3.793ZM66.105 2.802a1 1 0 0 1 1.79 0l1.886 3.793 4.204.61a1 1 0 0 1 .551 1.709L71.5 11.85l.718 4.156a1 1 0 0 1-1.449 1.057L67 15.095l-3.77 1.969a1 1 0 0 1-1.448-1.057l.718-4.156-3.036-2.937a1 1 0 0 1 .551-1.709l4.204-.61 1.886-3.793ZM85.105 2.802a1 1 0 0 1 1.79 0l1.886 3.793 4.204.61a1 1 0 0 1 .551 1.709L90.5 11.85l.718 4.156a1 1 0 0 1-1.449 1.057L86 15.095l-3.77 1.969a1 1 0 0 1-1.448-1.057l.718-4.156-3.036-2.937a1 1 0 0 1 .551-1.709l4.204-.61 1.886-3.793Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </a>
  )
}

/**
 * Display the latest song I listened to from Last.fm.
 *
 * @param props - A set of `a` props.
 * @param [props.className] - A list of one or more classes.
 */
export function Song({ className, ...props }: ComponentProps<"a">) {
  const { artist, cover, date, title, year, playing, url } = useLatestSong()
  const absoluteDate = useMemo(() => {
    if (!date) return

    return new Date(date * 1000)
  }, [date])
  const relativeDate = useMemo(() => {
    if (!absoluteDate) return

    return isYesterday(absoluteDate)
      ? "Yesterday"
      : capitalize(formatDistanceToNow(absoluteDate, { addSuffix: true }))
  }, [absoluteDate])

  return (
    <a
      className={clsx(
        className,
        "focusable flex w-fit gap-4 rounded pr-2 ring-offset-4 transition hover:opacity-60 focus:ring-red-500/40 dark:ring-offset-zinc-900 dark:focus:ring-red-400/40"
      )}
      href={url}
      rel="noreferrer"
      target="_blank"
      {...props}
    >
      <div className="highlight dark:highlight-invert relative aspect-square h-20 flex-none overflow-hidden rounded bg-zinc-100 dark:bg-zinc-800">
        <svg
          className="absolute h-full w-full text-zinc-300 dark:text-zinc-600"
          role="presentation"
          viewBox="0 0 78 78"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M52 34.576v14.697c0 1.075-.146 2.13-.614 3.105-.72 1.517-1.89 2.473-3.46 2.936-.868.26-1.764.402-2.67.442-2.369.122-4.425-1.538-4.844-3.95-.361-1.99.565-4.183 2.592-5.208.798-.401 1.667-.643 2.533-.824.945-.21 1.89-.401 2.825-.623.693-.16 1.14-.593 1.277-1.328.039-.16.048-.332.048-.492V29.318c0-.16-.03-.322-.067-.473-.097-.391-.37-.623-.76-.604-.4.02-.79.091-1.179.172-1.9.382-3.8.774-5.692 1.176l-9.228 1.92c-.04.01-.088.03-.128.03-.692.202-.935.524-.965 1.267-.01.11 0 .222 0 .332-.01 6.695 0 13.39-.01 20.084 0 1.087-.117 2.152-.535 3.156-.692 1.648-1.92 2.684-3.575 3.176-.878.261-1.774.413-2.691.442-2.388.091-4.377-1.547-4.785-3.97-.351-2.09.575-4.342 2.875-5.348.896-.382 1.822-.592 2.767-.793.711-.15 1.433-.301 2.144-.452.955-.21 1.452-.834 1.5-1.839V24.352c0-.322.04-.642.108-.955.175-.733.683-1.156 1.364-1.328.634-.172 1.287-.291 1.929-.432 1.832-.382 3.654-.765 5.486-1.137l5.662-1.187c1.677-.342 3.342-.693 5.019-1.034.546-.11 1.102-.232 1.656-.273.769-.07 1.306.433 1.384 1.238.019.19.03.382.03.573v14.747l.004.012Z"
            fill="currentColor"
          />
        </svg>
        <AnimatePresence>
          {cover && (
            <motion.img
              alt={`${title} by ${artist}`}
              animate="visible"
              className="absolute h-full w-full object-cover"
              exit="hidden"
              initial="hidden"
              key={`${artist} ${title}`}
              loading="lazy"
              src={cover}
              transition={fade}
              variants={variants}
            />
          )}
        </AnimatePresence>
      </div>
      <div className="flex min-w-0 flex-col justify-center">
        <small className="flex items-center text-2xs font-semibold uppercase leading-tight tracking-widest text-rose-500 dark:text-rose-400">
          <svg
            className="mr-1 -ml-px flex-none will-change-transform"
            fill="currentColor"
            height="20"
            role="presentation"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            {playing ? (
              <>
                <rect height="8" rx="1" width="2" x="3" y="6">
                  <animate
                    attributeName="height"
                    calcMode="linear"
                    dur="1s"
                    repeatCount="indefinite"
                    values="8;4;2;6;4;8"
                  />
                  <animate
                    attributeName="y"
                    calcMode="linear"
                    dur="1s"
                    repeatCount="indefinite"
                    values="6;8;9;7;8;6"
                  />
                </rect>
                <rect height="12" rx="1" width="2" x="7" y="4">
                  <animate
                    attributeName="height"
                    calcMode="linear"
                    dur="1s"
                    repeatCount="indefinite"
                    values="12;8;10;8;14;12"
                  />
                  <animate
                    attributeName="y"
                    calcMode="linear"
                    dur="1s"
                    repeatCount="indefinite"
                    values="4;6;5;6;3;4"
                  />
                </rect>
                <rect height="6" rx="1" width="2" x="11" y="7">
                  <animate
                    attributeName="height"
                    calcMode="linear"
                    dur="1s"
                    repeatCount="indefinite"
                    values="6;8;6;10;8;6"
                  />
                  <animate
                    attributeName="y"
                    calcMode="linear"
                    dur="1s"
                    repeatCount="indefinite"
                    values="7;6;7;5;6;7"
                  />
                </rect>
                <rect height="8" rx="1" width="2" x="15" y="6">
                  <animate
                    attributeName="height"
                    calcMode="linear"
                    dur="1s"
                    repeatCount="indefinite"
                    values="8;4;6;4;2;8"
                  />
                  <animate
                    attributeName="y"
                    calcMode="linear"
                    dur="1s"
                    repeatCount="indefinite"
                    values="6;8;7;8;9;6"
                  />
                </rect>
              </>
            ) : (
              <path
                clipRule="evenodd"
                d="M16 6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1ZM12 7a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1ZM8 4a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1ZM4 6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1Z"
                fillRule="evenodd"
              />
            )}
          </svg>
          {absoluteDate ? (
            <time className="truncate" dateTime={absoluteDate.toISOString()}>
              {relativeDate}
            </time>
          ) : (
            <span className="truncate">
              {playing ? "Currently playing" : "Not playing"}
            </span>
          )}
        </small>
        <p className="my-1 flex items-center">
          <span
            className="truncate font-semibold text-zinc-700 dark:text-zinc-100"
            title={title}
          >
            {title ?? <Skeleton className="w-40" />}
          </span>{" "}
          {year && (
            <time
              className="ml-1.5 inline-block flex-none translate-y-px rounded bg-zinc-100 p-1 text-xs font-medium leading-none text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"
              dateTime={String(year)}
            >
              {year}
            </time>
          )}
        </p>
        <p className="truncate text-zinc-500 dark:text-zinc-400" title={artist}>
          {artist ?? <Skeleton className="w-28" />}
        </p>
      </div>
    </a>
  )
}

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
        <Song className="min-w-0 max-w-full" />
        <Film className="min-w-0 max-w-full" />
      </div>
    </section>
  )
}

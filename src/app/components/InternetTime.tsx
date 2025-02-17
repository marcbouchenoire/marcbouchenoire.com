"use client"

import { clsx } from "clsx"
import {
  type MotionValue,
  motion,
  motionValue,
  useMotionValueEvent,
  useSpring,
  useTransform
} from "motion/react"
import { type ComponentProps, memo, useEffect, useRef } from "react"
import { useInitial } from "src/utils/use-initial"
import { useInternetTime } from "src/utils/use-internet-time"
import styles from "./InternetTime.module.css"

const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

interface RollingDigitsProps {
  /**
   * The digit's value.
   */
  value: MotionValue<number>
}

interface RollingDigitProps extends ComponentProps<typeof motion.span> {
  /**
   * The parent digits' current index.
   */
  currentIndex: MotionValue<number>

  /**
   * The digit's index.
   */
  digitIndex: number
}

function RollingDigit({
  currentIndex,
  digitIndex,
  ...props
}: RollingDigitProps) {
  const opacity = useTransform(currentIndex, (index) => {
    return Math.max(1 - Math.abs(index - digitIndex), 0)
  })
  return <motion.span {...props} style={{ opacity }} />
}

const RollingDigits = memo(({ value }: RollingDigitsProps) => {
  const isSecondaryDigit = useRef(false)
  const index = useSpring(0, {
    stiffness: 300,
    damping: 40
  })
  const y = useTransform(
    index,
    (index) => `-${(index / (DIGITS.length * 2)) * 100}%`
  )

  useMotionValueEvent(value, "change", () => {
    const previous = value.getPrevious() ?? value.get()
    const current = value.get()

    if (previous === current) {
      return
    }

    // Move back to the primary set of digits when possible
    if (isSecondaryDigit.current) {
      isSecondaryDigit.current = false
      index.jump(previous)
    }

    // If backwards (e.g. 9 to 0), move to the secondary set of digits instead
    if (current < previous) {
      isSecondaryDigit.current = true
      index.set(current + DIGITS.length)
    } else {
      index.set(current)
    }
  })

  return (
    <span className="relative inline-block h-[1lh] w-[1ch]">
      <motion.span
        className="absolute inline-flex flex-col will-change-transform"
        style={{ y }}
      >
        <RollingDigit
          className="absolute top-[-1lh]"
          currentIndex={index}
          digitIndex={-1}
        >
          {DIGITS[DIGITS.length - 1]}
        </RollingDigit>
        {DIGITS.map((digit) => (
          <RollingDigit currentIndex={index} digitIndex={digit} key={digit}>
            {digit}
          </RollingDigit>
        ))}
        {DIGITS.map((digit) => (
          <RollingDigit
            currentIndex={index}
            digitIndex={digit + DIGITS.length}
            key={`${digit}:secondary`}
          >
            {digit}
          </RollingDigit>
        ))}
      </motion.span>
    </span>
  )
})

/**
 * A rolling timer of the current internet time.
 *
 * @param props - A set of `a` props.
 * @param [props.className] - A list of one or more classes.
 */
export function InternetTime({ className, ...props }: ComponentProps<"a">) {
  const time = useInternetTime()
  const digits = useInitial(() => {
    return time
      .replace(".", "")
      .split("")
      .map((digit) => motionValue(Number(digit)))
  })

  useEffect(() => {
    time
      .replace(".", "")
      .split("")
      .forEach((digit, index) => {
        digits[index].set(Number(digit))
      })
  }, [time])

  return (
    <a
      className={clsx(
        className,
        "focusable inline-flex h-[1.25em] cursor-help items-center rounded-xs font-semibold transition hover:opacity-60"
      )}
      href="https://en.wikipedia.org/wiki/Swatch_Internet_Time"
      rel="noreferrer"
      target="_blank"
      {...props}
    >
      <span className="font-normal text-gray-400">@</span>
      <span
        className={clsx(
          styles.mask,
          "pointer-events-none relative h-[3lh] translate-y-[0.125lh] select-none tabular-nums leading-none"
        )}
      >
        <span className="absolute top-[1lh] select-text font-medium text-transparent">
          {time}
        </span>
        <span
          aria-hidden
          className="pointer-events-none inline-flex translate-y-[1lh] items-center"
        >
          {digits.slice(0, 3).map((digit, index) => (
            <RollingDigits key={index} value={digit} />
          ))}
          <span className="mx-[0.025ch] inline-block h-[1lh]">.</span>
          {digits.slice(3).map((digit, index) => (
            <RollingDigits key={index + 3} value={digit} />
          ))}
        </span>
      </span>
    </a>
  )
}

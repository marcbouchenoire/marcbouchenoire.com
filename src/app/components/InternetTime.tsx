"use client"

import { clsx } from "clsx"
import type { MotionValue, Transition, Variants } from "motion/react"
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useSpring,
  useTransform
} from "motion/react"
import { type ComponentProps, useEffect, useMemo, useState } from "react"
import { DEFAULT_TIME, useInternetTime } from "src/utils/use-internet-time"

const OFFSET_PERCENTAGE = 60

interface DigitsColumnProps extends ComponentProps<"span"> {
  /**
   * The place of the digit.
   */
  place: number

  /**
   * The total value.
   */
  value: number
}

interface DigitProps
  extends Pick<DigitsColumnProps, "place" | "value">,
    ComponentProps<typeof motion.span> {
  /**
   * The digit to display.
   */
  digit: number
}

const variants: Variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
}

const transition: Transition = {
  ease: "easeInOut",
  duration: 0.6
}

function getPlaceValue(number: number, place: number): number {
  if (number === 0) {
    return 0
  }

  const absolutePlace = Math.abs(place)
  const stringValue = Math.abs(number).toString()

  if (absolutePlace >= stringValue.length) {
    return 0
  }

  const digit = stringValue[stringValue.length - absolutePlace - 1]

  return Number(digit)
}

/**
 * A rolling digit.
 *
 * @param props - A set of `motion.span` props.
 * @param props.digit - The digit to display.
 * @param props.place - The place of the digit.
 * @param props.value - The total value.
 * @param [props.className] - A list of one or more classes.
 * @param [props.style] - A set of inline styles.
 */
function Digit({
  digit,
  place,
  value,
  className,
  style,
  ...props
}: DigitProps) {
  const offset = useMemo(() => {
    const placeValue = getPlaceValue(value, place)

    return ((15 + digit - placeValue) % 10) - 5
  }, [digit, place, value])
  const offsetSpring: MotionValue<number> = useSpring(offset, {
    stiffness: 220,
    damping: 30
  })
  const y = useTransform(offsetSpring, (offset) => offset * OFFSET_PERCENTAGE)
  const yPercentage = useMotionTemplate`${y}%`
  const opacity = useTransform(
    y,
    [-OFFSET_PERCENTAGE, 0, OFFSET_PERCENTAGE],
    [0, 1, 0]
  )
  const scale = useTransform(
    y,
    [-OFFSET_PERCENTAGE, 0, OFFSET_PERCENTAGE],
    [0.5, 1, 0.5]
  )
  const blur = useTransform(
    y,
    [-OFFSET_PERCENTAGE, 0, OFFSET_PERCENTAGE],
    [5, 0, 5]
  )
  const filter = useMotionTemplate`blur(${blur}px)`

  useEffect(() => {
    if (Math.abs(offset) <= 2) {
      offsetSpring.set(offset)
    } else {
      offsetSpring.jump(offset)
    }
  }, [offsetSpring, offset])

  return (
    <motion.span
      className={clsx(
        className,
        "absolute inset-0 flex justify-center will-change-transform"
      )}
      style={{
        y: yPercentage,
        opacity,
        scale,
        filter,
        ...style
      }}
      transition={{
        duration: 0.2
      }}
      {...props}
    >
      {digit}
    </motion.span>
  )
}

/**
 * A column of rolling digits.
 *
 * @param props - A set of `span` props.
 * @param props.place - The place of the digit.
 * @param props.value - The total value.
 * @param [props.className] - A list of one or more classes.
 */
export function DigitsColumn({
  place,
  value,
  className,
  ...props
}: DigitsColumnProps) {
  return (
    <span
      className={clsx(
        className,
        "relative inline-block h-[1em] w-[1ch] translate-y-[-0.125em] will-change-transform"
      )}
      {...props}
    >
      {[...Array.from({ length: 10 }).keys()].map((index) => (
        <Digit digit={index} key={index} place={place} value={value} />
      ))}
    </span>
  )
}

/**
 * A rolling timer of the current internet time.
 *
 * @param props - A set of `a` props.
 * @param [props.className] - A list of one or more classes.
 */
export function InternetTime({
  className,
  ...props
}: ComponentProps<typeof motion.a>) {
  const [isHydrated, setHydrated] = useState(false)
  const time = useInternetTime()
  const [integers, decimals] = useMemo(() => {
    const [integers, decimals] = time.split(".")

    return [Number(integers), Number(decimals)] as const
  }, [time])

  useEffect(() => {
    setHydrated(true)
  }, [])

  return (
    <motion.a
      className={clsx(
        className,
        "focusable inline-flex h-[1.25em] cursor-help items-center rounded-sm font-semibold transition hover:opacity-60"
      )}
      href="https://en.wikipedia.org/wiki/Swatch_Internet_Time"
      rel="noreferrer"
      target="_blank"
      {...props}
    >
      <span className="font-normal text-gray-400">@</span>
      <AnimatePresence initial={false} mode="popLayout">
        {isHydrated ? (
          <motion.span
            animate="visible"
            className="relative translate-y-[0.0625em] select-none"
            exit="hidden"
            initial="hidden"
            transition={transition}
            variants={variants}
          >
            <span className="absolute select-text font-medium tracking-wide text-transparent">
              {time}
            </span>
            <span aria-hidden className="pointer-events-none inline-block">
              <DigitsColumn place={2} value={integers} />
              <DigitsColumn place={1} value={integers} />
              <DigitsColumn place={0} value={integers} />
              <span className="relative inline-flex h-[1em] w-[0.25ch] justify-center">
                .
              </span>
              <DigitsColumn place={1} value={decimals} />
              <DigitsColumn place={0} value={decimals} />
            </span>
          </motion.span>
        ) : (
          <motion.span
            animate="visible"
            className="relative translate-y-[0.0625em] select-none"
            exit="hidden"
            initial="hidden"
            key="default"
            transition={transition}
            variants={variants}
          >
            {DEFAULT_TIME}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.a>
  )
}

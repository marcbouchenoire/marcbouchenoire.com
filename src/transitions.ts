import type { Spring, Transition } from "framer-motion"

type DurationSpring = Spring & {
  /**
   * The duration of the animation.
   */
  duration: number
}

export const instant: Transition = {
  duration: 0
}

export const springy: DurationSpring = {
  type: "spring",
  duration: 0.4,
  bounce: 0.08
}

export const springier: DurationSpring = {
  type: "spring",
  duration: 0.4,
  bounce: 0.2
}

export const springiest: DurationSpring = {
  type: "spring",
  duration: 0.6,
  bounce: 0.6
}

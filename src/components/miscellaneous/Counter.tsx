import clsx from "clsx"
import { AnimatePresence, Variants, motion } from "framer-motion"
import { ComponentProps, useMemo } from "react"
import { springier } from "../../transitions"

const CHARACTERS = ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0", "."]
const COLUMN_HEIGHT = `${CHARACTERS.length * 2}em`
const STAGGER_CHARACTER_DELAY = 0.1

export interface CounterProps extends ComponentProps<"span"> {
  /**
   * The value to count towards.
   */
  value?: string
}

export interface CounterCharactersProps
  extends ComponentProps<typeof motion.span> {
  /**
   * The active character.
   */
  character: string
}

const variants: Variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
}

/**
 * A column of numerical characters.
 *
 * @param props - A set of `motion.span` props.
 * @param [props.character] - The active character.
 * @param [props.transition] - A Framer Motion transition.
 * @param [props.className] - A list of one or more classes.
 */
function CounterCharacters({
  character,
  transition,
  className,
  ...props
}: CounterCharactersProps) {
  const index = useMemo(
    () => Math.abs(CHARACTERS.indexOf(character)),
    [character]
  )
  const y = useMemo(
    () => `${((CHARACTERS.length - index - 1) / CHARACTERS.length) * 100}%`,
    [index]
  )

  return (
    <motion.span
      animate="visible"
      aria-hidden
      className="inline-block relative flex-none text-center pointer-events-none select-none"
      exit="hidden"
      initial="hidden"
      style={{ width: character === "." ? "0.5ch" : "1ch" }}
      transition={transition}
      variants={variants}
    >
      <motion.span
        animate={{ opacity: 1, y }}
        className={clsx(
          className,
          "inline-flex absolute bottom-0 left-0 flex-col w-full"
        )}
        initial="hidden"
        style={{ height: COLUMN_HEIGHT }}
        transition={transition}
        variants={variants}
        {...props}
      >
        {CHARACTERS.map((character) => (
          <span className="h-[2em] leading-[2em]" key={character}>
            {character}
          </span>
        ))}
      </motion.span>
    </motion.span>
  )
}

/**
 * Display and animate a numerical value.
 *
 * @param props - A set of `span` props.
 * @param [props.value] - The value to count towards.
 * @param [props.className] - A list of one or more classes.
 */
export function Counter({ value = "", className, ...props }: CounterProps) {
  const characters = useMemo(() => [...value], [value])

  return (
    <span
      className={clsx(
        className,
        "inline-block h-[1em] tabular-nums leading-none"
      )}
      {...props}
    >
      <span className="inline-flex overflow-hidden relative h-[2em] -mt-[0.5em] counter">
        <AnimatePresence>
          {characters.map((character, index) => (
            <CounterCharacters
              character={character}
              key={index}
              transition={{
                ...springier,
                delay: index * STAGGER_CHARACTER_DELAY
              }}
            />
          ))}
        </AnimatePresence>
        <span
          aria-label={value}
          className="absolute h-[2em] leading-[2em] text-transparent"
        >
          {characters.map((character, index) => (
            <span
              aria-hidden
              className="inline-block text-center"
              key={index}
              style={{ width: character === "." ? "0.5ch" : "1ch" }}
            >
              {character}
            </span>
          ))}
        </span>
      </span>
    </span>
  )
}

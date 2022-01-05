import clsx from "clsx"
import { AnimatePresence, Variants, motion } from "framer-motion"
import { ComponentProps, useMemo } from "react"
import { springier } from "../../transitions"

const CHARACTERS = [".", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const COLUMN_HEIGHT = `${CHARACTERS.length}em`
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
 * @param [props.className] - A list of one or more classes.
 */
function CounterCharacters({
  character,
  className,
  ...props
}: CounterCharactersProps) {
  const index = useMemo(
    () => Math.abs(CHARACTERS.indexOf(character)),
    [character]
  )
  const y = useMemo(() => `${(-index / CHARACTERS.length) * 100}%`, [index])

  return (
    <motion.span
      animate="visible"
      aria-hidden
      className="inline-block relative flex-none w-[1ch] text-center pointer-events-none select-none"
      exit="hidden"
      initial="hidden"
      transition={{
        ease: "easeInOut"
      }}
      variants={variants}
    >
      <motion.span
        animate={{ opacity: 1, y }}
        className={clsx(className, "inline-flex absolute inset-0 flex-col")}
        initial="hidden"
        style={{ height: COLUMN_HEIGHT }}
        variants={variants}
        {...props}
      >
        {CHARACTERS.map((character) => (
          <span className="flex-none h-[1em]" key={character}>
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
      <span className="inline-flex overflow-hidden relative h-[1em]">
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
        <span aria-label={value} className="absolute text-transparent">
          <span>{value}</span>
          {characters.map((character, index) => (
            <span
              aria-hidden
              className="inline-block w-[1ch] text-center"
              key={index}
            >
              {character}
            </span>
          ))}
        </span>
      </span>
    </span>
  )
}

import { CSSProperties, ComponentProps, useMemo } from "react"

export interface CharactersProps
  extends Omit<ComponentProps<"span">, "children"> {
  /**
   * A string of characters to split.
   */
  children?: string
}

/**
 * A split set of characters.
 *
 * @param props - A set of `span` props applied to each character.
 * @param [props.children] - A string of characters to split.
 * @param [props.style] - An set of inline styles.
 */
export function Characters({
  children = "",
  style,
  ...props
}: CharactersProps) {
  const characters = useMemo(() => [...children], [children])

  return (
    <span aria-label={children} role="text">
      {characters.map((character, index) => (
        <span
          aria-hidden
          data-character
          key={`${character}-${index}`}
          style={{ "--character": index, ...style } as CSSProperties}
          {...props}
        >
          {character}
        </span>
      ))}
    </span>
  )
}

import { ComponentProps, useEffect, useState } from "react"

const EMOJI = [
  "⛺",
  "✨",
  "🌈",
  "🌚",
  "🌱",
  "🌸",
  "🌹",
  "🍂",
  "🍬",
  "🍭",
  "🎀",
  "🎈",
  "🎉",
  "🎨",
  "🏝️",
  "👀",
  "👋",
  "👒",
  "📚",
  "🔮",
  "🗿",
  "🥖",
  "🦋",
  "🧩",
  "🧶",
  "🪀",
  "🪁",
  "🪐",
  "🏳️‍⚧️",
  "🏳️‍🌈"
]

/**
 * Get a randomized emoji.
 *
 * @param [exclude] - Prevent a specific emoji from being picked.
 */
function getRandomEmoji(exclude?: string) {
  const emoji = exclude ? EMOJI.filter((emoji) => emoji !== exclude) : EMOJI

  return emoji[Math.trunc(emoji.length * Math.random())]
}

/**
 * A randomized emoji.
 *
 * @param props - A set of `span` props.
 */
export function Emoji(props: ComponentProps<"span">) {
  const [emoji, setEmoji] = useState(getRandomEmoji)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setEmoji((emoji) => getRandomEmoji(emoji))
    }, 500)

    return () => {
      window.clearInterval(interval)
    }
  }, [])

  return <span {...props}>{emoji}</span>
}

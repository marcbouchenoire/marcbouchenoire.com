/**
 * Naively truncate a string to a specific length.
 *
 * @param string - The string to truncate.
 * @param length - The length to truncate at.
 * @param [character] - The truncation character.
 */
export function truncate(string: string, length: number, character = "…") {
  return string.length > length
    ? string.slice(0, Math.max(0, length - character.length)).trim() + character
    : string
}

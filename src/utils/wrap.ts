/**
 * Wrap a value within a range.
 *
 * @param value - The value to wrap.
 * @param min - The range's minimum.
 * @param max - The range's maximum.
 */
export function wrap(value: number, min: number, max: number) {
  const range = max - min

  return ((((value - min) % range) + range) % range) + min
}

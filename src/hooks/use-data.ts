import data from "../data.json"
import type { Data } from "../types"

/**
 * Fetch a static data object.
 */
export function useData(): Partial<Data> {
  return (data as Data) ?? {}
}

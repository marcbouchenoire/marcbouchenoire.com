import data from "../data.json" // eslint-disable-line import/no-unresolved
import { Data } from "../types"

/**
 * Fetch a static data object.
 */
export function useData(): Partial<Data> {
  return (data as Data) ?? {}
}

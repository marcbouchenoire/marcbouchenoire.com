import useSWR from "swr"
import type { Response } from "../app/api/letterboxd/latest/get-latest-film"
import { json } from "src/utils/json"

/**
 * Fetch the latest film I watched from Letterboxd.
 */
export function useLatestFilm(): Partial<Response> {
  const { data } = useSWR<Response>("/api/letterboxd/latest", json)

  return data ?? {}
}

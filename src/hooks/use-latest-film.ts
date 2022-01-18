import useSWRImmutable from "swr/immutable"
import { Response } from "../pages/api/letterboxd"

/**
 * Fetch the latest film I watched from Letterboxd.
 */
export function useLatestFilm(): Partial<Response> {
  const { data } = useSWRImmutable<Response>("/api/letterboxd")

  return data ?? {}
}

import useSWR from "swr"
import { Response } from "../pages/api/letterboxd/latest"

/**
 * Fetch the latest film I watched from Letterboxd.
 */
export function useLatestFilm(): Partial<Response> {
  const { data } = useSWR<Response>("/api/letterboxd/latest")

  return data ?? {}
}

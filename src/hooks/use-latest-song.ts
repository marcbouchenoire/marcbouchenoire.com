import useSWR from "swr"
import { FRESH_DURATION, Response } from "../pages/api/lastfm"

/**
 * Fetch the latest song I listened to from Last.fm.
 */
export function useLatestSong(): Partial<Response> {
  const { data } = useSWR<Response>("/api/lastfm", {
    refreshInterval: FRESH_DURATION * 1000
  })

  return data ?? {}
}

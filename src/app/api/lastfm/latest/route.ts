import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"
import { getLatestSongs } from "./get-latest-songs"

/**
 * A Route Handler fetching the latest songs I listened to from Last.fm.
 *
 * @param request - The incoming request.
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const limit = searchParams.has("limit")
    ? Number(searchParams.get("limit"))
    : undefined

  const songs = await getLatestSongs(limit)

  return songs
    ? NextResponse.json(songs)
    : new Response(undefined, { status: 500 })
}

export const revalidate = 60

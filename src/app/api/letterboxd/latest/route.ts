import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"
import { getLatestFilms } from "./get-latest-films"

/**
 * A Route Handler fetching the latest films I watched from Letterboxd.
 *
 * @param request - The incoming request.
 */
export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl
  const limit = searchParams.has("limit")
    ? Number(searchParams.get("limit"))
    : undefined

  const films = await getLatestFilms(limit)

  return films
    ? NextResponse.json(films)
    : new Response(undefined, { status: 500 })
}

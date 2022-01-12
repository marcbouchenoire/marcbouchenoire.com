import { NextApiRequest, NextApiResponse } from "next"

const API = "https://ws.audioscrobbler.com/2.0"
const USERNAME = "marcbouchenoire"
const STALE_DURATION = 240
const FRESH_DURATION = STALE_DURATION / 2

const query = new URLSearchParams({
  api_key: process.env.LASTFM_API_TOKEN as string,
  format: "json",
  method: "user.getRecentTracks",
  user: USERNAME,
  limit: "1"
})

const ENDPOINT = `${API}?${query.toString()}`

interface TextValue {
  /**
   * The value's content.
   */
  "#text": string
}

interface MusicBrainzValue extends TextValue {
  /**
   * A MusicBrainz identifier.
   */
  mbid: string
}

interface Attributes {
  /**
   * The current page index.
   */
  page: string

  /**
   * THe amount of tracks per page.
   */
  perPage: string

  /**
   * The total amount of tracks.
   */
  total: string

  /**
   * The total amount of pages.
   */
  totalPages: string
}

interface TrackAttributes {
  /**
   * Whether the track is currently playing.
   */
  nowplaying: string
}

interface TrackDate extends TextValue {
  /**
   * A Unix timestamp.
   */
  uts: string
}

interface TrackImage extends TextValue {
  /**
   * The image's size.
   */
  size: "extralarge" | "large" | "medium" | "small"
}

interface Track {
  /**
   * A list of track-specific attributes.
   */
  "@attr"?: TrackAttributes

  /**
   * The album the track is featured in.
   */
  album: MusicBrainzValue

  /**
   * The track's artist.
   */
  artist: MusicBrainzValue

  /**
   * The date at which the track was listened to.
   */
  date?: TrackDate

  /**
   * A cover art image in various sizes.
   */
  image: TrackImage[]

  /**
   * The track's MusicBrainz identifier.
   */
  mbid: string

  /**
   * The track's name.
   */
  name: string

  /**
   * Whether a track is streamable.
   */
  streamable: 0 | 1

  /**
   * The track's Last.fm URL.
   */
  url: string
}

interface Response {
  /**
   * The response's body content.
   */
  recenttracks: {
    /**
     * A list of response-specific attributes.
     */
    "@attr": Attributes

    /**
     * A list of tracks.
     */
    track: Track[]
  }
}

/**
 * An API route fetching the latest song I listened to from Last.fm.
 *
 * @param req - An API route request.
 * @param res - An API route response.
 */
export default async function route(req: NextApiRequest, res: NextApiResponse) {
  const response = await fetch(ENDPOINT)
  const data: Partial<Response> = await response.json()

  if (response.ok) {
    res.setHeader(
      "Cache-Control",
      `public, s-maxage=${FRESH_DURATION}, max-age=${FRESH_DURATION}, stale-while-revalidate=${STALE_DURATION}`
    )
    res.status(200).json(data.recenttracks?.track?.[0])
  } else {
    res.status(response.status).json(data)
  }
}

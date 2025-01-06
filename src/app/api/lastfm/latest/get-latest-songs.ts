import { unstable_cache as cache } from "next/cache"

const LASTFM_API = "https://ws.audioscrobbler.com/2.0"
const LASTFM_USERNAME = "marcbouchenoire"
const LASTFM_ENDPOINT = (limit: number) => {
  return `${LASTFM_API}?method=user.getRecentTracks&api_key=${process.env.LASTFM_API_TOKEN}&format=json&user=${LASTFM_USERNAME}&limit=${limit}`
}
const NOW_PLAYING_DEDUPLICATION_THRESHOLD = 5 * 60 * 1000

type LastFmBoolean = "0" | "1"

interface LastFmText<T = string> {
  /**
   * The value's content.
   */
  "#text": T
}

interface LastFmMusicBrainzId extends LastFmText {
  /**
   * A MusicBrainz identifier.
   */
  mbid: string
}

interface LastFmImage extends LastFmText {
  /**
   * The image's size.
   */
  size: "extralarge" | "large" | "medium" | "small"
}

interface LastFmTrackDate extends LastFmText {
  /**
   * A Unix timestamp.
   */
  uts: string
}

interface LastFmRecentTrackAttributes {
  /**
   * Whether the track is currently playing.
   */
  nowplaying: string
}

interface LastFmRecentTrack {
  /**
   * A list of track-specific attributes.
   */
  "@attr"?: LastFmRecentTrackAttributes

  /**
   * The album the track is featured in.
   */
  album: LastFmMusicBrainzId

  /**
   * The track's artist.
   */
  artist: LastFmMusicBrainzId

  /**
   * The date at which the track was listened to.
   */
  date?: LastFmTrackDate

  /**
   * A cover art image in various sizes.
   */
  image: LastFmImage[]

  /**
   * The track's MusicBrainz identifier.
   */
  mbid: string

  /**
   * The track's name.
   */
  name: string

  /**
   * Whether a preview is available for streaming.
   */
  streamable: LastFmBoolean

  /**
   * The track's Last.fm URL.
   */
  url: string
}

interface LastFmRecentTracksAttributes {
  /**
   * The current page index.
   */
  page: string

  /**
   * The amount of tracks per page.
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

interface LastFmRecentTracks {
  /**
   * A list of response-specific attributes.
   */
  "@attr": LastFmRecentTracksAttributes

  /**
   * A list of tracks.
   */
  track: LastFmRecentTrack[]
}

interface LastFmResponse {
  /**
   * The response's main content.
   */
  recenttracks: LastFmRecentTracks
}

export interface Song {
  /**
   * The song's artist.
   */
  artist: string

  /**
   * The song's cover art.
   */
  cover?: string

  /**
   * The date at which the song was listened to.
   */
  date?: number

  /**
   * Whether the song is currently playing.
   */
  playing: boolean

  /**
   * The song's title.
   */
  title: string

  /**
   * The song's Last.fm URL.
   */
  url: string
}

/**
 * Format a Last.fm track.
 *
 * @param track - A Last.fm track.
 */
function formatSong(track: LastFmRecentTrack): Song {
  const date = track.date?.uts ? Number(track.date?.uts) : undefined

  return {
    title: track.name,
    artist: track.artist["#text"],
    date: date ? date * 1000 : undefined,
    url: track.url,
    cover: track.image.find((image) => image.size === "large")?.["#text"],
    playing: Boolean(track["@attr"]?.nowplaying) ?? !date
  }
}

/**
 * Fetch the latest songs I listened to from Last.fm.
 *
 * @param limit - The maximum number of songs to return.
 */
export const getLatestSongs = cache(
  async (limit: number = 1): Promise<Song[]> => {
    try {
      const response: LastFmResponse = await fetch(
        LASTFM_ENDPOINT(limit + 1)
      ).then((response) => {
        if (!response.ok) {
          throw new Error("There was an error while querying the Last.fm API.")
        }

        return response.json()
      })

      const songs = response.recenttracks.track
        .slice(0, limit + 1)
        .map(formatSong)

      // De-duplicate the first "now playing" song if needed
      if (
        songs[0].playing &&
        songs[0].url === songs[1].url &&
        songs[1].date &&
        Date.now() - songs[1].date < NOW_PLAYING_DEDUPLICATION_THRESHOLD
      ) {
        songs.splice(1, 1)
      }

      return songs.slice(0, limit)
    } catch (error) {
      console.error(error)

      return []
    }
  },
  ["latest-songs"],
  {
    revalidate: 60
  }
)

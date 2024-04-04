const LASTFM_API = "https://ws.audioscrobbler.com/2.0"
const MUSICBRAINZ_API = "https://musicbrainz.org/ws/2"
const LASTFM_USERNAME = "marcbouchenoire"
const LASTFM_ENDPOINT = (limit: number) => {
  return `${LASTFM_API}?method=user.getRecentTracks&api_key=${process.env.LASTFM_API_TOKEN}&format=json&user=${LASTFM_USERNAME}&limit=${limit}`
}
const MUSICBRAINZ_ENDPOINT = (mbid: string) => {
  return `${MUSICBRAINZ_API}/release/${mbid}?fmt=json`
}

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

interface MusicBrainzResponse {
  /**
   * The release's release date.
   */
  date?: string
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

  /**
   * The song's release year.
   */
  year?: number
}

/**
 * Format a Last.fm track.
 *
 * @param track - A Last.fm track.
 */
async function formatSong(track: LastFmRecentTrack): Promise<Song> {
  const date = track.date?.uts ? Number(track.date?.uts) : undefined
  const mbid = track.album.mbid
  let year: number | undefined

  if (mbid) {
    const release: MusicBrainzResponse = await fetch(
      MUSICBRAINZ_ENDPOINT(mbid)
    ).then((response) => {
      if (!response.ok) return {}

      return response.json()
    })

    if (release.date) {
      const date = new Date(release.date)

      year = date.getFullYear()
    }
  }

  return {
    title: track.name,
    artist: track.artist["#text"],
    year,
    date,
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
export async function getLatestSongs(limit = 1): Promise<Song[]> {
  try {
    const response: LastFmResponse = await fetch(LASTFM_ENDPOINT(limit)).then(
      (response) => {
        if (!response.ok) {
          throw new Error("There was an error while querying the Last.fm API.")
        }

        return response.json()
      }
    )

    return Promise.all(response.recenttracks.track.map(formatSong))
  } catch (error) {
    console.error(error)

    return []
  }
}

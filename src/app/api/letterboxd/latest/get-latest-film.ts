import { XMLParser } from "fast-xml-parser"
import { decode } from "html-entities"

const LETTERBOXD_USERNAME = "marcbouchenoire"
const LETTERBOXD_URL = "https://letterboxd.com"
const LETTERBOXD_FEED = `${LETTERBOXD_URL}/${LETTERBOXD_USERNAME}/rss/`
const LETTERBOXD_FILM_URL = (film: string) => `${LETTERBOXD_URL}/film/${film}/`

interface XMLParserDocument<T> {
  /**
   * A parsed RSS document.
   */
  rss: T
}

interface FilmEntry {
  /**
   * The film entry's description.
   */
  description: string

  /**
   * A unique identifer.
   */
  guid: string

  /**
   * The film's title.
   */
  "letterboxd:filmTitle": string

  /**
   * The year during which the film was released.
   */
  "letterboxd:filmYear": number

  /**
   * The film's rating.
   */
  "letterboxd:memberRating": number

  /**
   * Whether the film was already watched before.
   */
  "letterboxd:rewatch": "No" | "Yes"

  /**
   * The date at which the film was watched.
   */
  "letterboxd:watchedDate": string

  /**
   * The film's Letterboxd URL.
   */
  link: string

  /**
   * The film entry's title.
   */
  title: string
}

interface UnknownEntry {
  [key: string]: unknown | undefined

  /**
   * The date at which the film was watched.
   */
  "letterboxd:watchedDate"?: never
}

interface LetterboxdResponse {
  /**
   * A parsed RSS feed.
   */
  channel: {
    /**
     * The feed's description.
     */
    description: string

    /**
     * The feed's content.
     */
    item: (FilmEntry | UnknownEntry)[]

    /**
     * The feed's URL.
     */
    link: string

    /**
     * The feed's title.
     */
    title: string
  }
}

export interface Response {
  /**
   * The date at which the song was listened to.
   */
  date: string

  /**
   * The film's poster.
   */
  poster?: string

  /**
   * The film's attributed rating.
   */
  rating?: number

  /**
   * The film's title.
   */
  title: string

  /**
   * The film's Letterboxd URL.
   */
  url: string

  /**
   * The film's release year.
   */
  year: number
}

/**
 * Fetch the latest film I watched from Letterboxd.
 */
export async function getLatestFilm(): Promise<Response | undefined> {
  try {
    const response = await fetch(LETTERBOXD_FEED)
    const text = await response.text()

    console.log(LETTERBOXD_FEED)
    console.log(response.ok, response.status, response.statusText)
    console.log(response)
    console.log(text)

    const parser = new XMLParser()
    const { rss }: XMLParserDocument<LetterboxdResponse> = parser.parse(text)

    const [film] = rss.channel.item
      .filter((item): item is FilmEntry => "letterboxd:watchedDate" in item)
      .sort((a, b) =>
        b["letterboxd:watchedDate"].localeCompare(a["letterboxd:watchedDate"])
      )
    const [poster] =
      film.description.match(/(http(s?):)([\s\w./|-])*\.jpg/) ?? []
    const [, slug] = film.link.match(/film\/([^/]*)\/?/) ?? []

    return {
      title: decode(film["letterboxd:filmTitle"]),
      year: film["letterboxd:filmYear"],
      rating: film["letterboxd:memberRating"],
      date: film["letterboxd:watchedDate"],
      poster,
      url: LETTERBOXD_FILM_URL(slug)
    }
  } catch (error) {
    console.error(error)

    return
  }
}

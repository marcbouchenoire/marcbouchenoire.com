"use cache"

import { XMLParser } from "fast-xml-parser"
import { decode } from "html-entities"
import { unstable_cacheLife as cacheLife } from "next/cache"

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

interface LetterboxdFilmEntry {
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

interface LetterboxdUnknownEntry {
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
    item: (LetterboxdFilmEntry | LetterboxdUnknownEntry)[]

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

export interface Film {
  /**
   * The date at which the film was watched.
   */
  date: Date

  /**
   * The film's poster.
   */
  poster?: string

  /**
   * The film's attributed rating.
   */
  rating?: number

  /**
   * Whether the film was already watched before.
   */
  rewatch: boolean

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
 * Format a Letterboxd film entry.
 *
 * @param entry - A Letterboxd film entry.
 */
function formatFilm(entry: LetterboxdFilmEntry): Film {
  const [poster] =
    entry.description.match(/(http(s?):)([\s\w./|-])*\.jpg/) ?? []
  const [, slug] = entry.link.match(/film\/([^/]*)\/?/) ?? []

  return {
    title: decode(entry["letterboxd:filmTitle"]),
    year: entry["letterboxd:filmYear"],
    rating: entry["letterboxd:memberRating"],
    date: new Date(entry["letterboxd:watchedDate"]),
    rewatch: entry["letterboxd:rewatch"] === "Yes",
    poster,
    url: LETTERBOXD_FILM_URL(slug)
  }
}

/**
 * Fetch the latest films I watched from Letterboxd.
 *
 * @param limit - The maximum number of films to return.
 */
export async function getLatestFilms(limit: number = 1): Promise<Film[]> {
  cacheLife("hours")

  try {
    const response = await fetch(LETTERBOXD_FEED).then((response) => {
      if (!response.ok) {
        throw new Error(
          "There was an error while fetching the Letterboxd feed."
        )
      }

      return response.text()
    })

    const parser = new XMLParser()
    const { rss }: XMLParserDocument<LetterboxdResponse> =
      parser.parse(response)

    const films = rss.channel.item
      .filter(
        (item): item is LetterboxdFilmEntry => "letterboxd:watchedDate" in item
      )
      .sort((a, b) =>
        b["letterboxd:watchedDate"].localeCompare(a["letterboxd:watchedDate"])
      )

    return films.slice(0, limit).map(formatFilm)
  } catch (error) {
    console.error(error)

    return []
  }
}

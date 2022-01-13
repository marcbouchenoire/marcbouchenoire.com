import { XMLParser } from "fast-xml-parser"
import { decode } from "html-entities"
import { NextApiRequest, NextApiResponse } from "next"

const LETTERBOXD_FEED = "https://letterboxd.com/marcbouchenoire/rss/"
const STALE_DURATION = 86400
const FRESH_DURATION = STALE_DURATION / 2

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
    item: FilmEntry[]

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
  poster: string

  /**
   * The film's attributed rating.
   */
  rating?: number

  /**
   * The film's title.
   */
  title: string

  /**
   * The film's release year.
   */
  year: number
}

/**
 * An API route fetching the latest film I watched from Letterboxd.
 *
 * @param req - An API route request.
 * @param res - An API route response.
 */
export default async function route(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await fetch(LETTERBOXD_FEED).then((response) => {
      if (!response.ok) throw new Error() // eslint-disable-line unicorn/error-message

      return response.text()
    })

    const parser = new XMLParser()
    const { rss }: XMLParserDocument<LetterboxdResponse> =
      parser.parse(response)

    const films = rss.channel.item.sort((a, b) =>
      b["letterboxd:watchedDate"].localeCompare(a["letterboxd:watchedDate"])
    )
    const film = films[0]
    const [poster] =
      film.description.match(/(http(s?):)([\s\w./|-])*\.jpg/) ?? []

    res.setHeader(
      "Cache-Control",
      `public, s-maxage=${FRESH_DURATION}, max-age=${FRESH_DURATION}, stale-while-revalidate=${STALE_DURATION}`
    )
    res.status(200).json({
      title: decode(film["letterboxd:filmTitle"]),
      year: film["letterboxd:filmYear"],
      rating: film["letterboxd:memberRating"],
      date: film["letterboxd:watchedDate"],
      poster
    })
  } catch {
    res.status(500).send(undefined)
  }
}

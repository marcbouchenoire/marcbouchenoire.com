import { XMLParser } from "fast-xml-parser"
import { NextApiRequest, NextApiResponse } from "next"

const FEED = "https://letterboxd.com/marcbouchenoire/rss/"

interface Movie {
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
}

interface Response {
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
    item: Movie[]

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

interface XMLParserValue<T> {
  /**
   * A parsed RSS document.
   */
  rss: T
}

/**
 * An API route fetching the latest film I watched from Letterboxd.
 *
 * @param req - An API route request.
 * @param res - An API route response.
 */
export default async function route(req: NextApiRequest, res: NextApiResponse) {
  const response = await fetch(FEED)
  const data = await response.text()

  try {
    if (!response.ok) throw new Error() // eslint-disable-line unicorn/error-message

    const parser = new XMLParser()
    const { rss }: XMLParserValue<Response> = parser.parse(data)

    res.status(200).json(rss.channel.item.slice(-1)[0])
  } catch {
    res.status(500).send(undefined)
  }
}

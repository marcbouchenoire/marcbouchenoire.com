import imageType from "image-type"
import { NextApiRequest, NextApiResponse } from "next"

/**
 * An API route encoding an image as a base64 data URL.
 *
 * @param req - An API route request.
 * @param res - An API route response.
 */
export default async function route(req: NextApiRequest, res: NextApiResponse) {
  try {
    const {
      src: [src]
    } = req.query as Record<string, string[]>

    const image = await fetch(src)
      .then((response) => response.arrayBuffer())
      .then((arrayBuffer) => Buffer.from(arrayBuffer))
    const type = await imageType(image)

    if (!type) {
      throw new Error() // eslint-disable-line unicorn/error-message
    }

    res.setHeader(
      "Cache-Control",
      "public, immutable, no-transform, s-maxage=31536000, max-age=31536000"
    )
    res.status(200).send(`data:${type.mime};base64,${image.toString("base64")}`)
  } catch {
    res.status(500).send(undefined)
  }
}

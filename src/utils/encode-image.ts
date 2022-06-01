import sharp, { ResizeOptions } from "sharp"

/**
 * Fetch an image, resize it and encode it as a JPEG base64 data URI.
 *
 * @param url - The image's URL.
 * @param [options] - An optional set of resizing settings.
 */
export async function encodeImage(url: string, options: ResizeOptions = {}) {
  const image = await fetch(url)
    .then((response) => response.arrayBuffer())
    .then((arrayBuffer) => sharp(Buffer.from(arrayBuffer)))
  const resized = await image.resize(options).jpeg().toBuffer()

  return `data:image/jpeg;base64,${resized.toString("base64")}`
}

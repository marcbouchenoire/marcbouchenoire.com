import imageType from "image-type"

/**
 * Fetch an image and encode it as a base64 data URI.
 *
 * @param url - The image's URL.
 */
export async function encodeImage(url: string) {
  const buffer = await fetch(url)
    .then((response) => response.arrayBuffer())
    .then((arrayBuffer) => Buffer.from(arrayBuffer))
  const type = imageType(buffer)

  return `data:${type?.mime};base64,${buffer.toString("base64")}`
}

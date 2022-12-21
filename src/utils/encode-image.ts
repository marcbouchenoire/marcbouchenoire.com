import { toBase64 } from "fast-base64/js"

/**
 * Fetch an image and encode it as a base64 data URI.
 *
 * @param url - The image's URL.
 */
export async function encodeImage(url: string) {
  const response = await fetch(url)
  const buffer = await response.arrayBuffer()
  const array = new Uint8Array(buffer)
  const mime = response.headers.get("content-type") as string
  const base64 = toBase64(array)

  return `data:${mime};base64,${base64}`
}

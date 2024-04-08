/**
 * Returns a URL to an asset either on an external CDN or locally in the `public` directory.
 *
 * @param path - The path to an asset.
 */
export function withExternalCdn(path: `/${string}`) {
  return process.env.EXTERNAL_CDN_URL
    ? process.env.EXTERNAL_CDN_URL + path
    : path
}

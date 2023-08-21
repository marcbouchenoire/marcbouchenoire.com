/**
 * A simplistic JSON fetcher.
 *
 * @param args - Arguments passed to `fetch`.
 */
export async function json(...args: Parameters<typeof fetch>) {
  const response = await fetch(...args)

  return await response.json()
}

import useSWR from "swr/immutable"
import { Response } from "../pages/api/github/repository/[user]/[repository]"

/**
 * Fetch a specific GitHub repository.
 *
 * @param repository - The repository's full name.
 */
export function useRepository(repository: string): Partial<Response> {
  const { data } = useSWR<Response>(`/api/github/repository/${repository}`, {
    revalidateIfStale: true
  })

  return data ?? {}
}

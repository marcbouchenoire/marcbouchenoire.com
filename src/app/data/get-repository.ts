"use cache"

import { unstable_cacheLife as cacheLife } from "next/cache"

const GITHUB_API = "https://api.github.com"

interface GitHubResponse {
  /**
   * The date at which the repository was created.
   */
  created_at: string

  /**
   * The amount of forks.
   */
  forks_count: number

  /**
   * The amount of opened issues.
   */
  open_issues_count: number

  /**
   * The date at which the repository was last pushed to.
   */
  pushed_at: string

  /**
   * The amount of stars.
   */
  stargazers_count: number

  /**
   * The date at which the repository was last updated.
   */
  updated_at: string

  /**
   * The amount of users watching the repository.
   */
  watchers_count: number
}

interface Repository {
  /**
   * The date at which the repository was created.
   */
  created: string

  /**
   * The amount of forks.
   */
  forks: number

  /**
   * The amount of opened issues.
   */
  issues: number

  /**
   * The date at which the repository was last pushed to.
   */
  pushed: string

  /**
   * The amount of stars.
   */
  stars: number

  /**
   * The date at which the repository was last updated.
   */
  updated: string

  /**
   * The amount of users watching the repository.
   */
  watchers: number
}

/**
 * Get a repository's information with the GitHub API.
 *
 * @param repository - The repository to get.
 */
export async function getRepository(
  repository: string
): Promise<Repository | undefined> {
  cacheLife("hours")

  try {
    const response: GitHubResponse = await fetch(
      `${GITHUB_API}/repos/${repository}`,
      {
        headers: {
          Authorization: `Token ${process.env.GITHUB_ACCESS_TOKEN}`
        }
      }
    ).then((response) => {
      if (!response.ok) {
        throw new Error(`There was an error while fetching "${repository}".`)
      }

      return response.json()
    })

    return {
      created: response.created_at,
      updated: response.updated_at,
      pushed: response.pushed_at,
      forks: response.forks_count,
      issues: response.open_issues_count,
      stars: response.stargazers_count,
      watchers: response.watchers_count
    }
  } catch (error) {
    console.error(error)

    return
  }
}

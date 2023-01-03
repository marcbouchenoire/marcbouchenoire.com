import { NextRequest, NextResponse } from "next/server"

const GITHUB_API = "https://api.github.com"
const GITHUB_ENDPOINT = (user: string, repository: string) => {
  return `${GITHUB_API}/repos/${user}/${repository}`
}
export const STALE_DURATION = 3600
export const FRESH_DURATION = STALE_DURATION / 2

export interface GitHubResponse {
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

export interface Response {
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
 * An Edge API route fetching a specific GitHub repository.
 *
 * @param request - An Edge API route request.
 */
export default async function route(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const [user, repository] = searchParams.getAll("repository")

    const response: GitHubResponse = await fetch(
      GITHUB_ENDPOINT(user, repository),
      {
        headers: {
          Authorization: `Token ${process.env.GITHUB_ACCESS_TOKEN}`
        }
      }
    ).then((response) => {
      if (!response.ok) throw new Error() // eslint-disable-line unicorn/error-message

      return response.json()
    })

    return NextResponse.json(
      {
        created: response.created_at,
        updated: response.updated_at,
        pushed: response.pushed_at,
        forks: response.forks_count,
        issues: response.open_issues_count,
        stars: response.stargazers_count,
        watchers: response.watchers_count
      },
      {
        headers: {
          "Cache-Control": `public, s-maxage=${FRESH_DURATION}, max-age=${FRESH_DURATION}, stale-while-revalidate=${STALE_DURATION}`
        }
      }
    )
  } catch (error) {
    console.error(error)

    return new Response(undefined, { status: 500 })
  }
}

export const config = {
  runtime: "experimental-edge"
}

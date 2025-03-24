"use cache"

import { unstable_cacheLife as cacheLife } from "next/cache"
import type { ComponentProps } from "react"
import { getRepository } from "src/app/data/get-repository"

interface GitHubStarsProps extends ComponentProps<"span"> {
  /**
   * The project's repository.
   */
  repository: string
}

/**
 * Display a GitHub repository's stars.
 *
 * @param props - A set of `span` props.
 * @param props.repository - The repository to display the stars of.
 */
export async function GitHubStars({
  repository: path,
  ...props
}: GitHubStarsProps) {
  cacheLife("hours")

  const repository = await getRepository(path)

  return <span {...props}>{repository?.stars}</span>
}

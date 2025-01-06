import type { ComponentProps } from "react"
import { Suspense } from "react"
import { ProjectCard } from "./ProjectCard"
import { RelativeDate } from "src/components/RelativeDate"
import { Skeleton } from "src/components/Skeleton"
import { getRepository } from "src/utils/get-repository"

interface GitHubProjectCardProps extends ComponentProps<"div"> {
  /**
   * The project's repository.
   */
  repository: string
}

interface GitHubProjectCardInfoProps extends ComponentProps<"span"> {
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
async function GitHubProjectCardStars({
  repository: path,
  ...props
}: GitHubProjectCardInfoProps) {
  const repository = await getRepository(path)

  return <span {...props}>{repository?.stars}</span>
}

/**
 * Display a GitHub repository's creation date.
 *
 * @param props - A set of `span` props.
 * @param props.repository - The repository to display the creation date of.
 */
async function GitHubProjectCardDate({
  repository: path,
  ...props
}: GitHubProjectCardInfoProps) {
  const repository = await getRepository(path)

  return (
    <span {...props}>
      {repository ? <RelativeDate date={repository.created} /> : null}
    </span>
  )
}

/**
 * Display a personal project with data from GitHub.
 *
 * @param props - A set of `div` props.
 * @param [props.children] - The card's content.
 * @param [props.repository] - The project's repository.
 * @param [props.className] - A list of one or more classes.
 */
export function GitHubProjectCard({
  children,
  repository,
  ...props
}: GitHubProjectCardProps) {
  return (
    <ProjectCard {...props}>
      <div className="mb-8 flex items-center text-gray-400">
        <small className="mr-4 flex items-center gap-4 text-2xs font-semibold uppercase leading-tight tracking-widest">
          <span className="flex items-center">
            <svg
              className="-ml-px mr-1 flex-none"
              height="20"
              role="presentation"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M10 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
                fill="currentColor"
                fillRule="evenodd"
              />
              <path
                clipRule="evenodd"
                d="M10 6a1 1 0 0 1 1 1v2.382l1.447.724a1 1 0 1 1-.894 1.788l-2-1A1 1 0 0 1 9 10V7a1 1 0 0 1 1-1Z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
            <Suspense fallback={<Skeleton className="h-[1.2em] w-16" />}>
              <GitHubProjectCardDate repository={repository} />
            </Suspense>
          </span>
          <span className="flex items-center">
            <svg
              className="-ml-px mr-1 flex-none"
              height="20"
              role="presentation"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M10 3a1 1 0 0 1 .905.575l1.628 3.467 3.619.556a1 1 0 0 1 .563 1.687l-2.647 2.712.627 3.842a1 1 0 0 1-1.47 1.036L10 15.092l-3.224 1.783a1 1 0 0 1-1.47-1.036l.626-3.842-2.647-2.712a1 1 0 0 1 .563-1.687l3.62-.556 1.627-3.467A1 1 0 0 1 10 3Zm0 3.353-.949 2.021a1 1 0 0 1-.753.564l-2.224.342 1.642 1.68a1 1 0 0 1 .271.86l-.376 2.308 1.905-1.054a1 1 0 0 1 .968 0l1.905 1.054-.376-2.308a1 1 0 0 1 .271-.86l1.642-1.68-2.224-.342a1 1 0 0 1-.753-.564L10 6.354Z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
            <Suspense fallback={<Skeleton className="h-[1.2em] w-10" />}>
              <GitHubProjectCardStars repository={repository} />
            </Suspense>
          </span>
        </small>
        <a
          aria-label="View on GitHub"
          className="focusable -m-1 ml-auto flex-none rounded-full p-1 transition hover:text-gray-600 dark:hover:text-gray-100"
          href={`https://github.com/${repository}`}
          rel="noreferrer"
          target="_blank"
        >
          <svg
            height="24"
            role="presentation"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M12 2C6.475 2 2 6.47 2 11.988c0 4.42 2.862 8.153 6.838 9.476.5.087.687-.212.687-.474 0-.238-.013-1.024-.013-1.86C7 19.59 6.35 18.517 6.15 17.955c-.113-.287-.6-1.174-1.025-1.411-.35-.187-.85-.65-.013-.662.788-.012 1.35.724 1.538 1.024.9 1.51 2.338 1.086 2.912.824.088-.65.35-1.086.638-1.336-2.225-.25-4.55-1.111-4.55-4.931 0-1.087.387-1.986 1.025-2.685-.1-.25-.45-1.273.1-2.646 0 0 .837-.263 2.75 1.023a9.29 9.29 0 0 1 2.5-.337c.85 0 1.7.113 2.5.337 1.912-1.298 2.75-1.023 2.75-1.023.55 1.373.2 2.397.1 2.646.637.7 1.025 1.586 1.025 2.685 0 3.832-2.337 4.681-4.562 4.931.362.312.675.912.675 1.848 0 1.336-.013 2.41-.013 2.747 0 .262.188.574.688.474C19.137 20.141 22 16.395 22 11.988 22 6.47 17.525 2 12 2Z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
        </a>
      </div>
      <div className="mt-auto">{children}</div>
    </ProjectCard>
  )
}

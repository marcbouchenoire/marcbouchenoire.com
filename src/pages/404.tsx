import Link from "next/link"

/**
 * The 404 page component.
 */
function Page() {
  return (
    <main className="flex flex-col flex-1 justify-center items-center py-12 text-center md:py-16 lg:py-20 content">
      <h1 className="mb-3 text-3xl font-extrabold text-zinc-800 dark:text-zinc-100 sm:mb-4 sm:text-4xl">
        Oops
      </h1>
      <p className="mb-6 text-lg text-zinc-700 dark:text-zinc-300 sm:text-xl">
        The page you are looking for doesn’t exist.
      </p>
      <Link href="/">
        <a className="flex flex-none gap-2 justify-center items-center py-2 px-3 w-full font-medium text-white dark:text-zinc-900 selection:bg-white/30 dark:selection:bg-zinc-900/30 rounded-md shadow-lg transition cursor-pointer sm:w-auto bg-primary-500 hover:bg-primary-500/80 dark:bg-primary-400 dark:hover:bg-primary-400/80 shadow-primary-500/10 hover:shadow-primary-500/5 dark:shadow-primary-400/10 dark:hover:shadow-primary-400/5 focusable">
          Return to home page
        </a>
      </Link>
    </main>
  )
}

export default Page

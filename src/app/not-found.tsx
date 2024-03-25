import Link from "next/link"

export default function Page() {
  return (
    <main className="content flex flex-1 flex-col items-center justify-center py-12 text-center md:py-16 lg:py-20">
      <h1 className="mb-3 text-3xl font-extrabold text-zinc-800 dark:text-zinc-100 sm:mb-4 sm:text-4xl">
        Oops
      </h1>
      <p className="mb-6 text-lg text-zinc-700 dark:text-zinc-300 sm:text-xl">
        The page you are looking for doesn’t exist.
      </p>
      <Link
        className="focusable flex w-full flex-none cursor-pointer items-center justify-center gap-2 rounded-md bg-zinc-800 px-4 py-2 font-medium text-white shadow-lg shadow-zinc-800/10 transition selection:bg-white/30 hover:bg-zinc-800/80 hover:shadow-zinc-800/5 dark:bg-zinc-200 dark:text-zinc-900 dark:shadow-zinc-200/10 dark:selection:bg-zinc-900/30 dark:hover:bg-zinc-200/80 dark:hover:shadow-zinc-200/5 sm:w-auto"
        href="/"
      >
        Return to home page
      </Link>
    </main>
  )
}

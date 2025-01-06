import Link from "next/link"

export default function Page() {
  return (
    <div className="content flex flex-1 flex-col items-center justify-center">
      <h1 className="mb-3 text-3xl font-extrabold text-gray-800 dark:text-gray-100 sm:mb-4 sm:text-4xl">
        Oops
      </h1>
      <p className="mb-6 text-center text-lg text-gray-700 dark:text-gray-300 sm:text-xl">
        The page you are looking for doesn’t exist.
      </p>
      <Link
        className="focusable flex w-full flex-none cursor-pointer items-center justify-center gap-2 rounded-md bg-gray-800 px-4 py-2 font-medium text-white shadow-lg shadow-gray-800/10 transition selection:bg-white/30 hover:bg-gray-800/80 hover:shadow-gray-800/5 dark:bg-gray-200 dark:text-gray-900 dark:shadow-gray-200/10 dark:selection:bg-gray-900/30 dark:hover:bg-gray-200/80 dark:hover:shadow-gray-200/5 sm:w-auto"
        href="/"
      >
        Return to home page
      </Link>
    </div>
  )
}

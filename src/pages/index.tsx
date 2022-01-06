import { Introduction } from "../components/sections/Introduction"

/**
 * The index page component.
 */
function Page() {
  return (
    <main className="flex-1 pb-12 md:pb-16 lg:pb-20">
      <Introduction className="content" />
    </main>
  )
}

export default Page

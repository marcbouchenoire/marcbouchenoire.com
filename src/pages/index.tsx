import { Activity } from "../components/sections/Activity"
import { Introduction } from "../components/sections/Introduction"
import { Projects } from "../components/sections/Projects"
import { Work } from "../components/sections/Work"

/**
 * The index page component.
 */
function Page() {
  return (
    <main className="flex-1 pb-12 md:pb-16 lg:pb-20">
      <Introduction className="mt-12 md:mt-16 lg:mt-20 content" />
      <Work className="mt-16 md:mt-20 lg:mt-24" />
      <Projects className="mt-16 md:mt-20 lg:mt-24" />
      <Activity className="mt-16 md:mt-20 lg:mt-24 content" />
    </main>
  )
}

export default Page

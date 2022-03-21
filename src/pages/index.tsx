import { Activity } from "../components/sections/Activity"
import { Introduction } from "../components/sections/Introduction"
import { Projects } from "../components/sections/Projects"
import { Résumé } from "../components/sections/Résumé"
import { Work } from "../components/sections/Work"

/**
 * The index page component.
 */
function Page() {
  return (
    <main className="flex-1 pb-16 md:pb-20 lg:pb-24">
      <Introduction className="content mt-12 md:mt-16 lg:mt-20" />
      <Work className="mt-16 md:mt-20 lg:mt-24" />
      <Projects className="mt-16 md:mt-20 lg:mt-24" />
      <Résumé className="content mt-16 md:mt-20 lg:mt-24" />
      <Activity className="content mt-16 md:mt-20 lg:mt-24" />
    </main>
  )
}

export default Page

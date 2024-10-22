import { Activity } from "./sections/Activity"
import { Experience } from "./sections/Experience"
import { Experiments } from "./sections/Experiments"
import { Introduction } from "./sections/Introduction"
import { Projects } from "./sections/Projects"
import { Work } from "./sections/Work"

export default function Page() {
  return (
    <main className="flex-1 pb-16 md:pb-20 lg:pb-24">
      <Introduction className="mt-12 md:mt-16 lg:mt-20" />
      <Work className="mt-16 md:mt-20 lg:mt-24" />
      <Projects className="mt-16 md:mt-20 lg:mt-24" />
      <Experiments className="content mt-16 md:mt-20 lg:mt-24" />
      <Experience className="content mt-16 md:mt-20 lg:mt-24" />
      <Activity className="mt-16 md:mt-20 lg:mt-24" />
    </main>
  )
}

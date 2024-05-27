import { Introduction } from "./sections/Introduction"
import { Activity } from "src/app/sections/Activity"
import { Experience } from "src/app/sections/Experience"
import { Projects } from "src/app/sections/Projects"
import { Work } from "src/app/sections/Work"

export default function Page() {
  return (
    <main className="flex-1 pb-16 md:pb-20 lg:pb-24">
      <Introduction className="content mt-12 md:mt-16 lg:mt-20" />
      <Work className="mt-16 md:mt-20 lg:mt-24" />
      <Projects className="mt-16 md:mt-20 lg:mt-24" />
      <Experience className="content mt-16 md:mt-20 lg:mt-24" />
      <Activity className="content mt-16 md:mt-20 lg:mt-24" />
    </main>
  )
}

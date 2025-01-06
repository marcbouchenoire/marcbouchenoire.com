import { Activity } from "./sections/Activity"
import { Experience } from "./sections/Experience"
import { Introduction } from "./sections/Introduction"
import { Projects } from "./sections/Projects"
import { Work } from "./sections/Work"

export default function Page() {
  return (
    <div className="flex flex-1 flex-col gap-16 md:gap-20 lg:gap-24">
      <Introduction />
      <Work />
      <Projects />
      <Experience />
      <Activity />
    </div>
  )
}

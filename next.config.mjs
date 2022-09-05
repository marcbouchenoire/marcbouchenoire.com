import path from "path"
import { execaSync } from "execa"
import { writeJsonFileSync } from "write-json-file"

const DATA_PATH = path.resolve("./src/data.json")

/**
 * Get the latest commit short hash.
 */
function getLatestCommit() {
  const { stdout } = execaSync("git", ["rev-parse", "--short", "HEAD"])

  return stdout
}

/**
 * Create a static data object.
 */
function getData() {
  return {
    date: String(new Date().getFullYear()),
    commit: getLatestCommit()
  }
}

export default () => {
  writeJsonFileSync(DATA_PATH, getData())

  return {
    trailingSlash: false,
    eslint: {
      ignoreDuringBuilds: true
    }
  }
}

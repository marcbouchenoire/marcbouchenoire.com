import path from "path"
import resolveConfig from "tailwindcss/resolveConfig.js"
import { writeJsonFileSync } from "write-json-file"
import tailwindConfig from "./tailwind.config.cjs"

const THEME_PATH = path.resolve("./src/theme.json")

/**
 * Create a static subset of the project's Tailwind theme.
 */
function getTheme() {
  const { theme } = resolveConfig(tailwindConfig)
  const colors = ["black", "white", "zinc", "lime", "rose"]

  return {
    colors: Object.fromEntries(
      colors.map((color) => [color, theme.colors[color]])
    ),
    fontFamily: {
      sans: theme.fontFamily.sans.join(", ")
    },
    fontSize: Object.fromEntries(
      Object.entries(theme.fontSize).map(([key, value]) => {
        return [key, typeof value === "string" ? value : value[0]]
      })
    ),
    fontWeight: theme.fontWeight,
    letterSpacing: theme.letterSpacing
  }
}

/**
 * Store various things as static files.
 */
export function storeStaticFiles() {
  writeJsonFileSync(THEME_PATH, getTheme())
}

export default () => {
  storeStaticFiles()

  return {
    trailingSlash: false,
    eslint: {
      ignoreDuringBuilds: true
    }
  }
}

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
  const colors = ["black", "white", "gray", "lime", "rose"]

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
    },
    async redirects() {
      return [
        {
          source: "/:path*",
          has: [
            {
              type: "host",
              value: "symbolist.marcbouchenoire.com"
            }
          ],
          destination: "/projects/symbolist/:path*",
          permanent: true
        },
        {
          source: "/:path*",
          has: [
            {
              type: "host",
              value: "typometer.marcbouchenoire.com"
            }
          ],
          destination: "/projects/typometer/:path*",
          permanent: true
        },
        {
          source: "/:path*",
          has: [
            {
              type: "host",
              value: "dimmmensions.marcbouchenoire.com"
            }
          ],
          destination: "/projects/dimmmensions/:path*",
          permanent: true
        }
      ]
    },
    async rewrites() {
      return [
        {
          source: "/:path*",
          destination: `/:path*`
        },
        {
          source: "/projects/symbolist/:path*",
          destination: "https://marcbouchenoire-symbolist.vercel.app/:path*"
        },
        {
          source: "/projects/typometer/:path*",
          destination: "https://marcbouchenoire-typometer.vercel.app/:path*"
        },
        {
          source: "/projects/dimmmensions/:path*",
          destination: "https://marcbouchenoire-dimmmensions.vercel.app/:path*"
        }
      ]
    }
  }
}

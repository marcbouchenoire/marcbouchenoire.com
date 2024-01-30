const defaultTheme = require("tailwindcss/defaultTheme")
const plugin = require("tailwindcss/plugin")

const paddingSafe = plugin(({ addUtilities, config, e }) => {
  const paddings = config("theme.padding", {})
  const variants = config("variants.padding", {})

  const utilities = Object.entries(paddings).flatMap(([modifier, size]) => ({
    [`.${e(`p-${modifier}-safe`)}`]: {
      "padding-top": `max(${size}, env(safe-area-inset-top))`,
      "padding-bottom": `max(${size}, env(safe-area-inset-bottom))`,
      "padding-left": `max(${size}, env(safe-area-inset-left))`,
      "padding-right": `max(${size}, env(safe-area-inset-right))`
    },
    [`.${e(`py-${modifier}-safe`)}`]: {
      "padding-top": `max(${size}, env(safe-area-inset-top))`,
      "padding-bottom": `max(${size}, env(safe-area-inset-bottom))`
    },
    [`.${e(`px-${modifier}-safe`)}`]: {
      "padding-left": `max(${size}, env(safe-area-inset-left))`,
      "padding-right": `max(${size}, env(safe-area-inset-right))`
    },
    [`.${e(`pt-${modifier}-safe`)}`]: {
      "padding-top": `max(${size}, env(safe-area-inset-top))`
    },
    [`.${e(`pr-${modifier}-safe`)}`]: {
      "padding-right": `max(${size}, env(safe-area-inset-right))`
    },
    [`.${e(`pb-${modifier}-safe`)}`]: {
      "padding-bottom": `max(${size}, env(safe-area-inset-bottom))`
    },
    [`.${e(`pl-${modifier}-safe`)}`]: {
      "padding-left": `max(${size}, env(safe-area-inset-left))`
    }
  }))

  addUtilities(utilities, variants)
})

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.tsx", "./src/components/**/*.tsx"],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        floaty:
          "0px 0px 2px 1px rgba(0, 0, 0, 0.04), 0 2px 8px -2px rgba(0, 0, 0, 0.04), 0 4px 18px -4px rgba(0, 0, 0, 0.06), 0 8px 42px -6px rgba(0, 0, 0, 0.12)",
        phone:
          "inset 1px 1px 8px rgba(255, 255, 255, 0.8), inset -1px -1px 8px rgba(0, 0, 0, 0.1)",
        "phone-invert":
          "inset 1px 1px 8px rgba(255, 255, 255, 0.2), inset -1px -1px 8px rgba(0, 0, 0, 0.8)"
      },
      colors: {
        dimmmensions: {
          400: "#b488fb",
          500: "#9a59f6"
        },
        dribbble: {
          400: "#f377a9",
          500: "#ea4c89"
        },
        mastodon: {
          400: "#7475ff",
          500: "#595aff"
        },
        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e"
        },
        splatoon: {
          400: "#ff7fbd",
          500: "#f7499e"
        },
        symbolist: {
          400: "#f8719d",
          500: "#f1437b"
        },
        twitter: {
          400: "#53bcf9",
          500: "#1da1f2"
        },
        typometer: {
          400: "#22d3ee",
          500: "#06b6d4"
        },
        zinc: {
          150: "#ececee",
          250: "#dcdce0",
          350: "#bbbbc1",
          450: "#898992",
          550: "#62626b",
          650: "#494951",
          750: "#333338",
          850: "#202023",
          950: "#121215"
        }
      },
      dropShadow: {
        phone: "0 1px 4px rgba(0, 0, 0, 0.06)"
      },
      fontFamily: {
        sans: ["var(--font-inter, Inter)", ...defaultTheme.fontFamily.sans]
      },
      fontSize: {
        "2xs": [
          "0.65rem",
          {
            lineHeight: 1
          }
        ],
        "3xs": [
          "0.55rem",
          {
            lineHeight: 1
          }
        ]
      },
      maxWidth: ({ theme }) => ({
        "screen-md-8": `calc(${theme("screens.md")} + ${theme("spacing.16")})`,
        "screen-md-12": `calc(${theme("screens.md")} + ${theme("spacing.24")})`,
        "screen-md-16": `calc(${theme("screens.md")} + ${theme("spacing.32")})`
      }),
      transitionProperty: {
        DEFAULT:
          "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, text-decoration-color"
      },
      zIndex: {
        negative: -1
      }
    }
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(({ addVariant }) => {
      addVariant(
        "supports-backdrop",
        "@supports ((-webkit-backdrop-filter: blur(0px)) or (backdrop-filter: blur(0px)))"
      )
    }),
    paddingSafe
  ]
}

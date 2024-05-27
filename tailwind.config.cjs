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
          "0 0 2px 1px rgba(0, 0, 0, 0.04), 0 2px 8px -2px rgba(0, 0, 0, 0.04), 0 4px 18px -4px rgba(0, 0, 0, 0.06), 0 8px 42px -6px rgba(0, 0, 0, 0.12)",
        phone:
          "inset 1px 1px 8px rgba(255, 255, 255, 0.8), inset -1px -1px 8px rgba(0, 0, 0, 0.1)",
        "phone-invert":
          "inset 1px 1px 8px rgba(255, 255, 255, 0.2), inset -1px -1px 8px rgba(0, 0, 0, 0.8)",
        polaroid:
          "inset 0 0 2px rgba(0, 0, 0, 0.2), inset 0 0 12px rgba(0, 0, 0, 0.2), inset 0 1px 8px rgba(0, 0, 0, 0.2)"
      },
      colors: {
        gray: {
          50: "#fafafa",
          100: "#f4f4f5",
          150: "#ececee",
          200: "#e4e4e7",
          250: "#dcdce0",
          300: "#d4d4d8",
          350: "#bbbbc1",
          400: "#a1a1aa",
          450: "#898992",
          500: "#71717a",
          550: "#62626b",
          600: "#52525b",
          650: "#494951",
          700: "#3f3f46",
          750: "#333338",
          800: "#27272a",
          850: "#202023",
          900: "#18181b",
          950: "#09090b"
        },
        twitter: {
          DEFAULT: "#1da1f2",
          dark: "#53bcf9"
        },
        mastodon: {
          DEFAULT: "#595aff",
          dark: "#7475ff"
        },
        github: {
          DEFAULT: "#27272a",
          dark: "#f4f4f5"
        },
        dribbble: {
          DEFAULT: "#ea4c89",
          dark: "#f377a9"
        },
        dimmmensions: {
          DEFAULT: "#9a59f6",
          dark: "#b488fb"
        },
        symbolist: {
          DEFAULT: "#f1437b",
          dark: "#f8719d"
        },
        typometer: {
          DEFAULT: "#06b6d4",
          dark: "#22d3ee"
        },
        splatoon: {
          DEFAULT: "#f1437b",
          dark: "#f8719d"
        },
        liveblocks: {
          DEFAULT: "#8361ed",
          dark: "#9b7ef4",
          alternate: {
            DEFAULT: "#594b99",
            dark: "#d3c9f5"
          }
        },
        framer: {
          DEFAULT: "#0099ff",
          dark: "#33aaff"
        },
        awkward: {
          DEFAULT: "#52525b",
          dark: "#d4d4d8"
        },
        lecolededesign: {
          DEFAULT: "#d31b2e",
          dark: "#f4384b"
        }
      },
      dropShadow: {
        floaty: [
          "0 0 2px rgba(0, 0, 0, 0.04)",
          "0 2px 8px rgba(0, 0, 0, 0.04)",
          "0 4px 18px rgba(0, 0, 0, 0.06)",
          "0 8px 42px rgba(0, 0, 0, 0.12)"
        ],
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
        "screen-md-6": `calc(${theme("screens.md")} + ${theme("spacing.12")})`,
        "screen-md-8": `calc(${theme("screens.md")} + ${theme("spacing.16")})`,
        "screen-md-12": `calc(${theme("screens.md")} + ${theme("spacing.24")})`,
        "screen-md-16": `calc(${theme("screens.md")} + ${theme("spacing.32")})`
      }),
      spacing: {
        13: "3.25rem"
      },
      transitionProperty: {
        DEFAULT:
          "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, text-decoration-color"
      },
      zIndex: {
        negative: -1
      }
    }
  },
  plugins: [require("@tailwindcss/typography"), paddingSafe]
}

import formatDistanceToNow from "date-fns/formatDistanceToNow" // eslint-disable-line import/no-duplicates
import isToday from "date-fns/isToday" // eslint-disable-line import/no-duplicates
import isYesterday from "date-fns/isYesterday" // eslint-disable-line import/no-duplicates
import { toHtml } from "hast-util-to-html"
import { s } from "hastscript"
import type { NextApiRequest, NextApiResponse } from "next"
import resolveConfig from "tailwindcss/resolveConfig"
import {
  FRESH_DURATION,
  STALE_DURATION,
  getLatestFilm
} from "../letterboxd/latest"
import { capitalize } from "src/utils/capitalize"
import { truncate } from "src/utils/truncate"
import tailwindConfig from "tailwind.config.cjs"

const WIDTH = 380
const HEIGHT = 80
const PADDING = 16
const LABEL_LENGTH = 35
const POSTER_ASPECT_RATIO = 2 / 3
const POSTER_WIDTH = Math.round(HEIGHT * POSTER_ASPECT_RATIO)
const POSTER_HEIGHT = HEIGHT
const POSTER_PLACEHOLDER_WIDTH = 30
const POSTER_PLACEHOLDER_HEIGHT = 27
const POSTER_RADIUS = 4
const ICON_SIZE = 20
const RATING_WIDTH = 96
const RATING_HEIGHT = 20

const { theme } = resolveConfig(tailwindConfig)

function join(strings: string[]) {
  return strings.join(", ")
}

/**
 * An API route generating an SVG of the latest film I watched.
 *
 * @param req - An API route request.
 * @param res - An API route response.
 */
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const film = await getLatestFilm()
  const dark = "dark" in req.query

  if (film) {
    let date: string
    const absoluteDate = new Date(film.date)

    if (isToday(absoluteDate)) {
      date = "Today"
    } else if (isYesterday(absoluteDate)) {
      date = "Yesterday"
    } else {
      date = capitalize(formatDistanceToNow(absoluteDate, { addSuffix: true }))
    }

    const svg = s(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: WIDTH,
        height: HEIGHT,
        viewBox: `0 0 ${WIDTH} ${HEIGHT}`,
        fill: "none"
      },
      [
        s("title", `${film.title} (${film.year})`),
        s("defs", [
          s("rect", {
            id: "poster",
            width: POSTER_WIDTH,
            height: POSTER_HEIGHT,
            rx: POSTER_RADIUS
          }),
          s("path", {
            id: "rating",
            d: "M9.105 2.802a1 1 0 0 1 1.79 0l1.886 3.793 4.204.61a1 1 0 0 1 .551 1.709L14.5 11.85l.718 4.156a1 1 0 0 1-1.448 1.057L10 15.095l-3.77 1.969a1 1 0 0 1-1.448-1.057l.718-4.156-3.036-2.937a1 1 0 0 1 .551-1.709l4.204-.61 1.886-3.793Zm19 0a1 1 0 0 1 1.79 0l1.886 3.793 4.204.61a1 1 0 0 1 .551 1.709L33.5 11.85l.718 4.156a1 1 0 0 1-1.449 1.057L29 15.095l-3.77 1.969a1 1 0 0 1-1.448-1.057l.718-4.156-3.036-2.937a1 1 0 0 1 .551-1.709l4.204-.61 1.886-3.793Zm19 0a1 1 0 0 1 1.79 0l1.886 3.793 4.204.61a1 1 0 0 1 .551 1.709L52.5 11.85l.718 4.156a1 1 0 0 1-1.449 1.057L48 15.095l-3.77 1.969a1 1 0 0 1-1.448-1.057l.718-4.156-3.036-2.937a1 1 0 0 1 .551-1.709l4.204-.61 1.886-3.793Zm19 0a1 1 0 0 1 1.79 0l1.886 3.793 4.204.61a1 1 0 0 1 .551 1.709L71.5 11.85l.718 4.156a1 1 0 0 1-1.449 1.057L67 15.095l-3.77 1.969a1 1 0 0 1-1.448-1.057l.718-4.156-3.036-2.937a1 1 0 0 1 .551-1.709l4.204-.61 1.886-3.793Zm19 0a1 1 0 0 1 1.79 0l1.886 3.793 4.204.61a1 1 0 0 1 .551 1.709L90.5 11.85l.718 4.156a1 1 0 0 1-1.449 1.057L86 15.095l-3.77 1.969a1 1 0 0 1-1.448-1.057l.718-4.156-3.036-2.937a1 1 0 0 1 .551-1.709l4.204-.61 1.886-3.793Z"
          }),
          s("clipPath", { id: "poster-mask" }, [s("use", { href: "#poster" })]),
          s("clipPath", { id: "rating-mask" }, [s("use", { href: "#rating" })])
        ]),
        s("style", [
          `:root { font-family: ${join(theme.fontFamily.sans)}; font-size: ${
            theme.fontSize.base[0]
          }; }`,
          `#poster-background { fill: ${
            theme.colors.zinc[dark ? "800" : "100"]
          }; }`,
          `#poster-placeholder { fill: ${
            theme.colors.zinc[dark ? "600" : "300"]
          }; }`,
          `#date { color: ${
            theme.colors.lime[dark ? "400" : "500"]
          }; font-size: ${
            theme.fontSize["2xs"][0]
          }; text-transform: uppercase; letter-spacing: ${
            theme.letterSpacing.widest
          }; }`,
          `#date, #title { font-weight: ${theme.fontWeight.semibold}; }`,
          `#title { color: ${theme.colors.zinc[dark ? "100" : "700"]}; }`,
          `#rating-background { fill: ${theme.colors.zinc["200"]}; opacity: ${
            dark ? 0.3 : 1
          }; }`,
          `#rating-fill { fill: ${theme.colors.zinc[dark ? "300" : "600"]}; }`
        ]),
        s("g", { "clip-path": "url(#poster-mask)" }, [
          s("use", {
            id: "poster-background",
            href: "#poster"
          }),
          s("path", {
            id: "poster-placeholder",
            "clip-rule": "evenodd",
            "fill-rule": "evenodd",
            d: "M0 4.8c0-1.68 0-2.52.327-3.162A3 3 0 0 1 1.638.327C2.28 0 3.12 0 4.8 0h20.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C30 2.28 30 3.12 30 4.8v17.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C27.72 27 26.88 27 25.2 27H4.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C0 24.72 0 23.88 0 22.2V4.8Zm2-1.3c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C2.801 2 3.034 2 3.5 2h1c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541C6 2.801 6 3.034 6 3.5s0 .699-.076.883a1 1 0 0 1-.541.54C5.199 5 4.966 5 4.5 5h-1c-.466 0-.699 0-.883-.076a1 1 0 0 1-.54-.541C2 4.199 2 3.966 2 3.5Zm22.076-.883C24 2.801 24 3.034 24 3.5s0 .699.076.883a1 1 0 0 0 .541.54c.184.077.417.077.883.077h1c.466 0 .699 0 .883-.076a1 1 0 0 0 .54-.541C28 4.199 28 3.966 28 3.5s0-.699-.076-.883a1 1 0 0 0-.541-.54C27.199 2 26.966 2 26.5 2h-1c-.466 0-.699 0-.883.076a1 1 0 0 0-.54.541h-.001ZM2 8.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C2.801 7 3.034 7 3.5 7h1c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541C6 7.801 6 8.034 6 8.5s0 .699-.076.883a1 1 0 0 1-.541.54C5.199 10 4.966 10 4.5 10h-1c-.466 0-.699 0-.883-.076a1 1 0 0 1-.54-.541C2 9.199 2 8.966 2 8.5Zm22.076-.883C24 7.801 24 8.034 24 8.5s0 .699.076.883a1 1 0 0 0 .541.54c.184.077.417.077.883.077h1c.466 0 .699 0 .883-.076a1 1 0 0 0 .54-.541C28 9.199 28 8.966 28 8.5s0-.699-.076-.883a1 1 0 0 0-.541-.54C27.199 7 26.966 7 26.5 7h-1c-.466 0-.699 0-.883.076a1 1 0 0 0-.54.541h-.001ZM2 13.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C2.801 12 3.034 12 3.5 12h1c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883s0 .699-.076.883a1 1 0 0 1-.541.54C5.199 15 4.966 15 4.5 15h-1c-.466 0-.699 0-.883-.076a1 1 0 0 1-.54-.541C2 14.199 2 13.966 2 13.5Zm22.076-.883c-.076.184-.076.417-.076.883s0 .699.076.883a1 1 0 0 0 .541.54c.184.077.417.077.883.077h1c.466 0 .699 0 .883-.076a1 1 0 0 0 .54-.541c.077-.184.077-.417.077-.883s0-.699-.076-.883a1 1 0 0 0-.541-.54C27.199 12 26.966 12 26.5 12h-1c-.466 0-.699 0-.883.076a1 1 0 0 0-.54.541h-.001ZM2 18.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C2.801 17 3.034 17 3.5 17h1c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883s0 .699-.076.883a1 1 0 0 1-.541.54C5.199 20 4.966 20 4.5 20h-1c-.466 0-.699 0-.883-.076a1 1 0 0 1-.54-.541C2 19.199 2 18.966 2 18.5Zm22.076-.883c-.076.184-.076.417-.076.883s0 .699.076.883a1 1 0 0 0 .541.54c.184.077.417.077.883.077h1c.466 0 .699 0 .883-.076a1 1 0 0 0 .54-.541c.077-.184.077-.417.077-.883s0-.699-.076-.883a1 1 0 0 0-.541-.54C27.199 17 26.966 17 26.5 17h-1c-.466 0-.699 0-.883.076a1 1 0 0 0-.54.541h-.001ZM2 23.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C2.801 22 3.034 22 3.5 22h1c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883s0 .699-.076.883a1 1 0 0 1-.541.54C5.199 25 4.966 25 4.5 25h-1c-.466 0-.699 0-.883-.076a1 1 0 0 1-.54-.541C2 24.199 2 23.966 2 23.5Zm22.076-.883c-.076.184-.076.417-.076.883s0 .699.076.883a1 1 0 0 0 .541.54c.184.077.417.077.883.077h1c.466 0 .699 0 .883-.076a1 1 0 0 0 .54-.541c.077-.184.077-.417.077-.883s0-.699-.076-.883a1 1 0 0 0-.541-.54C27.199 22 26.966 22 26.5 22h-1c-.466 0-.699 0-.883.076a1 1 0 0 0-.54.541h-.001ZM8 3.6c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437C8.76 2 9.04 2 9.6 2h10.8c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437C22 2.76 22 3.04 22 3.6v7.3c0 .56 0 .84-.109 1.054a1 1 0 0 1-.437.437c-.214.109-.494.109-1.054.109H9.6c-.56 0-.84 0-1.054-.109a1 1 0 0 1-.437-.437C8 11.74 8 11.46 8 10.9V3.6Zm.109 11.446C8 15.26 8 15.54 8 16.1v7.3c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C8.76 25 9.04 25 9.6 25h10.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C22 24.24 22 23.96 22 23.4v-7.3c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437c-.214-.109-.494-.109-1.054-.109H9.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437Z",
            transform: `translate(${
              POSTER_WIDTH / 2 - POSTER_PLACEHOLDER_WIDTH / 2
            }, ${POSTER_HEIGHT / 2 - POSTER_PLACEHOLDER_HEIGHT / 2})`
          }),
          s("image", {
            href: film.poster,
            width: POSTER_WIDTH,
            height: POSTER_HEIGHT,
            preserveAspectRatio: "xMidYMid slice"
          }),
          s("use", {
            href: "#poster",
            stroke: "rgb(255 255 255 / 8%)",
            "stroke-width": 2
          })
        ]),
        s("g", { transform: `translate(${POSTER_WIDTH + PADDING}, 0)` }, [
          s(
            "g",
            { id: "date", fill: "currentColor", transform: "translate(-2, 0)" },
            [
              s("path", {
                fill: "currentColor",
                "clip-rule": "evenodd",
                "fill-rule": "evenodd",
                d: "M2.559 9.104a1.566 1.566 0 0 0 0 1.792C3.63 12.454 6.21 15.5 9.999 15.5c3.79 0 6.37-3.046 7.442-4.604a1.567 1.567 0 0 0 0-1.792C16.369 7.546 13.789 4.5 10 4.5c-3.789 0-6.369 3.046-7.441 4.604Zm9.94.896a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
              }),
              s("text", { transform: `translate(${ICON_SIZE + 4}, 14)` }, [
                date
              ])
            ]
          ),
          s(
            "text",
            {
              id: "title",
              fill: "currentColor",
              transform: "translate(0, 44)"
            },
            [truncate(film.title, LABEL_LENGTH)]
          ),
          s("g", { transform: "translate(-2, 57)" }, [
            s("use", {
              id: "rating-background",
              href: "#rating"
            }),
            s("rect", {
              id: "rating-fill",
              width: RATING_WIDTH * ((film.rating ?? 0) / 5),
              height: RATING_HEIGHT,
              "clip-path": "url(#rating-mask)"
            })
          ])
        ])
      ]
    )

    res.setHeader(
      "Cache-Control",
      `public, s-maxage=${FRESH_DURATION}, max-age=${FRESH_DURATION}, stale-while-revalidate=${STALE_DURATION}`
    )
    res.setHeader("Content-Type", "image/svg+xml")
    res.status(200).send(toHtml(svg, { space: "svg" }))
  } else {
    res.status(500).send(undefined)
  }
}

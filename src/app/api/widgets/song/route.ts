import { toHtml } from "hast-util-to-html"
import { s } from "hastscript"
import type { NextRequest } from "next/server"
import { getLatestSongs } from "../../../data/get-latest-songs"
import theme from "../theme.json"
import { encodeImage } from "src/utils/encode-image"
import { formatRelativeDate } from "src/utils/format-relative-date"
import { truncate } from "src/utils/truncate"

const WIDTH = 380
const HEIGHT = 80
const PADDING = 16
const LABEL_LENGTH = 30
const COVER_WIDTH = HEIGHT
const COVER_HEIGHT = HEIGHT
const COVER_PLACEHOLDER_WIDTH = 32
const COVER_PLACEHOLDER_HEIGHT = 42
const COVER_RADIUS = 4
const ICON_SIZE = 20

/**
 * Generate an SVG image of the latest song I listened to.
 *
 * @param [dark] - Whether to generate a dark variant.
 */
async function generateLatestSongWidget(dark?: boolean) {
  const [song] = await getLatestSongs()

  if (!song) {
    return
  }
  const cover = song.cover ? await encodeImage(song.cover) : undefined
  const date = song.date
    ? formatRelativeDate(song.date, {
        simplifyYesterday: true
      })
    : song.playing
      ? "Currently playing"
      : "Not playing"

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
      s("title", `${song.title} by ${song.artist}`),
      s("defs", [
        s("rect", {
          id: "cover",
          width: COVER_WIDTH,
          height: COVER_HEIGHT,
          rx: COVER_RADIUS
        }),
        s("clipPath", { id: "cover-mask" }, [s("use", { href: "#cover" })])
      ]),
      s("style", [
        `:root { font-family: ${theme.fontFamily.sans}; font-size: ${theme.fontSize.base}; }`,
        `#cover-background { fill: ${
          theme.colors.gray[dark ? "800" : "100"]
        }; }`,
        `#cover-placeholder { fill: ${
          theme.colors.gray[dark ? "600" : "300"]
        }; }`,
        `#date { color: ${
          theme.colors.rose[dark ? "400" : "500"]
        }; font-size: ${
          theme.fontSize["2xs"]
        }; text-transform: uppercase; letter-spacing: ${
          theme.letterSpacing.widest
        }; }`,
        `#date, #title { font-weight: ${theme.fontWeight.semibold}; }`,
        `#title { color: ${theme.colors.gray[dark ? "100" : "700"]}; }`,
        `#artist { color: ${theme.colors.gray[dark ? "400" : "500"]}; }`
      ]),
      s("g", { "clip-path": "url(#cover-mask)" }, [
        s("use", {
          id: "cover-background",
          href: "#cover"
        }),
        s("path", {
          id: "cover-placeholder",
          d: "M32 16.576v14.697c0 1.075-.146 2.13-.614 3.105-.72 1.517-1.89 2.473-3.46 2.936-.868.26-1.764.402-2.67.442-2.369.122-4.425-1.538-4.844-3.95-.361-1.99.565-4.183 2.592-5.208.798-.401 1.667-.643 2.533-.824.945-.21 1.89-.401 2.825-.623.693-.16 1.14-.593 1.277-1.328.039-.16.048-.332.048-.492V11.318c0-.16-.03-.322-.067-.473-.097-.391-.37-.623-.76-.604-.4.02-.79.091-1.179.172-1.9.382-3.8.774-5.692 1.176l-9.228 1.92c-.04.01-.088.03-.128.03-.692.202-.935.524-.965 1.267-.01.11 0 .222 0 .332-.01 6.695 0 13.39-.01 20.084 0 1.087-.117 2.152-.535 3.156-.692 1.648-1.92 2.684-3.575 3.176-.878.261-1.774.413-2.691.442-2.388.091-4.377-1.547-4.785-3.97-.351-2.09.575-4.342 2.875-5.348.896-.382 1.822-.592 2.767-.793.711-.15 1.433-.301 2.144-.452.955-.21 1.452-.834 1.5-1.839V6.352c0-.322.04-.642.108-.955.175-.733.683-1.156 1.364-1.328.634-.172 1.287-.291 1.929-.432 1.832-.382 3.654-.765 5.486-1.137l5.662-1.187C25.584.971 27.249.62 28.926.279c.546-.11 1.102-.232 1.656-.273.769-.07 1.306.433 1.384 1.238.019.19.03.382.03.573v14.747l.004.012Z",
          transform: `translate(${
            (COVER_WIDTH / 2 - COVER_PLACEHOLDER_WIDTH / 2) * 0.875
          }, ${COVER_HEIGHT / 2 - COVER_PLACEHOLDER_HEIGHT / 2})`
        }),
        s("image", {
          href: cover,
          width: COVER_WIDTH,
          height: COVER_HEIGHT,
          preserveAspectRatio: "xMidYMid slice"
        }),
        s("use", {
          href: "#cover",
          stroke: dark ? "rgb(255 255 255 / 8%)" : "rgb(0 0 0 / 6%)",
          "stroke-width": 2
        })
      ]),
      s("g", { transform: `translate(${COVER_WIDTH + PADDING}, 0)` }, [
        s(
          "g",
          {
            id: "date",
            fill: "currentColor",
            transform: "translate(-2, 1)"
          },
          [
            song.playing
              ? s("g", [
                  s(
                    "rect",
                    {
                      width: "2",
                      height: "8",
                      rx: "1",
                      x: "3",
                      y: "6",
                      fill: "currentColor"
                    },
                    [
                      s("animate", {
                        attributeName: "height",
                        calcMode: "linear",
                        dur: "1s",
                        repeatCount: "indefinite",
                        values: "8;4;2;6;4;8"
                      }),
                      s("animate", {
                        attributeName: "y",
                        calcMode: "linear",
                        dur: "1s",
                        repeatCount: "indefinite",
                        values: "6;8;9;7;8;6"
                      })
                    ]
                  ),
                  s(
                    "rect",
                    {
                      width: "2",
                      height: "12",
                      rx: "1",
                      x: "7",
                      y: "4",
                      fill: "currentColor"
                    },
                    [
                      s("animate", {
                        attributeName: "height",
                        calcMode: "linear",
                        dur: "1s",
                        repeatCount: "indefinite",
                        values: "12;8;10;8;14;12"
                      }),
                      s("animate", {
                        attributeName: "y",
                        calcMode: "linear",
                        dur: "1s",
                        repeatCount: "indefinite",
                        values: "4;6;5;6;3;4"
                      })
                    ]
                  ),
                  s(
                    "rect",
                    {
                      width: "2",
                      height: "6",
                      rx: "1",
                      x: "11",
                      y: "7",
                      fill: "currentColor"
                    },
                    [
                      s("animate", {
                        attributeName: "height",
                        calcMode: "linear",
                        dur: "1s",
                        repeatCount: "indefinite",
                        values: "6;8;6;10;8;6"
                      }),
                      s("animate", {
                        attributeName: "y",
                        calcMode: "linear",
                        dur: "1s",
                        repeatCount: "indefinite",
                        values: "7;6;7;5;6;7"
                      })
                    ]
                  ),
                  s(
                    "rect",
                    {
                      width: "2",
                      height: "8",
                      rx: "1",
                      x: "15",
                      y: "6",
                      fill: "currentColor"
                    },
                    [
                      s("animate", {
                        attributeName: "height",
                        calcMode: "linear",
                        dur: "1s",
                        repeatCount: "indefinite",
                        values: "8;4;6;4;2;8"
                      }),
                      s("animate", {
                        attributeName: "y",
                        calcMode: "linear",
                        dur: "1s",
                        repeatCount: "indefinite",
                        values: "6;8;7;8;9;6"
                      })
                    ]
                  )
                ])
              : s("path", {
                  fill: "currentColor",
                  "clip-rule": "evenodd",
                  "fill-rule": "evenodd",
                  d: "M16 6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1ZM12 7a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1ZM8 4a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1ZM4 6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1Z"
                }),
            s("text", { transform: `translate(${ICON_SIZE + 4}, 14)` }, [date])
          ]
        ),
        s(
          "text",
          {
            id: "title",
            fill: "currentColor",
            transform: "translate(0, 44)"
          },
          [truncate(song.title, LABEL_LENGTH)]
        ),
        s(
          "text",
          {
            id: "artist",
            fill: "currentColor",
            transform: "translate(0, 72)"
          },
          [truncate(song.artist, LABEL_LENGTH)]
        )
      ])
    ]
  )

  return toHtml(svg, { space: "svg" })
}

/**
 * A Route Handler generating an SVG image of the latest song I listened to.
 *
 * @param request - The incoming request.
 */
export async function GET(request: NextRequest) {
  const svg = await generateLatestSongWidget(
    request.nextUrl.searchParams.get("dark") !== null
  )

  return svg
    ? new Response(svg, {
        headers: {
          "Content-Type": "image/svg+xml"
        }
      })
    : new Response(undefined, { status: 500 })
}

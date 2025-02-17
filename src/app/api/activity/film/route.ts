import type { NextRequest } from "next/server"
import { getLatestFilms } from "src/app/data/get-latest-films"
import { encodeImage } from "src/utils/encode-image"
import { escapeHtml } from "src/utils/escape-html"
import { formatRelativeDate } from "src/utils/format-relative-date"
import { truncate } from "src/utils/truncate"
import { theme } from "../theme"

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

/**
 * A Route Handler generating an SVG image of the latest film I watched.
 *
 * @param request - The incoming request.
 */
export async function GET(request: NextRequest) {
  const dark = request.nextUrl.searchParams.get("dark") !== null
  const [film] = await getLatestFilms(1)

  if (!film) {
    return new Response(undefined, { status: 500 })
  }

  const poster = film.poster ? await encodeImage(film.poster) : undefined
  const date = formatRelativeDate(film.date, {
    simplifyToday: true,
    simplifyYesterday: true
  })

  return new Response(
    `
<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" fill="none">
  <title>${escapeHtml(film.title)} (${film.year})</title>
  <defs> 
    <rect id="poster" width="${POSTER_WIDTH}" height="${POSTER_HEIGHT}" rx="${POSTER_RADIUS}" />
    <path
      id="rating"
      d="M9.105 2.802a1 1 0 0 1 1.79 0l1.886 3.793 4.204.61a1 1 0 0 1 .551 1.709L14.5 11.85l.718 4.156a1 1 0 0 1-1.448 1.057L10 15.095l-3.77 1.969a1 1 0 0 1-1.448-1.057l.718-4.156-3.036-2.937a1 1 0 0 1 .551-1.709l4.204-.61 1.886-3.793Zm19 0a1 1 0 0 1 1.79 0l1.886 3.793 4.204.61a1 1 0 0 1 .551 1.709L33.5 11.85l.718 4.156a1 1 0 0 1-1.449 1.057L29 15.095l-3.77 1.969a1 1 0 0 1-1.448-1.057l.718-4.156-3.036-2.937a1 1 0 0 1 .551-1.709l4.204-.61 1.886-3.793Zm19 0a1 1 0 0 1 1.79 0l1.886 3.793 4.204.61a1 1 0 0 1 .551 1.709L52.5 11.85l.718 4.156a1 1 0 0 1-1.449 1.057L48 15.095l-3.77 1.969a1 1 0 0 1-1.448-1.057l.718-4.156-3.036-2.937a1 1 0 0 1 .551-1.709l4.204-.61 1.886-3.793Zm19 0a1 1 0 0 1 1.79 0l1.886 3.793 4.204.61a1 1 0 0 1 .551 1.709L71.5 11.85l.718 4.156a1 1 0 0 1-1.449 1.057L67 15.095l-3.77 1.969a1 1 0 0 1-1.448-1.057l.718-4.156-3.036-2.937a1 1 0 0 1 .551-1.709l4.204-.61 1.886-3.793Zm19 0a1 1 0 0 1 1.79 0l1.886 3.793 4.204.61a1 1 0 0 1 .551 1.709L90.5 11.85l.718 4.156a1 1 0 0 1-1.449 1.057L86 15.095l-3.77 1.969a1 1 0 0 1-1.448-1.057l.718-4.156-3.036-2.937a1 1 0 0 1 .551-1.709l4.204-.61 1.886-3.793Z"
    />
    <clipPath id="poster-mask">
      <use href="#poster" />
    </clipPath>
    <clipPath id="rating-mask">
      <use href="#rating" />
    </clipPath>
  </defs>
  ${theme}
  <style>
    :root {
      color-scheme: ${dark ? "dark" : "light"};
      font-family: var(--font-sans); 
      font-size: var(--text-base); 
    }
  </style>
  <g clip-path="url(#poster-mask)">
    <use href="#poster" fill="light-dark(var(--color-gray-100), var(--color-gray-800))" />
    <path
      clip-rule="evenodd" 
      fill-rule="evenodd" 
      fill="light-dark(var(--color-gray-300), var(--color-gray-600))"
      d="M0 4.8c0-1.68 0-2.52.327-3.162A3 3 0 0 1 1.638.327C2.28 0 3.12 0 4.8 0h20.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C30 2.28 30 3.12 30 4.8v17.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C27.72 27 26.88 27 25.2 27H4.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C0 24.72 0 23.88 0 22.2V4.8Zm2-1.3c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C2.801 2 3.034 2 3.5 2h1c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541C6 2.801 6 3.034 6 3.5s0 .699-.076.883a1 1 0 0 1-.541.54C5.199 5 4.966 5 4.5 5h-1c-.466 0-.699 0-.883-.076a1 1 0 0 1-.54-.541C2 4.199 2 3.966 2 3.5Zm22.076-.883C24 2.801 24 3.034 24 3.5s0 .699.076.883a1 1 0 0 0 .541.54c.184.077.417.077.883.077h1c.466 0 .699 0 .883-.076a1 1 0 0 0 .54-.541C28 4.199 28 3.966 28 3.5s0-.699-.076-.883a1 1 0 0 0-.541-.54C27.199 2 26.966 2 26.5 2h-1c-.466 0-.699 0-.883.076a1 1 0 0 0-.54.541h-.001ZM2 8.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C2.801 7 3.034 7 3.5 7h1c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541C6 7.801 6 8.034 6 8.5s0 .699-.076.883a1 1 0 0 1-.541.54C5.199 10 4.966 10 4.5 10h-1c-.466 0-.699 0-.883-.076a1 1 0 0 1-.54-.541C2 9.199 2 8.966 2 8.5Zm22.076-.883C24 7.801 24 8.034 24 8.5s0 .699.076.883a1 1 0 0 0 .541.54c.184.077.417.077.883.077h1c.466 0 .699 0 .883-.076a1 1 0 0 0 .54-.541C28 9.199 28 8.966 28 8.5s0-.699-.076-.883a1 1 0 0 0-.541-.54C27.199 7 26.966 7 26.5 7h-1c-.466 0-.699 0-.883.076a1 1 0 0 0-.54.541h-.001Z" 
      transform="translate(${POSTER_WIDTH / 2 - POSTER_PLACEHOLDER_WIDTH / 2}, ${POSTER_HEIGHT / 2 - POSTER_PLACEHOLDER_HEIGHT / 2})"
    />
    <image href="${poster}" width="${POSTER_WIDTH}" height="${POSTER_HEIGHT}" preserveAspectRatio="xMidYMid slice" />
    <use href="#poster" stroke="${dark ? "rgb(255 255 255 / 8%)" : "rgb(0 0 0 / 6%)"}" stroke-width="2" />
  </g>
  <g transform="translate(${POSTER_WIDTH + PADDING}, 0)">
    <g color="light-dark(var(--color-lime-500), var(--color-lime-400))" transform="translate(-2, 1)">
      <path
        fill="currentColor" 
        clip-rule="evenodd" 
        fill-rule="evenodd" 
        d="M2.559 9.104a1.566 1.566 0 0 0 0 1.792C3.63 12.454 6.21 15.5 9.999 15.5c3.79 0 6.37-3.046 7.442-4.604a1.567 1.567 0 0 0 0-1.792C16.369 7.546 13.789 4.5 10 4.5c-3.789 0-6.369 3.046-7.441 4.604Zm9.94.896a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
      />
      <text
        fill="currentColor"
        font-size="var(--text-2xs)"
        font-weight="var(--font-weight-semibold)"
        style="letter-spacing: var(--tracking-widest); text-transform: uppercase;"
        transform="translate(${ICON_SIZE + 4}, 14)"
      >
        ${date}
      </text>
    </g>
    <text
      fill="light-dark(var(--color-gray-700), var(--color-gray-100))"
      font-weight="var(--font-weight-semibold)"
      transform="translate(0, 44)"
    >
      ${truncate(film.title, LABEL_LENGTH)}
    </text>
    <g transform="translate(-2, 57)">
      <g>
        <use href="#rating" fill="light-dark(var(--color-gray-200), var(--color-gray-700))" />
        <rect
          fill="light-dark(var(--color-gray-600), var(--color-gray-300))"
          clip-path="url(#rating-mask)"
          width="${RATING_WIDTH * ((film.rating ?? 0) / 5)}"
          height="${RATING_HEIGHT}"
        />
      </g>
      ${
        film.rewatch
          ? `
      <g stroke="light-dark(var(--color-gray-400), var(--color-gray-500))" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" transform="translate(${RATING_WIDTH + 6}, 2)">
        <path d="M2 8a6 6 0 0 1 6-6 6.5 6.5 0 0 1 4.493 1.827l.754.753" />
        <path d="M13.5 2v3h-3M14 8a6 6 0 0 1-6 6 6.5 6.5 0 0 1-4.493-1.827l-.753-.753" />
        <path d="M5.5 11h-3v3" />
      </g>`
          : ""
      }
    </g>
  </g>
</svg>`,
    {
      headers: {
        "Content-Type": "image/svg+xml"
      }
    }
  )
}

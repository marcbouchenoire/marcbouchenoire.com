import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type { PropsWithChildren } from "react"
import { Footer } from "src/components/layout/Footer"
import { Header } from "src/components/layout/Header"
import { ThemeProvider } from "src/components/miscellaneous/ThemeProvider"
import "../styles/main.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
})

const info = {
  name: "Marc Bouchenoire",
  twitter: "@marcbouchenoire",
  description:
    "A detail-obsessed Design Engineer, designing and building delightful products.",
  url: "https://marcbouchenoire.com",
  image: "/meta.png"
}

export const metadata: Metadata = {
  metadataBase: new URL(info.url),
  title: info.name,
  description: info.description,
  authors: {
    name: info.name,
    url: info.url
  },
  creator: info.name,
  openGraph: {
    type: "website",
    url: info.url,
    title: info.name,
    description: info.description,
    images: info.image
  },
  twitter: {
    card: "summary_large_image",
    title: info.name,
    description: info.description,
    creator: info.twitter,
    images: info.image
  },
  icons: "/favicon.png"
}

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta content="initial-scale=1, viewport-fit=cover" name="viewport" />
        <link
          as="fetch"
          crossOrigin="anonymous"
          href="/api/lastfm/latest"
          rel="preload"
        />
        <link
          as="fetch"
          crossOrigin="anonymous"
          href="/api/letterboxd/latest"
          rel="preload"
        />
      </head>
      <body className={inter.variable}>
        <ThemeProvider attribute="class" disableTransitionOnChange>
          <Header className="content" />
          {children}
          <Footer className="content pb-0-safe" />
        </ThemeProvider>
      </body>
    </html>
  )
}

import { clsx } from "clsx"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type { PropsWithChildren } from "react"
import styles from "./layout.module.css"
import { Footer } from "./sections/Footer"
import { Header } from "./sections/Header"
import { ThemeProvider } from "src/components/ThemeProvider"
import { METADATA } from "src/metadata"
import "src/styles/main.css"
import { METADATA } from "src/metadata"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
})

export const metadata: Metadata = {
  metadataBase: new URL(METADATA.url),
  title: METADATA.name,
  description: METADATA.description,
  authors: {
    name: METADATA.name,
    url: METADATA.url
  },
  creator: METADATA.name,
  openGraph: {
    type: "website",
    url: METADATA.url,
    title: METADATA.name,
    description: METADATA.description,
    images: METADATA.image
  },
  twitter: {
    card: "summary_large_image",
    title: METADATA.name,
    description: METADATA.description,
    creator: METADATA.twitter,
    images: METADATA.image
  },
  icons: METADATA.icon
}

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta content="initial-scale=1, viewport-fit=cover" name="viewport" />
      </head>
      <body className={inter.variable}>
        <ThemeProvider attribute="class" disableTransitionOnChange>
          <div className="pointer-events-none absolute top-0 h-72 w-full overflow-hidden md:h-80 lg:h-96">
            <div className="content relative h-full">
              <div
                className={clsx(
                  styles.aura,
                  "absolute left-[-100%] z-negative h-full w-[300%] overflow-hidden opacity-50 [--aura-rainbow-offset:-20%] dark:opacity-30 sm:[--aura-rainbow-offset:-15%] md:left-[-150%] md:w-[400%] md:[--aura-offset:-10%]"
                )}
              >
                <div
                  className={clsx(
                    styles.auraRays,
                    "absolute inset-0 flex items-center"
                  )}
                >
                  <div
                    className={clsx(
                      styles.auraRainbow,
                      "absolute left-[-10%] aspect-square w-[120%]"
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
          <Header className="content" />
          <main className="flex flex-1 flex-col items-center justify-center pb-16 pt-12 md:pb-20 md:pt-16 lg:pb-24 lg:pt-20">
            {children}
          </main>
          <Footer className="content pb-0-safe" />
        </ThemeProvider>
      </body>
    </html>
  )
}

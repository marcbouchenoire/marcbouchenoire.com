import { clsx } from "clsx"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { type PropsWithChildren, Suspense } from "react"
import { ThemeProvider } from "src/components/ThemeProvider"
import { METADATA } from "src/metadata"
import styles from "./layout.module.css"
import { Footer } from "./sections/Footer"
import { Header } from "./sections/Header"
import "src/styles/main.css"

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
  icons: METADATA.icon,
  other: {
    "fediverse:creator": METADATA.mastodon
  }
}

export const viewport: Viewport = {
  initialScale: 1,
  viewportFit: "cover"
}

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <ThemeProvider attribute="class" disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <div className="pointer-events-none absolute top-0 h-72 w-full overflow-hidden md:h-80 lg:h-96">
              <div className="content relative h-full">
                <div
                  className={clsx(
                    styles.auraMask,
                    "-z-1 absolute left-[-100%] h-full w-[300%] overflow-hidden opacity-50 [--aura-rainbow-offset:-20%] md:left-[-150%] md:w-[400%] dark:opacity-30 sm:[--aura-rainbow-offset:-15%] md:[--aura-offset:-10%]"
                  )}
                >
                  <div
                    className={clsx(
                      styles.auraRaysMask,
                      "absolute inset-0 flex items-center"
                    )}
                  >
                    <div
                      className={clsx(
                        styles.auraRainbowGradient,
                        "absolute left-[-10%] aspect-square w-[120%]"
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>
            <Suspense>
              <Header className="content" />
            </Suspense>
            <main className="flex w-full flex-1 flex-col items-center justify-center pt-12 pb-16 md:pt-16 md:pb-20 lg:pt-20 lg:pb-24">
              {children}
            </main>
            <Suspense>
              <Footer className="content pb-[max(0px,env(safe-area-inset-bottom))]" />
            </Suspense>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

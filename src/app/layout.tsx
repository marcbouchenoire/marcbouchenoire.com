import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type { PropsWithChildren } from "react"
import { Footer } from "./sections/Footer"
import { Header } from "./sections/Header"
import { ThemeProvider } from "src/components/ThemeProvider"
import "src/styles/main.css"

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
      </head>
      <body className={inter.variable}>
        <ThemeProvider attribute="class" disableTransitionOnChange>
          <div className="pointer-events-none absolute top-0 h-72 w-full overflow-hidden md:h-80 lg:h-96">
            <div className="content relative h-full">
              <div className="aura absolute left-[-100%] z-negative h-full w-[300%] overflow-hidden opacity-50 [--aura-rainbow-offset:-20%] dark:opacity-30 sm:[--aura-rainbow-offset:-15%] md:left-[-150%] md:w-[400%] md:[--aura-offset:-10%]">
                <div className="aura-rays absolute inset-0 flex items-center">
                  <div className="aura-rainbow absolute left-[-10%] aspect-square w-[120%]" />
                </div>
              </div>
            </div>
          </div>
          <Header className="content" />
          {children}
          <Footer className="content pb-0-safe" />
        </ThemeProvider>
      </body>
    </html>
  )
}

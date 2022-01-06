import { ThemeProvider } from "next-themes"
import { AppProps } from "next/app"
import Head from "next/head"
import { Footer } from "../components/layout/Footer"
import { Header } from "../components/layout/Header"
import "../styles/fonts.css"
import "../styles/main.css"

/**
 * A custom `App` component, used to initialize pages.
 *
 * @param props - A set of props.
 * @param props.Component - The active page component.
 * @param props.pageProps - The initial props preloaded for the page.
 */
function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" disableTransitionOnChange>
      <Head>
        <title>Marc Bouchenoire</title>
        <meta content="Marc Bouchenoire" name="title" />
        <meta content="Marc Bouchenoire" name="author" />
        <meta content="initial-scale=1, viewport-fit=cover" name="viewport" />
        <meta
          content="A detail-obsessed Design Engineer, designing and building delightful products."
          name="description"
        />
        <meta content="website" property="og:type" />
        <meta content="https://marcbouchenoire.com" property="og:url" />
        <meta content="Marc Bouchenoire" property="og:title" />
        <meta
          content="A detail-obsessed Design Engineer, designing and building delightful products."
          property="og:description"
        />
        <meta content="https://marcbouchenoire.com" property="twitter:url" />
        <meta content="@marcbouchenoire" property="twitter:creator" />
        <meta content="Marc Bouchenoire" property="twitter:title" />
        <meta
          content="A detail-obsessed Design Engineer, designing and building delightful products."
          property="twitter:description"
        />
      </Head>
      <Header className="content" />
      <Component {...pageProps} />
      <Footer className="content pb-0-safe" />
    </ThemeProvider>
  )
}

export default App

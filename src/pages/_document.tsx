import NextDocument, { Head, Html, Main, NextScript } from "next/document"

/**
 * A custom `Document` component.
 */
class Document extends NextDocument {
  /**
   * Describe the document markup.
   */
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            as="font"
            crossOrigin="anonymous"
            href="/fonts/inter/inter.woff2"
            rel="preload"
            type="font/woff2"
          />
          <link
            as="font"
            crossOrigin="anonymous"
            href="/fonts/inter/inter-italic.woff2"
            rel="preload"
            type="font/woff2"
          />
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
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document

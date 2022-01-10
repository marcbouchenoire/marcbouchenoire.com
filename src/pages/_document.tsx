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

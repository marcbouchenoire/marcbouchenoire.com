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
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document

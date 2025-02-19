"use cache"

import {
  type TransformerNotationDiffOptions,
  type TransformerNotationErrorLevelOptions,
  type TransformerNotationHighlightOptions,
  type TransformerNotationWordHighlightOptions,
  transformerNotationDiff,
  transformerNotationErrorLevel,
  transformerNotationHighlight,
  transformerNotationWordHighlight
} from "@shikijs/transformers"
import clsx from "clsx"
import type { CSSProperties, ComponentProps } from "react"
import { type BundledTheme, codeToHtml } from "shiki"
import styles from "./CodeHighlight.module.css"

export interface CodeHighlightProps extends ComponentProps<"div"> {
  /**
   * The code to highlight.
   */
  code: string

  /**
   * The code's language.
   */
  lang?: string

  /**
   * The syntax highlighting theme(s).
   */
  themes?: BundledTheme | { light: BundledTheme; dark: BundledTheme }
}

type TransfomerOptions =
  | TransformerNotationDiffOptions
  | TransformerNotationErrorLevelOptions
  | TransformerNotationHighlightOptions
  | TransformerNotationWordHighlightOptions

const TRIM_NEWLINES_REGEX = /^[\n\r]+|[\n\r]+$/g

/**
 * A code block with syntax highlighting.
 *
 * @param props - A set of `div` props.
 * @param props.code - The code to highlight.
 * @param [props.lang] - The code's language.
 * @param [props.themes] - The syntax highlighting themes.
 * @param [props.className] - A list of one or more classes.
 */
export async function CodeHighlight({
  code,
  lang,
  themes = { light: "catppuccin-latte", dark: "catppuccin-mocha" },
  className,
  style,
  ...props
}: CodeHighlightProps) {
  // TODO: Remove after Shiki v3.0.0
  const transformerOptions: TransfomerOptions = {
    matchAlgorithm: "v3"
  }

  code = code.replaceAll(TRIM_NEWLINES_REGEX, "")
  const html = await codeToHtml(code, {
    lang: lang ?? "",
    themes: {
      light: typeof themes === "string" ? themes : themes.light,
      dark: typeof themes === "string" ? themes : themes.dark
    },
    defaultColor: false,
    transformers: [
      transformerNotationDiff(transformerOptions),
      transformerNotationErrorLevel(transformerOptions),
      transformerNotationHighlight(transformerOptions),
      transformerNotationWordHighlight(transformerOptions)
    ]
  })

  return (
    <div
      {...props}
      className={clsx(className, styles.codeHighlight)}
      dangerouslySetInnerHTML={{ __html: html }}
      style={
        {
          ...style,
          "--line-numbers-width": `${code.split("\n").length.toString().length}ch`
        } as CSSProperties
      }
    />
  )
}

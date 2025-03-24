"use cache"

import {
  transformerNotationDiff,
  transformerNotationErrorLevel,
  transformerNotationHighlight,
  transformerNotationWordHighlight
} from "@shikijs/transformers"
import clsx from "clsx"
import dedent from "dedent"
import type { ComponentProps, CSSProperties } from "react"
import { type BundledTheme, codeToHtml } from "shiki"
import styles from "./CodeHighlight.module.css"

export interface CodeHighlightProps
  extends Omit<ComponentProps<"div">, "children"> {
  /**
   * The code to highlight.
   */
  children: string

  /**
   * The code's language.
   */
  lang?: string

  /**
   * The syntax highlighting theme(s).
   */
  themes?: BundledTheme | { light: BundledTheme; dark: BundledTheme }
}

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
  children,
  lang,
  themes = { light: "github-light", dark: "github-dark" },
  className,
  style,
  ...props
}: CodeHighlightProps) {
  const code = dedent(children).replaceAll(TRIM_NEWLINES_REGEX, "")
  const html = await codeToHtml(code, {
    lang: lang ?? "",
    themes: {
      light: typeof themes === "string" ? themes : themes.light,
      dark: typeof themes === "string" ? themes : themes.dark
    },
    defaultColor: false,
    transformers: [
      transformerNotationDiff(),
      transformerNotationErrorLevel(),
      transformerNotationHighlight(),
      transformerNotationWordHighlight()
    ]
  })

  return (
    <div
      {...props}
      className={clsx(className, styles.codeHighlight)}
      // biome-ignore lint/security/noDangerouslySetInnerHtml: This is safe with Shiki
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

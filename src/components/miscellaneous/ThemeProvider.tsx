"use client"

import { ThemeProvider as DefaultThemeProvider } from "next-themes"
import type { ComponentProps } from "react"
import React from "react"

/**
 * A client wrapper of next-themes' `ThemeProvider`.
 *
 * @param props - A set of `ThemeProvider` props.
 */
export function ThemeProvider(
  props: ComponentProps<typeof DefaultThemeProvider>
) {
  return <DefaultThemeProvider {...props} />
}

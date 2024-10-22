import { useTheme } from "next-themes"
import { useCallback, useEffect, useMemo } from "react"

type Theme = "dark" | "light"

type SystemTheme = Theme | "system"

type ResolvedTheme = Theme | undefined

type MediaQueryListCallback = (event: MediaQueryListEvent) => void

/**
 * Create an event listener on a media query.
 *
 * @param mediaQuery - The media query to listen to.
 * @param callback - The function to invoke on changes.
 */
function addMediaQueryListener(
  mediaQuery: MediaQueryList,
  callback: MediaQueryListCallback
) {
  return mediaQuery.addEventListener
    ? mediaQuery.addEventListener("change", callback)
    : mediaQuery.addListener(callback)
}

/**
 * Remove an event listener from a media query.
 *
 * @param mediaQuery - The listened to media query.
 * @param callback - The function invoked on changes.
 */
function removeMediaQueryListener(
  mediaQuery: MediaQueryList,
  callback: MediaQueryListCallback
) {
  return mediaQuery.removeEventListener
    ? mediaQuery.removeEventListener("change", callback)
    : mediaQuery.removeListener(callback)
}

/**
 * Create a `prefers-color-scheme` media query.
 *
 * @param theme - The preferred color scheme to match.
 */
function getThemeMediaQuery(theme: Theme) {
  return window.matchMedia(`(prefers-color-scheme: ${theme})`)
}

/**
 * Get the current theme and a function to toggle it.
 */
export function useSystemTheme(): [ResolvedTheme, () => void] {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const isSystemTheme = useMemo(
    () => (theme as SystemTheme) === "system",
    [theme]
  )

  const resolvedSystemTheme: ResolvedTheme = useMemo(() => {
    return !resolvedTheme || resolvedTheme === "system"
      ? undefined
      : (resolvedTheme as Theme)
  }, [resolvedTheme])

  const toggleSystemTheme = useCallback(() => {
    const toggledTheme: Theme =
      (resolvedTheme as Theme) === "dark" ? "light" : "dark"
    const matchesSystem = getThemeMediaQuery(toggledTheme).matches

    setTheme(matchesSystem ? "system" : toggledTheme)
  }, [resolvedTheme, setTheme])

  const handleDarkMediaQueryChange: MediaQueryListCallback = useCallback(() => {
    setTheme("system")
  }, [setTheme])

  useEffect(() => {
    if (isSystemTheme) return

    const darkMediaQuery = getThemeMediaQuery("dark")

    addMediaQueryListener(darkMediaQuery, handleDarkMediaQueryChange)

    return () => {
      removeMediaQueryListener(darkMediaQuery, handleDarkMediaQueryChange)
    }
  }, [isSystemTheme, handleDarkMediaQueryChange])

  return [resolvedSystemTheme, toggleSystemTheme]
}

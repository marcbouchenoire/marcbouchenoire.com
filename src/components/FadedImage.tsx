"use client"

import { clsx } from "clsx"
import NextImage from "next/image"
import { useCallback, useEffect, useRef, useState } from "react"
import type { ComponentProps, SyntheticEvent } from "react"
import { useRefs } from "src/utils/use-refs"

/**
 * An image that fades in when it loads.
 *
 * @param props - A set of `img` (or `next/image`) props.
 * @param props.src - The image's source.
 * @param [props.onLoad] - The function invoked when the image loads.
 * @param [props.ref] - A possible external ref.
 * @param [props.className] - A list of one or more classes.
 */
export function FadedImage({
  src,
  className,
  onLoad,
  ref: forwardedRef,
  ...props
}: ComponentProps<typeof NextImage>) {
  const [isLoaded, setLoaded] = useState(false)
  const ref = useRef<HTMLImageElement>(null!)
  const mergedRef = useRefs(forwardedRef, ref)
  const Image =
    !src || (typeof src === "string" && src.startsWith("http"))
      ? "img"
      : NextImage

  const handleLoad = useCallback(
    (event: SyntheticEvent<HTMLImageElement>) => {
      onLoad?.(event)

      if (!event.isDefaultPrevented()) {
        setLoaded(true)
      }
    },
    [onLoad]
  )

  useEffect(() => {
    if (ref.current.complete) {
      setLoaded(true)
    }
  }, [])

  return (
    <Image
      {...props}
      className={clsx(
        className,
        "transition-opacity duration-300",
        isLoaded ? "opacity-100" : "opacity-0"
      )}
      onLoad={handleLoad}
      ref={mergedRef}
      src={src as string}
    />
  )
}

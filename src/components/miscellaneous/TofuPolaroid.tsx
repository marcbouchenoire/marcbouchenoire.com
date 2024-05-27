"use client"

import { clsx } from "clsx"
import {
  animate,
  clamp,
  motion,
  useMotionValue,
  useTransform
} from "framer-motion"
import Image from "next/image"
import type { ComponentProps } from "react"
import { useCallback, useEffect, useMemo, useState } from "react"
import tofu1 from "public/tofu/1.jpg"
import tofu2 from "public/tofu/2.jpg"
import tofu3 from "public/tofu/3.jpg"
import tofu4 from "public/tofu/4.jpg"
import tofu5 from "public/tofu/5.jpg"

const PHOTOS = [tofu1, tofu2, tofu3, tofu4, tofu5]

function getRandomPhotoIndex(currentIndex: number) {
  let randomIndex: number

  do {
    randomIndex = Math.floor(Math.random() * PHOTOS.length)
  } while (randomIndex === currentIndex)

  return randomIndex
}

/**
 * A Polaroid-style portrait of Tofu, my cat.
 *
 * @param props - A set of `motion.div` props.
 * @param [props.className] - A list of one or more classes.
 * @param [props.style] - A set of inline styles.
 */
export function TofuPolaroid({
  className,
  style,
  ...props
}: ComponentProps<typeof motion.div>) {
  const [photoIndex, setPhotoIndex] = useState(0)
  const photo = useMemo(() => PHOTOS[photoIndex], [photoIndex])
  const [isDragging, setDragging] = useState(false)
  const overlayOpacity = useMotionValue(0)
  const highlightOpacity = useMotionValue(1)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const scale = useTransform(() => {
    const distance = Math.hypot(x.get(), y.get())

    return clamp(1, 3, 1 + distance / 100)
  })
  const rotateZ = useTransform(() => {
    const rotateZ = x.get() / 10

    return clamp(-40, 40, rotateZ + 6)
  })

  const handleDragStart = useCallback(() => {
    setDragging(true)
  }, [])

  const [isAnimating, setAnimating] = useState(false)

  useEffect(
    () => {
      if (isDragging) {
        document.body.classList.add("grabbing")

        const handlePointerUp = () => {
          setDragging(false)
          setPhotoIndex(getRandomPhotoIndex)

          overlayOpacity.set(1)
          animate(overlayOpacity, 0, { duration: 2, ease: "easeOut" })
          highlightOpacity.set(0.1)
          animate(highlightOpacity, 1, { duration: 2, ease: "easeOut" })

          if ((x.get() === 0 && y.get() === 0) || isAnimating) {
            x.stop()
            x.set(0)
            setAnimating(true)
            animate(x, [0, -5, 5, -5, 5, 0], {
              duration: 0.4,
              ease: "easeInOut",
              onComplete: () => setAnimating(false)
            })
          }
        }

        document.addEventListener("pointerup", handlePointerUp)

        return () => {
          document.body.classList.remove("grabbing")
          document.removeEventListener("pointerup", handlePointerUp)
        }
      }

      return () => {
        document.body.classList.remove("grabbing")
      }
    },
    [isDragging] // eslint-disable-line react-hooks/exhaustive-deps
  )

  return (
    <motion.div
      aria-label="Tofu, my cat"
      className={clsx(
        className,
        "absolute z-50 aspect-[328/400] cursor-grab touch-none bg-white p-0.5 shadow-floaty"
      )}
      drag={!isAnimating}
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.25}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 30 }}
      onPointerDown={handleDragStart}
      style={{
        x,
        y,
        scale,
        rotateZ,
        ...style
      }}
      title="Tofu, my cat"
      {...props}
    >
      <div className="relative aspect-square w-full">
        <motion.div
          className="absolute inset-0 z-10 bg-gray-50"
          style={{ opacity: overlayOpacity }}
        />
        <motion.div
          className="polaroid-highlight absolute inset-0 z-10"
          style={{ opacity: highlightOpacity }}
        />
        <Image
          alt="Tofu, my cat"
          className="absolute inset-0 h-full w-full"
          priority
          src={photo}
          title="Tofu, my cat"
          width="80"
        />
        <div aria-hidden hidden>
          {PHOTOS.map((photo, index) => (
            <Image alt="" key={index} src={photo} width="80" />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

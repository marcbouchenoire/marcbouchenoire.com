"use client"

import { clsx } from "clsx"
import {
  animate,
  clamp,
  motion,
  useMotionValue,
  useTransform
} from "motion/react"
import Image from "next/image"
import tofu1 from "public/tofu/1.jpg"
import tofu2 from "public/tofu/2.jpg"
import tofu3 from "public/tofu/3.jpg"
import tofu4 from "public/tofu/4.jpg"
import tofu5 from "public/tofu/5.jpg"
import type { ComponentProps } from "react"
import { useCallback, useEffect, useState } from "react"
import styles from "./TofuPolaroid.module.css"

const PHOTOS = [tofu1, tofu2, tofu3, tofu4, tofu5]

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
  const [isDragging, setDragging] = useState(false)
  const overlayOpacity = useMotionValue(0)
  const highlightOpacity = useMotionValue(1)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const scale = useTransform(() => {
    const distance = Math.hypot(x.get(), y.get())

    return clamp(0.2, 1, 0.2 + distance / 400)
  })
  const rotateZ = useTransform(() => {
    const rotateZ = x.get() / 10

    return clamp(-40, 40, rotateZ + 6)
  })

  const handleDragStart = useCallback(() => {
    setDragging(true)
  }, [])

  const [isAnimating, setAnimating] = useState(false)

  useEffect(() => {
    if (isDragging) {
      document.body.classList.add("grabbing")

      const handlePointerUp = () => {
        setDragging(false)
        setPhotoIndex((index) => {
          let randomIndex = index

          while (randomIndex === index) {
            randomIndex = Math.floor(Math.random() * PHOTOS.length)
          }

          return randomIndex
        })

        overlayOpacity.set(1)
        animate(overlayOpacity, 0, { duration: 2, ease: "easeOut" })
        highlightOpacity.set(0.1)
        animate(highlightOpacity, 1, { duration: 2, ease: "easeOut" })

        if ((x.get() === 0 && y.get() === 0) || isAnimating) {
          x.stop()
          x.set(0)
          setAnimating(true)
          animate(x, [0, -3, 3, -3, 3, 0], {
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
  }, [isDragging, isAnimating])

  return (
    <motion.div
      aria-label="Tofu, my cat"
      className={clsx(
        className,
        "absolute z-50 aspect-[328/400] cursor-grab touch-none bg-white p-2 shadow-floaty will-change-transform"
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
      <div className="relative aspect-square w-full bg-gray-800">
        <motion.div
          className="absolute inset-0 z-10 bg-gray-50"
          style={{ opacity: overlayOpacity }}
        />
        <motion.div
          className={clsx(styles.polaroidShadow, "absolute inset-0 z-10")}
          style={{ opacity: highlightOpacity }}
        />
        {PHOTOS.map((photo, index) => {
          if (index === photoIndex) {
            return (
              <Image
                alt="Tofu, my cat"
                className="absolute inset-0 h-full w-full"
                key={index}
                priority
                src={photo}
                title="Tofu, my cat"
                width="80"
              />
            )
          }

          return (
            <Image
              alt=""
              aria-hidden
              className="absolute inset-0 h-full w-full opacity-0"
              key={index}
              src={photo}
              width="80"
            />
          )
        })}
      </div>
    </motion.div>
  )
}

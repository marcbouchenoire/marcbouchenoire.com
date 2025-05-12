"use client"

import { clsx } from "clsx"
import type { ChangeEvent, ComponentProps } from "react"
import { useCallback, useState } from "react"

interface CustomizableTitleSelectProps extends ComponentProps<"span"> {
  /**
   * The options to select from.
   */
  options: string[]
}

/**
 * A custom `select` component.
 *
 * @param props - A set of `span` props.
 * @param props.options - The options to select from.
 * @param [props.className] - A list of one or more classes.
 */
function CustomizableTitleSelect({
  options,
  className,
  ...props
}: CustomizableTitleSelectProps) {
  const [value, setValue] = useState(options[0])

  const handleChange = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value)
  }, [])

  return (
    <span
      className={clsx(
        className,
        "focusable-within relative m-[-0.1ch] inline-block rounded-xs p-[0.1ch] leading-none transition duration-100"
      )}
      {...props}
    >
      <span aria-hidden className="pointer-events-none">
        {value}
        <span className="text-gray-300 dark:text-gray-550">*</span>
      </span>
      <select
        className="absolute inset-0 h-full w-full cursor-context-menu opacity-0"
        onChange={handleChange}
        value={value}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </span>
  )
}

/**
 * Display a customizable 2-word title.
 *
 * @param props - A set of `span` props.
 */
export function CustomizableTitle(props: ComponentProps<"span">) {
  return (
    <span {...props}>
      <CustomizableTitleSelect
        options={["Design", "Product", "Interaction", "System", "API"]}
      />{" "}
      <CustomizableTitleSelect options={["Engineer", "Designer"]} />
    </span>
  )
}

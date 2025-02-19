import { describe, expect, it, mock } from "bun:test"
import { renderHook } from "@testing-library/react"
import { useInitial } from "../use-initial"

describe("useInitial", () => {
  it("returns the initial value", () => {
    const { result, rerender } = renderHook(() => useInitial("hello"))

    expect(result.current).toBe("hello")

    rerender()

    expect(result.current).toBe("hello")
  })

  it("initializes a lazy value only once", () => {
    const lazy = mock(() => "hello")
    const { result, rerender } = renderHook(() => useInitial(lazy))

    expect(lazy).toHaveBeenCalledTimes(1)
    expect(result.current).toBe("hello")

    rerender()

    expect(lazy).toHaveBeenCalledTimes(1)
    expect(result.current).toBe("hello")
  })

  it("does not change when the provided value changes", () => {
    const reactive = renderHook(({ value }) => useInitial(value), {
      initialProps: { value: "hello" }
    })
    const lazy = renderHook(({ value }) => useInitial(value), {
      initialProps: { value: () => "hello" }
    })

    expect(reactive.result.current).toBe("hello")
    expect(lazy.result.current).toBe("hello")

    reactive.rerender({ value: "world" })
    lazy.rerender({ value: () => "world" })

    expect(reactive.result.current).toBe("hello")
    expect(lazy.result.current).toBe("hello")
  })
})

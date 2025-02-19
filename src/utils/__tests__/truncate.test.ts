import { describe, expect, it } from "bun:test"
import { truncate } from "../truncate"

describe("truncate", () => {
  it("truncates a string to the specified length", () => {
    expect(truncate("hello world", 6)).toBe("hello…")
  })

  it("does not truncate a string if it is shorter than the specified length", () => {
    expect(truncate("hello", 10)).toBe("hello")
  })

  it("supports short truncation lengths", () => {
    expect(truncate("hello world", 0)).toBe("…")
    expect(truncate("hello world", 1)).toBe("…")
    expect(truncate("hello world", 2)).toBe("h…")
  })

  it("supports custom truncation characters", () => {
    expect(truncate("hello world", 6, "~")).toBe("hello~")
    expect(truncate("hello world", 6, "...")).toBe("hel...")
    expect(truncate("hello world", 3, ".........")).toBe(".........")
  })

  it("handles empty strings and empty truncation characters", () => {
    expect(truncate("", 5)).toBe("")
    expect(truncate("hello world", 6, "")).toBe("hello")
  })
})

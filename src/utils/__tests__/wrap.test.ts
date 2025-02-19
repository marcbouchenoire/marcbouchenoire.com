import { describe, expect, it } from "bun:test"
import { wrap } from "../wrap"

describe("wrap", () => {
  it("wraps a value within a specified range", () => {
    expect(wrap(5, 0, 10)).toBe(5)
    expect(wrap(15, 0, 10)).toBe(5)
    expect(wrap(-5, 0, 10)).toBe(5)
    expect(wrap(100000, 0, 10)).toBe(0)
    expect(wrap(1000000, 0, 10)).toBe(0)
  })

  it("handles values exactly on the range boundaries", () => {
    expect(wrap(0, 0, 10)).toBe(0)
    expect(wrap(10, 0, 10)).toBe(0)
    expect(wrap(-10, -10, 10)).toBe(-10)
  })

  it("handles reversed range boundaries", () => {
    expect(wrap(15, 10, 0)).toBe(5)
    expect(wrap(-5, 10, 0)).toBe(5)
    expect(wrap(5, 0, 1)).toBe(0)
    expect(wrap(10, 0, 1)).toBe(0)
  })
})

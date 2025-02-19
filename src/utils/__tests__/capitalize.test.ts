import { describe, expect, it } from "bun:test"
import { capitalize } from "../capitalize"

describe("capitalize", () => {
  it("capitalizes the first letter of a string", () => {
    expect(capitalize("hello")).toBe("Hello")
    expect(capitalize("hElLo")).toBe("HElLo")
    expect(capitalize("a")).toBe("A")
  })

  it("does not change non-alphabetic characters or already capitalized strings", () => {
    expect(capitalize("@hello")).toBe("@hello")
    expect(capitalize("Hello")).toBe("Hello")
    expect(capitalize("A")).toBe("A")
  })

  it("handles empty and non-trimmed strings", () => {
    expect(capitalize("")).toBe("")
    expect(capitalize(" hello")).toBe(" hello")
  })
})

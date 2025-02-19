import { describe, expect, it } from "bun:test"
import { escapeHtml } from "../escape-html"

describe("escapeHtml", () => {
  it("escapes HTML characters", () => {
    expect(escapeHtml("&")).toBe("&amp;")
    expect(escapeHtml("<")).toBe("&lt;")
    expect(escapeHtml(">")).toBe("&gt;")
    expect(escapeHtml('"')).toBe("&quot;")
    expect(escapeHtml("'")).toBe("&apos;")
  })

  it("escapes multiple characters in a string", () => {
    expect(escapeHtml("<div class='hello'>&\"</div>")).toBe(
      "&lt;div class=&apos;hello&apos;&gt;&amp;&quot;&lt;/div&gt;"
    )
  })

  it("does not modify a string with no escapable characters", () => {
    expect(escapeHtml("hello world")).toBe("hello world")
  })

  it("handles empty strings", () => {
    expect(escapeHtml("")).toBe("")
  })
})

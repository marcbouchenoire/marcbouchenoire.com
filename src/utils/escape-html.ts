/**
 * Escape a string for use in HTML/SVG.
 *
 * @param string - The string to escape.
 */
export function escapeHtml(string: string) {
  return string.replace(/[&<>"']/g, (character) => {
    switch (character) {
      case "&":
        return "&amp;"
      case "<":
        return "&lt;"
      case ">":
        return "&gt;"
      case '"':
        return "&quot;"
      case "'":
        return "&apos;"
      default:
        return character
    }
  })
}

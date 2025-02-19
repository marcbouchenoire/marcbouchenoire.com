import { describe, expect, it } from "bun:test"
import { addDays, subDays } from "date-fns"
import { formatRelativeDate } from "../format-relative-date"

describe("formatRelativeDate", () => {
  const now = new Date()
  const tomorrow = addDays(now, 1)
  const yesterday = subDays(now, 1)
  const nextWeek = addDays(now, 7)
  const pastWeek = subDays(now, 7)

  it("formats dates relatively", () => {
    expect(formatRelativeDate(now)).toBe("Now")
    expect(formatRelativeDate(tomorrow)).toBeOneOf(["In 1 day", "In 24 hours"])
    expect(formatRelativeDate(yesterday)).toBeOneOf([
      "1 day ago",
      "24 hours ago"
    ])
    expect(formatRelativeDate(nextWeek)).toMatch(/In \d+ days/)
    expect(formatRelativeDate(pastWeek)).toMatch(/\d+ days ago/)
  })

  it.each([
    [
      "today",
      "simplifyToday",
      "Today",
      now,
      [tomorrow, yesterday, nextWeek, pastWeek]
    ],
    [
      "tomorrow",
      "simplifyTomorrow",
      "Tomorrow",
      tomorrow,
      [now, yesterday, nextWeek, pastWeek]
    ],
    [
      "yesterday",
      "simplifyYesterday",
      "Yesterday",
      yesterday,
      [now, tomorrow, nextWeek, pastWeek]
    ]
  ])(
    "supports simplifying dates from %s",
    (_, option, expected, date, otherDates) => {
      expect(formatRelativeDate(date, { [option]: true })).toBe(expected)

      for (const otherDate of otherDates) {
        expect(formatRelativeDate(otherDate, { [option]: true })).not.toBe(
          expected
        )
      }
    }
  )
})

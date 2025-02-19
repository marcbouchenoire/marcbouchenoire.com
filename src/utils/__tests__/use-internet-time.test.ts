import { describe, expect, it } from "bun:test"
import { getInternetTime } from "../use-internet-time"

describe("getInternetTime", () => {
  it("returns the correct internet time string", () => {
    // 00:00:00 BMT (UTC-1)
    expect(getInternetTime(new Date(Date.UTC(1996, 0, 1, 23, 0, 0)))).toBe(
      "000.00"
    )

    // 01:23:45 BMT (UTC-1)
    expect(getInternetTime(new Date(Date.UTC(1996, 0, 1, 0, 23, 45)))).toBe(
      "058.16"
    )

    // 12:00:00 BMT (UTC-1)
    expect(getInternetTime(new Date(Date.UTC(1996, 0, 1, 11, 0, 0)))).toBe(
      "500.00"
    )

    // 23:59:59 BMT (UTC-1)
    expect(getInternetTime(new Date(Date.UTC(1996, 0, 1, 22, 59, 59)))).toBe(
      "999.99"
    )
  })
})

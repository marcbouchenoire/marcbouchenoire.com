import type { ExpectExtendMatchers } from "bun:test"
import { afterEach, expect } from "bun:test"
import { GlobalRegistrator } from "@happy-dom/global-registrator"
import * as matchers from "@testing-library/jest-dom/matchers"
import { cleanup } from "@testing-library/react"

GlobalRegistrator.register()

expect.extend(matchers as ExpectExtendMatchers<unknown>)

afterEach(() => {
  cleanup()
})

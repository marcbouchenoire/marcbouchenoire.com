import type { NextConfig } from "next"

const config: NextConfig = {
  trailingSlash: false,
  experimental: {
    inlineCss: true,
    dynamicIO: true,
    useCache: true,
    ppr: true
  },
  logging: {
    fetches: {
      fullUrl: true
    }
  }
}

export default config

import type { NextConfig } from "next"

const config: NextConfig = {
  trailingSlash: false,
  experimental: {
    inlineCss: true,
    dynamicIO: true,
    useCache: true,
    ppr: true
  },
  async redirects() {
    return [
      {
        source: "/projects/symbolist/:path*",
        destination: "https://symbolist.marcbouchenoire.com/:path*",
        permanent: true
      },
      {
        source: "/projects/typometer/:path*",
        destination: "https://typometer.marcbouchenoire.com/:path*",
        permanent: true
      },
      {
        source: "/projects/dimmmensions/:path*",
        destination: "https://dimmmensions.marcbouchenoire.com/:path*",
        permanent: true
      }
    ]
  }
}

export default config

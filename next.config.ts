import type { NextConfig } from "next"

const config: NextConfig = {
  trailingSlash: false,
  eslint: {
    ignoreDuringBuilds: true
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "symbolist.marcbouchenoire.com"
          }
        ],
        destination: "https://marcbouchenoire.com/projects/symbolist/:path*",
        permanent: true
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "typometer.marcbouchenoire.com"
          }
        ],
        destination: "https://marcbouchenoire.com/projects/typometer/:path*",
        permanent: true
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "dimmmensions.marcbouchenoire.com"
          }
        ],
        destination: "https://marcbouchenoire.com/projects/dimmmensions/:path*",
        permanent: true
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: `/:path*`
      },
      {
        source: "/projects/symbolist/:path*",
        destination: "https://marcbouchenoire-symbolist.vercel.app/:path*"
      },
      {
        source: "/projects/typometer/:path*",
        destination: "https://marcbouchenoire-typometer.vercel.app/:path*"
      },
      {
        source: "/projects/dimmmensions/:path*",
        destination: "https://marcbouchenoire-dimmmensions.vercel.app/:path*"
      }
    ]
  }
}

export default config

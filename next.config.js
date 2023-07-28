/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sissamx.com.mx',
        pathname: '/img/**'
      }
    ]
  }
}

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  async rewrites() {
    return [
      {
        source: '/avocado/:path*',
        destination: '/product/:path*'
      }
    ]
  }
}

module.exports = nextConfig

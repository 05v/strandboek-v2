/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      // Rewrite all requests for HTML files to the root directory
      {
        source: '/:path*.html',
        destination: '/:path*.html',
      },
      // Handle static assets
      {
        source: '/css/:path*',
        destination: '/css/:path*',
      },
      {
        source: '/js/:path*',
        destination: '/js/:path*',
      },
      {
        source: '/Logo.png',
        destination: '/Logo.png',
      }
    ]
  },
}

module.exports = nextConfig 
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'idt-olive.vercel.app',
      },
    ],
  },
}

module.exports = nextConfig

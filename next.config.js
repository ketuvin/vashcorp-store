/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['dev.alleyway.ph', 'alleyway-files.s3.amazonaws.com'],
  },
}

module.exports = nextConfig

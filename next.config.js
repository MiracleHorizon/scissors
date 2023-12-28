/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone'
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: false
})

module.exports = withBundleAnalyzer(nextConfig)

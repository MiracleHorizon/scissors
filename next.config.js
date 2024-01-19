/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    METADATA_BASE: process.env.METADATA_BASE
  }
}

if (process.env.BUILD_STANDALONE === 'true') {
  nextConfig.output = 'standalone'
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: false
})

module.exports = withBundleAnalyzer(nextConfig)

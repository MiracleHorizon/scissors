import bundleAnalyzer from '@next/bundle-analyzer'

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SITE_DOMAIN_PRODUCTION: process.env.SITE_DOMAIN_PRODUCTION,
    SITE_DOMAIN_DEVELOPMENT: process.env.SITE_DOMAIN_DEVELOPMENT
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com'
      }
    ]
  }
}

if (process.env.BUILD_STANDALONE === 'true') {
  nextConfig.output = 'standalone'
}

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: false
})

export default withBundleAnalyzer(nextConfig)

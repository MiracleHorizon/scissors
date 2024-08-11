import bundleAnalyzer from '@next/bundle-analyzer'

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    reactRemoveProperties: {
      properties: []
    },
    removeConsole: true
  },
  env: {
    SITE_DOMAIN: process.env.SITE_DOMAIN,
    SERVER_API: process.env.SERVER_API
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com'
      }
    ]
  },
  eslint: {
    ignoreDuringBuilds: true
  }
}

if (process.env.NODE_ENV !== 'test') {
  const removeProperties = nextConfig.compiler.reactRemoveProperties
  removeProperties.properties.push('^data-testid$', '^data-cy$')
}

if (process.env.BUILD_STANDALONE === 'true') {
  nextConfig.output = 'standalone'
}

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: false
})

export default withBundleAnalyzer(nextConfig)

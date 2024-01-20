import bundleAnalyzer from '@next/bundle-analyzer'

const nextConfig = {
  env: {
    METADATA_BASE: process.env.METADATA_BASE
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

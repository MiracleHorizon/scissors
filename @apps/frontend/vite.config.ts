import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { getAliases } from './src/__setup__/test-aliases'

// if (process.env.NODE_ENV !== 'test') {
//   const removeProperties = nextConfig.compiler.reactRemoveProperties
//   removeProperties.properties.push('^data-testid$', '^data-cy$')
// }
//
// if (process.env.BUILD_STANDALONE === 'true') {
//   nextConfig.output = 'standalone'
// }
//
// const withBundleAnalyzer = bundleAnalyzer({
//   enabled: process.env.ANALYZE === 'true',
//   openAnalyzer: false
// })

const PORT = 3000

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: getAliases(__dirname)
  },
  server: {
    port: PORT
  },
  preview: {
    port: PORT
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'node:path'

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

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
  },
  server: {
    port: 3000
  }
})

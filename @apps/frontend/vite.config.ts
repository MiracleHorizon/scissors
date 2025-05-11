import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { visualizer } from 'rollup-plugin-visualizer'
import { resolve } from 'node:path'

const PORT = 3000

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      gzipSize: true,
      filename: 'dist/bundle-analysis.html'
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  server: {
    port: PORT
  },
  preview: {
    port: PORT
  },
  envDir: resolve(__dirname, '..', '..'),
  define: {
    'import.meta.env.SITE_DOMAIN': process.env.SITE_DOMAIN,
    'import.meta.env.SERVER_API': process.env.SERVER_API,
    'import.meta.env.AI_SERVER_API': process.env.AI_SERVER_API,
    'import.meta.env.S3_SERVER_API': process.env.S3_SERVER_API
  }
})

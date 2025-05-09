import { defineConfig } from 'vite'
import { visualizer } from 'rollup-plugin-visualizer'
import react from '@vitejs/plugin-react'
import * as path from 'node:path'

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
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    port: PORT
  },
  preview: {
    port: PORT
  }
})

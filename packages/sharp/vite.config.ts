import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [dts()],
  build: {
    target: 'esnext',
    sourcemap: true,
    minify: false,
    emptyOutDir: false,
    lib: {
      entry: './src/index.ts',
      name: 'sharp',
      fileName: 'sharp'
    },
    rollupOptions: {
      output: {
        exports: 'named'
      }
    }
  }
})

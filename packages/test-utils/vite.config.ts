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
      name: 'test-utils',
      fileName: 'test-utils'
    },
    rollupOptions: {
      output: {
        exports: 'named'
      }
    }
  }
})

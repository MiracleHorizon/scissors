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
      entry: './src/utility.ts',
      name: 'utility',
      fileName: 'utility'
    },
    rollupOptions: {
      output: {
        exports: 'named'
      }
    }
  }
})

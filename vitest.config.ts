import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import * as path from 'path'

import { getAliases } from './src/__setup__/aliases'

const setupPath = path.resolve(__dirname, 'src/__setup__')

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    includeSource: ['src/**/*.test.{ts,tsx}', 'src/**/test.{ts,tsx}'],
    setupFiles: [path.resolve(setupPath, 'vitest.setup.ts')],
    coverage: {
      enabled: true,
      cleanOnRerun: true,
      provider: 'v8',
      reporter: ['html'],
      reportsDirectory: path.resolve(setupPath, 'coverage'),
      reportOnFailure: true,
      clean: true
    },
    alias: getAliases(__dirname)
  }
})

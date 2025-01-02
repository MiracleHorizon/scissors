import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import * as path from 'path'

import { getAliases } from './src/__setup__/test-aliases'

const setupPath = path.resolve(__dirname, 'src/__setup__')
const setupFilename = 'vitest.setup.ts'
const coverageDirname = 'coverage'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    includeSource: ['src/**/*.test.{ts,tsx}', 'src/**/test.{ts,tsx}'],
    setupFiles: [path.resolve(setupPath, setupFilename)],
    coverage: {
      enabled: true,
      cleanOnRerun: true,
      provider: 'v8',
      reporter: ['html'],
      reportsDirectory: path.resolve(setupPath, coverageDirname),
      reportOnFailure: true,
      clean: true,
      all: false,
      thresholds: {
        statements: 80,
        branches: 80,
        functions: 80,
        lines: 80
      }
    },
    alias: getAliases(__dirname)
  }
})

import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import * as path from 'path'

interface Alias {
  find: string | RegExp
  replacementPath: string
}

const createAlias = ({ find, replacementPath }: Alias) => ({
  find,
  replacement: path.resolve(__dirname, replacementPath)
})

const setupDir = path.resolve(__dirname, 'src/__setup__')
const aliases: Alias[] = [
  {
    find: '@testing',
    replacementPath: setupDir
  },
  {
    find: '@api',
    replacementPath: './src/api'
  },
  {
    find: '@lib',
    replacementPath: './src/lib'
  },
  {
    find: '@components',
    replacementPath: './src/components'
  },
  {
    find: '@ui',
    replacementPath: './src/lib/ui'
  },
  {
    find: '@helpers',
    replacementPath: './src/lib/helpers'
  },
  {
    find: '@utils',
    replacementPath: './src/lib/utils'
  },
  {
    find: '@server',
    replacementPath: './src/server'
  },
  {
    find: '@app-types',
    replacementPath: './src/types'
  }
]

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    includeSource: ['src/**/*.test.{ts,tsx}', 'src/**/test.{ts,tsx}'],
    setupFiles: [path.resolve(setupDir, 'vitest.setup.ts')],
    coverage: {
      enabled: true,
      cleanOnRerun: true,
      provider: 'istanbul',
      reporter: ['html'],
      reportsDirectory: path.resolve(setupDir, 'coverage'),
      reportOnFailure: true,
      clean: true
    },
    alias: aliases.map(alias => createAlias(alias))
  }
})

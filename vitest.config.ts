import { defineConfig } from 'vitest/config'
import * as path from 'path'

interface Alias {
  find: string | RegExp
  replacementPath: string
}

const createAlias = ({ find, replacementPath }: Alias) => ({
  find,
  replacement: path.resolve(__dirname, replacementPath)
})

const aliases: Alias[] = [
  {
    find: '@api',
    replacementPath: './src/api'
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
  test: {
    globals: true,
    includeSource: ['src/**/*.test.{ts,tsx}', 'src/**/test.{ts,tsx}'],
    coverage: {
      enabled: true,
      cleanOnRerun: true,
      provider: 'istanbul',
      reporter: ['html'],
      reportsDirectory: './src/__setup__/__tests__/unit/coverage',
      reportOnFailure: true,
      clean: true
    },
    alias: aliases.map(alias => createAlias(alias))
  }
})

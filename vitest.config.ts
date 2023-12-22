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
    find: '@lib',
    replacementPath: './src/lib/ui'
  },
  {
    find: '@helpers',
    replacementPath: './src/lib/helpers'
  },
  {
    find: '@stores',
    replacementPath: './src/stores'
  },
  {
    find: '@app-types',
    replacementPath: './src/types'
  }
]

export default defineConfig({
  test: {
    environment: 'node',
    includeSource: ['src/**/*.test.{ts,tsx}', 'src/**/test.{ts,tsx}'],
    coverage: {
      enabled: true,
      cleanOnRerun: true,
      provider: 'istanbul',
      lines: 100,
      functions: 100,
      reporter: ['html'],
      reportsDirectory: './src/__setup__/__tests__/unit/coverage'
    },
    alias: aliases.map(alias => createAlias(alias))
  }
})

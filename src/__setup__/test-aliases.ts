import path from 'path'

interface Alias {
  find: string | RegExp
  replacementPath: string
}

/*
 * The project uses aliases configured via tsconfig.json. However, Vitest does not pick them up,
 * so it is necessary to duplicate them separately for the vitest test build to work correctly.
 */
const aliases: Alias[] = [
  {
    find: '@testing',
    replacementPath: __dirname
  },
  {
    find: '@app',
    replacementPath: './src/app'
  },
  /* Components */
  {
    find: '@layouts',
    replacementPath: './src/layouts'
  },
  {
    find: '@widgets',
    replacementPath: './src/widgets'
  },
  {
    find: '@components',
    replacementPath: './src/components'
  },
  {
    find: '@hoc',
    replacementPath: './src/hoc'
  },
  /* Lib */
  {
    find: '@lib',
    replacementPath: './src/lib'
  },
  {
    find: '@ui',
    replacementPath: './src/lib/ui'
  },
  {
    find: '@utils',
    replacementPath: './src/lib/utils'
  },
  {
    find: '@helpers',
    replacementPath: './src/lib/helpers'
  },
  /* Other */
  {
    find: '@api',
    replacementPath: './src/api'
  },
  {
    find: '@hooks',
    replacementPath: './src/hooks'
  },
  {
    find: '@stores',
    replacementPath: './src/stores'
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

export function getAliases(rootDir: string) {
  return aliases.map(({ find, replacementPath }) => ({
    find,
    replacement: path.resolve(rootDir, replacementPath)
  }))
}
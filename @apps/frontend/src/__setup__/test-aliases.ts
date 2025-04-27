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
    find: '@site',
    replacementPath: './src/site'
  },
  /* Components */
  {
    find: '@widgets',
    replacementPath: './src/widgets'
  },
  {
    find: '@components',
    replacementPath: './src/components'
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
    find: '@helpers',
    replacementPath: './src/lib/helpers'
  },
  /* Other */
  {
    find: '@api',
    replacementPath: './src/api'
  },
  {
    find: '@utility',
    replacementPath: './src/utility'
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
    find: '@app-types',
    replacementPath: './src/types'
  },
  {
    find: '@pages',
    replacementPath: './src/pages'
  }
]

export const getAliases = (rootDir: string) =>
  aliases.map(({ find, replacementPath }) => ({
    find,
    replacement: path.resolve(rootDir, replacementPath)
  }))

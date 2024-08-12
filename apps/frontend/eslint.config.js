import defaultConfig from '../../eslint.config.js'

/**
 TODO: Await issues updates:
 - react-hooks: https://github.com/facebook/react/issues/28313,
 - next: https://github.com/vercel/next.js/issues/64409
 */

export default [
  ...defaultConfig,
  {
    ignores: ['.next', 'cypress', 'public']
  },
  {
    languageOptions: {
      globals: {
        process: true
      }
    }
  }
]

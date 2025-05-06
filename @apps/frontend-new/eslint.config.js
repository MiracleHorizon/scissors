import pluginQuery from '@tanstack/eslint-plugin-query'

import defaultConfig from '../../eslint.config.js'

export default [
  ...defaultConfig,
  ...pluginQuery.configs['flat/recommended'],
  {
    languageOptions: {
      globals: {
        process: true
      }
    }
  }
]

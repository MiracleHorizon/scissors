import defaultConfig from '../../eslint.config.js'
import pluginQuery from '@tanstack/eslint-plugin-query'

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

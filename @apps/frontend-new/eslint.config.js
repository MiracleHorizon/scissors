import defaultConfig from '../../eslint.config.js'

export default [
  ...defaultConfig,
  {
    languageOptions: {
      globals: {
        process: true
      }
    }
  }
]

import * as path from 'path'

const webpackOptions = {
  resolve: {
    extensions: ['.ts', '.tsx'],
    alias: {
      '@src': path.resolve(__dirname, '../../src')
    }
  }
}

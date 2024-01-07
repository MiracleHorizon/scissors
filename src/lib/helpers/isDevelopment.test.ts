import { isDevelopment } from './isDevelopment'

describe('@lib/helpers/isDevelopment', () => {
  beforeAll(() => {
    process.env.NODE_ENV = 'development'
  })

  afterEach(() => {
    process.env.NODE_ENV = 'development'
  })

  it('should return true if the app is running in development mode', () => {
    expect(isDevelopment()).toBe(true)
  })

  it('should return false if the app is not running in development mode', () => {
    process.env.NODE_ENV = 'production'
    expect(isDevelopment()).toBe(false)
  })
})

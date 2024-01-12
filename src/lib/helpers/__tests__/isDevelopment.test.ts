import { isDevelopment } from '@helpers/isDevelopment'

/* eslint-disable @typescript-eslint/ban-ts-comment */
describe('@lib/helpers/isDevelopment', () => {
  beforeAll(() => {
    // @ts-ignore
    process.env.NODE_ENV = 'development'
  })

  afterEach(() => {
    // @ts-ignore
    process.env.NODE_ENV = 'development'
  })

  it('should return true if the app is running in development mode', () => {
    expect(isDevelopment()).toBe(true)
  })

  it('should return false if the app is not running in development mode', () => {
    // @ts-ignore
    process.env.NODE_ENV = 'production'
    expect(isDevelopment()).toBe(false)
  })
})

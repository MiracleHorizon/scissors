import { readCookieValue } from '@helpers/browser/readCookieValue'

const resetCookies = () => (document.cookie = '')

// @vitest-environment jsdom
describe('helpers/browser - readCookieValue (client)', () => {
  const cookies = [
    ['foo', '1'],
    ['bar', '2'],
    ['baz', '3']
  ] as const

  beforeEach(() => {
    resetCookies()

    for (const [key, value] of cookies) {
      document.cookie = `${key}=${value}`
    }
  })

  afterAll(() => {
    resetCookies()
  })

  it.each(cookies)('should return value if it invoked in the client (%s)', (key, value) => {
    expect(readCookieValue(key)).toBe(value)
  })
})

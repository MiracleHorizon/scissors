import { readCookieValue } from '@/shared/lib'

const resetCookies = () => (document.cookie = '')

// @vitest-environment jsdom
describe('shared/lib/browser - readCookieValue', () => {
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

import { readCookieValue } from '@helpers/browser/readCookieValue'

describe('helpers/browser - readCookieValue (server)', () => {
  it.each(['foo', 'bar', 'baz'])('should return null if it invoked in the server (%s)', value => {
    expect(readCookieValue(value)).toBe(null)
  })
})

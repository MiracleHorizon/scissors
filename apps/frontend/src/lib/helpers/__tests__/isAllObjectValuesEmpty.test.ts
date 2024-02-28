import { isAllObjectValuesEmpty } from '@helpers/isAllObjectValuesEmpty'

describe('@lib/helpers/isAllObjectValuesEmpty', () => {
  it('should return true if all values are empty', () => {
    expect(isAllObjectValuesEmpty({})).toBe(true)
    expect(
      isAllObjectValuesEmpty({
        foo: null,
        bar: null
      })
    ).toBe(true)
    expect(
      isAllObjectValuesEmpty({
        foo: false,
        bar: false
      })
    ).toBe(true)
    expect(
      isAllObjectValuesEmpty({
        foo: false,
        bar: null
      })
    ).toBe(true)
    expect(
      isAllObjectValuesEmpty({
        foo: false,
        bar: null,
        baz: undefined
      })
    ).toBe(true)
  })

  it('should return false if not all values are empty', () => {
    expect(
      isAllObjectValuesEmpty({
        foo: false,
        bar: null,
        baz: 0
      })
    ).toBe(false)
    expect(
      isAllObjectValuesEmpty({
        foo: false,
        bar: null,
        baz: '1'
      })
    ).toBe(false)
    expect(
      isAllObjectValuesEmpty({
        foo: false,
        bar: null,
        baz: []
      })
    ).toBe(false)
    expect(
      isAllObjectValuesEmpty({
        foo: true,
        bar: null,
        baz: undefined
      })
    ).toBe(false)
  })
})

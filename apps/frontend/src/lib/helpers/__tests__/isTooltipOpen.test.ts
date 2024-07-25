import { isTooltipOpen } from '@helpers/isTooltipOpen'

describe('helpers - isTooltipOpen', () => {
  it('should return {false} when content is not defined', () => {
    expect(
      isTooltipOpen({
        content: undefined,
        isParentDisabled: false
      })
    ).toBe(false)

    expect(
      isTooltipOpen({
        content: undefined,
        isParentDisabled: undefined
      })
    ).toBe(false)
  })

  it('should return {false} when content length is equal to 0', () => {
    expect(
      isTooltipOpen({
        content: '',
        isParentDisabled: true
      })
    ).toBe(false)
  })

  it('should return {false} when isParentDisabled is true', () => {
    expect(
      isTooltipOpen({
        content: 'Foo is a meta-variable',
        isParentDisabled: true
      })
    ).toBe(false)
  })

  it('should return {undefined} when isParentDisabled is false and content length is greater than 0', () => {
    expect(
      isTooltipOpen({
        content: 'Foo is a meta-variable',
        isParentDisabled: false
      })
    ).toBe(undefined)
  })
})

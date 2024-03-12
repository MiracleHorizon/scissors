import {
  type Theme,
  type ThemeColor,
  themeColorItems,
  validateTheme,
  validateThemeColor
} from '@lib/theme'

describe('@lib/theme/helpers/validateTheme', () => {
  it('should should return true because theme is valid', () => {
    expect(validateTheme('light')).toBe(true)
    expect(validateTheme('dark')).toBe(true)
  })

  it.each(['l1ght', 'd4rk', 'tomato', 'indigo'])(
    'should return false if theme is invalid (%s)',
    theme => expect(validateTheme(theme as Theme)).toBe(false)
  )
})

describe('@lib/theme/helpers/validateThemeColor', () => {
  it.each(themeColorItems.map(item => item.color))(
    'should return true because theme color (%s) is valid',
    themeColor => expect(validateThemeColor(themeColor)).toBe(true)
  )

  it.each(themeColorItems.map(item => item.color))(
    'should return false because theme color (%s) is invalid',
    themeColor => expect(validateThemeColor(('i' + themeColor) as ThemeColor)).toBe(false)
  )
})

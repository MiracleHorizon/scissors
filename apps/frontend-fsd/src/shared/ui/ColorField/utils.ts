// https://github.com/radix-ui/website/blob/67f9736819e5a03f863e8e56f366fa51637845f7/components/ColorField.tsx#L175-L268

// TODO: Use something different than colorjs.io
// https://bundlephobia.com/package/colorjs.io@0.5.0 :)))
import Color from 'colorjs.io'

export const hasSelection = (input: HTMLInputElement | null) => {
  if (input) {
    const { selectionStart, selectionEnd } = input
    return (selectionEnd ?? 0) - (selectionStart ?? 0) > 0
  }

  return false
}

export const toShortFormat = (value?: string): string | null => {
  if (!value) {
    return null
  }

  // Make sure `toShortFormat` can parse values it has produced itself.
  value = toCssFormat(value.trim())

  const regexp = /(^(?:[0-9]|[a-f]){6}|^(?:[0-9]|[a-f]){1,3})/i
  let [hex] = value.replace(/^#/, '').match(regexp) ?? []

  let color: Color | undefined

  if (isColorFunction(value)) {
    try {
      color = new Color(value)

      // Convert sRGB color spaces to hex because colorjs.io formats them a bit weird.
      // and since we don’t feel strongly enough about fixing that, hex is better than weird.
      if (['srgb', 'hsl', 'hwb'].includes(color.spaceId)) {
        return toShortFormat(color.to('srgb').toString({ format: 'hex' }))
      }

      const str = color.toString({ precision: 3 })

      // Remove the `color()` function wrapper for brevity
      return str.startsWith('color') ? str.replace('color(', '').replace(')', '') : str
    } catch {
      /* empty */
    }
  }

  if (!hex) {
    return null
  }

  switch (hex.length) {
    case 1:
      hex = hex.repeat(6)
      break
    case 2:
      hex = hex.repeat(3)
      break
    case 3:
      // eslint-disable-next-line no-case-declarations
      const [r, g, b] = hex.split('')
      hex = `${r}${r}${g}${g}${b}${b}`
  }

  return hex.toUpperCase()
}

export const toCssFormat = (value: string) => {
  if (isColorFunction(value)) {
    return value.includes('(') ? value : `color(${value})`
  }

  if (value.startsWith('#')) {
    return value
  }

  return '#' + value
}

const isColorFunction = (value: string) =>
  value.startsWith('a98') ||
  value.startsWith('color') ||
  value.startsWith('display-p3') ||
  value.startsWith('hsl') ||
  value.startsWith('hwb') ||
  value.startsWith('lab') ||
  value.startsWith('lch') ||
  value.startsWith('oklab') ||
  value.startsWith('oklch') ||
  value.startsWith('p3') ||
  value.startsWith('prophoto') ||
  value.startsWith('rec2020') ||
  value.startsWith('rgb') ||
  value.startsWith('srgb') ||
  value.startsWith('xyz')

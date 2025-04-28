export const notAllowedKeys = new Set(['e', 'E', '+', '-', '.'])

export const parseValue = ({
  value,
  float = false,
  maxFractionDigits = 2
}: {
  value: string
  float: boolean | undefined
  maxFractionDigits: number | undefined
}): number | null => {
  const parseMethod = float ? parseFloat : parseInt

  const parsedValue = parseMethod(value)
  if (isNaN(parsedValue)) {
    return null
  }

  const fixedValue = parseMethod(parsedValue.toFixed(maxFractionDigits).replace(/\.?0*$/, ''))
  if (isNaN(fixedValue)) {
    return null
  }

  return fixedValue
}

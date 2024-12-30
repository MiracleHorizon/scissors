export const NOT_ALLOWED_KEYS = ['e', 'E', '+', '-', '.']

interface Params {
  value: string
  allowFloat: boolean | undefined
  maxFractionDigits: number | undefined
}

export const parseValue = ({
  value,
  allowFloat = false,
  maxFractionDigits = 2
}: Params): number | null => {
  const parseMethod = allowFloat ? parseFloat : parseInt

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

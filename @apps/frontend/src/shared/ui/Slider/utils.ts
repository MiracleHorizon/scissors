type Value = (number | null)[]

export const getValue = ({
  value,
  defaultValue = []
}: {
  value: Value
  defaultValue?: number[]
}): number[] => {
  const filteredValue = value.filter(x => x !== null)

  if (filteredValue.length === 0) {
    return defaultValue
  }

  if (filteredValue.length !== value.length) {
    return defaultValue
  }

  return filteredValue
}

export const formatValue = ({ value, valueSign }: { value: Value; valueSign: string }): string => {
  const filteredValue = value.filter(v => v !== null)

  if (filteredValue.length === 0) {
    return ''
  }

  if (filteredValue.length === 2) {
    return `${filteredValue[0]}${valueSign} – ${filteredValue[1]}${valueSign}`
  }

  return `${filteredValue[0]}${valueSign}`
}

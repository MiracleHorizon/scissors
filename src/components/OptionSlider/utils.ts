type Value = (number | null)[]
type DefaultValue = number[]

export const getSliderTitleValue = ({
  title,
  value,
  valueSign
}: {
  title: string
  value: Value
  valueSign: string
}): string => {
  const filteredValue = value.filter(v => v !== null) as number[]

  if (filteredValue.length === 1) {
    return `${title}: ${filteredValue[0]}${valueSign}`
  }

  if (filteredValue.length === 2) {
    return `${title}: ${filteredValue[0]} - ${filteredValue[1]}${valueSign}`
  }

  return title
}

export const getSliderValue = ({
  value,
  defaultValue
}: {
  value: Value
  defaultValue: DefaultValue
}): number[] => {
  const filteredValue = value.filter(x => x !== null) as number[]

  if (filteredValue.length === 0) {
    return defaultValue
  }

  if (filteredValue.length !== value.length) {
    return defaultValue
  }

  return filteredValue
}

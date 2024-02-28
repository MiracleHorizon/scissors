export function getRandomHexColor(): string {
  const WHITE_COLOR_NUMBER = 16777215
  const MAX_HEX_COLOR_LENGTH = 6

  const randomColor = Math.round(WHITE_COLOR_NUMBER * Math.random()).toString(16)
  const paddingLength = MAX_HEX_COLOR_LENGTH - randomColor.length
  const paddingZeros = '000000'

  return '#' + paddingZeros.substring(0, paddingLength) + randomColor
}

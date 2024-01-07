export function getRandomHexColor(): string {
  const WHITE_COLOR_NUMBER = 16777215

  const randomNumber = Math.floor(Math.random() * WHITE_COLOR_NUMBER)
  const randomHexColor = randomNumber.toString(16)

  return '#' + randomHexColor
}

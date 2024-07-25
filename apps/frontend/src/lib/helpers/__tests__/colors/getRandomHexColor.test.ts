import { getRandomHexColor, hexValidationRegex } from '@helpers/colors'

describe('helpers/colors - getRandomHexColor', () => {
  it('should return a correct random hex color', () => {
    for (let i = 0; i < 10; i++) {
      expect(getRandomHexColor()).toMatch(hexValidationRegex)
    }
  })
})

import { getRandomHexColor } from './getRandomHexColor'
import { hexValidationRegex } from './regular-expressions'

describe('@lib/helpers/colors/getRandomHexColor', () => {
  it('should return a random hex color', () => {
    for (let i = 0; i < 15; i++) {
      expect(getRandomHexColor()).toMatch(hexValidationRegex)
    }
  })
})

import { getRandomBoolean } from '@/shared/lib'

describe('shared/lib - getRandomBoolean', () => {
  it('should return a random boolean', () => {
    for (let i = 0; i < 10; i++) {
      const result = getRandomBoolean()
      expect(typeof result).toBe('boolean')
    }
  })
})

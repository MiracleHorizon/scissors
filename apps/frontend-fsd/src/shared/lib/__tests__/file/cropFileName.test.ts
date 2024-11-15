import { cropFileName } from '@/shared/lib'

describe('shared/lib/file - cropFileName', () => {
  it.each([
    ['hello-world', 'png'],
    ['foo', 'jpeg'],
    ['bar', 'jpg'],
    ['baz', 'webp'],
    ['my-file-name.jpeg', 'webp'],
    ['my-file-name-1', 'webp']
  ])('should crop the file name correctly (%s)', ([name, type]) =>
    expect(cropFileName(`${name}.${type}`)).toBe(name)
  )

  test('the incoming string must not be changed', () => {
    expect(cropFileName('jpeg')).toBe('jpeg')
    expect(cropFileName('.png')).toBe('.png')
    expect(cropFileName('.')).toBe('.')
  })
})

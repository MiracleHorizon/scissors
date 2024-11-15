import { addImageSizesToFileName } from '@/shared/lib'

describe('shared/lib/file - addImageSizesToFileName', () => {
  it('should add image sizes to the file name', () => {
    expect(
      addImageSizesToFileName({
        fullFileName: 'foo.png',
        width: 100,
        height: 100
      })
    ).toBe('foo-100x100.png')

    expect(
      addImageSizesToFileName({
        fullFileName: 'bar.jpeg',
        width: 1920,
        height: 1080
      })
    ).toBe('bar-1920x1080.jpeg')

    expect(
      addImageSizesToFileName({
        fullFileName: 'baz__foo__bar_._.webp',
        width: 400,
        height: 400
      })
    ).toBe('baz__foo__bar_._-400x400.webp')
  })
})

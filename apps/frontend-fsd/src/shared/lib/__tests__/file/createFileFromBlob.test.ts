import { createFileFromBlob } from '@/shared/lib'

describe('shared/lib/file - createFileFromBlob', () => {
  it('should create a file object from a blob', () => {
    const fileName = 'lorem.txt'
    const fileType = 'text/plain'

    const blob = new Blob(['Lorem ipsum dolor sit amet, consectetur adipisicing elit'], {
      type: fileType
    })
    const file = createFileFromBlob(blob, fileName)

    expect(file).toBeInstanceOf(File)
    expect(file.name).toBe(fileName)
    expect(file.type).toBe(fileType)
  })
})

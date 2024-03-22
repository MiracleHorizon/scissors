import { cropFileName } from './cropFileName'

/**
 * @param fileName - file name with extension (example: 'logo.png')
 * @param width - image width in pixels
 * @param height - image height in pixels
 * @returns file name with image sizes added (example: 'logo-100x100.png')
 */
export function addImageSizesToFileName({ fullFileName, width, height }: Parameters): string {
  const fileName = cropFileName(fullFileName)
  const fileNameWithSizes = `${fileName}-${width}x${height}`
  const fileExtension = fullFileName.replace(fileName, '')

  return fileNameWithSizes + fileExtension
}

interface Parameters {
  fullFileName: string
  width: number
  height: number
}

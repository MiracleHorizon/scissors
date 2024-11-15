import { allowedImageFormats } from '@/shared/lib'

/**
 * @param type - image file type (example: 'image/png' or 'png')
 * @returns boolean indicating whether the file type is valid
 */
export const isValidFileType = (type: string): boolean => {
  let value = type

  if (!type.startsWith('image')) {
    value = `image/${type}`
  }

  return allowedImageFormats.split(', ').some(v => v === value)
}

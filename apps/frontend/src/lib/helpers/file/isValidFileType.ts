import { ALLOWED_IMAGE_FORMATS } from '@server/sharp'

/**
 * @param type - image file type (example: 'image/png' or 'png')
 * @returns boolean indicating whether the file type is valid
 */
export function isValidFileType(type: string): boolean {
  let value = type

  if (!type.startsWith('image')) {
    value = `image/${type}`
  }

  return ALLOWED_IMAGE_FORMATS.split(', ').some(v => v === value)
}

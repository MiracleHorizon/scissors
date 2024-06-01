export const IMAGE_FILE_FORMAT = {
  JPEG: 'jpeg',
  JPG: 'jpg',
  PNG: 'png',
  WEBP: 'webp'
} as const
export const ALLOWED_IMAGE_FORMATS = Object.values(IMAGE_FILE_FORMAT)
  .map(format => `image/${format}`)
  .join(', ')

/**
 * @param fileType - image file type (example: 'image/png')
 * @returns image file type without 'image/' prefix (example: 'png')
 */
export const cropImageFileType = (fileType: string): string => fileType.replace('image/', '')

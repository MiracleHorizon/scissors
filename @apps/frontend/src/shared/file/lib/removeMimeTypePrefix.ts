/**
 * Removes the 'image/' prefix from a mime type
 * @param mimeType - The mime type to remove the prefix from
 * @returns The mime type without the 'image/' prefix
 */
export const removeMimeTypePrefix = (mimeType: string): string => mimeType.replace('image/', '')

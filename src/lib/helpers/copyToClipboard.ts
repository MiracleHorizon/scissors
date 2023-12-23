/**
 * @param value - string to be copied
 */
export const copyToClipboard = (value: string): void => void navigator.clipboard.writeText(value)

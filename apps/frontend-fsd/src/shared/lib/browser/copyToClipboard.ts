/**
 * @param value - string to be copied
 */
export const copyToClipboard = (value: string) => navigator.clipboard.writeText(value)

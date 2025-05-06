import { string } from 'yup'

/**
 * Check if the value is a valid URL
 * @param value - The value to check
 * @returns True if the value is a valid URL, false otherwise
 */
export const isURL = (value: string): boolean => {
  const urlSchema = string().url().defined().required()

  return urlSchema.isValidSync(value)
}

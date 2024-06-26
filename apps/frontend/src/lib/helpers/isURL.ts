import { string } from 'yup'

export const isURL = (value: string): boolean => {
  const urlSchema = string().url().defined().required()

  return urlSchema.isValidSync(value)
}

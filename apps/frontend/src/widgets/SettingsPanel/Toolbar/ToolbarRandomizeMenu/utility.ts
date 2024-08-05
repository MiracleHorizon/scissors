import { array, boolean, object, string } from 'yup'

import { defaultSettings } from './constants'

export const isSettingsValid = (settings: unknown): boolean => {
  const optionSchema = object({
    label: string()
      .oneOf(defaultSettings.map(s => s.label))
      .defined()
      .required(),
    checked: boolean().defined().required()
  })
  const settingsSchema = array(optionSchema).length(defaultSettings.length).defined().required()

  return settingsSchema.isValidSync(settings)
}

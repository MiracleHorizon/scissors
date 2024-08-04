interface Parameters<SettingKey extends string> {
  file: File
  settings: Record<SettingKey, unknown>
}

export const createImageProcessingFormData = <SettingKey extends string>({
  file,
  settings
}: Parameters<SettingKey>): FormData => {
  const formData = new FormData()

  formData.append('file', file)
  formData.append('settings', JSON.stringify(settings))

  return formData
}

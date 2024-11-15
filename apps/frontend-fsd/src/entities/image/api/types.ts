export interface MutationPayload<Settings extends Record<string, any>> {
  file: File
  fileName: string
  settings: Settings
}

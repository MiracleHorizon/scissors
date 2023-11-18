export const copyToClipboard = (value: string): void => {
  if (!navigator?.clipboard) return

  void navigator.clipboard.writeText(value)
}

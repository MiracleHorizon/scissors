export function cropFileNameExtension(fileName: string): string {
  return fileName.split('.').slice(0, -1).join('.')
}

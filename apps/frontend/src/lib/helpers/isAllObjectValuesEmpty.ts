export function isAllObjectValuesEmpty(settings: Record<string, any>): boolean {
  const values = Object.values(settings)
  return values.every(value => value === null || value === false || value === undefined)
}

export function isAllObjectValuesEmptyOrFalse(payload: Record<string, any>): boolean {
  const values = Object.values(payload)
  return values.every(value => value === null || value === false || value === undefined)
}

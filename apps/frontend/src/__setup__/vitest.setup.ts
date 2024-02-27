import '@testing-library/jest-dom/vitest'

beforeAll(() => {
  vi.mock('next/navigation', () => vi.importActual('next-router-mock'))
})

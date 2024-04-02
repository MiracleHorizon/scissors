import '@testing-library/jest-dom/vitest'

beforeAll(() => {
  vi.mock('zustand', () => vi.importActual('zustand'))
  vi.mock('next/navigation', () => vi.importActual('next-router-mock'))
})

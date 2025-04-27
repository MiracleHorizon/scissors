import '@testing-library/jest-dom/vitest'

beforeAll(() => {
  vi.mock('zustand', () => vi.importActual('zustand'))
  vi.mock('next/navigation', () => vi.importActual('next-router-mock'))
})

export const navigateMock = vitest.fn()
vitest.mock('react-router', () => ({
  useNavigate: () => navigateMock
}))

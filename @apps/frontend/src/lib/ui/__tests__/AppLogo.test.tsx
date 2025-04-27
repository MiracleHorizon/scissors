// @vitest-environment jsdom

import { cleanup, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { vi } from 'vitest'
import type { ReactNode } from 'react'

import { AppLogo, testId } from '@components/AppLogo'
import { setup } from '@testing/test-utils'
import { PATH_ROOT } from '@site/paths'
import { navigateMock } from '@testing/vitest.setup'

const renderWithRouter = (component: ReactNode) =>
  render(<MemoryRouter initialEntries={[PATH_ROOT]}>{component}</MemoryRouter>)

describe('@ui/AppLogo', () => {
  afterEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  it('should render successfully', () => {
    renderWithRouter(<AppLogo />)
    const element = screen.getByTestId(testId)
    expect(element).toBeInTheDocument()
  })

  it('should successfully call onClick', async () => {
    const { user, getByTestId } = setup(
      <MemoryRouter>
        <AppLogo />
      </MemoryRouter>
    )
    const element = getByTestId(testId)

    element.onclick = vi.fn()
    await user.click(element)
    expect(element.onclick).toHaveBeenCalled()
  })

  it('should navigate to home path when clicked', async () => {
    // Рендерим с роутером
    const { user, getByTestId } = setup(
      <MemoryRouter>
        <AppLogo />
      </MemoryRouter>
    )

    const element = getByTestId(testId)
    await user.click(element)

    expect(navigateMock).toHaveBeenCalledWith(PATH_ROOT)
  })
})

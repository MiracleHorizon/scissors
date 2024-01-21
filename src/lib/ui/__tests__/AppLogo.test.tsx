// @vitest-environment jsdom

import { cleanup, render, screen } from '@testing-library/react'

import { AppLogo, testId } from '@ui/AppLogo'
import { setup } from '@testing/test-utils'

describe('@ui/AppLogo', () => {
  afterEach(() => {
    cleanup()
  })

  it('should render successfully', () => {
    render(<AppLogo />)
    const element = screen.getByTestId(testId)
    expect(element).toBeInTheDocument()
  })

  it('should successfully call onClick', async () => {
    const { user, getByTestId } = setup(<AppLogo />)
    const element = getByTestId(testId)

    element.onclick = vitest.fn()
    await user.click(element)
    expect(element.onclick).toHaveBeenCalled()
  })

  // TODO: should navigate to home page with onClick
})

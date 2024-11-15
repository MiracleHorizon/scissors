// @vitest-environment jsdom

import { cleanup, render, screen } from '@testing-library/react'

import { accessibleIconLabel, ButtonBackTop, testId } from '@/shared/ui'
import { setup } from '@testing/test-utils'

describe('ui/ButtonBackTop', () => {
  afterEach(() => {
    cleanup()
  })

  it('should render successfully with visibilityOffset = 0', () => {
    render(<ButtonBackTop visibilityOffset={0} />)
    const element = screen.getByTestId(testId)
    expect(element).toBeInTheDocument()

    const accessibleIconSpan = screen.getByText(accessibleIconLabel)
    expect(accessibleIconSpan).toBeInTheDocument()
  })

  it('should not render with visibilityOffset > 0', () => {
    render(<ButtonBackTop visibilityOffset={200} />)
    expect(screen.findByTestId(testId)).rejects.toThrowError()
  })

  it('should successfully call onClick', async () => {
    const { user, getByTestId } = setup(<ButtonBackTop />)
    const element = getByTestId(testId)

    element.onclick = vitest.fn()
    await user.click(element)
    expect(element.onclick).toHaveBeenCalled()
  })
})

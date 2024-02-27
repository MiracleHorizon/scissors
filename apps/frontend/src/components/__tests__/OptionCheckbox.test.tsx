// @vitest-environment jsdom

import { cleanup, render } from '@testing-library/react'

import { labelTestId, OptionCheckbox, type Props } from '@components/OptionCheckbox'
import { setup } from '@testing/test-utils'

describe('@components/OptionCheckbox', () => {
  const defaultProps: Props = {
    title: 'test',
    checked: false,
    onClick: vi.fn()
  }

  afterEach(() => {
    cleanup()
  })

  it('should render the checkbox', () => {
    const { getByRole, getByTestId } = render(<OptionCheckbox {...defaultProps} />)

    const label = getByTestId(labelTestId)
    expect(label).toBeInTheDocument()

    const checkbox = getByRole('checkbox')
    expect(checkbox).toBeInTheDocument()
  })

  it('should render the checkbox title', () => {
    const { getByText } = render(<OptionCheckbox {...defaultProps} />)
    const titleElement = getByText(defaultProps.title)

    expect(titleElement).toBeInTheDocument()
    expect(titleElement).toHaveTextContent(defaultProps.title)
    expect(titleElement).toHaveAttribute('title', defaultProps.title)
    expect(titleElement.tagName).toBe('SPAN')
    expect(titleElement.className).toContain('truncate')
  })

  it('should change checkbox value with click', async () => {
    const props: Props = {
      ...defaultProps,
      checked: undefined // Input should be uncontrolled
    }
    const { user, getByRole } = setup(<OptionCheckbox {...props} />)

    const checkbox = getByRole('checkbox')
    expect(checkbox).toBeInTheDocument()

    expect(checkbox).not.toBeChecked()
    await user.click(checkbox)
    expect(checkbox).toBeChecked()
    expect(props.onClick).toHaveBeenCalled()
  })
})

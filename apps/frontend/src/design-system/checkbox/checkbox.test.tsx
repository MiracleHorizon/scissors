// @vitest-environment jsdom

import { cleanup, render } from '@testing-library/react'

import { rootTestId, Checkbox, type Props } from './checkbox'
import { setup } from '@testing/test-utils'

describe('@design-system/Checkbox', () => {
  const defaultProps: Props = {
    label: 'test label',
    checked: false,
    onClick: vi.fn()
  }

  afterEach(() => {
    cleanup()
  })

  it('should render the checkbox', () => {
    const { getByRole, getByTestId } = render(<Checkbox {...defaultProps} />)

    const root = getByTestId(rootTestId)
    expect(root).toBeInTheDocument()

    const checkbox = getByRole('checkbox')
    expect(checkbox).toBeInTheDocument()
  })

  it('should render the checkbox title', () => {
    const { getByText } = render(<Checkbox {...defaultProps} />)
    const labelEl = getByText(defaultProps.label!)

    expect(labelEl).toBeInTheDocument()
    expect(labelEl).toHaveTextContent(defaultProps.label!)
    expect(labelEl).toHaveAttribute('title', defaultProps.label!)
    expect(labelEl.tagName).toBe('LABEL')
  })

  it('should change checkbox value with click', async () => {
    const props: Props = {
      ...defaultProps,
      checked: undefined // Input should be uncontrolled
    }
    const { user, getByRole } = setup(<Checkbox {...props} />)

    const checkbox = getByRole('checkbox')
    expect(checkbox).toBeInTheDocument()

    expect(checkbox).not.toBeChecked()
    await user.click(checkbox)
    expect(checkbox).toBeChecked()
    expect(props.onClick).toHaveBeenCalled()
  })
})

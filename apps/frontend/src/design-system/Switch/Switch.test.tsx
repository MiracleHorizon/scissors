// @vitest-environment jsdom

import { cleanup, render } from '@testing-library/react'

import { Switch, type SwitchExternalProps } from './Switch'
import { setup } from '@testing/test-utils'

describe('@design-system/Switch', () => {
  const defaultProps: SwitchExternalProps = {
    label: 'test',
    checked: false,
    onClick: vi.fn()
  }

  afterEach(() => {
    cleanup()
  })

  it('should render the switch', () => {
    const { getByRole } = render(<Switch {...defaultProps} />)

    const switchElement = getByRole('switch')
    expect(switchElement).toBeInTheDocument()
  })

  it('should render the switch label', () => {
    const { getByText } = render(<Switch {...defaultProps} />)
    const labelElement = getByText(defaultProps.label)

    expect(labelElement).toBeInTheDocument()
    expect(labelElement).toHaveTextContent(defaultProps.label)
    expect(labelElement).toHaveAttribute('title', defaultProps.label)
    expect(labelElement.tagName).toBe('SPAN')
  })

  it('should change switch value with click', async () => {
    const props: SwitchExternalProps = {
      ...defaultProps,
      checked: undefined // Input should be uncontrolled
    }
    const { getByRole, user } = setup(<Switch {...props} />)

    const switchElement = getByRole('switch')
    expect(switchElement).toBeInTheDocument()

    expect(switchElement).not.toBeChecked()
    await user.click(switchElement)
    expect(switchElement).toBeChecked()
    expect(props.onClick).toHaveBeenCalled()
  })
})

// @vitest-environment jsdom

import { cleanup, render } from '@testing-library/react'

import { Switch, type Props } from './switch'
import { setup } from '@testing/test-utils'

describe('@design-system/Switch', () => {
  const defaultProps: Props = {
    title: 'test',
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

  it('should render the switch title', () => {
    const { getByText } = render(<Switch {...defaultProps} />)
    const titleElement = getByText(defaultProps.title)

    expect(titleElement).toBeInTheDocument()
    expect(titleElement).toHaveTextContent(defaultProps.title)
    expect(titleElement).toHaveAttribute('title', defaultProps.title)
    expect(titleElement.tagName).toBe('SPAN')
  })

  it('should change switch value with click', async () => {
    const props: Props = {
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

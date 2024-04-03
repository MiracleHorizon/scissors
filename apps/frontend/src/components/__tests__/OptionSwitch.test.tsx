// @vitest-environment jsdom

import { cleanup, render } from '@testing-library/react'

import { OptionSwitch, type Props } from '@components/OptionSwitch'
import { setup } from '@testing/test-utils'

describe('@components/OptionSwitch', () => {
  const defaultProps: Props = {
    title: 'test',
    checked: false,
    onClick: vi.fn()
  }

  afterEach(() => {
    cleanup()
  })

  it('should render the switch', () => {
    const { getByRole } = render(<OptionSwitch {...defaultProps} />)

    const switchElement = getByRole('switch')
    expect(switchElement).toBeInTheDocument()
  })

  it('should render the switch title', () => {
    const { getByText } = render(<OptionSwitch {...defaultProps} />)
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
    const { getByRole, user } = setup(<OptionSwitch {...props} />)

    const switchElement = getByRole('switch')
    expect(switchElement).toBeInTheDocument()

    expect(switchElement).not.toBeChecked()
    await user.click(switchElement)
    expect(switchElement).toBeChecked()
    expect(props.onClick).toHaveBeenCalled()
  })
})

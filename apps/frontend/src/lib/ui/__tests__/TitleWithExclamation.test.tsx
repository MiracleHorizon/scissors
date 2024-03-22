// @vitest-environment jsdom

import { cleanup, render } from '@testing-library/react'

import { type Props, testId, TitleWithExclamation } from '@ui/TitleWithExclamation'
import { getRadixSpaceVar } from '@lib/theme'

describe('@ui/TitleWithExclamation', () => {
  const testLabel = 'Lorem ipsum dolor sit amet.'
  const testTag = 'H1'
  const testJSX = <h1 title={testLabel}>{testLabel}</h1>

  afterEach(() => {
    cleanup()
  })

  it('should render the title with exclamation', () => {
    const padding = 3
    const margin = 4
    const props = {
      p: padding.toString(),
      m: margin.toString()
    } as Props

    const { getByTestId, getByText, container } = render(
      <TitleWithExclamation {...props}>{testJSX}</TitleWithExclamation>
    )

    const rootElement = getByTestId(testId)
    expect(rootElement).toBeInTheDocument()
    expect(rootElement).toHaveStyle({
      padding: getRadixSpaceVar(padding),
      margin: getRadixSpaceVar(margin)
    })

    const titleElement = getByText(testLabel)
    expect(titleElement).toBeInTheDocument()
    expect(titleElement.tagName).toBe(testTag)
    expect(titleElement).toHaveTextContent(testLabel)
    expect(titleElement).toHaveAttribute('title', testLabel)

    const iconElement = container.querySelector('svg')
    expect(iconElement).toBeInTheDocument()
    expect(iconElement).toHaveAttribute('color', 'tomato')
  })
})

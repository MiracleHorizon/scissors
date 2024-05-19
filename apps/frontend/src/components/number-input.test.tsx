// @vitest-environment jsdom

import { cleanup, fireEvent, render, screen } from '@testing-library/react'

import { fieldTestId, labelTestId, NumberInput, slotTestId, NOT_ALLOWED_KEYS } from './number-input'
import type { Props } from './number-input.props'

describe('@components/number-input - rendering', () => {
  afterEach(() => {
    cleanup()
  })

  it('should render all component elements', () => {
    const label = 'test'
    const value = 5
    const min = 0
    const max = 100
    const step = 10
    const props: Props = {
      value,
      min,
      max,
      label,
      step,
      icon: (
        <svg>
          <path />
        </svg>
      ),
      setValue() {}
    }
    const { getByTestId } = render(<NumberInput {...props} />)

    const labelElement = getByTestId(labelTestId)
    expect(labelElement).toBeInTheDocument()
    expect(labelElement).toHaveTextContent(label)

    const slotElement = getByTestId(slotTestId)
    expect(slotElement).toBeInTheDocument()

    const fieldElement = getByTestId(fieldTestId) as HTMLInputElement
    expect(fieldElement).toBeInTheDocument()
    expect(fieldElement.value).toBe(value.toString())
    expect(fieldElement).toHaveAttribute('type', 'number')
    expect(fieldElement).toHaveAttribute('min', min.toString())
    expect(fieldElement).toHaveAttribute('max', max.toString())
    expect(fieldElement).toHaveAttribute('step', step.toString())
  })

  it('should blur when the escape key is pressed', () => {
    const props: Props = {
      value: 5,
      min: 0,
      max: 100,
      setValue() {}
    }
    const { container } = render(<NumberInput {...props} />)

    const field = container.querySelector('input')
    expect(field).toBeInTheDocument()

    if (!field) return // Convince TypeScript that the element is rendered

    field.focus()
    expect(field).toHaveFocus()

    fireEvent.keyDown(field, {
      key: 'Escape',
      keyCode: 27
    })
    expect(field).not.toHaveFocus()
  })
})

describe('@components/number-input - value change', () => {
  const defaultValue = 0
  const min = -10
  const max = 10

  let value: number | null = defaultValue

  const props: Props = {
    value,
    min,
    max,
    setValue: (newValue: number | null) => (value = newValue)
  }
  vi.spyOn(props, 'setValue')

  const resetValue = () => (value = defaultValue)
  const updatePropsValue = (newValue: number | null) => ({
    ...props,
    value: newValue
  })
  const fireChangeValue = (field: HTMLInputElement, value: any) => {
    fireEvent.change(field, {
      target: { value }
    })
  }
  const renderField = () => {
    const utils = render(<NumberInput {...props} />)
    const field = screen.getByTestId(fieldTestId) as HTMLInputElement

    return { field, ...utils }
  }

  afterEach(() => {
    cleanup()
    resetValue()
  })

  it('should correctly change the value with positive input', () => {
    const { field, rerender } = renderField()

    const testValue = 6
    fireChangeValue(field, testValue)

    expect(props.setValue).toHaveBeenCalledWith(testValue)
    expect(value).toBe(testValue)

    rerender(<NumberInput {...updatePropsValue(testValue)} />)
    expect(field.value).toBe(testValue.toString())
  })

  it('should correctly change the value with negative input', () => {
    const { field, rerender } = renderField()

    const testValue = -5
    fireChangeValue(field, testValue)

    expect(props.setValue).toHaveBeenCalledWith(testValue)
    expect(value).toBe(testValue)

    rerender(<NumberInput {...updatePropsValue(testValue)} />)
    expect(field.value).toBe(testValue.toString())
  })

  it('should correctly change the value with pressing now allowed keys', () => {
    const { field, rerender } = renderField()

    for (const key of NOT_ALLOWED_KEYS) {
      if (key === '-') continue // skip minus sign (check the test above)
      if (key === '.') continue

      const testValue = key + '3'
      const expectedOutput = null
      fireChangeValue(field, testValue)

      expect(props.setValue).toHaveBeenCalledWith(expectedOutput)
      expect(value).toBe(expectedOutput)

      rerender(<NumberInput {...updatePropsValue(expectedOutput)} />)
      expect(field.value).toBe('')
    }
  })

  it('should correctly change the value with out of max range input', () => {
    const { field, rerender } = renderField()

    const testValue = max + 10
    const expectedOutput = max
    fireChangeValue(field, testValue)

    expect(props.setValue).toHaveBeenCalledWith(expectedOutput)
    expect(value).toBe(expectedOutput)

    rerender(<NumberInput {...updatePropsValue(expectedOutput)} />)
    expect(field.value).toBe(expectedOutput.toString())
  })

  it('should correctly change the value out of min range input', () => {
    const { field, rerender } = renderField()

    const testValue = min - 10
    const expectedOutput = min
    fireChangeValue(field, testValue)

    expect(props.setValue).toHaveBeenCalledWith(expectedOutput)
    expect(value).toBe(expectedOutput)

    rerender(<NumberInput {...updatePropsValue(expectedOutput)} />)
    expect(field.value).toBe(expectedOutput.toString())
  })

  it('should correctly change the value with NaN input', () => {
    const { field, rerender } = renderField()

    const testValue = 'foo'
    const expectedOutput = null
    fireChangeValue(field, testValue)

    expect(props.setValue).toHaveBeenCalledWith(expectedOutput)
    expect(value).toBe(expectedOutput)

    rerender(<NumberInput {...updatePropsValue(expectedOutput)} />)
    expect(field.value).toBe('')
  })

  it('should correctly change the value with empty input (empty string)', () => {
    const { field, rerender } = renderField()

    const testValue = ''
    const expectedOutput = null
    fireChangeValue(field, testValue)

    expect(props.setValue).toHaveBeenCalledWith(expectedOutput)
    expect(value).toBe(expectedOutput)

    rerender(<NumberInput {...updatePropsValue(expectedOutput)} />)
    expect(field.value).toBe('')
  })
})

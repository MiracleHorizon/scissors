'use client'

import {
  type ChangeEvent,
  type InputHTMLAttributes,
  type KeyboardEvent,
  type ReactNode,
  useCallback
} from 'react'
import { TextField } from '@radix-ui/themes'

import styles from './ResizeSizeInput.module.css'

export function ResizeSizeInput({
  icon,
  max,
  value,
  setValue,
  resetValue,
  ...inputAttributes
}: Props) {
  const handleChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      const value = ev.target.value

      if (value.length === 0) {
        resetValue()
      }

      const parsedValue = parseInt(value)
      if (isNaN(parsedValue)) return

      const isOverflowValue = parsedValue > max
      if (isOverflowValue) {
        return setValue(max)
      }

      setValue(parsedValue)
    },
    [max, setValue, resetValue]
  )

  const handleKeyDown = (ev: KeyboardEvent<HTMLInputElement>) => {
    const NOT_ALLOWED_NUMERIC_KEYS = ['e', 'E', '+', '-']

    const value = ev.currentTarget.value
    const parsedValue = parseInt(value)

    const isOverflowValue = parsedValue > max
    const isNotAllowedKey = NOT_ALLOWED_NUMERIC_KEYS.includes(ev.key)

    if (isOverflowValue || isNotAllowedKey) {
      ev.preventDefault()
    }
  }

  return (
    <TextField.Root className={styles.root}>
      <TextField.Slot>{icon}</TextField.Slot>
      <TextField.Input
        {...inputAttributes}
        value={value ?? ''}
        type='number'
        inputMode='numeric'
        pattern='\d*'
        max={max}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </TextField.Root>
  )
}

type InputAttributes = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  | 'min'
  | 'max'
  | 'step'
  | 'value'
  | 'type'
  | 'pattern'
  | 'color'
  | 'size'
  | 'onChange'
  | 'onKeyDown'
>

/* eslint no-unused-vars: 0 */
interface Props extends InputAttributes {
  value: number | null
  setValue: (value: number) => void
  resetValue: VoidFunction
  min: number
  max: number
  step: number
  icon: ReactNode
}

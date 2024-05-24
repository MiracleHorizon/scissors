'use client'

import { type ChangeEvent, type KeyboardEvent, useCallback, useId, useRef } from 'react'
import { TextField } from '@radix-ui/themes'
import { clsx } from 'clsx'

import { NumberInputLabel } from './NumbeInputLabel'
import { NOT_ALLOWED_KEYS, parseValue } from './utils'
import { useEscapeBlur } from '@hooks/useEscapeBlur'
import type { Props } from './types'
import styles from './NumberInput.module.css'

export const fieldTestId = 'number-input-field'
export const slotTestId = 'number-input-slot'

export const NumberInput = ({
  icon,
  min,
  max,
  value,
  setValue,
  label,
  allowFloat,
  maxFractionDigits,
  className,
  ...inputAttributes
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const inputId = useId()

  const handleChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      const value = ev.target.value
      if (value.length === 0) {
        return setValue(null)
      }

      const parsedValue = parseValue({
        value,
        allowFloat,
        maxFractionDigits
      })
      if (parsedValue === null) return

      if (parsedValue < min) {
        return setValue(min)
      }
      if (parsedValue > max) {
        return setValue(max)
      }

      setValue(parsedValue)
    },
    [min, max, setValue, allowFloat, maxFractionDigits]
  )

  const handleKeyDown = useCallback(
    (ev: KeyboardEvent<HTMLInputElement>) => {
      const value = ev.currentTarget.value

      /*
       * Allow '-' for negative values.
       */
      if (value.length === 0 && ev.key === '-') return

      /*
       * Prevent typing non-numeric keys and dot.
       */
      const isNotAllowedKey = NOT_ALLOWED_KEYS.includes(ev.key)
      if (isNotAllowedKey && !value.startsWith('-')) {
        return ev.preventDefault()
      }
      /*
       * Prevent typing ',' when float numbers is not allowed.
       */
      if (!allowFloat && ev.key === ',') {
        return ev.preventDefault()
      }

      /*
       * Prevent typing out-of-range values.
       */
      const parsedValue = parseFloat(value)
      if (parsedValue > max || parsedValue < min) {
        ev.preventDefault()
      }
    },
    [min, max, allowFloat]
  )

  useEscapeBlur({
    ref: inputRef
  })

  const textFieldJSX = (
    <TextField.Root
      {...inputAttributes}
      data-testid={fieldTestId}
      ref={inputRef}
      id={inputId}
      value={value ?? ''}
      type='number'
      inputMode='numeric'
      pattern='\d*'
      min={min}
      max={max}
      className={clsx(styles.field, className)}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    >
      {icon && <TextField.Slot data-testid={slotTestId}>{icon}</TextField.Slot>}
    </TextField.Root>
  )

  if (label) {
    return (
      <NumberInputLabel id={inputId} label={label}>
        {textFieldJSX}
      </NumberInputLabel>
    )
  }

  return textFieldJSX
}

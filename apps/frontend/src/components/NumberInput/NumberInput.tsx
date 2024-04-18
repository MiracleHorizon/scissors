'use client'

import { type ChangeEvent, type FC, type KeyboardEvent, useCallback, useId, useRef } from 'react'
import { Flex, Text, TextField } from '@radix-ui/themes'
import { clsx } from 'clsx'

import { NOT_ALLOWED_KEYS, parseValue } from './utils'
import { useEscapeBlur } from '@hooks/useEscapeBlur'
import type { LabelProps, Props } from './NumberInput.types'
import styles from './NumberInput.module.css'

export const labelTestId = 'number-input-label'

const WithLabel: FC<LabelProps> = ({ children, id, label }) => (
  <Flex data-testid={labelTestId} direction='column' gap='1' width='100%'>
    <Text as='label' size='2' color='gray' htmlFor={id}>
      {label}
    </Text>
    {children}
  </Flex>
)

export const fieldTestId = 'number-input-field'
export const slotTestId = 'number-input-slot'

export function NumberInput({
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
}: Props) {
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
      <WithLabel id={inputId} label={label}>
        {textFieldJSX}
      </WithLabel>
    )
  }

  return textFieldJSX
}

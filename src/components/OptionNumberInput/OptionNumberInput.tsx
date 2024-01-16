'use client'

import { type ChangeEvent, type FC, type KeyboardEvent, useCallback, useId, useRef } from 'react'
import { Box, Flex, Text, TextField } from '@radix-ui/themes'

import { useEscapeBlur } from '@hooks/useEscapeBlur'
import type { LabelProps, Props } from './OptionNumberInput.types'

export function OptionNumberInput({
  icon,
  max,
  value,
  setValue,
  label,
  ...inputAttributes
}: Props) {
  const inputId = useId()
  const inputRef = useRef<HTMLInputElement>(null)

  const handleChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      const value = ev.target.value
      if (value.length === 0) {
        return setValue(null)
      }

      const parsedValue = parseInt(value)
      if (isNaN(parsedValue)) return

      const isOverflowValue = parsedValue > max
      if (isOverflowValue) {
        return setValue(max)
      }

      setValue(parsedValue)
    },
    [max, setValue]
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

  useEscapeBlur({
    ref: inputRef
  })

  const JSX = (
    <Box asChild width='100%'>
      <TextField.Root>
        {icon && <TextField.Slot>{icon}</TextField.Slot>}
        <TextField.Input
          {...inputAttributes}
          ref={inputRef}
          id={inputId}
          value={value ?? ''}
          type='number'
          inputMode='numeric'
          pattern='\d*'
          max={max}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </TextField.Root>
    </Box>
  )

  if (label) {
    return (
      <WithLabel id={inputId} label={label}>
        {JSX}
      </WithLabel>
    )
  }

  return JSX
}

const WithLabel: FC<LabelProps> = ({ children, id, label }) => (
  <Flex direction='column' gap='1' width='100%'>
    <Text as='label' size='2' htmlFor={id}>
      {label}
    </Text>
    {children}
  </Flex>
)

import { type ChangeEvent, type KeyboardEvent, useCallback, useRef } from 'react'
import { TextField } from '@radix-ui/themes'

import { useEscapeBlur } from '@hooks/useEscapeBlur'
import type { Props } from './OptionNumberInput.types'

export function OptionNumberInput({ icon, max, value, setValue, ...inputAttributes }: Props) {
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

  return (
    <TextField.Root className='w-full'>
      {icon && <TextField.Slot>{icon}</TextField.Slot>}
      <TextField.Input
        {...inputAttributes}
        ref={inputRef}
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

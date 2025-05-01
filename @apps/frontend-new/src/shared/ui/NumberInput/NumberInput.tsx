import {
  type ChangeEvent,
  type InputHTMLAttributes,
  type KeyboardEvent,
  type ReactNode,
  useId,
  useRef
} from 'react'
import { Flex, TextField, Text } from '@radix-ui/themes'
import { clsx } from 'clsx'

import { notAllowedKeys, parseValue } from './utils'
import { useEscapeBlur } from '@/shared/model'
import styles from './NumberInput.module.css'

type InputAttributes = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  | 'min'
  | 'max'
  | 'value'
  | 'type'
  | 'pattern'
  | 'color'
  | 'size'
  | 'onChange'
  | 'onKeyDown'
  | 'defaultValue'
>

// TODO: Add value normalization on blur
export const NumberInput = ({
  icon,
  min,
  max,
  value,
  setValue,
  label,
  float,
  maxFractionDigits,
  className,
  ...inputAttributes
}: InputAttributes & {
  value: number | null
  /* eslint no-unused-vars: 0 */
  setValue: (value: number | null) => void
  min: number
  max: number
  label?: string
  icon?: ReactNode
  float?: boolean
  maxFractionDigits?: number
}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const inputId = useId()

  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const value = ev.target.value
    if (value.length === 0) {
      return setValue(null)
    }

    const parsedValue = parseValue({
      value,
      float,
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
  }

  const handleKeyDown = (ev: KeyboardEvent<HTMLInputElement>) => {
    const value = ev.currentTarget.value

    if (value.length === 0 && ev.key === '-') return

    if (notAllowedKeys.has(ev.key) && !value.startsWith('-')) {
      return ev.preventDefault()
    }

    if (!float && ev.key === ',') {
      return ev.preventDefault()
    }

    const parsedValue = parseFloat(value)
    if (parsedValue > max || parsedValue < min) {
      ev.preventDefault()
    }
  }

  useEscapeBlur({
    ref: inputRef
  })

  const textFieldJSX = (
    <TextField.Root
      {...inputAttributes}
      ref={inputRef}
      id={inputId}
      value={value ?? ''}
      type='number'
      inputMode='numeric'
      pattern='\d*'
      radius='large'
      min={min}
      max={max}
      className={clsx(styles.field, className)}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    >
      {icon && <TextField.Slot>{icon}</TextField.Slot>}
    </TextField.Root>
  )

  if (label) {
    return <Label id={inputId} label={label} children={textFieldJSX} />
  }

  return textFieldJSX
}

const Label = ({ children, id, label }: { id: string; label: string; children: ReactNode }) => (
  <Flex direction='column' gap='1' width='100%'>
    <Text as='label' size='2' color='gray' htmlFor={id}>
      {label}
    </Text>

    {children}
  </Flex>
)

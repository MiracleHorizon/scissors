import type { CSSProperties } from 'react'

import { ColorInput } from './ColorInput'
import type { TextFieldProps } from '@lib/theme'

export const validHex = (value: string, alpha?: boolean): boolean => {
  const matcher = /^#?([0-9A-F]{3,8})$/i
  const match = matcher.exec(value)
  const length = match ? match[1].length : 0

  return length === 3 || length === 6 || (!!alpha && length === 4) || (!!alpha && length === 8)
}

const style: CSSProperties = {
  flex: '1 1 auto'
} as const

export function HexColorInput(props: Props) {
  const escape = (value: string) => value.replace(/([^0-9A-F]+)/gi, '').substring(0, 6)
  const validate = (value: string) => validHex(value, false)

  return (
    <ColorInput
      {...props}
      style={style}
      placeholder='Input color'
      escape={escape}
      validate={validate}
    />
  )
}

/* eslint no-unused-vars: 0 */
interface Props extends Omit<TextFieldProps, 'color' | 'onChange'> {
  color: string
  onChange: (color: string) => void
}

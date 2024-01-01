import { TextField } from '@radix-ui/themes'

import { ColorInput } from './ColorInput'
import type { TextFieldInputProps } from '@lib/theme'

export const validHex = (value: string, alpha?: boolean): boolean => {
  const matcher = /^#?([0-9A-F]{3,8})$/i
  const match = matcher.exec(value)
  const length = match ? match[1].length : 0

  return length === 3 || length === 6 || (!!alpha && length === 4) || (!!alpha && length === 8)
}

export function HexColorInput(props: Props) {
  const escape = (value: string) => value.replace(/([^0-9A-F]+)/gi, '').substring(0, 6)
  const validate = (value: string) => validHex(value, false)

  return (
    <TextField.Root radius='large' style={{ flex: '1 1 auto' }}>
      <ColorInput {...props} placeholder='Input color' escape={escape} validate={validate} />
    </TextField.Root>
  )
}

/* eslint no-unused-vars: 0 */
interface Props extends Omit<TextFieldInputProps, 'color'> {
  color: string
  onChange: (color: string) => void
}

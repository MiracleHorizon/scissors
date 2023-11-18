import { TextField } from '@radix-ui/themes'

import { ButtonClipboardCopy } from '@ui/ButtonClipboardCopy'
import { ColorInput } from './ColorInput'
import { themeColor } from '@shared/theme'
import type { TextFieldInputProps } from '@libs/radix'

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
    <TextField.Root>
      <ColorInput
        {...props}
        placeholder='Input color'
        themeColor={themeColor}
        escape={escape}
        validate={validate}
      />
      <TextField.Slot pr='3'>
        <ButtonClipboardCopy copyValue={props.color} size='2' />
      </TextField.Slot>
    </TextField.Root>
  )
}

/* eslint no-unused-vars: 0 */
interface Props extends Omit<TextFieldInputProps, 'color'> {
  color: string
  onChange: (color: string) => void
}

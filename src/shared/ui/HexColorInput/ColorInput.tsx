/**
 * NOTE: Merged radix-ui/TextField.Input with react-colorful/HexColorInput;
 * <br />
 * <a color='white' href="https://github.com/omgovich/react-colorful/blob/master/src/components/ColorInput.tsx">ColorInput<a/>;
 * <br />
 * <a color='white' href="https://github.com/omgovich/react-colorful/blob/master/src/components/HexColorInput.tsx">HexColorInput<a/>;
 */

import {
  type ChangeEvent,
  type FocusEvent,
  type InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react'
import { type Responsive, TextField } from '@radix-ui/themes'

import type { Color } from '@libs/radix'

export function useEventCallback<T>(handler?: (value: T) => void): (value: T) => void {
  const callbackRef = useRef(handler)

  const callback = useRef((value: T) => {
    if (!callbackRef.current) return

    callbackRef.current(value)
  })

  callbackRef.current = handler

  return callback.current
}

export function ColorInput({
  color,
  themeColor,
  onChange,
  onBlur,
  validate,
  escape,
  ...inputProps
}: Props) {
  const [value, setValue] = useState(() => escape(color))

  const onChangeCallback = useEventCallback<string>(onChange)
  const onBlurCallback = useEventCallback<FocusEvent<HTMLInputElement>>(onBlur)

  const handleChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      const inputValue = escape(ev.target.value)

      setValue(inputValue)

      if (validate(inputValue)) {
        onChangeCallback(inputValue)
      }
    },
    [escape, validate, onChangeCallback]
  )

  const handleBlur = useCallback(
    (ev: FocusEvent<HTMLInputElement>) => {
      if (!validate(ev.target.value)) {
        setValue(escape(color))
      }

      onBlurCallback(ev)
    },
    [color, escape, validate, onBlurCallback]
  )

  useEffect(() => setValue(escape(color)), [color, escape])

  return (
    <TextField.Input
      {...inputProps}
      color={themeColor}
      value={value}
      spellCheck='false'
      onChange={handleChange}
      onBlur={handleBlur}
    />
  )
}

type ColorInputHTMLAttributes = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'value' | 'size'
>

/* eslint no-unused-vars: 0 */
interface ColorInputBaseProps extends ColorInputHTMLAttributes {
  color: string
  onChange: (color: string) => void
  size?: Responsive<'1' | '2' | '3'>
  variant?: 'classic' | 'surface' | 'soft'
  themeColor?: Color
}

interface Props extends ColorInputBaseProps {
  escape: (value: string) => string
  validate: (value: string) => boolean
}

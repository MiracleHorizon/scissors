/**
 * NOTE: Merged radix-ui/TextField.Root with react-colorful/HexColorInput;
 * <br />
 * <a color='white' href="https://github.com/omgovich/react-colorful/blob/master/src/components/common/ColorInput.tsx">ColorInput<a/>;
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
import { TextField } from '@radix-ui/themes'
import type { Responsive } from '@radix-ui/themes/props'

export function useEventCallback<T>(handler?: (value: T) => void): (value: T) => void {
  const callbackRef = useRef(handler)

  const callback = useRef((value: T) => {
    if (!callbackRef.current) return

    callbackRef.current(value)
  })

  callbackRef.current = handler

  return callback.current
}

// TODO: UPDATE PROPS
export function ColorInput({ color, onChange, onBlur, validate, escape, ...inputProps }: Props) {
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
    <TextField.Root
      {...inputProps}
      value={value}
      radius='large'
      spellCheck='false'
      onChange={handleChange}
      onBlur={handleBlur}
    />
  )
}

type ColorInputHTMLAttributes = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'value' | 'size' | 'defaultValue' | 'type'
>

/* eslint no-unused-vars: 0 */
interface ColorInputBaseProps extends ColorInputHTMLAttributes {
  color: string
  onChange: (color: string) => void
  size?: Responsive<'1' | '2' | '3'>
  variant?: 'classic' | 'surface' | 'soft'
}

interface Props extends ColorInputBaseProps {
  escape: (value: string) => string
  validate: (value: string) => boolean
}

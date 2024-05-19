// https://github.com/radix-ui/website/blob/67f9736819e5a03f863e8e56f366fa51637845f7/components/ColorField.tsx

import {
  type ChangeEvent,
  type ComponentPropsWithoutRef,
  type FocusEvent,
  type KeyboardEvent,
  useId,
  useMemo,
  useRef,
  useState
} from 'react'
import { Flex, Text, TextField } from '@radix-ui/themes'
import { clsx } from 'clsx'
import Color from 'colorjs.io'

import { useIsomorphicLayoutEffect } from '@hooks/useIsomorphicLayoutEffect'
import { hasSelection, toCssFormat, toShortFormat } from './utils'
import { geistMono } from '@app/fonts'
import styles from './color-field.module.css'

const DEFAULT_COLOR = '000000'

export const ColorField = ({
  id,
  label,
  defaultValue = DEFAULT_COLOR,
  disabled,
  onBlur,
  onChange,
  onKeyDownCapture,
  onValueChange,
  placeholder = '#000000',
  readOnly,
  size,
  value,
  ...props
}: Props) => {
  const inputId = useId()
  const inputRef = useRef<HTMLInputElement>(null)
  const [inputValue, setInputValue] = useState(
    toShortFormat(value ?? defaultValue) ?? DEFAULT_COLOR
  )

  const committedColorRef = useRef(inputValue)
  const preventInputSelectionRef = useRef(false)

  const color = useMemo(() => {
    const string = toShortFormat(inputValue)
    return string ? string : committedColorRef.current
  }, [inputValue])

  useIsomorphicLayoutEffect(() => {
    const string = toShortFormat(value)

    if (string) {
      setInputValue(string)
      committedColorRef.current = string
    }
  }, [value])

  const onMouseUp = () => {
    if (preventInputSelectionRef.current) {
      return
    }

    const inputHasFocus = document.activeElement === inputRef.current

    if (inputHasFocus && !hasSelection(inputRef.current)) {
      inputRef.current?.select()

      preventInputSelectionRef.current = true
    }
  }

  const onBlurField = (ev: FocusEvent<HTMLInputElement>) => {
    committedColorRef.current = color
    preventInputSelectionRef.current = false
    setInputValue(color)
    onValueChange?.(toCssFormat(color))

    if (navigator.userAgent.toLowerCase().includes('firefox')) {
      inputRef.current?.setSelectionRange(0, 0)
    }

    onBlur?.(ev)
  }

  const onChangeField = (ev: ChangeEvent<HTMLInputElement>) => {
    setInputValue(ev.currentTarget.value)
    onChange?.(ev)
  }

  const handleKeyDownCapture = (ev: KeyboardEvent<HTMLInputElement>) => {
    if (ev.key === 'Enter') {
      if (committedColorRef.current !== inputValue) {
        committedColorRef.current = color
        setInputValue(color)
        onValueChange?.(toCssFormat(color))
        setTimeout(() => inputRef.current?.select())

        ev.preventDefault()
      }
    }

    if (ev.key === 'Escape') {
      if (committedColorRef.current !== inputValue) {
        setInputValue(committedColorRef.current)
        setTimeout(() => inputRef.current?.select())

        ev.stopPropagation()
      }
    }

    onKeyDownCapture?.(ev)
  }

  const onColorInputValueChange = (ev: ChangeEvent<HTMLInputElement>) => {
    if (!value) {
      return onChange?.(ev)
    }

    const colorSpace = new Color(value).spaceId
    const string = toShortFormat(new Color(ev.currentTarget.value).to(colorSpace).toString())

    if (string) {
      committedColorRef.current = string
      setInputValue(string)
      onValueChange?.(toCssFormat(string))
    }

    onChange?.(ev)
  }

  return (
    <Flex direction='column' gap='6px' width='max-content' onMouseUp={onMouseUp}>
      {label && (
        <Text as='label' size='2' color='gray' htmlFor={id ?? inputId}>
          {label}
        </Text>
      )}

      <TextField.Root
        ref={inputRef}
        id={id ?? inputId}
        size={size}
        type='text'
        autoCapitalize='none'
        autoComplete='off'
        autoCorrect='off'
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        value={inputValue}
        variant='surface'
        className={clsx(styles.field, geistMono.className)}
        onBlur={onBlurField}
        onChange={onChangeField}
        onKeyDownCapture={handleKeyDownCapture}
        {...props}
      >
        <TextField.Slot>
          <div className={styles.swatchWrapper}>
            <input
              type='color'
              disabled={disabled || readOnly}
              className={styles.swatch}
              tabIndex={-1}
              value={toCssFormat(
                toShortFormat(
                  new Color(toCssFormat(color)).to('srgb').toString({
                    format: 'hex'
                  })
                )!
              )}
              onChange={onColorInputValueChange}
            />

            <div className={styles.swatchBorder} />
          </div>
        </TextField.Slot>
      </TextField.Root>
    </Flex>
  )
}

ColorField.displayName = 'ColorField'

/* eslint no-unused-vars: 0 */
interface Props extends ComponentPropsWithoutRef<typeof TextField.Root> {
  label?: string
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
}

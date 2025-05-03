import type { CSSProperties, ReactNode } from 'react'
import { Flex, Slider as RadixSlider, Text } from '@radix-ui/themes'
import { clsx } from 'clsx'

import { NumberInput } from '@/shared/ui/'
import type { NonEmptyArray } from '@/shared/model'

import { formatValue, getValue } from './utils'
import styles from './Slider.module.css'

interface WithHeader {
  label: string
  icon?: ReactNode
}

interface WithoutHeader {
  label?: never
  icon?: never
}

export const Slider = ({
  value,
  valueSign = '',
  label,
  float = false,
  maxFractionDigits = 2,
  disabled,
  sliderStyle,
  sliderClassName,
  ...sliderProps
}: {
  value: NonEmptyArray<number | null>
  defaultValue?: NonEmptyArray<number>
  min: number
  max: number
  step?: number
  minStepsBetweenThumbs?: number
  valueSign?: string
  disabled?: boolean
  float?: boolean
  maxFractionDigits?: number
  sliderStyle?: CSSProperties
  sliderClassName?: string
  /* eslint no-unused-vars: 0 */
  onValueChange: (value: number[]) => void
} & (WithHeader | WithoutHeader)) => {
  const { defaultValue, min, max, step, onValueChange } = sliderProps
  const formattedValue = formatValue({
    value,
    valueSign
  })

  const handleChangeInputValue = (inputValue: number | null) => {
    /*
     * Value input allows only for single value slider.
     */
    if (value.length > 1) return

    if (inputValue === null) {
      return onValueChange([])
    }

    onValueChange([inputValue])
  }

  return (
    <Flex
      gapX='3'
      width='100%'
      align='end'
      className={clsx(styles.root, {
        [styles.disabled]: disabled
      })}
    >
      <Flex direction='column' flexGrow='1'>
        {label && (
          <Flex mb='3' gapX='2' align='center' justify='between'>
            <Text size='2'>{label}</Text>
            <Text size='2'>{formattedValue}</Text>
          </Flex>
        )}

        <RadixSlider
          {...sliderProps}
          size='3'
          value={getValue({
            value,
            defaultValue
          })}
          disabled={disabled}
          style={sliderStyle}
          className={clsx(styles.radixSlider, sliderClassName)}
        />
      </Flex>

      {/* Value input allows only for single value slider. */}
      {value.length === 1 && (
        <NumberInput
          value={value[0]}
          min={min}
          max={max}
          step={step}
          float={float}
          disabled={disabled}
          maxFractionDigits={maxFractionDigits}
          placeholder={defaultValue ? `${defaultValue[0]}${valueSign}` : undefined}
          onChange={handleChangeInputValue}
        />
      )}
    </Flex>
  )
}

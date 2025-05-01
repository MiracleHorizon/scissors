import type { CSSProperties, ReactNode } from 'react'
import { Flex, Heading, Slider as RadixSlider, Separator, Text } from '@radix-ui/themes'
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
  icon,
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
    <Flex width='100%' direction='column'>
      {label && (
        <Flex as='div' mb='2' px='0' align='center'>
          {icon && (
            <>
              <Flex as='span' align='center' justify='center'>
                {icon}
              </Flex>

              <Separator orientation='vertical' mx='6px' my='0' />
            </>
          )}

          <Flex asChild gapX='1' align='center'>
            <article>
              <Heading as='h4' weight='medium' className={styles.heading}>
                {label}
                {formattedValue && ':'}
              </Heading>

              {formattedValue && (
                <Text size='2' weight='medium' color='gray'>
                  {formattedValue}
                </Text>
              )}
            </article>
          </Flex>
        </Flex>
      )}

      <Flex
        align='start'
        gap='3'
        width='100%'
        className={clsx(styles.content, {
          [styles.disabled]: disabled
        })}
      >
        <Flex direction='column' className={styles.sliderContainer}>
          <RadixSlider
            {...sliderProps}
            size='3'
            value={getValue({
              value,
              defaultValue
            })}
            disabled={disabled}
            style={sliderStyle}
            className={sliderClassName}
          />

          <Flex mt='2' justify='between'>
            <Text color='gray' size='2' weight='medium'>
              {min}
              {valueSign}
            </Text>

            <Text color='gray' size='2' weight='medium'>
              {max}
              {valueSign}
            </Text>
          </Flex>
        </Flex>

        {/* Value input allows only for single value slider. */}
        {value.length === 1 && (
          <NumberInput
            value={value[0]}
            min={min}
            max={max}
            step={step}
            disabled={disabled}
            float={float}
            maxFractionDigits={maxFractionDigits}
            placeholder={defaultValue ? `${defaultValue[0]}${valueSign}` : undefined}
            setValue={handleChangeInputValue}
          />
        )}
      </Flex>
    </Flex>
  )
}

import type { CSSProperties, ReactNode } from 'react'
import { Flex, Heading, Slider as RadixSlider, Separator, Text } from '@radix-ui/themes'
import { clsx } from 'clsx'

// import { NumberInput } from '@components/NumberInput'
import { formatValue, getValue } from './utils'
import type { NonEmptyArray } from '@/shared/model'
import styles from './Slider.module.css'
import { NumberInput } from '../NumberInput/NumberInput'

interface WithHeader {
  title: string
  icon?: ReactNode
}

interface WithoutHeader {
  title?: never
  icon?: never
}

export const Slider = ({
  value,
  valueSign = '',
  title,
  icon,
  float = false,
  maxFractionDigits = 2,
  disabled,
  sliderStyle,
  sliderClassName,
  ...sliderProps
}: {
  value: NonEmptyArray<number | null>
  defaultValue: NonEmptyArray<number>
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
      width='100%'
      direction='column'
      className={clsx({
        [styles.disabled]: disabled
      })}
    >
      {title && (
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
                {title}:
              </Heading>

              <Text size='2' weight='medium' color='gray'>
                {formatValue({
                  value,
                  valueSign
                })}
              </Text>
            </article>
          </Flex>
        </Flex>
      )}

      <Flex align='start' gap='3' width='100%' className={styles.content}>
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

          <Flex mt='3' justify='between'>
            <Text color='gray' weight='medium'>
              {min}
              {valueSign}
            </Text>

            <Text color='gray' weight='medium'>
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
            placeholder={`${defaultValue[0]}${valueSign}`}
            setValue={handleChangeInputValue}
          />
        )}
      </Flex>
    </Flex>
  )
}

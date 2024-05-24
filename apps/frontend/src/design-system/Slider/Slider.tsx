'use client'

import { useCallback } from 'react'
import { Flex, Slider as RadixSlider, Text } from '@radix-ui/themes'
import { clsx } from 'clsx'

import { NumberInput } from '@components/NumberInput'
import { SliderHeader } from './SliderHeader'
import { getSliderTitleValue, getSliderValue } from './utils'
import type { Props } from './types'
import styles from './slider.module.css'

export const Slider = ({
  value,
  valueSign = '',
  title,
  titleIcon,
  infoContent,
  allowFloat = false,
  maxFractionDigits = 2,
  disabled,
  sliderStyle,
  sliderClassName,
  ...sliderProps
}: Props) => {
  const { defaultValue, min, max, step, onValueChange } = sliderProps

  const isSingle = value.length === 1
  const isMultiple = value.length > 1

  const handleChangeInputValue = useCallback(
    (inputValue: number | null) => {
      /*
       * Value input allows only for single value slider.
       */
      if (isMultiple) return

      if (inputValue === null) {
        return onValueChange([])
      }

      onValueChange([inputValue])
    },
    [isMultiple, onValueChange]
  )

  return (
    <Flex
      width='100%'
      direction='column'
      className={clsx({
        [styles.disabled]: disabled
      })}
    >
      {title && (
        <SliderHeader
          title={getSliderTitleValue({
            title,
            value,
            valueSign
          })}
          titleIcon={titleIcon}
          disabled={disabled}
          infoContent={infoContent}
        />
      )}

      <Flex align='start' gap='3' width='100%' className={styles.content}>
        <Flex direction='column' className={styles.sliderContainer}>
          <RadixSlider
            {...sliderProps}
            value={getSliderValue({
              value,
              defaultValue
            })}
            disabled={disabled}
            size='2'
            style={sliderStyle}
            className={sliderClassName}
          />
          <Flex mt='2' justify='between'>
            <Text weight='medium'>
              {min}
              {valueSign}
            </Text>
            <Text weight='medium'>
              {max}
              {valueSign}
            </Text>
          </Flex>
        </Flex>

        {/*
          Value input allows only for single value slider.
        */}
        {isSingle && (
          <NumberInput
            value={value[0]}
            min={min}
            max={max}
            step={step}
            disabled={disabled}
            allowFloat={allowFloat}
            maxFractionDigits={maxFractionDigits}
            placeholder={`${defaultValue[0]}${valueSign}`}
            setValue={handleChangeInputValue}
          />
        )}
      </Flex>
    </Flex>
  )
}

'use client'

import { useCallback } from 'react'
import { Flex, Slider, Text } from '@radix-ui/themes'
import { clsx } from 'clsx'

import { OptionNumberInput } from '../OptionNumberInput'
import { OptionSliderHeader } from './OptionSliderHeader'
import { getSliderTitleValue, getSliderValue } from './utils'
import type { Props } from './OptionSlider.types'
import styles from './OptionSlider.module.css'

export function OptionSlider({
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
}: Props) {
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
        <OptionSliderHeader
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
          <Slider
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
            <Text size='3' weight='medium'>
              {min}
              {valueSign}
            </Text>
            <Text size='3' weight='medium'>
              {max}
              {valueSign}
            </Text>
          </Flex>
        </Flex>

        {/*
          Value input allows only for single value slider.
        */}
        {isSingle && (
          <OptionNumberInput
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

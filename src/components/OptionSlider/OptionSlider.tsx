'use client'

import dynamic from 'next/dynamic'
import { Flex, Heading, Separator, Slider, Text } from '@radix-ui/themes'
import { clsx } from 'clsx'

import type { Props } from './OptionSlider.types'
import styles from './OptionSlider.module.css'

const OptionSliderPopover = dynamic(
  () => import('./OptionSliderPopover').then(mod => mod.OptionSliderPopover),
  {
    ssr: false
  }
)

export function OptionSlider({
  title,
  titleIcon,
  valueSign = '',
  infoContent,
  disabled,
  ...sliderProps
}: Props) {
  const { value, min, max } = sliderProps

  return (
    <Flex
      width='100%'
      direction='column'
      className={clsx({
        [styles.disabled]: disabled
      })}
    >
      {title && (
        <Flex asChild mb='3' px='0' align='center'>
          <article>
            {titleIcon && (
              <>
                <Flex asChild align='center' justify='center'>
                  <span>{titleIcon}</span>
                </Flex>
                <Separator orientation='vertical' className={styles.separator} />
              </>
            )}

            <Heading weight='medium' className={styles.title}>
              {title}:{' '}
              {value.length > 1 ? `${value[0]} - ${value[1]}${valueSign}` : value + valueSign}
            </Heading>

            {infoContent && (
              <OptionSliderPopover isOptionDisabled={disabled}>{infoContent}</OptionSliderPopover>
            )}
          </article>
        </Flex>
      )}

      <Flex align='start' gap='3' width='100%'>
        <Flex direction='column' className={styles.sliderRoot}>
          <Slider {...sliderProps} disabled={disabled} size='2' />
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
      </Flex>
    </Flex>
  )
}

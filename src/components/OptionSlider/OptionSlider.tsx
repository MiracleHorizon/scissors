import { Flex, Heading, Slider, Text } from '@radix-ui/themes'
import cn from 'classnames'

import { OptionSliderPopover } from './OptionSliderPopover'
import { themeColor } from '@shared/theme'
import type { Props } from './OptionSlider.types'
import styles from './OptionSlider.module.css'

export function OptionSlider({ title, titleIcon, infoContent, disabled, ...sliderProps }: Props) {
  const { value, min, max } = sliderProps

  return (
    <Flex width='100%' direction='column' className={cn({ [styles.disabled]: disabled })}>
      <Flex asChild mb='3' px='0' align='center'>
        <article>
          <Heading size='3' weight='medium'>
            {title}: {value.length > 1 ? `${value[0]} - ${value[1]}` : value}
          </Heading>

          {titleIcon && (
            <Flex asChild align='center' justify='center' ml='1'>
              <span>{titleIcon}</span>
            </Flex>
          )}

          {infoContent && (
            <OptionSliderPopover isOptionDisabled={disabled}>{infoContent}</OptionSliderPopover>
          )}
        </article>
      </Flex>

      <Flex width='100%' direction='row'>
        <Flex direction='column' className={styles.sliderRoot}>
          <Slider disabled={disabled} size='3' radius='none' color={themeColor} {...sliderProps} />
          <Flex mt='2' justify='between'>
            <Text size='3' weight='medium'>
              {min}
            </Text>
            <Text size='3' weight='medium'>
              {max}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

import { Flex, Heading, Slider, Text } from '@radix-ui/themes'

import { themeColor } from '@shared/theme'
import type { Props } from './OptionSlider.types'
import styles from './OptionSlider.module.css'

export function OptionSlider({ title, titleIcon, ...sliderProps }: Props) {
  const { min, max } = sliderProps

  return (
    <Flex width='100%' direction='column'>
      <Flex asChild mb='4' px='0' align='center'>
        <article>
          <Heading size='3' weight='medium'>
            {title}:{' '}
            {sliderProps.value.length > 1
              ? `${sliderProps.value[0]} - ${sliderProps.value[1]}`
              : sliderProps.value}
          </Heading>
          {titleIcon && (
            <Flex asChild align='center' justify='center' ml='1'>
              <span>{titleIcon}</span>
            </Flex>
          )}
        </article>
      </Flex>
      <Flex width='100%' direction='row'>
        <Flex direction='column' className={styles.sliderRoot}>
          <Slider size='3' color={themeColor} radius='none' {...sliderProps} />
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

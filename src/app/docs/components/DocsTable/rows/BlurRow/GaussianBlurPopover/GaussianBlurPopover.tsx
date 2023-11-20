'use client'

import { Code, Flex, Link, Popover, Strong, Text } from '@radix-ui/themes'

import { MAX_BLUR_SIGMA, MIN_BLUR_SIGMA } from '@libs/Sharp'
import { themeColor } from '@shared/theme'
import styles from './GaussianBlurPopover.module.css'

export function GaussianBlurPopover() {
  return (
    <Popover.Root>
      <Popover.Trigger>
        <Strong className={styles.trigger}>Gaussian</Strong>
      </Popover.Trigger>
      <Popover.Content align='center' size='1' className={styles.content}>
        <Flex direction='column'>
          <Text as='p'>
            A value between{' '}
            <Code variant='ghost' color={themeColor}>
              {MIN_BLUR_SIGMA}
            </Code>{' '}
            and{' '}
            <Code variant='ghost' color={themeColor}>
              {MAX_BLUR_SIGMA}
            </Code>{' '}
            representing the sigma of the{' '}
            <Text as='span' weight='medium'>
              Gaussian
            </Text>{' '}
            mask (<code>sigma = 1 + radius / 2</code>
            ).
          </Text>
          <Link
            target='_blank'
            underline='always'
            weight='medium'
            color={themeColor}
            href='https://en.wikipedia.org/wiki/Gaussian_blur'
            className={styles.moreInfo}
          >
            More info
          </Link>
        </Flex>
      </Popover.Content>
    </Popover.Root>
  )
}

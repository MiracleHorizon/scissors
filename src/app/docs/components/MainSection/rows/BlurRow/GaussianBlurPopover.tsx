'use client'

import { Code, Text } from '@radix-ui/themes'

import { DetailsPopover } from '@app/docs/components/DetailsPopover'
import { MAX_BLUR_SIGMA, MIN_BLUR_SIGMA } from '@libs/Sharp'
import { themeColor } from '@shared/theme'

export default function GaussianBlurPopover() {
  return (
    <DetailsPopover title='Gaussian' moreInfoLink='https://en.wikipedia.org/wiki/Gaussian_blur'>
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
    </DetailsPopover>
  )
}

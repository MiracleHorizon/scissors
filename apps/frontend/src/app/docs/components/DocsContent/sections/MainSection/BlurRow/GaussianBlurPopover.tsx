'use client'

import { Code, Text } from '@radix-ui/themes'
import { MAX_BLUR_SIGMA, MIN_BLUR_SIGMA } from '@scissors/sharp'

import { DocsDetailsPopover } from '@app/docs/components/DocsDetailsPopover'

const GaussianBlurPopover = () => (
  <DocsDetailsPopover title='Gaussian' moreInfoLink='https://en.wikipedia.org/wiki/Gaussian_blur'>
    <Text as='p'>
      A value between <Code variant='ghost'>{MIN_BLUR_SIGMA}</Code> and{' '}
      <Code variant='ghost'>{MAX_BLUR_SIGMA}</Code> representing the sigma of the{' '}
      <Text weight='medium'>Gaussian</Text> mask (<code>sigma = 1 + radius / 2</code>
      ).
    </Text>
  </DocsDetailsPopover>
)

export default GaussianBlurPopover

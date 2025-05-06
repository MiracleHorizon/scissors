import { Code, Text } from '@radix-ui/themes'

import { DEFAULT_NORMALIZE, MAX_NORMALIZE, MIN_NORMALIZE } from '@scissors/sharp'

import { DocsTableRow } from '@pages/docs/components/DocsTable/DocsTableRow'

export const NormaliseRow = () => (
  <DocsTableRow
    label='normalize'
    description={
      <Text as='div'>
        <Text as='p'>
          Enhance the image contrast by stretching its luminance to cover a full dynamic range.
        </Text>
        <Text as='p'>
          Uses a histogram-based approach, taking a range from{' '}
          <Code variant='ghost'>{MIN_NORMALIZE}%</Code> to{' '}
          <Code variant='ghost'>{MAX_NORMALIZE}%</Code> to reduce sensitivity to noise at the
          extremes.
        </Text>
        <br />
        <Text as='p'>
          Luminance values below the lower percentile will be underexposed by clipping to zero.
        </Text>
        <Text as='p'>
          Luminance values above the upper percentile will be overexposed by clipping to the max
          pixel value.
        </Text>
      </Text>
    }
    defaultValue={`${DEFAULT_NORMALIZE.lower} - ${DEFAULT_NORMALIZE.upper}%`}
  />
)

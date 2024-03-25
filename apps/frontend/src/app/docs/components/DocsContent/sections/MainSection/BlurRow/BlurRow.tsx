import dynamic from 'next/dynamic'
import { Code, Strong, Text } from '@radix-ui/themes'

import { DocsTableRow } from '@app/docs/components/DocsTable/DocsTableRow'

const GaussianBlurPopover = dynamic(() => import('./GaussianBlurPopover'), {
  ssr: false,
  loading: () => <Strong>Gaussian</Strong>
})

export const BlurRow = () => (
  <DocsTableRow
    label='blur'
    description={
      <Text as='div'>
        <Text as='p'>
            When used without <Code variant='ghost'>sigma</Code>, performs a fast 3x3 box blur.
        </Text>
        <Text as='div'>
            When a sigma is provided, performs a slower, more accurate <GaussianBlurPopover /> blur.
        </Text>
      </Text>
    }
    defaultValue='disabled'
  />
)

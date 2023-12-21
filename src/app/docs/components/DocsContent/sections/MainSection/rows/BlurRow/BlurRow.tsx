import dynamic from 'next/dynamic'
import { Strong, Text } from '@radix-ui/themes'

import { DocsTableRow } from '../../../../DocsSection/DocsTable/DocsTableRow'

const GaussianBlurPopover = dynamic(() => import('./GaussianBlurPopover'), {
  ssr: false,
  loading: () => <Strong>Gaussian</Strong>
})

export function BlurRow() {
  return (
    <DocsTableRow
      label='Blur'
      description={
        <Text as='div'>
          <Text as='p'>When used without sigma, performs a fast 3x3 box blur.</Text>
          <Text as='div'>
            When a sigma is provided, performs a slower, more accurate <GaussianBlurPopover /> blur.
          </Text>
        </Text>
      }
      defaultValue='Disabled'
    />
  )
}

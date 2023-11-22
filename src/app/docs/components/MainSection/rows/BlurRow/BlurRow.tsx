import dynamic from 'next/dynamic'
import { Code, Strong, Table, Text } from '@radix-ui/themes'

import { themeColor } from '@shared/theme'

const GaussianBlurPopover = dynamic(() => import('./GaussianBlurPopover'), {
  ssr: false,
  loading: () => <Strong>Gaussian</Strong>
})

export function BlurRow() {
  return (
    <Table.Row>
      <Table.RowHeaderCell>Blur</Table.RowHeaderCell>
      <Table.Cell>
        <Text as='div'>
          <Text as='p'>When used without sigma, performs a fast 3x3 box blur.</Text>
          <Text as='div'>
            When a sigma is provided, performs a slower, more accurate <GaussianBlurPopover /> blur.
          </Text>
        </Text>
      </Table.Cell>
      <Table.Cell>
        <Code size='3' color={themeColor}>
          Disabled
        </Code>
      </Table.Cell>
    </Table.Row>
  )
}

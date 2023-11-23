import dynamic from 'next/dynamic'
import { Code, Strong, Table, Text } from '@radix-ui/themes'

import { DEFAULT_FAST_SHRINK } from '@libs/Sharp'

const MoirePatternPopover = dynamic(() => import('./MoirePatternPopover'), {
  ssr: false,
  loading: () => <Strong>moiré pattern</Strong>
})

export function FastShrinkRow() {
  return (
    <Table.Row>
      <Table.RowHeaderCell>Fast shrink</Table.RowHeaderCell>
      <Table.Cell>
        <Text as='p'>
          Take greater advantage of the <Code variant='ghost'>JPEG</Code> and{' '}
          <Code variant='ghost'>WebP</Code> shrink-on-load feature, which can lead to a slight{' '}
          <MoirePatternPopover /> or round-down of an auto-scaled dimension.
        </Text>
      </Table.Cell>
      <Table.Cell>
        <Code size='3'>{DEFAULT_FAST_SHRINK ? 'Enabled' : 'Disabled'}</Code>
      </Table.Cell>
    </Table.Row>
  )
}

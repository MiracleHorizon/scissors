import { Code, Table, Text } from '@radix-ui/themes'

import { MAX_RESIZE_WIDTH, MIN_RESIZE_SIZE } from '@libs/Sharp'

export function WidthRow() {
  return (
    <Table.Row>
      <Table.RowHeaderCell>Width</Table.RowHeaderCell>
      <Table.Cell>
        <Text as='p'>How many pixels wide the resultant image should be.</Text>
        <Text as='p'>
          The value ranges from <Code variant='ghost'>{MIN_RESIZE_SIZE}</Code> to{' '}
          <Code variant='ghost'>{MAX_RESIZE_WIDTH}</Code> pixels.
        </Text>
      </Table.Cell>
      <Table.Cell>
        <Code size='3'>Not set</Code>
      </Table.Cell>
    </Table.Row>
  )
}

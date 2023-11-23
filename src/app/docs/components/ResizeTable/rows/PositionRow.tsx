import { Code, Table, Text } from '@radix-ui/themes'
import capitalize from 'lodash.capitalize'

import { DEFAULT_RESIZE_POSITION, ResizeFit } from '@libs/Sharp'

export function PositionRow() {
  return (
    <Table.Row>
      <Table.RowHeaderCell>Position</Table.RowHeaderCell>
      <Table.Cell>
        <Text as='p'>
          A position or gravity to use when <Text weight='medium'>fit</Text> is{' '}
          <Code variant='ghost'>{ResizeFit.COVER}</Code> or{' '}
          <Code variant='ghost'>{ResizeFit.CONTAIN}</Code>.
        </Text>
      </Table.Cell>
      <Table.Cell>
        <Code size='3'>{capitalize(DEFAULT_RESIZE_POSITION)}</Code>
      </Table.Cell>
    </Table.Row>
  )
}

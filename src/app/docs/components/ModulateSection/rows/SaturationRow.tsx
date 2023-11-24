import { Code, Table, Text } from '@radix-ui/themes'

import { MAX_SATURATION, MIN_SATURATION } from '@libs/Sharp'

export function SaturationRow() {
  return (
    <Table.Row>
      <Table.RowHeaderCell>Saturation</Table.RowHeaderCell>
      <Table.Cell>
        <Text as='p'>
          The saturation of the image. The value ranges from{' '}
          <Code variant='ghost'>{MIN_SATURATION}</Code> to{' '}
          <Code variant='ghost'>{MAX_SATURATION}</Code>.
        </Text>
      </Table.Cell>
      <Table.Cell>
        <Code size='3'>{MIN_SATURATION}</Code>
      </Table.Cell>
    </Table.Row>
  )
}
